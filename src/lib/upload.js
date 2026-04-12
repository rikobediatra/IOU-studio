import cloudinary from "./cloudinary";

const uploadToCloudinary = async (file, folder = "iou_studio") => {
  const buffer = Buffer.from(await file.arrayBuffer());

  return new Promise((resolve, reject) => {
    cloudinary.uploader
      .upload_stream(
        {
          folder: folder,
          resource_type: "image",
          transformation: [{ quality: "auto" }, { fetch_format: "auto" }],
        },
        (error, result) => {
          if (error) return reject(error);
          resolve(result);
        },
      )
      .end(buffer);
  });
};

const deleteFromCloudinary = async (publicId) => {
  return await cloudinary.uploader.destroy(publicId);
};

export { uploadToCloudinary, deleteFromCloudinary };
