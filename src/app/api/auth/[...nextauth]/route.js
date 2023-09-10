import { PrismaClient } from "@prisma/client";
import md5 from "md5";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "email", type: "text" },
        password: { label: "password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials.email || !credentials.password) throw new Error("Invalid credentials");

        const prisma = new PrismaClient();
        const user = await prisma.user.findFirst({ where: { email: credentials.email } });
        if (!user || !user?.password) throw new Error("Invalid credentials");

        const isCorrectPassword = user.password === md5(credentials.password);
        if (!isCorrectPassword) throw new Error("Invalid credentials");

        console.log(
          ` \r\n\r\n:: @ api/auth/[...nextauth]/route.js email: ${user.email} password: ${user.password}`
        );

        // After successful login, redirect URL (e.g., "/installer")
        //if (req) {
        //  req.session.nextAuthRedirect = "/installer";
        //}

        return user;
      },
    }),
  ],
  debug: process.env.NODE_ENV === "development",
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };
