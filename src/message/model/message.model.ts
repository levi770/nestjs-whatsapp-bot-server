import { Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript'
import { MessageLog } from './messageLog.model'

interface MessageCreationAttrs {
    messageId: string
    body: string
    author: string
    time: string
    messageNumber: number
}

@Table({ tableName: 'message' })
export class Message extends Model<Message, MessageCreationAttrs> {
    @Column({ type: DataType.UUID, defaultValue: DataType.UUIDV4, primaryKey: true })
    id: string

    @Column({ type: DataType.STRING })
    messageId: string

    @Column({ type: DataType.STRING })
    body: string

    @Column({ type: DataType.STRING })
    author: string

    @Column({ type: DataType.DATE })
    time: string

    @Column({ type: DataType.INTEGER })
    messageNumber: number

    @ForeignKey(() => MessageLog)
    messageLogId: string
}
