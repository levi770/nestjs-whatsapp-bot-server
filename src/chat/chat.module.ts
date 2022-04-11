import { Module } from '@nestjs/common'
import { SequelizeModule } from '@nestjs/sequelize'
import { ChatService } from './chat.service'
import { Chat } from './model/chat.model'
import { Message } from './model/message.model'
import { MessageLog } from './model/messageLog.model'
import { MessageLogData } from './model/messageLogData.model'

@Module({
    providers: [ChatService],
    imports: [SequelizeModule.forFeature([Chat, Message, MessageLog, MessageLogData])],
    exports: [ChatService],
})
export class ChatModule {}
