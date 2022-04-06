import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/sequelize'
import { Answer } from './model/answer.model'

@Injectable()
export class AnswerService {
    constructor(@InjectModel(Answer) private answerRepo: typeof Answer) {}
}
