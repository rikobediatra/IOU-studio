/* eslint-disable react-hooks/exhaustive-deps */
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
import ProjectCard from "@/components/sections/dashboard/ProjectCard";
import { DeleteProjectModal } from "@/components/ui/deleteProjectModal";
import { FaPlus } from "react-icons/fa6";
import folder from "@/assets/icons/folder.svg";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useLoading } from "@/context/LoadingContext";
import { useNotification } from "@/context/NotificationContext";
import { deleteAllFile, deleteProject, getProjects } from "@/services/ProjectService";
import { extractPublicIds } from "@/utils/clientTools";

export default function Dashboard() {
  const [limit, setLimit] = useState("10");
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState({});
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const router = useRouter();
  const { setLoading } = useLoading();
  const { notifyError } = useNotification();

  useEffect(() => {
    fetchDataProject();
  }, [limit]);

  const fetchDataProject = async () => {
    try {
      setLoading(true);
      const res = await getProjects(limit);

      if (res.success) {
        setProjects(res.data);
      }
    } catch (error) {
      notifyError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = (item) => {
    setSelectedProject(item);
    setShowDeleteModal(true);
  };

  const onConfirmDelete = async () => {
    try {
      setLoading(true);
      const idsFile = extractPublicIds(selectedProject);
      const project_id = selectedProject._id;

      await Promise.all([deleteProject(project_id), deleteAllFile(idsFile)]);

      setShowDeleteModal(false);
      setSelectedProject({});
      return fetchDataProject();
    } catch (error) {
      notifyError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const renderProjects = () => {
    if (projects.length === 0) {
      return null;
    }

    return (
      <section className="border-t rounded-t-[24px] p-6 flex flex-row gap-6 flex-wrap">
        {projects.map((project, index) => (
          <ProjectCard
            key={project._id}
            project={project}
            onEdit={(item) => router.push(`/admin/project/${item._id}`)}
            onDelete={(item) => {
              handleDelete(item);
            }}
          />
        ))}
      </section>
    );
  };

  const buttonAddProject = (
    <CustomButton
      className="bg-primary text-white py-3 hover:bg-[#416062] hover:text-white/60"
      onClick={() => router.push("/admin/project")}
    >
      <span>
        <FaPlus />
      </span>
      Add Project
    </CustomButton>
  );

  return (
    <main id="dashboard" className="h-[calc(100dvh-90px)] flex flex-col pt-4">
      {/* DELETE MODAL */}
      <DeleteProjectModal
        isOpen={showDeleteModal}
        onOpenChange={setShowDeleteModal}
        onConfirm={onConfirmDelete}
      />
      
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
            {buttonAddProject}
          </div>
        </section>

        {/* MAIN CONTENT */}
        {projects.length === 0 && (
          <section className="border-t grow rounded-t-[24px] flex flex-wrap items-center justify-center flex-col text-center gap-6">
            <Image
              alt="folder"
              src={folder}
              width={120}
              height={96}
              unoptimized
            />
            <div className="normal-case">
              <p className="text-lg font-medium normal-case">
                There’s no project to be seen
              </p>
              <p className="text-sm font-normal normal-case">
                Add new project now!
              </p>
            </div>
            {buttonAddProject}
          </section>
        )}

        {/* CONTENT */}
        {renderProjects()}
      </div>
    </main>
  );
}
