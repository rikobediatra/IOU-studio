import { uploadFile } from "@/services/ProjectService";

const extractPublicIds = (data) => {
  const ids = [];
  if (data.thumbnail?.public_id) {
    ids.push(data.thumbnail.public_id);
  }
  const sections = data.sections;
  Object.values(sections).forEach((section) => {
    if (section.image?.public_id) {
      ids.push(section.image.public_id);
    }
  });
  return ids;
};

const createImagePayload = async (image) => {
  if (!image) {
    return null;
  }

  const file = image?.file;
  const isUploadableFile =
    file &&
    typeof file === "object" &&
    typeof file.arrayBuffer === "function" &&
    typeof file.type === "string";

  if (isUploadableFile) {
    const response = await uploadFile(file);
    if (!response?.success) {
      throw new Error("Failed upload image");
    }
    return response.data;
  }

  if (typeof image.url === "string" && image.url.startsWith("blob:")) {
    return null;
  }

  return {
    url: image?.url || "",
    public_id: image?.public_id || "",
  };
};

const prepareProjectPayload = async (data) => {
  const payload = structuredClone(data);

  payload.thumbnail = await createImagePayload(payload.thumbnail);

  const sectionEntries = Object.entries(payload.sections || {});
  for (const [sectionName, sectionValue] of sectionEntries) {
    if (!sectionValue) {
      continue;
    }

    payload.sections[sectionName].image = await createImagePayload(
      sectionValue.image,
    );
  }

  return payload;
};

const extractRemovedPublicIds = (previousData, nextData) => {
  const removedIds = [];

  const compareImage = (previousImage, nextImage) => {
    const previousId = previousImage?.public_id;
    const nextId = nextImage?.public_id;

    if (previousId && previousId !== nextId) {
      removedIds.push(previousId);
    }
  };

  compareImage(previousData?.thumbnail, nextData?.thumbnail);

  const sections = ["discover", "define", "design", "deliver"];
  sections.forEach((section) => {
    compareImage(
      previousData?.sections?.[section]?.image,
      nextData?.sections?.[section]?.image,
    );
  });

  return removedIds;
};

export { extractPublicIds, prepareProjectPayload, extractRemovedPublicIds };