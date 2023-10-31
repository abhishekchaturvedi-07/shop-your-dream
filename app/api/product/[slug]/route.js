import { NextResponse } from "next/server";
import Product from "@/models/product";
import dbConnect from "@/utils/dbConnect";
export async function GET(req, context) {
  await dbConnect();
  try {
    const product = await Product.findOne({ slug: context.params.slug });
    return NextResponse.json(product);
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
