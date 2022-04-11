import { Process, Processor } from '@nestjs/bull'
import { ConfigService } from '@nestjs/config'
import { Job } from 'bull'
import axios from 'axios'
import { ChatService } from './chat.service'
import { ActionService } from 'src/action/action.service'

/* const anExampleVariable = "Hello World"
let result = false
eval('result = anExampleVariable != "Hello World"');
console.log(result) */

@Processor('chat')
export class ChatProcessor {
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

    @Process('message')
    async handleJob(job: Job) {
        const messages = job.data

        try {
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

                const currentQuestions = msgLog.nextAction
                    ? allActions.filter((x) => (x.name = msgLog.nextAction.name))
                    : null
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

                if (currentCommands.length != 0) {
                    for (const i in currentCommands) {
                        await this.sendMsg('readChat', { chatId })
                        await this.sendMsg('typing', { chatId, on: true })

                        const preText = currentCommands[i].preText
                        const postText = currentCommands[i].postText
                        const actions = currentCommands[i].actions

                        if (preText) await this.sendMsg('sendMessage', { chatId, body: preText })

                        if (actions.length != 0) {
                            for (const a in actions) {
                                const task = Object.keys(actions[a])

                                switch (task[0]) {
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

                                    case 'SETDATA':
                                        for (const p in actions[a][0]) {
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

                if (nextAction) await msgLog.$set('nextAction', nextAction.id)

                return true
            }
        } catch (error) {
            console.log('chat processor error: ' + error.message)
        }
    }

    async sendMsg(method: string, params: object) {
        const options = {
            headers: { 'Content-Type': 'application/json' },
        }

        const url = `${this.apiUrl}/${method}?token=${this.token}`

        const apiResponse = await axios.post(url, params, options)
        const jsonResponse = await apiResponse.data

        return jsonResponse
    }
}
