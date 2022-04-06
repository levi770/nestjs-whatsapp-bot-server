import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/sequelize'
import { Chat } from './model/chat.model'

@Injectable()
export class ChatService {
    constructor(@InjectModel(Chat) private chatRepo: typeof Chat) {}
}
