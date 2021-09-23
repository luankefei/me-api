/**
 * 用户相关服务
 */
import { Injectable } from '@nestjs/common';
import { User } from '../interfaces/user.interface';

@Injectable()
export class RunningService {
  private readonly users: User[] = [];

  create(user: User) {
    this.users.push(user);
  }

  findAll(): User[] {
    return this.users;
  }
}
