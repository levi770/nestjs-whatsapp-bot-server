import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { ConfigModule } from '@nestjs/config'
import { SequelizeModule } from '@nestjs/sequelize'
import { UserModule } from './user/user.module'
import { User } from './user/model/user.model'
import { ChatModule } from './chat/chat.module'
import { AnswerModule } from './answer/answer.module'
import { MessageModule } from './message/message.module'
import { Chat } from './chat/model/chat.model'
import { Message } from './message/model/message.model'
import { MessageLog } from './message/model/messageLog.model'
import { MessageLogData } from './message/model/messageLogData.model'
import { Command } from './action/model/command.model'
import { Question } from './action/model/question.model'
import { Answer } from './answer/model/answer.model'
import { ActionModule } from './action/action.module'
import { NextAction } from './action/model/nextAction.model'

@Module({
    imports: [
        ConfigModule.forRoot({
            envFilePath: `.${process.env.NODE_ENV}.env`,
        }),
        SequelizeModule.forRoot({
            dialect: 'postgres',
            host: process.env.POSTGRES_HOST,
            port: +process.env.POSTGRES_PORT,
            username: process.env.POSTGRES_USER,
            password: process.env.POSTGRES_PASSWORD,
            database: process.env.POSTGRES_DB,
            models: [User, Chat, Message, MessageLog, MessageLogData, Command, Question, Answer, NextAction],
            autoLoadModels: true,
            synchronize: true,
            logging: false,
        }),
        UserModule,
        ChatModule,
        AnswerModule,
        MessageModule,
        ActionModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
