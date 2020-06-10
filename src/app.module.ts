import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { url } from 'inspector';
import { CatModule } from './cat/cat.module';
import { DatabaseModule } from './database/database.module';
import bucket from './database/database.provider';

@Module({
  imports: [TasksModule, bucket, CatModule, DatabaseModule
  ],
})
export class AppModule {}
