import { Inject, Injectable } from '@nestjs/common';
import {
  AUTH_PACKAGE,
  GrpcAuthService,
  Jwt,
  ResendVerificationCodeRequest,
  ResendVerificationCodeResponse,
  ResetPasswordRequest,
  ResetPasswordResponse,
  SendResetPasswordRequest,
  SendResetPasswordResponse,
  User,
  AUTH_SERVICE_NAME,
  UserRequest,
  UserResponse,
  UserValidated,
  VerificationCodeRequest,
} from './interfaces/auth-service.interface';
import { Observable } from 'rxjs';
import { ClientGrpc } from '@nestjs/microservices';

@Injectable()
export class AuthService implements GrpcAuthService {
  private authservice: GrpcAuthService;

  constructor(@Inject(AUTH_PACKAGE) private client: ClientGrpc) {}

  onModuleInit() {
    this.authservice =
      this.client.getService<GrpcAuthService>(AUTH_SERVICE_NAME);
  }

  CreateUser(data: UserRequest): Observable<User> {
    throw new Error('Method not implemented.');
  }
  ValidateUser(data: UserRequest): Observable<UserValidated> {
    throw new Error('Method not implemented.');
  }
  JwtParse(data: Jwt): Observable<User> {
    throw new Error('Method not implemented.');
  }
  ActivateUser(data: VerificationCodeRequest): Observable<UserResponse> {
    throw new Error('Method not implemented.');
  }
  ResendVerificationCode(
    data: ResendVerificationCodeRequest,
  ): Observable<ResendVerificationCodeResponse> {
    throw new Error('Method not implemented.');
  }
  SendResetPassword(
    data: SendResetPasswordRequest,
  ): Observable<SendResetPasswordResponse> {
    throw new Error('Method not implemented.');
  }
  ResetPassword(data: ResetPasswordRequest): Observable<ResetPasswordResponse> {
    throw new Error('Method not implemented.');
  }
}
