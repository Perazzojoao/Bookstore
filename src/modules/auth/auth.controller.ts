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
    return this.observableHandler(
      obs,
      'User created successfully',
      HttpStatus.CREATED,
    );
  }

  @Post('login')
  login(@Body() loginDto: UserRequest) {
    const obs = this.authService.ValidateUser(loginDto);
    return this.observableHandler(
      obs,
      'User logged in successfully',
    );
  }

  @Post('activate')
  activateUser(@Body() user: VerificationCodeRequest) {
    const obs = this.authService.ActivateUser(user);
    return this.observableHandler(
      obs,
      'User activated successfully',
    );
  }

  @Post('resend-code')
  resendCode(@Body() user: ResendVerificationCodeRequest) {
    const obs = this.authService.ResendVerificationCode(user);
    return this.observableHandler(
      obs,
      'Code resent successfully',
    );
  }

  @Post('send-reset-password')
  sendResetPassword(@Body() user: SendResetPasswordRequest) {
    const obs = this.authService.SendResetPassword(user);
    return this.observableHandler(
      obs,
      'Reset password code sent successfully',
    );
  }

  @Post('reset-password')
  resetPassword(@Body() user: ResetPasswordRequest) {
    const obs = this.authService.ResetPassword(user);
    return this.observableHandler(
      obs,
      'Password reseted successfully',
    );
  }
}
