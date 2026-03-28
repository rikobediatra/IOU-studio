"use client";

import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectItem,
} from "@/components/ui/select";
import { FaPlus } from "react-icons/fa6";
import { useState } from "react";
import Image from "next/image";
import folder from "../../../assets/icons/folder.svg"

export default function Dashboard() {
  const [limit, setLimit] = useState("10");

  return (
    <main
      id="dashboard"
      className="h-[calc(100dvh-90px)] flex flex-col pt-4"
    >
      {/* CARD */}
      <div className="w-full h-full border border[#DDDDDD] bg-[#FAFAFA] rounded-[24px] flex flex-col">
        {/* Header */}
        <section className="px-6 py-4 flex items-center justify-between">
          <p className="font-medium">Portfolio</p>
          <div className="flex items-center gap-4">
            <Select value={limit} onValueChange={setLimit}>
              <SelectTrigger className="h-10.5">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {[10, 15, 20, 25].map((item) => (
                    <SelectItem key={item} value={String(item)}>
                      Show {item}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
            <button
              className="bg-primary rounded-full text-white normal-case max-h-10.5 py-2 flex items-center gap-2 cursor-pointer hover:bg-teal-800 transition"
            >
              <span><FaPlus /></span>Add Project
            </button>
          </div>
        </section>

        {/* MAIN CONTAIN */}
        <section className="border-t grow rounded-t-[24px] flex flex-1 items-center justify-center flex-col text-center gap-6">
          <Image 
            alt="folder"
            src={folder}
            width={120}
            height={96}
            unoptimized
          />
          <div className="normal-case">
            <p className="text-lg font-medium">There’s no project to be seen</p>
            <p className="text-sm font-normal">Add new project now!</p>
          </div>
          <button
              className="bg-primary rounded-full text-white normal-case max-h-10.5 py-2 flex items-center gap-2 cursor-pointer hover:bg-teal-800 transition"
            >
              <span><FaPlus /></span>Add Project
            </button>
        </section>
      </div>
    </main>
  );
}
