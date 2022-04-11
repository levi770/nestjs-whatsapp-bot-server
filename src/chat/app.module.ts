import { Module } from '@nestjs/common'
import { AppController } from '../app.controller'
import { AppService } from '../app.service'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { SequelizeModule } from '@nestjs/sequelize'
import { UserModule } from '../user/user.module'
import { User } from '../user/model/user.model'
import { ChatModule } from './chat.module'
import { Chat } from './model/chat.model'
import { MessageLog } from './model/messageLog.model'
import { MessageLogData } from './model/messageLogData.model'
import { ActionModule } from '../action/action.module'
import { NextAction } from '../action/model/nextAction.model'
import { Message } from './model/message.model'
import { Action } from '../action/model/action.model'
import { BullModule } from '@nestjs/bull'

@Module({
    imports: [
        ConfigModule.forRoot({
            envFilePath: `.${process.env.NODE_ENV}.env`,
        }),
        BullModule.forRootAsync({
            imports: [ConfigModule],
            useFactory: async (configService: ConfigService) => ({
                redis: {
                    host: configService.get('REDIS_HOST'),
                    port: +configService.get('REDIS_PORT'),
                },
            }),
            inject: [ConfigService],
        }),
        BullModule.registerQueue({
            name: 'app',
        }),
        SequelizeModule.forRoot({
            dialect: 'postgres',
            host: process.env.POSTGRES_HOST,
            port: +process.env.POSTGRES_PORT,
            username: process.env.POSTGRES_USER,
            password: process.env.POSTGRES_PASSWORD,
            database: process.env.POSTGRES_DB,
            models: [User, Chat, Message, MessageLog, MessageLogData, Action, NextAction],
            autoLoadModels: true,
            synchronize: true,
            logging: false,
        }),
        UserModule,
        ChatModule,
        ActionModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
