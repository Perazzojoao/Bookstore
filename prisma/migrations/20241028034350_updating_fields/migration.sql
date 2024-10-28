/*
  Warnings:

  - You are about to drop the column `deleted_at` on the `verification_codes` table. All the data in the column will be lost.
  - Added the required column `updated_at` to the `addresses` table without a default value. This is not possible if the table is not empty.
  - Added the required column `image` to the `books` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "addresses" ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "books" ADD COLUMN     "image" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "verification_codes" DROP COLUMN "deleted_at";
