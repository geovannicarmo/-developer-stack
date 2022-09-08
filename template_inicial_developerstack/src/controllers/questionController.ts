import { Request, Response } from 'express';
import {createAnswerService} from '../services/answerService';
import { createQuestionService } from '../services/questionService';

export async function createQuestion(req: Request, res: Response) {
  
    const  dataQuestion = req.body
    await createQuestionService(dataQuestion)
}

export async function createAnswer(req: Request, res: Response) {
  const  dataAnswer = req.body
  await createQuestionService(dataAnswer)

}

export async function get(req: Request, res: Response) {
  

}

export async function getById(req: Request, res: Response) {
  

}
