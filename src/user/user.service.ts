/**
 * 用户相关服务
 */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  // create(user: User) {
  //   this.users.push(user);
  // }

  findAll(): Promise<User[]> {
    return this.userRepository.find();
  }
}
