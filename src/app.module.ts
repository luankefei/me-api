import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { RunningController } from './running.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController, RunningController],
  providers: [AppService],
})
export class AppModule {}
