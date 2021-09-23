/**
 * 用户路由
 */
import { Controller, Get, Post, Req } from '@nestjs/common';
import { Request } from 'express';

@Controller('user')
export class UserController {
  @Post()
  create(): string {
    return 'This action add a new user';
  }

  @Get()
  findAll(@Req() request: Request): string {
    return 'This action returns all users';
  }
}
