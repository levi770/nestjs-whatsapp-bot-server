import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/sequelize'
import { MessageDto } from './dto/message.dto'
import { MessageLogDto } from './dto/messageLog.dto'
import { Chat } from './model/chat.model'
import { Message } from './model/message.model'
import { MessageLog } from './model/messageLog.model'
import { MessageLogData } from './model/messageLogData.model'
import { Queue } from 'bull'
import { InjectQueue } from '@nestjs/bull'
import { MsgDto } from 'src/common/dto/body.dto'

@Injectable()
export class ChatService {
    constructor(
        @InjectModel(Chat) private chatRepo: typeof Chat,
        @InjectModel(Message) private messageRepo: typeof Message,
        @InjectModel(MessageLog) private messageLogRepo: typeof MessageLog,
        @InjectModel(MessageLogData) private messageLogDataRepo: typeof MessageLogData,
        @InjectQueue('chat') private chatQueue: Queue,
    ) {}

    async getChat(chatId: string, senderPhone: string, senderName: string) {
        const [chat, created] = await this.chatRepo.findOrCreate({ where: { chatId, senderName } })

        if (created) {
            await chat.$create('user', { phone: senderPhone, name: senderName })
            await chat.$create('messageLog', {})
        }

        return chat
    }

    async createMsg(msg: MessageDto) {
        return this.messageRepo.create(msg)
    }

    async updateMsgLog(id: string, msgLog: MessageLogDto) {
        return this.messageLogRepo.update(msgLog, { where: { id } })
    }

    async processMessages(messages: MsgDto[]) {
        await this.chatQueue.add('message', messages)
        return 'OK'
    }
}
