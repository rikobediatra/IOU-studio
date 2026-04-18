"use client";

import FormBasicInformation from "@/components/sections/project/BasicInformation";
import SectionForm from "@/components/sections/project/SectionForm";
import { CustomButton } from "@/components/ui/customButton";
import { DeleteProjectModal } from "@/components/ui/deleteProjectModal";
import { FaPlus } from "react-icons/fa";

import { useForm, FormProvider } from "react-hook-form";
import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import { useLoading } from "@/context/LoadingContext";
import { useNotification } from "@/context/NotificationContext";


import {
  updateProjectById,
  deleteAllFile,
  getProjectById,
  deleteProject,
} from "@/services/ProjectService";

import { PROJECT_DEFAULT_VALUES } from "@/constant/projectDefaultValue";
import { extractPublicIds } from "@/utils/clientTools";

export default function EditProjectPage() {
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const router = useRouter();
  const params = useParams();
  const { setLoading } = useLoading();
  const { notifyError } = useNotification();

  const methods = useForm({
    defaultValues: PROJECT_DEFAULT_VALUES,
  });

  const { reset } = methods;

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await getProjectById(params.id);
        if (!res.success) {
          throw new Error("Failed get detail");
        }
        reset(res.data);
      } catch (error) {
        notifyError(error.message);
      } finally {
        setLoading(false);
      }
    };

    if (params.id) {
      fetchData();
    }
  }, [notifyError, params.id, reset, setLoading]);

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      const project_id = data._id;

      const result = await updateProjectById(project_id, data);

      if (!result.success) {
        throw new Error("Failed update project");
      }

      router.push("/admin/dashboard");
    } catch (error) {
      notifyError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleFinalDelete = async () => {
    try {
      setLoading(true);

      const data = methods.getValues();
      const ids = extractPublicIds(data);

      await Promise.all([
        deleteProject(data._id),
        deleteAllFile(ids)
      ])

      setShowDeleteModal(false);
      router.push("/admin/dashboard");
    } catch (error) {
      notifyError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <main className="h-min-[calc(100dvh-90px)] flex flex-col pt-4">
          <DeleteProjectModal
            isOpen={showDeleteModal}
            onOpenChange={setShowDeleteModal}
            onConfirm={handleFinalDelete}
          />

          <div className="w-full h-full border bg-[#FAFAFA] rounded-[24px] flex flex-col">
            <section className="px-6 py-4">
              <p>Edit Project</p>
            </section>

            <section className="border-t grow p-6">
              <FormBasicInformation />

              <h4 className="pt-10 pb-6 text-2xl opacity-60">
                Project Content
              </h4>

              <div className="flex flex-col gap-3">
                <SectionForm name="sections.discover" title="Discover" />
                <SectionForm name="sections.define" title="Define" />
                <SectionForm name="sections.design" title="Design" />
                <SectionForm name="sections.deliver" title="Deliver" />
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
