import Post from "@/models/post.js";
import connect from "@/utils/db.js";
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {

    const { id }= params;
  try {
    await connect();
    console.log("Params:", params);


    const post1 = await Post.findById(id);
    return new NextResponse(JSON.stringify(post1), { status: 200 });
    
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};
