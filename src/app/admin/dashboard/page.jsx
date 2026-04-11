"use client";

import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectItem,
} from "@/components/ui/select";
import { CustomButton } from "@/components/ui/customButton";
import { FaPlus } from "react-icons/fa6";
import { useState } from "react";
import Image from "next/image";
import folder from "../../../assets/icons/folder.svg";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const [limit, setLimit] = useState("10");
  const router = useRouter();


  const buttonAddProject = (
    <CustomButton 
      className="bg-primary text-white py-3 hover:bg-[#416062] hover:text-white/60"
      onClick={() => router.push('/admin/project')}
    >
      <span>
        <FaPlus />
      </span>
      Add Project
    </CustomButton>
  );

  return (
    <main id="dashboard" className="h-[calc(100dvh-90px)] flex flex-col pt-4">
      {/* CARD */}
      <div className="w-full h-full border border[#DDDDDD] bg-[#FAFAFA] rounded-[24px] flex flex-col">
        {/* Header */}
        <section className="px-6 py-4 flex items-center justify-between">
          <p className="font-medium normal-case text-base">Portfolio</p>
          <div className="flex items-center gap-4">
            <Select value={limit} onValueChange={setLimit}>
              <SelectTrigger className="min-h-11">
                <SelectValue />
              </SelectTrigger>
              <SelectContent position="popper">
                <SelectGroup>
                  {[10, 15, 20, 25].map((item) => (
                    <SelectItem key={item} value={String(item)}>
                      Show {item}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
            { buttonAddProject }
          </div>
        </section>

        {/* MAIN CONTENT */}
        <section className="border-t grow rounded-t-[24px] flex flex-1 items-center justify-center flex-col text-center gap-6">
          <Image
            alt="folder"
            src={folder}
            width={120}
            height={96}
            unoptimized
          />
          <div className="normal-case">
            <p className="text-lg font-medium normal-case">There’s no project to be seen</p>
            <p className="text-sm font-normal normal-case">Add new project now!</p>
          </div>
          { buttonAddProject }
        </section>
      </div>
    </main>
  );
}
