import { connectDB } from "@/lib/mongodb";
import Project from "@/models/project.model";
import mongoose from "mongoose";

export async function GET(_req, context) {
  try {
    await connectDB();

    const params = await context.params;
    const id = params?.id;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return Response.json(
        {
          success: false,
          message: "Invalid ID",
        },
        { status: 400 },
      );
    }

    const project = await Project.findById(id).lean();

    if (!project) {
      return Response.json(
        {
          success: false,
          message: "Project not found",
        },
        { status: 404 },
      );
    }

    return Response.json({
      success: true,
      data: project,
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

export async function PUT(req, context) {
  try {
    await connectDB();

    const params = await context.params;
    const id = params?.id;

    if (!id || !mongoose.Types.ObjectId.isValid(id)) {
      return Response.json(
        { success: false, message: "Invalid ID" },
        { status: 400 },
      );
    }

    const body = await req.json();
    const updated = await Project.findByIdAndUpdate(id, body, {
      returnDocument: "after",
      runValidators: true,
    }).lean();

    if (!updated) {
      return Response.json(
        { success: false, message: "Project not found" },
        { status: 404 },
      );
    }

    return Response.json({
      success: true,
      data: updated,
    });
  } catch (error) {
    return Response.json(
      { success: false, message: error.message },
      { status: 500 },
    );
  }
}

export async function DELETE(_req, context) {
  try {
    await connectDB();

    const { id } = await context.params;

    if (!id || !mongoose.Types.ObjectId.isValid(id)) {
      return Response.json(
        { success: false, message: "Invalid ID" },
        { status: 400 },
      );
    }

    const deleted = await Project.findByIdAndDelete(id);

    if (!deleted) {
      return Response.json(
        { success: false, message: "Project not found" },
        { status: 404 },
      );
    }

    return Response.json({
      success: true,
      message: "Project deleted successfully",
    });
  } catch (error) {
    return Response.json(
      { success: false, message: error.message },
      { status: 500 },
    );
  }
}
