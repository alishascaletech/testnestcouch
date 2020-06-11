import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { url } from 'inspector';
import { CatModule } from './cat/cat.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [DatabaseModule, CatModule],
})
export class AppModule {}
