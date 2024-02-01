import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

export const GET = async (req) => {
  const { searchParams } = new URL(req.url);
  const page = searchParams.get("page");
  const POST_PER_PAGE = 3;
  const query = {
    take: POST_PER_PAGE,
    skip: POST_PER_PAGE * (page - 1),
  };

  try {
    const [post, count] = await prisma.$transaction([
      prisma.post.findMany(query),
      prisma.post.count(),
    ]);
    return new NextResponse(JSON.stringify({ post, count }, { status: 200 }));
  } catch (err) {
    return new NextResponse(
      JSON.stringify({ message: "Something Went Wrong!" }, { status: 500 })
    );
  }
};
