/**
 * 用户路由
 */
import crypto from 'crypto';
import {
  Body,
  Controller,
  Get,
  Post,
  // Query,
  // Req,
  // Res,
  Response,
  UnauthorizedException,
} from '@nestjs/common';
import { UserService } from './user.service';
// import { Request } from 'express';
import { User } from './user.entity';
import { IUser } from '../interface/user.interface';

/*
 * 10位盐
 * 时间戳(2)+随机字母(8)
 */
const generateSalt = () => {
  const suffix = Date.now() % 100;
  const prefix = URL.createObjectURL(new Blob()).substring(-8);

  return prefix + suffix;
};

const md5 = (text) => {
  return crypto.createHash('md5').update(String(text)).digest('hex');
};

const encrypt = (password, salt) => {
  return md5(md5(password) + salt);
};

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() user: IUser): Promise<User> {
    const salt = generateSalt();
    const password = encrypt(user.password, salt);
    user.password = password;
    user.salt = salt;
    return this.userService.create(user);
  }

  @Get()
  findAll(): Promise<any[]> {
    return this.userService.findAll();
  }

  @Post()
  async login(@Response() res, user: IUser): Promise<IUser> {
    const { username, password } = user;
    const result = await this.userService.validateUser(username, password);
    const salt = generateSalt();
    const userNameHash = encrypt(username, salt);
    if (result === null) {
      throw UnauthorizedException;
    }

    res.cookie('me_signed_username', userNameHash, {
      maxAge: 1000 * 60 * 24,
      httpOnly: true,
    });

    return result;
  }
}
