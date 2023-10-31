import { NextResponse } from "next/server";
import Tag from "@/models/tag";
import dbConnect from "@/utils/dbConnect";
export async function PUT(req, context) {
  await dbConnect();
  const _req = await req.json();
  try {
    const updatingTag = await Tag.findByIdAndUpdate(
      context.params.id,
      { ..._req },
      { new: true }
    );
    return NextResponse.json(updatingTag);
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      {
        err: err.message,
      },
      { status: 500 }
    );
  }
}
export async function DELETE(req, context) {
  await dbConnect();
  try {
    const deletedTag = await Tag.findByIdAndDelete(context.params.id);
    return NextResponse.json(deletedTag);
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      {
        err: err.message,
      },
      { status: 500 }
    );
  }
}
