"use client"
import FormBasicInformation from "@/components/sections/project/BasicInformation";
import Discover from "@/components/sections/project/Discover";
import Define from "@/components/sections/project/Define";
import Design from "@/components/sections/project/Design";
import Deliver from "@/components/sections/project/Deliver";
import { CustomButton } from "@/components/ui/customButton";
import { DeleteProjectModal } from "@/components/ui/deleteProjectModal";
import { FaPlus } from "react-icons/fa";

import { useState } from "react";

export default function ProjectPage({}) {
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const handleFinalDelete = () => {
    console.log("Project Berhasil Dihapus");
    setShowDeleteModal(false);
  };

  return (
    <main
      id="project detail"
      className="h-min-[calc(100dvh-90px)] flex flex-col pt-4"
    >
      {/* DELETE MODAL */}
      <DeleteProjectModal 
        isOpen={showDeleteModal} 
        onOpenChange={setShowDeleteModal}
        onConfirm={handleFinalDelete}
      />

      {/* CARD */}
      <div className="w-full h-full border border[#DDDDDD] bg-[#FAFAFA] rounded-[24px] flex flex-col">
        {/* HEADER */}
        <section className="px-6 py-4 flex items-center justify-between">
          <p className="font-medium normal-case">Portfolio</p>
        </section>

        {/* MAIN CONTENT */}
        <section className="border-t grow rounded-t-[24px] p-6">
          <FormBasicInformation />
          <h4 className="pt-10 pb-6 font-medium normal-case text-2xl opacity-60">
            Project Content
          </h4>
          <div className="flex flex-col gap-3">
            <Discover />
            <Define />
            <Design />
            <Deliver />
          </div>

          {/* BUTTON ACTIOn */}
          <div className="flex justify-between items-center gap-2 pt-10">
            <CustomButton
              className="w-full h-10.5 py-3 justify-center text-sm text-[#E92323]
              border border-[#E92323]/20 hover:font-bold hover:bg-[#E92323] hover:text-white transition"
              onClick={() => setShowDeleteModal(true)}
            >
              Delete Project
            </CustomButton>
            <CustomButton
              className="group w-full h-10.5 py-3 justify-center text-sm text-white bg-[#496C6F]
              border hover:font-bold hover:border-[#1c2f31] group-hover:opacity-100"
            >
              <FaPlus size={14} className="group opacity-60"/> Upload Project
            </CustomButton>
          </div>
        </section>
      </div>
    </main>
  );
}
