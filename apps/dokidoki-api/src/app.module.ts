import { MiddlewareConsumer, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabasesModule } from './databases/databases.module';
import { ConfigsModule } from './configs/configs.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { InjectRedis } from '@nestjs-modules/ioredis';
import { Redis } from 'ioredis';
import { SeedModule } from './seed/seed.module';
import * as session from 'express-session';
import RedisStore from 'connect-redis';
import * as passport from 'passport';

@Module({
  imports: [DatabasesModule, ConfigsModule, UsersModule, AuthModule, SeedModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(@InjectRedis() private readonly redis: Redis) {}

  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(
        session({
          store: new RedisStore({ client: this.redis }),
          saveUninitialized: false,
          secret: process.env.SESSION_SECRET,
          resave: false,
          cookie: {
            sameSite: true,
            httpOnly: false,
            maxAge: 50000,
          },
        }),
        passport.initialize(),
        passport.session(),
      )
      .forRoutes('*');
  }
}
