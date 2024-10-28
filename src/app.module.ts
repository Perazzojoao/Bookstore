import { Module, ConsoleLogger } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { APP_INTERCEPTOR, APP_FILTER } from '@nestjs/core';
import { HttpExceptionFilter } from './resources/filters/http-exception.filter';
import { LoggerInterceptor } from './resources/interceptors/logger.interceptor';

@Module({
  imports: [DatabaseModule],
  controllers: [],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: LoggerInterceptor,
    },
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    },
    ConsoleLogger,
  ],
})
export class AppModule {}
