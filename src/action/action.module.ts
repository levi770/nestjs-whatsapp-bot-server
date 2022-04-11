import { Module } from '@nestjs/common'
import { SequelizeModule } from '@nestjs/sequelize'
import { ActionService } from './action.service'
import { Action } from './model/action.model'
import { NextAction } from './model/nextAction.model'

@Module({
    providers: [ActionService],
    imports: [SequelizeModule.forFeature([Action, NextAction])],
    exports: [ActionService],
})
export class ActionModule {}
