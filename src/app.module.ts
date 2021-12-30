import * as yaml from 'js-yaml';
import * as path from 'path';
import * as fs from 'fs';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { RunningController } from './controllers/running.controller';
import { UserController } from './controllers/user.controller';
import { AppService } from './app.service';
import { User } from './entities/user.entity';

let config;
try {
  const dbConfig = fs.readFileSync(path.resolve('db/database.yaml'), 'utf-8');
  config = yaml.load(dbConfig);
} catch (e) {
  console.log(e);
}

@Module({
  imports: [TypeOrmModule.forRoot({ ...config, entities: [User] })],
  controllers: [AppController, UserController, RunningController],
  providers: [AppService],
})
export class AppModule {}
