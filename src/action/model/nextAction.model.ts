import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript'
import { Action } from './action.model'

@Table({ tableName: 'nextAction' })
export class NextAction extends Model<NextAction> {
    @Column({ type: DataType.UUID, defaultValue: DataType.UUIDV4, primaryKey: true })
    id: string

    @ForeignKey(() => Action)
    actionId: string

    @BelongsTo(() => Action, { onDelete: 'CASCADE' })
    action: Action
}
