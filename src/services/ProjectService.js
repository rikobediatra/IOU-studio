const basedURL = process.env.NEXT_PUBLIC_API_URL;

const uploadFile = async (file) => {
  const formData = new FormData();
  formData.append("file", file);
  const res = await fetch(`${basedURL}/api/upload`, {
    method: "POST",
    body: formData,
  });
  const data = await res.json();
  return data;
};

const deleteFile = async (public_id) => {
  const res = await fetch(`${basedURL}/api/upload`, {
    method: "DELETE",
    body: JSON.stringify({ public_id }),
  });
  const data = await res.json();
  return data;
};

const deleteAllFile = async (publicIds) => {
  if (!publicIds) {
    return null;
  }
  const res = await Promise.all(publicIds.map((id) => deleteFile(id)));
  return res;
};

const uploadFormData = async (data) => {
  const res = await fetch(`${basedURL}/api/projects`, {
    method: "POST",
    body: JSON.stringify(data),
  });
  const result = await res.json();
  return result;
};

const getProjects = async (limit) => {
  const url = limit ? `/api/projects?limit=${limit}` : '/api/projects'
  const res = await fetch(url, {
    method: "GET",
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to get data projects");
  }
  const response = await res.json();
  return response;
};

const deleteProject = async (project_id) => {
  const res = await fetch(`${basedURL}/api/projects/${project_id}`, {
    method: "DELETE",
  });
  const data = await res.json();
  return data;
};

const getProjectById = async (project_id) => {
  const res = await fetch(`/api/projects/${project_id}`, {
    method: "GET",
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to get data projects");
  }
  const response = await res.json();
  return response;
};

const updateProjectById = async (project_id, data) => {
  const res = await fetch(`${basedURL}/api/projects/${project_id}`, {
    method: "PUT",
    body: JSON.stringify(data),
  });
  const result = await res.json();
  return result;
};

export {
  uploadFile,
  deleteFile,
  deleteAllFile,
  uploadFormData,
  getProjects,
  deleteProject,
  getProjectById,
  updateProjectById
};
