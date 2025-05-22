import Post from "@/models/post";
import connect from "@/utils/db";
import { NextResponse } from "next/server";

export const GET = async (request, {params}) => {

    const {id}= params;
  try {
    await connect();

    const posts = await Post.findById(id);
    return new NextResponse(JSON.stringify(posts), { status: 200 });
    
  } catch (error) {
    return new NextResponse("Database Error", { status: 500 });
  }
};
