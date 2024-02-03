import { Module } from '@nestjs/common';
import { RedisModule as IORedisModule } from '@nestjs-modules/ioredis';

@Module({
  imports: [
    IORedisModule.forRoot({
      type: 'single',
      url: process.env.REDIS_HOST,
    }),
  ],
})
export class RedisModule {}
