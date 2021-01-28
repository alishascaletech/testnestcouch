import { Module } from '@nestjs/common';
import { databaseProviders } from './database.provider';
import { ConfigProvider } from './config.provider';

@Module({
    providers: [...databaseProviders, ...ConfigProvider],
    exports: [...databaseProviders, ...ConfigProvider]
})
export class DatabaseModule {}
