import { Module } from '@nestjs/common';
import { SeedController } from './seed.controller';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [UsersModule],
  controllers: [SeedController],
})
export class SeedModule {}
