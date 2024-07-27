import { MikroOrmModule } from '@mikro-orm/nestjs';
import { TaskModule } from '@modules';
import { Module, OnModuleInit } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import config from '../mikro-orm.config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { runMigrations } from './migration-runner';
import { UserModule } from './modules/user/user.module';

@Module({
  imports: [
    MikroOrmModule.forRoot(config),
    ConfigModule.forRoot({ isGlobal: true }),
    AuthModule,
    UserModule,
    TaskModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements OnModuleInit {
  constructor() {}

  async onModuleInit() {
    await runMigrations();
  }
}
