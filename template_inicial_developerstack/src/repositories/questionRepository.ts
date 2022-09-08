import { prisma } from "../config/database";


export async function createQuestionRepository(dataQuestion: IdataQuestion){

    const created = await prisma.questiontable({

        data:{

        }
    })
}


export interface IdataQuestion {
    askedBy:string
    question: string
}