import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { url } from 'inspector';
import { CatModule } from './cat/cat.module';
import { DatabaseModule } from './database1/database.module';
import { GamesController } from './games/games.controller';
import { GamesService } from './games/games.service';
import { GamesModule } from './games/games.module';

@Module({
  imports: [TasksModule, GamesModule],
})
export class AppModule {}
