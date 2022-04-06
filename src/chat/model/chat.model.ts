import { BelongsTo, Column, DataType, ForeignKey, HasMany, Model, Table } from 'sequelize-typescript'
import { MessageLog } from 'src/message/model/messageLog.model'
import { User } from 'src/user/model/user.model'

interface ChatCreationAttrs {
    chatId: string
    senderName: string
}

@Table({ tableName: 'chat' })
export class Chat extends Model<Chat, ChatCreationAttrs> {
    @Column({ type: DataType.UUID, defaultValue: DataType.UUIDV4, primaryKey: true })
    id: string

    @Column({ type: DataType.STRING })
    chatId: string

    @Column({ type: DataType.STRING })
    senderName: string

    @HasMany(() => MessageLog)
    messageLogs: MessageLog[]

    @ForeignKey(() => User)
    userId: string

    @BelongsTo(() => User)
    user: User
}
