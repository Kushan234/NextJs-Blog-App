
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import connect from "@/utils/db";
import User from "@/models/user";
import bcrypt from "bcrypt";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),

    CredentialsProvider({
      id: "credentials",
      name: "Credentials",

      async authorize(credentials){
        await connect();

        try {
          const user = await User.findOne({email: credentials.email});

          if(user){
            const isPassworCorrect = await bcrypt.compare(
              credentials.password,
              user.password
            );

            if(isPassworCorrect){
              return user;
            }else{
              throw new Error("Wrong credentials");
            }
          }else {
            throw new Error("User not found");
          }

        } catch (err) {
          throw new Error(err); 
        }
      }
    })
  ],

  pages:{
    error: "dashboard/login"
  }
  // secret: process.env.NEXTAUTH_SECRET,
  // debug: true,


};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
