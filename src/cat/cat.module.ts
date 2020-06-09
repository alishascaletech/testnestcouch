import { Module } from '@nestjs/common';
import { CatService } from './cat.service';
import { CouchbaseModule } from '@scalio-oss/nest-couchbase';
import { Cat } from './cat.entity';
import { CatController } from './cat.controller';

@Module({
  imports: [CouchbaseModule.forFeature([Cat])],
  providers: [CatService],
  controllers: [CatController],
})
export class CatModule {}
