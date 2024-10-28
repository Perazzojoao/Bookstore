import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { CreateUserDto } from './dto/create-user.dto';
import {
  User,
  UserValidated,
  VerificationCodeRequest,
  UserResponse,
  ResendVerificationCodeRequest,
  ResendVerificationCodeResponse,
  SendResetPasswordRequest,
  SendResetPasswordResponse,
  ResetPasswordRequest,
  ResetPasswordResponse,
} from './interfaces/auth-service.interface';
import { LogInDto } from './dto/login-user.dto';

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post('register')
  @HttpCode(200)
  register(@Body() user: CreateUserDto): Observable<User> {
    return this.authService.CreateUser(user);
  }

  @Post('login')
  @HttpCode(200)
  login(@Body() loginDto: LogInDto): Observable<UserValidated> {
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
