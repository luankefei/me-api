/**
 * 跑步路由
 */
import { Controller, Get, Post, Req } from '@nestjs/common';
import { Request } from 'express';

@Controller('running')
export class RunningController {
  @Post()
  create(): string {
    return 'This action add a new running schedule';
  }

  @Get()
  findAll(@Req() request: Request): string {
    return 'This action returns all running schedule';
  }
}
