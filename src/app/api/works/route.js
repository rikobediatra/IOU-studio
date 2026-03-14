import _ from "lodash";
import { NextResponse } from "next/server";
import { data } from "./dataDummy";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const worksId = searchParams.get("id");
  const detailProduct = _.find(data, { workId: worksId });

  if (detailProduct) {
    return NextResponse.json({
      status: 200,
      message: "success",
      data: detailProduct,
    });
  }

  return NextResponse.json({
    status: 404,
    message: "data not found",
    data: [],
  });
}
