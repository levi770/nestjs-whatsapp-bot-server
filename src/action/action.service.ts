import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/sequelize'
import { ActionDto } from './dto/action.dto'
import { Action } from './model/action.model'
import { NextAction } from './model/nextAction.model'

@Injectable()
export class ActionService {
    constructor(
        @InjectModel(Action) private actionRepo: typeof Action,
        @InjectModel(NextAction) private nextActionRepo: typeof NextAction,
    ) {}

    async getAllActions(): Promise<Action[]> {
        return await this.actionRepo.findAll({
            include: [
                {
                    model: NextAction,
                    include: [{ all: true }],
                },
            ],
        })
    }

    async createAction(action: ActionDto): Promise<Action> {
        return await this.actionRepo.create(action)
    }

    async createNextAction(): Promise<NextAction> {
        return await this.nextActionRepo.create()
    }

    async deleteAll() {
        await this.actionRepo.destroy({
            where: {},
            truncate: true,
        })

        await this.nextActionRepo.destroy({
            where: {},
            truncate: true,
        })
    }
}
