import { DynamicModule, Module, Type } from '@nestjs/common';
import { AlarmsController } from '../presenters/http/alarms.controller';
import { AlarmsService } from './alarms.service';

@Module({
  controllers: [AlarmsController],
  providers: [AlarmsService],
})
export class AlarmsModule {
  static withInfrastructure(infrastructureModule: Type | DynamicModule) {
    return {
      module: AlarmsModule,
      imports: [infrastructureModule],
    };
  }
}
