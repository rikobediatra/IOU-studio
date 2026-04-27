const REVALIDATE_SECONDS = 600;

const getPublicProjects = async (limit) => {
  const basedURL = (process.env.NEXT_PUBLIC_API_URL || "").replace(/\/$/, "");
  const query = limit ? `?limit=${limit}` : "";
  const res = await fetch(`${basedURL}/api/projects${query}`, {
    next: {
      revalidate: REVALIDATE_SECONDS,
      tags: ["works"],
    },
  });

  if (!res.ok) {
    throw new Error("Failed to fetching data");
  }

  return res.json();
};

const getPublicProjectById = async (projectId) => {
  const basedURL = (process.env.NEXT_PUBLIC_API_URL || "").replace(/\/$/, "");
  const res = await fetch(`${basedURL}/api/projects/${projectId}`, {
    next: {
      revalidate: REVALIDATE_SECONDS,
      tags: ["works"],
    },
  });

  if (!res.ok) {
    throw new Error("Failed to fetching data");
  }

  return res.json();
};

export { getPublicProjects, getPublicProjectById };