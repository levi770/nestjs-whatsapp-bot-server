import { Column, DataType, Model, Table } from 'sequelize-typescript'

interface AnswerCreationAttrs {
    type: string
    text?: string
}

@Table({ tableName: 'answer' })
export class Answer extends Model<Answer, AnswerCreationAttrs> {
    @Column({ type: DataType.UUID, defaultValue: DataType.UUIDV4, primaryKey: true })
    id: string

    @Column({ type: DataType.STRING })
    type: string

    @Column({ type: DataType.STRING })
    text: string
}
