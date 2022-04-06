import { Column, DataType, HasOne, Model, Table } from 'sequelize-typescript'
import { NextAction } from './nextAction.model'

interface CommandCreationAttrs {
    name: string
    preText?: string
    postText?: string
}

@Table({ tableName: 'command' })
export class Command extends Model<Command, CommandCreationAttrs> {
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
