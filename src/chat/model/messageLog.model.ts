import { BelongsTo, Column, DataType, ForeignKey, HasMany, Model, Table } from 'sequelize-typescript'
import { Action } from 'src/action/model/action.model'
import { Chat } from 'src/chat/model/chat.model'
import { Message } from './message.model'
import { MessageLogData } from './messageLogData.model'

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

    @ForeignKey(() => Action)
    nextActionId: string

    @BelongsTo(() => Action)
    nextAction: Action

    @HasMany(() => Message)
    messages: Message[]

    @HasMany(() => MessageLogData)
    data: MessageLogData[]
}
