"use client";

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

import Image from "next/image";

import { MoreHorizontal } from "lucide-react";
import { FaEdit } from "react-icons/fa";
import { FiTrash } from "react-icons/fi";
import folderSvg from "@/assets/icons/folder.svg";

export default function ProjectCard({ project, onEdit, onDelete }) {
  return (
    <div className=" w-63.5">
      <div>
        <Image
          alt="project title"
          src={folderSvg}
          className="object-cover w-63.5 h-51"
          loading="eager"
        />
      </div>
      <div className="flex flex-row items-end justify-between">
        <div className="flex flex-col text-start">
          <p className="text-sm font-light">{ project.subTitle }</p>
          <p className="text-base font-normal">{ project.title }</p>
        </div>
        <div className="">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <MoreHorizontal size={16} className="cursor-pointer" />
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              className="w-25.75 p-4 m-0 flex flex-col gap-3"
            >
              <DropdownMenuItem
                onClick={() => onEdit(project)}
                className="cursor-pointer flex items-center justify-between text-center hover:font-bold"
              >
                <FaEdit size={14} className="shrink-0" />
                <span className="leading-none">Edit</span>
              </DropdownMenuItem>

              <DropdownMenuItem
                onClick={() => onDelete(project)}
                className="text-[#E92323] cursor-pointer flex items-center justify-between text-center
                hover:text-[#E92323] hover:font-bold"
              >
                <FiTrash size={14} className="shrink-0 text-[#E92323]" />
                Delete
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
}
