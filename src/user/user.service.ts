/**
 * 用户相关服务
 */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { IUser } from '../interfaces/user.interface';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  create(user: IUser): Promise<User> {
    const temp = new User();
    temp.email = user.email;
    temp.level = 0;
    temp.nickname = user.nickname;
    temp.password = user.password;
    temp.salt = user.salt;
    temp.username = user.username;

    return this.userRepository.save(temp);
  }

  findAll(): Promise<User[]> {
    return this.userRepository.find();
  }
}
