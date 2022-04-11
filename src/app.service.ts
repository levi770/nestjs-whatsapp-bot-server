import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import { ActionService } from './action/action.service'
import { Action } from './action/model/action.model'
import { ActionDto } from './common/dto/batch.dto'

@Injectable()
export class AppService {
    constructor(private actionService: ActionService) {}

    getHello(): string {
        return 'Hello World!'
    }

    async deleteActions() {
        return await this.actionService.deleteAll()
    }

    async submitActions(batch: ActionDto[]) {
        try {
            const createdItems: Array<Action> = []

            for (const i in batch) {
                const item = await this.actionService.createAction({
                    type: batch[i].type,
                    name: batch[i].name,
                    preText: batch[i].preText != '' ? batch[i].preText : null,
                    postText: batch[i].postText != '' ? batch[i].postText : null,
                    actions: batch[i].actions ? batch[i].actions : null,
                })
                createdItems.push(item)
                continue
            }

            for (const i in batch) {
                if (batch[i].next === 'null') continue

                const current = createdItems.find((x) => x.name === batch[i].name)
                const next = createdItems.find((x) => x.name === batch[i].next)
                const nextAction = await this.actionService.createNextAction()

                await nextAction.$set('action', next.id)
                await current.$set('next', nextAction.id)
            }

            return true
        } catch (error) {
            throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }
}
