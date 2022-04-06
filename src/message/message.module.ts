import { Module } from '@nestjs/common'
import { SequelizeModule } from '@nestjs/sequelize'
import { MessageService } from './message.service'
import { Message } from './model/message.model'
import { MessageLog } from './model/messageLog.model'
import { MessageLogData } from './model/messageLogData.model'

@Module({
    providers: [MessageService],
    imports: [SequelizeModule.forFeature([Message, MessageLog, MessageLogData])],
})
export class MessageModule {}
