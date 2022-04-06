import { Column, DataType, Model, Table } from 'sequelize-typescript'

interface UserCreationAttrs {
    phone: string
    name: string
}

@Table({ tableName: 'user' })
export class User extends Model<User, UserCreationAttrs> {
    @Column({ type: DataType.UUID, defaultValue: DataType.UUIDV4, primaryKey: true })
    id: string

    @Column({ type: DataType.STRING })
    phone: string

    @Column({ type: DataType.STRING })
    name: string
}
