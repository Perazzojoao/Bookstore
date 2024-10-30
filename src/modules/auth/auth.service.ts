import { BadRequestException, Inject, Injectable } from '@nestjs/common';
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
    return this.authservice.CreateUser(data);
  }
  ValidateUser(data: UserRequest): Observable<UserValidated> {
    return this.authservice.ValidateUser(data);
  }
  JwtParse(data: Jwt): Observable<User> {
    return this.authservice.JwtParse(data);
  }
  ActivateUser(data: VerificationCodeRequest): Observable<UserResponse> {
    return this.authservice.ActivateUser(data);
  }
  ResendVerificationCode(
    data: ResendVerificationCodeRequest,
  ): Observable<ResendVerificationCodeResponse> {
    return this.authservice.ResendVerificationCode(data);
  }
  SendResetPassword(
    data: SendResetPasswordRequest,
  ): Observable<SendResetPasswordResponse> {
    return this.authservice.SendResetPassword(data);
  }
  ResetPassword(data: ResetPasswordRequest): Observable<ResetPasswordResponse> {
    return this.authservice.ResetPassword(data);
  }
}
