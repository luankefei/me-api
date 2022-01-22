/**
 * 跑步相关服务
 */
import { Injectable } from '@nestjs/common';
import { RunningSchedule } from '../interface/running.interface';

@Injectable()
export class RunningService {
  private readonly schdules: RunningSchedule[] = [];

  create(schedule: RunningSchedule) {
    this.schdules.push(schedule);
  }

  findAll(): RunningSchedule[] {
    return this.schdules;
  }
}
