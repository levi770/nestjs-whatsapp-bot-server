import { Module } from '@nestjs/common'
import { SequelizeModule } from '@nestjs/sequelize'
import { ChatService } from './chat.service'
import { Chat } from './model/chat.model'
import { Message } from './model/message.model'
import { MessageLog } from './model/messageLog.model'
import { MessageLogData } from './model/messageLogData.model'
import { BullModule } from '@nestjs/bull'
import { ChatProcessor } from './chat.processor'
import { ConfigModule } from '@nestjs/config'
import { ActionModule } from 'src/action/action.module'

@Module({
    providers: [ChatService, ChatProcessor],
    imports: [
        BullModule.registerQueue({
            name: 'chat',
        }),
        SequelizeModule.forFeature([Chat, Message, MessageLog, MessageLogData]),
        ConfigModule,
        ActionModule,
    ],
    exports: [ChatService],
})
export class ChatModule {}
