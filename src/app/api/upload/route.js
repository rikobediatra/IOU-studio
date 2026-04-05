import { uploadToCloudinary } from "@/lib/upload";
export async function POST(req) {
  try {
    const formData = await req.formData();
    const file = formData.get("file");

    if (!file) {
      return Response.json(
        { success: false, message: "File is required" },
        { status: 400 },
      );
    }

    const url = await uploadToCloudinary(file);

    return Response.json({
      success: true,
      data: {
        url,
      },
    });
  } catch (error) {
    return Response.json(
      {
        success: false,
        message: error.message,
      },
      { status: 500 },
    );
  }
}
