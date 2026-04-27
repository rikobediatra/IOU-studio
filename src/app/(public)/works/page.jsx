import MainWorks from "@/components/sections/works/MainWorks";
import { getPublicProjects } from "@/services/WorksService";

export default async function worksPages() {
  let listProjects = [];
  try {
    const projectsResponse = await getPublicProjects();
    listProjects = projectsResponse?.data || [];
  } catch {
    listProjects = [];
  }

  return (
    <main className="px-6 md:px-10">
      <MainWorks listProjects={listProjects} />
    </main>
  );
}