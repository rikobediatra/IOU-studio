"use client";
import FormBasicInformation from "@/components/sections/project/BasicInformation";
import SectionForm from "@/components/sections/project/SectionForm";
import { useLoading } from "@/context/LoadingContext";
import { CustomButton } from "@/components/ui/customButton";
import { DeleteProjectModal } from "@/components/ui/deleteProjectModal";
import { FaPlus } from "react-icons/fa";

import { useForm, FormProvider } from "react-hook-form";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { uploadFormData, deleteAllFile } from "@/services/ProjectService";
import { PROJECT_DEFAULT_VALUES } from "@/constant/projectDefaultValue";
import { extractPublicIds } from "@/utils/clientTools";

export default function ProjectPage({}) {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const route = useRouter();
  const { setLoading } = useLoading();
  const methods = useForm({
    defaultValues: PROJECT_DEFAULT_VALUES
  });

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      const result = await uploadFormData(data);

      if (!result.success) {
        throw new Error('Failed when saving data project');
      }

      // BUAT TOAST
      route.push('/admin/dashboard');
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleFinalDelete = async () => {
    try {
      setLoading(true);
      const data = methods.getValues();
      const ids = extractPublicIds(data);

      await deleteAllFile(ids);
      setShowDeleteModal(false);
      route.push('/admin/dashboard');
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
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
              <p className="font-medium normal-case text-base">Portfolio</p>
            </section>

            {/* MAIN CONTENT */}
            <section className="border-t grow rounded-t-[24px] p-6">
              <FormBasicInformation />
              <h4 className="pt-10 pb-6 font-medium normal-case text-2xl opacity-60">
                Project Content
              </h4>
              <div className="flex flex-col gap-3">
                <SectionForm name="sections.discover" title="Discover"/>
                <SectionForm name="sections.define" title="Define"/>
                <SectionForm name="sections.design" title="Design"/>
                <SectionForm name="sections.deliver" title="Deliver"/>
              </div>

              {/* BUTTON ACTIOn */}
              <div className="flex justify-between items-center gap-2 pt-10">
                <CustomButton
                  type='button'
                  className="w-full h-10.5 py-3 justify-center text-sm text-[#E92323]
                  border border-[#E92323]/20 hover:font-bold hover:bg-[#E92323] hover:text-white transition"
                  onClick={() => setShowDeleteModal(true)}
                >
                  Delete Project
                </CustomButton>
                <CustomButton
                  type='submit'
                  className="group w-full h-10.5 py-3 justify-center text-sm text-white bg-[#496C6F]
                  border hover:font-bold hover:border-[#1c2f31] group-hover:opacity-100"
                >
                  <FaPlus size={14} className="group opacity-60" /> Upload Project
                </CustomButton>
              </div>
            </section>
          </div>
        </main>
      </form>
    </FormProvider>
  );
}
