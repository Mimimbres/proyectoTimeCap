/*
  Warnings:

  - You are about to drop the `UserCapsule` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `capsuleName` to the `Capsule` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `Capsule` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Capsule" DROP CONSTRAINT "Capsule_userId_fkey";

-- DropForeignKey
ALTER TABLE "UserCapsule" DROP CONSTRAINT "UserCapsule_capsuleId_fkey";

-- DropForeignKey
ALTER TABLE "UserCapsule" DROP CONSTRAINT "UserCapsule_userId_fkey";

-- AlterTable
ALTER TABLE "Capsule" ADD COLUMN     "capsuleName" TEXT NOT NULL,
ADD COLUMN     "password" TEXT NOT NULL;

-- DropTable
DROP TABLE "UserCapsule";

-- CreateTable
CREATE TABLE "_CapsuleToUser" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_CapsuleToUser_AB_unique" ON "_CapsuleToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_CapsuleToUser_B_index" ON "_CapsuleToUser"("B");

-- AddForeignKey
ALTER TABLE "_CapsuleToUser" ADD CONSTRAINT "_CapsuleToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "Capsule"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CapsuleToUser" ADD CONSTRAINT "_CapsuleToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
