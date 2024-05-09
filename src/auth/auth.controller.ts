import { BadRequestException, Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

import { Public } from './decorators/public.decorator';
import { LoginResponseDTO } from './dtos/loginResponse.dto';
import { RegisterRequestDto } from './dtos/registerRequest.dto';
import { RegisterResponseDTO } from './dtos/registerResponse.dto';
import { LoginRequestDto } from './dtos/loginRequest.dto';

@Public()
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  async login(
    @Body() loginBody: LoginRequestDto,
  ): Promise<LoginResponseDTO | BadRequestException> {
    return this.authService.login(loginBody.email, loginBody.password);
  }

  @Post('register')
  async register(
    @Body() registerBody: RegisterRequestDto,
  ): Promise<RegisterResponseDTO | BadRequestException> {
    return await this.authService.register(registerBody);
  }
}
