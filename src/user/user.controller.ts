/**
 * 用户路由
 */
import { Body, Controller, Get, Post, Query, Req } from '@nestjs/common';
import { UserService } from './user.service';
import { Request } from 'express';
import { User } from './user.entity';
import { IUser } from '../interfaces/user.interface';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() user: IUser): Promise<User> {
    console.log('create user', user);
    return this.userService.create(user);
  }

  @Get()
  findAll(): Promise<any[]> {
    return this.userService.findAll();
  }
}
