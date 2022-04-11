import { Body, Controller, Delete, Get, Post } from '@nestjs/common'
import { ApiOperation } from '@nestjs/swagger'
import { AppService } from './app.service'
import { BatchDto } from './common/dto/batch.dto'
import { BodyDto } from './common/dto/body.dto'

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) {}

    @Get()
    getHello(): string {
        return this.appService.getHello()
    }

    @ApiOperation({ summary: 'MSG HOOK' })
    @Post()
    async handleMsg(@Body() body: BodyDto) {
        return await this.appService.processMessages(body.messages)
    }

    @ApiOperation({ summary: 'SUBMIT ACTIONS' })
    @Post('actions')
    async submitActions(@Body() body: BatchDto) {
        return await this.appService.submitActions(body.batch)
    }

    @ApiOperation({ summary: 'DELETE ACTIONS' })
    @Delete('actions')
    async deleteActions() {
        return await this.appService.deleteActions()
    }
}
