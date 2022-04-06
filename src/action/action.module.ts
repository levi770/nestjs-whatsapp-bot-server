import { Module } from '@nestjs/common'
import { SequelizeModule } from '@nestjs/sequelize'
import { ActionService } from './action.service'
import { Command } from './model/command.model'
import { Question } from './model/question.model'

@Module({
    providers: [ActionService],
    imports: [SequelizeModule.forFeature([Command, Question])],
})
export class ActionModule {}
