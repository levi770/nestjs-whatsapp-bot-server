import { Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript'
import { MessageLog } from './messageLog.model'

@Table({ tableName: 'messageLogData' })
export class MessageLogData extends Model<MessageLogData> {
    @Column({ type: DataType.UUID, defaultValue: DataType.UUIDV4, primaryKey: true })
    id: string

    @Column({ type: DataType.STRING })
    key: string

    @Column({ type: DataType.STRING })
    value: string

    @ForeignKey(() => MessageLog)
    messageLogId: string
}
