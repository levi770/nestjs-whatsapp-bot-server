import { ApiProperty } from '@nestjs/swagger'

export class ActionDto {
    type: string
    name: string
    next: string
    preText: string
    postText: string
    actions: object[]
}

export class BatchDto {
    @ApiProperty()
    batch: ActionDto[]
}
