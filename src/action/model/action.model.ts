import { Column, DataType, ForeignKey, HasOne, Model, Table } from 'sequelize-typescript'
import { NextAction } from './nextAction.model'

interface ActionCreationAttrs {
    type: string
    name: string
    preText?: string
    postText?: string
    actions?: object[]
}

@Table({ tableName: 'action' })
export class Action extends Model<Action, ActionCreationAttrs> {
    @Column({ type: DataType.UUID, defaultValue: DataType.UUIDV4, primaryKey: true })
    id: string

    @Column({ type: DataType.STRING })
    name: string

    @Column({ type: DataType.STRING })
    type: string

    @Column({ type: DataType.STRING(1020) })
    preText: string

    @Column({ type: DataType.STRING(1020) })
    postText: string

    @Column({ type: DataType.ARRAY(DataType.JSON) })
    actions: object[]

    @ForeignKey(() => NextAction)
    nextId: string

    @HasOne(() => NextAction, { onDelete: 'cascade' })
    next: NextAction
}
