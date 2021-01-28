import { Module } from '@nestjs/common';
import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';
import { TasksController } from './tasks/tasks.controller';

@Module({
  controllers: [TasksController],
  providers: [TasksService]
})
export class TasksModule {}
