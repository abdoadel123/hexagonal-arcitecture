import { Injectable } from '@nestjs/common';
import { AlarmFactory } from '../domain/factories';
import { CreateAlarmCommand } from './commands';
import { AlarmRepository } from './ports/alarm.repository';

@Injectable()
export class AlarmsService {
  constructor(
    private readonly alarmRepository: AlarmRepository,
    private readonly alarmFactory: AlarmFactory,
  ) {}
  create(createAlarmDto: CreateAlarmCommand) {
    const alarmFactory = this.alarmFactory.create(
      createAlarmDto.name,
      createAlarmDto.severity,
    );
    return this.alarmRepository.save(alarmFactory);
  }

  findAll() {
    return this.alarmRepository.findAll();
  }
}
