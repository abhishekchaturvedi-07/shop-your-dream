import { NextResponse } from "next/server";
import Tag from "@/models/tag";
import dbConnect from "@/utils/dbConnect";
import slugify from "slugify";
export async function POST(req) {
  const _req = await req.json();
  await dbConnect();
  try {
    const { name, parentCategory } = _req;
    const tag = await Tag.create({
      name,
      parentCategory,
      slug: slugify(name),
    });
    console.log("CREATING TAG -> ", tag);
    return NextResponse.json(tag);
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      {
        err: "Server error. Please try again.",
      },
      { status: 500 }
    );
  }
}
