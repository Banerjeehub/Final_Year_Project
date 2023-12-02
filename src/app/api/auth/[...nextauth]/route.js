import { authOption } from "@/utils/auth";
import NextAuth from "next-auth";
import { authOptions } from "@/utils/auth";
const handler = NextAuth(authOption);

export { handler as GET, handler as POST };
