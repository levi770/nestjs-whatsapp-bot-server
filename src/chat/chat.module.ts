import { Module } from '@nestjs/common'
import { SequelizeModule } from '@nestjs/sequelize'
import { ChatService } from './chat.service'
import { Chat } from './model/chat.model'

@Module({
    providers: [ChatService],
    imports: [SequelizeModule.forFeature([Chat])],
})
export class ChatModule {}
