import { Idataanswer, createAnswerRepository } from "../repositories/answerRepository"


export  async function createAnswerService(dataQuestion: Idataanswer){

    const created = await createAnswerRepository(dataQuestion)
}