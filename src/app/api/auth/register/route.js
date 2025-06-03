 import connect from "@/utils/db";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import User from "@/models/user";
 
 export const POST = async (request) =>{

    const { name, email, password} = await request.json();
    console.log(name, email, password);
    

    await connect(); 

     const hashedPassword = await bcrypt.hash(password, 10);

        const newUser  = new User({
            name,
            email,
            password: hashedPassword
        });

    try {

        await newUser.save();
        return new NextResponse("User has been created successfully", {
            status: 201,
        });

        
    } catch (err) {
        return new NextResponse(err.message, {
            status: 500,
        });        
    }
 } 