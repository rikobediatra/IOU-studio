import MainWorks from "@/components/sections/works/MainWorks";
import { getPublicProjects } from "@/services/WorksService";

export const metadata = {
  title: "Works",
  description:
    "Explore IOU Studio portfolio and case studies across industrial design, spatial concepts, and product development projects.",
  alternates: {
    canonical: "/works",
  },
  openGraph: {
    title: "IOU Studio Works",
    description:
      "Explore IOU Studio portfolio and case studies across industrial design, spatial concepts, and product development projects.",
    url: "/works",
    type: "website",
  },
};

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