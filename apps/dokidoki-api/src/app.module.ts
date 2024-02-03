import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabasesModule } from './databases/databases.module';
import { ConfigsModule } from './configs/configs.module';

@Module({
  imports: [DatabasesModule, ConfigsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
