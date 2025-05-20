import { NextResponse } from "next/server";

export const GET = async (request) =>{
    try {
        await connect
    } catch (error) {
          return new NextResponse("Database Error", {status:500});

    }
    
  
}