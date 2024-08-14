import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { DatabaseModule } from './database/database.module';
import { EmployesModule } from './employes/employes.module';
import { ThrottlerModule,ThrottlerGuard } from '@nestjs/throttler';
import { APP_GUARD } from '@nestjs/core';

@Module({
  imports: [UsersModule,
     DatabaseModule,
      EmployesModule,
      ThrottlerModule.forRoot([{
        ttl:6000,
        limit:3,

  }])
  ],
  controllers: [AppController],
  providers: [AppService,{
    provide:APP_GUARD,
    useClass:ThrottlerGuard
  }],
})
export class AppModule {}
