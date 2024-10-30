import { ConsoleLogger, Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { ClientsModule } from '@nestjs/microservices';
import { grpcClientOptions } from 'src/grpc-client.options';
import { AUTH_PACKAGE } from './interfaces/auth-service.interface';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: AUTH_PACKAGE,
        ...grpcClientOptions,
      },
    ]),
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
