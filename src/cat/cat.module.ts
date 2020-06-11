import { Module } from '@nestjs/common';
import { CatService } from './cat.service';
import { CouchbaseModule } from '@scalio-oss/nest-couchbase';
import { Cat } from './cat.entity';
import { CatController } from './cat.controller';
import { CatProvider } from './cat.provider';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [CouchbaseModule.forFeature([Cat]), DatabaseModule],
  providers: [CatService, ...CatProvider],
  controllers: [CatController],
  exports: [...CatProvider]
})
export class CatModule {}
