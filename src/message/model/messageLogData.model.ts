import { Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript'
import { Answer } from 'src/answer/model/answer.model'
import { Question } from 'src/action/model/question.model'
import { MessageLog } from './messageLog.model'

@Table({ tableName: 'messageLogData' })
export class MessageLogData extends Model<MessageLogData> {
    @Column({ type: DataType.UUID, defaultValue: DataType.UUIDV4, primaryKey: true })
    id: string

    @ForeignKey(() => Question)
    questionId: string

    @ForeignKey(() => Answer)
    answerId: string

    @ForeignKey(() => MessageLog)
    messageLogId: string
}
