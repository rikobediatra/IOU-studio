import { uploadToCloudinary, deleteFromCloudinary } from "@/lib/upload";

export async function POST(req, _res) {
  try {
    const formData = await req.formData();
    const file = formData.get("file");

    if (!file) {
      return Response.json(
        { success: false, message: "File is required" },
        { status: 400 },
      );
    }

    const result = await uploadToCloudinary(file);

    return Response.json({
      success: true,
      data: {
        url: result.secure_url,
        public_id: result.public_id,
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

export async function DELETE(req, _res) {
  try {
    const body = await req.json();
    const { public_id } = body;

    if (!public_id) {
      throw new Error('Public Id is required')
    }

    const result = await deleteFromCloudinary(public_id);

    if (result.result !== "ok") {
      throw new Error('Failed when deleting images');
    }

    return Response.json({
      success: true,
      message: "Image deleted successfully",
    });
  } catch (error) {
    return Response.json(
      {
        success: false,
        message: error.message,
      },
      { status: 500 }
    );
  }
}
