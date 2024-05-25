import { auth } from "@clerk/nextjs/server";
import prisma from "./prisma";

export const getCurrentUserByClerkId = async () => { 
  const { userId } = await auth();
  if (!userId) {
    throw new Error('User not found');
  }
  const dbUser = await prisma?.users?.findFirst({
    where: {
      clerkId: userId
    }
  });
  if (!dbUser) {
    throw new Error('User not found');
  }
  return dbUser.id;
};