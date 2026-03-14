const getDataWorksById = async (url) => {
  const res = await fetch(url, {
    cache: "no-store",
    next: {
      tags: ["works"],
      // revalidate: 30
    },
  });

  if (!res.ok) {
    throw new Error("Failed to fetching data");
  }

  return res.json();
};

export default getDataWorksById