import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/sequelize'
import { User } from './model/user.model'

@Injectable()
export class UserService {
    constructor(@InjectModel(User) private userRepo: typeof User) {}
}
