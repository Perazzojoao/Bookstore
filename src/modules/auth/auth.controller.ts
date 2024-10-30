import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
import {
  UserValidated,
  VerificationCodeRequest,
  UserResponse,
  ResendVerificationCodeRequest,
  ResendVerificationCodeResponse,
  SendResetPasswordRequest,
  SendResetPasswordResponse,
  ResetPasswordRequest,
  ResetPasswordResponse,
  UserRequest,
} from './interfaces/auth-service.interface';
import { DefaultHttpResponse } from 'src/lib/default-http-response';

@Controller('auth')
export class AuthController extends DefaultHttpResponse {
  constructor(private readonly authService: AuthService) {
    super();
  }

  @Post('register')
  async register(@Body() user: UserRequest) {
    const obs = this.authService.CreateUser(user);
    return this.observableHandler(obs, 'User created successfully', HttpStatus.CREATED);
  }

  @Post('login')
  @HttpCode(200)
  login(@Body() loginDto: UserRequest): Observable<UserValidated> {
    return this.authService.ValidateUser(loginDto);
  }

  @Post('activate')
  @HttpCode(200)
  activateUser(
    @Body() user: VerificationCodeRequest,
  ): Observable<UserResponse> {
    return this.authService.ActivateUser(user);
  }

  @Post('resend-code')
  @HttpCode(200)
  resendCode(
    @Body() user: ResendVerificationCodeRequest,
  ): Observable<ResendVerificationCodeResponse> {
    return this.authService.ResendVerificationCode(user);
  }

  @Post('send-reset-password')
  @HttpCode(200)
  sendResetPassword(
    @Body() user: SendResetPasswordRequest,
  ): Observable<SendResetPasswordResponse> {
    return this.authService.SendResetPassword(user);
  }

  @Post('reset-password')
  @HttpCode(200)
  resetPassword(
    @Body() user: ResetPasswordRequest,
  ): Observable<ResetPasswordResponse> {
    return this.authService.ResetPassword(user);
  }
}
