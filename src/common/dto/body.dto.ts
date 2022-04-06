export class BodyDto {
    instanceId: string
    messages: MsgDto[]
}

export class MsgDto {
    id: string
    body: string
    type: string
    senderName: string
    fromMe: boolean
    author: string
    time: number
    chatId: string
    messageNumber: number
}
