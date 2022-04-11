import { ApiProperty } from '@nestjs/swagger'

export class MsgDto {
    @ApiProperty()
    messageId: string

    @ApiProperty()
    id: string

    @ApiProperty()
    body: string

    @ApiProperty()
    type: string

    @ApiProperty()
    senderName: string

    @ApiProperty()
    fromMe: boolean

    @ApiProperty()
    author: string

    @ApiProperty()
    time: number

    @ApiProperty()
    chatId: string

    @ApiProperty()
    messageNumber: number
}

export class BodyDto {
    @ApiProperty()
    instanceId: string

    @ApiProperty()
    messages: MsgDto[]
}
