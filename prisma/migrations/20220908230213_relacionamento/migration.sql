/*
  Warnings:

  - You are about to drop the `question` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "question";

-- CreateTable
CREATE TABLE "questiontable" (
    "id" SERIAL NOT NULL,
    "askedBy" TEXT NOT NULL,
    "question" TEXT NOT NULL,

    CONSTRAINT "questiontable_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "answeredtable" (
    "id" SERIAL NOT NULL,
    "answeredBy" TEXT NOT NULL,
    "answer" TEXT NOT NULL,
    "questionId" INTEGER NOT NULL,

    CONSTRAINT "answeredtable_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "answeredtable" ADD CONSTRAINT "answeredtable_questionId_fkey" FOREIGN KEY ("questionId") REFERENCES "questiontable"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
