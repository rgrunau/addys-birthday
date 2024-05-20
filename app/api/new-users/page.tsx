import prisma from "@/lib/prisma";
import { auth, currentUser } from "@clerk/nextjs/server";

const createNewUser = async (email) => { 
  const user = await prisma.users.create({
    data: {
      email: "",
      name: "",
    }
  });
};

export default async function NewUsersPage() {
  const { userId } = await auth();
  
  if (userId) {
    const user = await prisma.users.findUnique({
      where: {
        id: userId,
      },
    });

    if (!user) {
      const currentClerkUser = await currentUser();
      if (createNewUser !== null) {
        
        const newUser = await createNewUser(currentClerkUser?.email);
      }
    }
  }

  return (
    <div>

    </div>
  )
}