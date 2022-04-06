import { BelongsTo, Column, DataType, ForeignKey, HasMany, Model, Table } from 'sequelize-typescript'
import { Chat } from 'src/chat/model/chat.model'
import { Question } from 'src/action/model/question.model'
import { Message } from './message.model'
import { MessageLogData } from './messageLogData.model'
import { Command } from 'src/action/model/command.model'

@Table({ tableName: 'messageLog' })
export class MessageLog extends Model<MessageLog> {
    @Column({ type: DataType.UUID, defaultValue: DataType.UUIDV4, primaryKey: true })
    id: string

    @Column({ type: DataType.STRING, defaultValue: 'ACTIVE' })
    status: string

    @ForeignKey(() => Chat)
    chatId: string

    @BelongsTo(() => Chat)
    chat: Chat

    @ForeignKey(() => Question)
    curentQuestionId: string

    @ForeignKey(() => Command)
    curentCommandId: string

    @HasMany(() => Message)
    messages: Message[]

    @HasMany(() => MessageLogData)
    data: MessageLogData[]
}
