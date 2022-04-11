import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { ActionService } from './action/action.service'
import { Action } from './action/model/action.model'
import { ChatService } from './chat/chat.service'
import { ActionDto } from './common/dto/batch.dto'
import { MsgDto } from './common/dto/body.dto'

@Injectable()
export class AppService {
    private apiUrl: string
    private token: string

    constructor(
        private configService: ConfigService,
        private chatService: ChatService,
        private actionService: ActionService,
    ) {
        this.apiUrl = configService.get('CHATAPI_URL')
        this.token = configService.get('CHATAPI_TOKEN')
    }

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

    /* const anExampleVariable = "Hello World"

let result = false
eval('result = anExampleVariable != "Hello World"');

console.log(result) */

    async processMessages(messages: MsgDto[]) {
        for (const m in messages) {
            if (messages[m].fromMe) return

            const chatId = messages[m].chatId
            const senderPhone = messages[m].chatId.substring(0, 11)
            const senderName = messages[m].senderName
            const msgBody = messages[m].body.toLowerCase()
            const [command] = msgBody.split(' ')

            const chat = await this.chatService.getChat(chatId, senderPhone, senderName)
            const [msgLog] = await chat.$get('messageLogs', { where: { status: 'ACTIVE' } })
            const msgLogData = msgLog.data
            await msgLog.$create('message', {
                messageId: messages[m].messageId,
                body: messages[m].body,
                author: messages[m].author,
                time: new Date(messages[m].time),
                messageNumber: messages[m].messageNumber,
            })

            const allActions = await this.actionService.getAllActions()

            const currentQuestions = allActions.filter((x) => (x.name = msgLog.nextAction.name))
            const currentCommands = allActions.filter((x) => x.name === command)
            const nextAction = msgLog.nextAction

            if (currentQuestions) {
                for (const i in currentQuestions) {
                    await this.sendMsg('readChat', { chatId })
                    await this.sendMsg('typing', { chatId, on: true })

                    const preText = currentQuestions[i].preText
                    const postText = currentQuestions[i].postText
                    const actions = currentQuestions[i].actions

                    if (preText) await this.sendMsg('sendMessage', { chatId, body: preText })

                    if (actions) {
                        for (const a in actions) {
                            const tasks = Object.keys(actions[1])

                            for (const t in tasks)
                                switch (t) {
                                    case 'CANCEL':
                                        msgLog.status = 'CANCELED'
                                        await msgLog.save()
                                        break

                                    case 'GETDATA':
                                        for (const p in actions[a]) {
                                            const value = actions[a][p] === 'msgBody' ? msgBody : actions[a][p]
                                            await msgLog.$create('data', { key: p, value })
                                        }
                                        break

                                    case 'CONDITION':
                                        for (const p in actions[a]) {
                                            const value = actions[a][p] === 'msgBody' ? msgBody : actions[a][p]
                                            await msgLog.$create('data', { key: p, value })
                                        }
                                        break

                                    case 'CHECKDATA':
                                        for (const p in actions[a]) {
                                            const value = actions[a][p] === 'msgBody' ? msgBody : actions[a][p]
                                            await msgLog.$create('data', { key: p, value })
                                        }
                                        break

                                    case 'SETDATA':
                                        for (const p in actions[a]) {
                                            const value = actions[a][p] === 'msgBody' ? msgBody : actions[a][p]
                                            await msgLog.$create('data', { key: p, value })
                                        }
                                        break

                                    case 'EXPORT':
                                        for (const p in actions[a]) {
                                            const value = actions[a][p] === 'msgBody' ? msgBody : actions[a][p]
                                            await msgLog.$create('data', { key: p, value })
                                        }
                                        break
                                }
                        }
                    }

                    if (postText) await this.sendMsg('sendMessage', { chatId, body: postText })
                }
            }

            if (currentCommands) {
                for (const i in currentCommands) {
                    await this.sendMsg('readChat', { chatId })
                    await this.sendMsg('typing', { chatId, on: true })

                    const preText = currentCommands[i].preText
                    const postText = currentCommands[i].postText
                    const actions = currentCommands[i].actions

                    if (preText) await this.sendMsg('sendMessage', { chatId, body: preText })

                    if (actions) {
                        for (const a in actions) {
                            const tasks = Object.keys(actions[1])

                            for (const t in tasks)
                                switch (t) {
                                    case 'CANCEL':
                                        msgLog.status = 'CANCELED'
                                        await msgLog.save()
                                        break

                                    case 'GETDATA':
                                        for (const p in actions[a]) {
                                            const value = actions[a][p] === 'msgBody' ? msgBody : actions[a][p]
                                            await msgLog.$create('data', { key: p, value })
                                        }
                                        break

                                    case 'CHECKDATA':
                                        for (const p in actions[a]) {
                                            const value = actions[a][p] === 'msgBody' ? msgBody : actions[a][p]
                                            await msgLog.$create('data', { key: p, value })
                                        }
                                        break

                                    case 'SETDATA':
                                        for (const p in actions[a]) {
                                            const value = actions[a][p] === 'msgBody' ? msgBody : actions[a][p]
                                            await msgLog.$create('data', { key: p, value })
                                        }
                                        break

                                    case 'EXPORTDATA':
                                        for (const p in actions[a]) {
                                            const value = actions[a][p] === 'msgBody' ? msgBody : actions[a][p]
                                            await msgLog.$create('data', { key: p, value })
                                        }
                                        break
                                }
                        }
                    }

                    if (postText) await this.sendMsg('sendMessage', { chatId, body: postText })
                }
            }

            if (nextAction) await msgLog.$set('nextAction', nextAction.id)

            return 'OK'
        }
    }

    async sendMsg(method, params) {
        const options = {
            method: 'POST',
            body: JSON.stringify(params),
            headers: { 'Content-Type': 'application/json' },
        }

        const url = `${this.apiUrl}/${method}?token=${this.token}`

        const apiResponse = await fetch(url, options)
        const jsonResponse = await apiResponse.json()

        return jsonResponse
    }
}
