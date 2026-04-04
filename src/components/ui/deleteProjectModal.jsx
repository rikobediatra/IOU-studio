"use client";

import React, { useState } from "react";
import { BiTrashAlt } from "react-icons/bi";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Input } from "@/components/ui/input";
import { CustomButton } from "./customButton";

export function DeleteProjectModal({ isOpen, onOpenChange, onConfirm }) {
  const [confirmText, setConfirmText] = useState("");

  const handleConfirm = (e) => {
    if (confirmText !== "delete") {
      e.preventDefault();
      return;
    }
    onConfirm();
    setConfirmText("");
  };

  const closeModal = () => {
    onOpenChange(false);
    setConfirmText("");
  };

  return (
    <AlertDialog open={isOpen} onOpenChange={onOpenChange}>
      <AlertDialogContent className="w-160 border-none rounded-none p-0 bg-transparent gap-0">
        <AlertDialogHeader className="w-160 space-y-2 py-4 px-6 bg-[#FAFAFA] border border-[#DDDDDD] rounded-[24px]">
          <AlertDialogTitle className="text-xl font-medium normal-case">
            Delete Project
          </AlertDialogTitle>
          <AlertDialogDescription className="text-base normal-case">
            Are you sure you want to delete the following project?
          </AlertDialogDescription>
        </AlertDialogHeader>

        <div
          className="bg-white border border-[#DDDDDD] rounded-[24px] p-6

          "
        >
          {/* Warning Box */}
          <div
            className="bg-[#E92323]/20 border-l-3 border-l-[#E92323] rounded-xl p-4
          "
          >
            <p className="text-base normal-case font-normal text-black/60">
              <span className="text-[#E92323] opacity-100">Warning:</span> this
              process <span className="text-black">cannot be undone.</span>{" "}
              Deleting a project will remove all its associated data. Any image,
              text, and more will be{" "}
              <span className="text-black">permanently lost.</span>
            </p>
          </div>

          {/* Input Confirmation Section */}
          <div className="space-y-4 py-6">
            <p className="text-[16px] text-black/60 normal-case font-normal">
              To delete, type <span className="text-black">delete</span> below
            </p>
            <div className="relative group">
              <BiTrashAlt
                className="absolute left-6 top-1/2 -translate-y-1/2 text-[#E92323]"
                width={14}
                height={16}
              />
              <Input
                placeholder="Enter delete"
                value={confirmText}
                onChange={(e) => setConfirmText(e.target.value)}
                className="pl-13.5 h-13.25 bg-[#F5F5F5] border-slate-200 rounded-[24px] focus-visible:ring-red-500/20 focus-visible:border-red-500 placeholder:text-black/20 transition-all"
              />
            </div>
          </div>

          {/* ACTION BUTTON */}
          <div className="w-full flex gap-2 h-10.5">
            <CustomButton
              className="flex-1 justify-center text-sm font-normal text-[#181818]
                hover:border hover:font-bold
              "
              onClick={closeModal}
            >
              Cancel
            </CustomButton>
            <CustomButton
              className="flex-1 justify-center bg-[#E92323] text-white
                disabled:opacity-50 enabled:hover:font-bold transition-all
              "
              disabled={confirmText !== 'delete'}
              onClick={handleConfirm}
            >
              Yes, Delete Project
            </CustomButton>
          </div>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
}
