import { Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript'
import { Question } from 'src/action/model/question.model'
import { Command } from './command.model'

@Table({ tableName: 'nextAction' })
export class NextAction extends Model<NextAction> {
    @Column({ type: DataType.UUID, defaultValue: DataType.UUIDV4, primaryKey: true })
    id: string

    @ForeignKey(() => Question)
    nextQuestionId: string

    @ForeignKey(() => Command)
    nextCommandId: string
}
