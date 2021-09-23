import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { RunningController } from './controllers/running.controller';
import { UserController } from './controllers/user.controller';
import { AppService } from './app.service';
import { User } from './entities/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'Root1234',
      database: 'test',
      entities: [User],
      synchronize: true,
      retryDelay: 3000, // 两次重试连接的间隔
      retryAttempts: 10, // 重试连接数据库次数
      keepConnectionAlive: false, // 在应用程序关闭后连接不关闭
    }),
  ],
  controllers: [AppController, UserController, RunningController],
  providers: [AppService],
})
export class AppModule {}
