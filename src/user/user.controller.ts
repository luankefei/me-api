/**
 * 用户路由
 */
import { Controller, Get, Post, Query, Req } from '@nestjs/common';
import { UserService } from './user.service';
import { Request } from 'express';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(): string {
    return 'This action add a new user';
  }

  @Get()
  findAll(): Promise<any[]> {
    return this.userService.findAll();
  }
}
