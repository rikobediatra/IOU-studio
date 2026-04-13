import { connectDB } from "@/lib/mongodb";
import Project from "@/models/project.model";

export async function POST(req) {
  try {
    await connectDB();

    const body = await req.json();

    const project = await Project.create(body);

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

export async function GET(req) {
  try {
    await connectDB();

    const { searchParams } = new URL(req.url);

    // Pagination
    const page = parseInt(searchParams.get("page")) || 1;
    const limit = parseInt(searchParams.get("limit")) || 10;
    const skip = (page - 1) * limit;

    // Filter
    const search = searchParams.get("search") || "";
    const year = searchParams.get("year");
    const client = searchParams.get("client");

    let query = {};

    if (search) {
      query.$or = [
        { title: { $regex: search, $options: "i" } },
        { subTitle: { $regex: search, $options: "i" } },
      ];
    }

    if (year) {
      query.year = Number(year);
    }

    if (client) {
      query.client = client;
    }

    // sorting
    const sortBy = searchParams.get("sortBy") || "createdAt";
    const sortOrder = searchParams.get("sortOrder") === "asc" ? 1 : -1;

    const [data, total] = await Promise.all([
      Project.find(query)
        .sort({ [sortBy]: sortOrder })
        .skip(skip)
        .limit(limit)
        .lean(),

      Project.countDocuments(query),
    ]);

    return Response.json({
      success: true,
      data,
      meta: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
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
