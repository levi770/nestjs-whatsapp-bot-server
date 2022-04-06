import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/sequelize'
import { Command } from './model/command.model'
import { Question } from './model/question.model'

@Injectable()
export class ActionService {
    constructor(
        @InjectModel(Command) private commandRepo: typeof Command,
        @InjectModel(Question) private questionRepo: typeof Question,
    ) {}
}
