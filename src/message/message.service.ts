import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/sequelize'
import { Message } from './model/message.model'
import { MessageLog } from './model/messageLog.model'
import { MessageLogData } from './model/messageLogData.model'

@Injectable()
export class MessageService {
    constructor(
        @InjectModel(Message) private messageRepo: typeof Message,
        @InjectModel(MessageLog) private messageLogRepo: typeof MessageLog,
        @InjectModel(MessageLogData) private messageLogDataRepo: typeof MessageLogData,
    ) {}
}
