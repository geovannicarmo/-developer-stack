import { prisma } from "../config/database";


export async function createAnswerRepository(dataanswer: Idataanswer){

    const created = await prisma.answeredtable({

        data:{
            dataanswer
        }
    })
}


export interface Idataanswer {
    answeredBy:string
    answer: string
    questionId: number
}