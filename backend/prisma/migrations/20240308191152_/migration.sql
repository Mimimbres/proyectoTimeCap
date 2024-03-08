/*
  Warnings:

  - The `songs` column on the `Capsule` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `image` column on the `Capsule` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `letter` column on the `Capsule` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Capsule" DROP COLUMN "songs",
ADD COLUMN     "songs" TEXT[],
DROP COLUMN "image",
ADD COLUMN     "image" TEXT[],
DROP COLUMN "letter",
ADD COLUMN     "letter" TEXT[];
