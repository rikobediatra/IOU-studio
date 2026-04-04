"use client"

import * as React from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { IoMdCalendar } from "react-icons/io";
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

export function YearPicker({ className }) {
  const [date, setDate] = React.useState(new Date())
  const [isOpen, setIsOpen] = React.useState(false)
  const [navYear, setNavYear] = React.useState(date.getFullYear())

  const years = Array.from({ length: 12 }, (_, i) => navYear - 5 + i)

  const handleYearSelect = (year) => {
    const newDate = new Date(date)
    newDate.setFullYear(year)
    setDate(newDate)
    setIsOpen(false)
  }

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <Button
          className={cn(
            "w-full min-h-17.25 rounded-[24px] gap-4 justify-start text-left font-normal text-[16px]",
            className
          )}
        >
          <IoMdCalendar className="ml-3 opacity-60" />
          {date.getFullYear()}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-64 p-3" align="start">
        {/* Header Navigasi Tahun */}
        <div className="flex items-center justify-between pb-4">
          <Button
            variant="outline"
            className="h-7 w-7 p-0"
            onClick={() => setNavYear(navYear - 12)}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <div className="text-sm font-medium">
            {years[0]} - {years[years.length - 1]}
          </div>
          <Button
            variant="outline"
            className="h-7 w-7 p-0"
            onClick={() => setNavYear(navYear + 12)}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>

        {/* Grid Tahun */}
        <div className="grid grid-cols-3 gap-2">
          {years.map((year) => (
            <Button
              key={year}
              variant={date.getFullYear() === year ? "default" : "ghost"}
              className={cn(
                "h-9 w-full font-normal",
                date.getFullYear() === year 
                  ? "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground" 
                  : "hover:bg-accent hover:text-accent-foreground"
              )}
              onClick={() => handleYearSelect(year)}
            >
              {year}
            </Button>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  )
}