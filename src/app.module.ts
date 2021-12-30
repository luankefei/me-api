import * as yaml from 'js-yaml';
import * as path from 'path';
import * as fs from 'fs';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

// import { AppController } from './app.controller';
import { UserModule } from './user/user.module';
// import { RunningController } from './running/running.controller';
// import { UserController } from './user/user.controller';
import { AppService } from './app.service';
// import { User } from './user/user.entity';

let config;
try {
  const dbConfig = fs.readFileSync(path.resolve('db/database.yaml'), 'utf-8');
  config = yaml.load(dbConfig);
} catch (e) {
  console.log(e);
}

@Module({
  imports: [TypeOrmModule.forRoot(config), UserModule],
  // controllers: [AppController, UserController, RunningController],
  // providers: [AppService],
})
export class AppModule {}
