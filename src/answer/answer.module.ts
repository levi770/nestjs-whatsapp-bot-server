import { Module } from '@nestjs/common'
import { SequelizeModule } from '@nestjs/sequelize'
import { AnswerService } from './answer.service'
import { Answer } from './model/answer.model'

@Module({
    providers: [AnswerService],
    imports: [SequelizeModule.forFeature([Answer])],
})
export class AnswerModule {}
