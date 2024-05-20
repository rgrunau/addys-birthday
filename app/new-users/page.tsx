import prisma from "@/lib/prisma";
import { auth, currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

interface CreateNewUserProps {
  firstName: string;
  lastName: string;
  clerkId: string;

}

const createNewUser = async ({firstName, lastName, clerkId}: CreateNewUserProps) => { 
  const user = await prisma.users.create({
    data: {
      firstName,
      lastName,
      clerkId
    }
  });
  return user; 
};

const checkForUser = async (userId: string):Promise<boolean> => {
  let userFound = false;
  const user = await prisma.users.findFirst({
    where: {
      clerkId: userId
    }
  });
  if(user) {
    userFound = true;
  } else {
    userFound = false;
  }
  return userFound;
}

export default async function NewUsersPage() {
  const { userId } = await auth();
  if (userId) {
    const existingUser = await checkForUser(userId);
    if(existingUser) {
      redirect("/dashboard");
    } else {
      const user = await currentUser();
      const newUser = await createNewUser({
        firstName: user?.firstName || "",
        lastName: user?.lastName || "",
        clerkId: user?.id || "",
      });
      if(newUser) {
        redirect("/dashboard");
        };
      } 
    }

  return (
    <div>
      New Users Page
    </div>
  )
}