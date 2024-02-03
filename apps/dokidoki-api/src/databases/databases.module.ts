import { Module } from '@nestjs/common';
import { MongoModule } from './mongo/mongo.module';
import { RedisModule } from './redis/redis.module';

@Module({
  imports: [MongoModule, RedisModule]
})
export class DatabasesModule {}
