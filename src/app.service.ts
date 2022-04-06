import { Injectable } from '@nestjs/common'
import { MsgDto } from './common/dto/body.dto'

@Injectable()
export class AppService {
    getHello(): string {
        return 'Hello World!'
    }

    processMessages(messages: MsgDto[]) {
        for (const i in messages) {
            if (messages[i].fromMe) return

            const msgBody = messages[i].body.toLowerCase()
            const chatId = messages[i].chatId
            const [command] = msgBody.split(' ')
        }
    }
}
