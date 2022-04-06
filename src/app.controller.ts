import { Body, Controller, Get, Post } from '@nestjs/common'
import { AppService } from './app.service'
import { BodyDto } from './common/dto/body.dto'

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) {}

    @Get()
    getHello(): string {
        return this.appService.getHello()
    }

    @Post()
    async handleMsg(@Body() body: BodyDto) {
        return await this.appService.processMessages(body.messages)
    }
}
