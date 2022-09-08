import {IdataQuestion, createQuestionRepository } from "../repositories/questionRepository";


export  async function createQuestionService(dataQuestion: IdataQuestion){

    const created = await createQuestionRepository(dataQuestion)
}