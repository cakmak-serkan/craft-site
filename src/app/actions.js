"use server";
import { PrismaClient } from "@prisma/client";

/* App */
// #region createSetup

/* export async function createSetup() {
  const prisma = new PrismaClient();

  try {
    const newSetup = await prisma.app.create({
      data: { name: "Draft Setup", description: "Description" },
    });
    console.log(`\r\n\r\n:: Setup with appID: ${appID} is created.`);
    await prisma.$disconnect();
    return newSetup;
  } catch (error) {
    console.error(error);
    // Handle the error as needed
    await prisma.$disconnect();
  }
}
 */
// #endregion
