import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import { DbModule } from './db';
import { AuthController, AuthModule } from './auth';
import configuration from './config/configuration';
@Module({
  imports: [
    DbModule,
    ConfigModule.forRoot({
      load: [configuration],
    }),
    UserModule,
    ConfigModule,
    AuthModule,
  ],
  controllers: [AuthController],
  providers: [],
})
export class AppModule {}
