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

  findOne(username: string): Promise<User | undefined> {
    console.log('TODO findone: ', username);
    return this.userRepository.find()[0];
  }

  findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.findOne(username);
    if (user && user.password === pass) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  // async login(user: any) {
  //   const payload = { username: user.username,  };
  //   return this.validateUser();
  // }
}
