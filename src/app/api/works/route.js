import _ from "lodash";
import { NextResponse } from "next/server";

const data = [
  {
    id: 1,
    title: "p-001 velo",
    subTitle: 'A BATTERY POWERED LIGHT VEHICLE INTENDED FOR SHORT TO MEDIUM DISTANCE COMMERCIAL USE',
    services: [1,2,3,4],
    client: "Personal Project",
    timeline: 2,
    year: 2023,
    discover: {
      paragraph: '“Rengklek” is the problem for increasing risk the the problem modification of their motorbike',
      subParagraph: '“Rengklek” is the problem for increasing risk the the problem modification of their motorbike',
      images: null,
    },
    define: {
      paragraph: '“Rengklek” is the problem for increasing risk the the problem modification of their motorbike',
      subParagraph: '“Rengklek” is the problem for increasing risk the the problem modification of their motorbike',
      images: '/images/works/detail/1/define.png',
    },
    design: {
      paragraph: '“Rengklek” is the problem for increasing risk the the problem modification of their motorbike',
      subParagraph: '“Rengklek” is the problem for increasing risk the the problem modification of their motorbike',
      images: '/images/works/detail/1/design.png',
    },
    deliver: {
      paragraph: '“Rengklek” is the problem for increasing risk the the problem modification of their motorbike',
      subParagraph: '“Rengklek” is the problem for increasing risk the the problem modification of their motorbike',
      images: '/images/works/detail/1/deliver.png',
    },
  },
];

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const worksId = searchParams.get("id");
  const detailProduct = _.find(data, { id: Number(worksId) });

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
