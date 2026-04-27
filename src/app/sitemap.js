import { getPublicProjects } from "@/services/WorksService";

const siteUrl = (process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000").replace(
  /\/$/,
  "",
);

export default async function sitemap() {
  const baseRoutes = ["", "/about", "/works"].map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));

  try {
    const response = await getPublicProjects(1000);
    const projects = response?.data || [];

    const projectRoutes = projects.map((project) => ({
      url: `${siteUrl}/works/detail/${project?._id}`,
      lastModified: new Date(project?.updatedAt || project?.createdAt || Date.now()),
      changeFrequency: "monthly",
      priority: 0.7,
    }));

    return [...baseRoutes, ...projectRoutes];
  } catch {
    return baseRoutes;
  }
}
