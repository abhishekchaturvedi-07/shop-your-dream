import { NextResponse } from "next/server";
import Product from "@/models/product";
import dbConnect from "@/utils/dbConnect";
import queryString from "query-string";
/**
 * route query alternatives
 * req.nextUrl.searchParams.get('xyz')
 */
export async function GET(req) {
  await dbConnect();
  const searchParams = queryString.parseUrl(req.url).query;
  const { page } = searchParams || {};
  const pageSize = 6;
  try {
    const currentPage = Number(page) || 1;
    const skip = (currentPage - 1) * pageSize;
    const totalProducts = await Product.countDocuments({});
    const products = await Product.find({})
      .skip(skip)
      .limit(pageSize)
      .sort({ createdAt: "-1" });
    return NextResponse.json(
      {
        products,
        currentPage,
        totalPages: Math.ceil(totalProducts / pageSize),
      },
      { status: 200 }
    );
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