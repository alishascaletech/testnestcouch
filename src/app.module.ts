import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { CouchbaseModule } from '@scalio-oss/nest-couchbase';
import { url } from 'inspector';
import { CatModule } from './cat/cat.module';

@Module({
  imports: [TasksModule, 
    CouchbaseModule.forRoot({
      url:'couchbase://18.185.74.124',
      username: 'admin',
      password: 'admin123',
      defaultBucket: {
        name: 'default',
        password: '',
      },
      buckets: [
        {
          name: 'default',
          password: '',
        },
      ],
  }), CatModule
  ],
})
export class AppModule {}
