import { Column, DataType, HasOne, Model, Table } from 'sequelize-typescript'
import { NextAction } from './nextAction.model'

interface QuestionCreationAttrs {
    name: string
    preText?: string
    postText?: string
}

@Table({ tableName: 'question' })
export class Question extends Model<Question, QuestionCreationAttrs> {
    @Column({ type: DataType.UUID, defaultValue: DataType.UUIDV4, primaryKey: true })
    id: string

    @Column({ type: DataType.STRING })
    name: string

    @Column({ type: DataType.STRING })
    preText: string

    @Column({ type: DataType.STRING })
    postText: string

    @HasOne(() => NextAction)
    nextAction: NextAction
}
