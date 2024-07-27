import { CreateUserDto, LoginUserDto, LoginUserResponseDto } from '@dtos';
import { Body, Controller, Post } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @ApiOperation({ summary: 'login' })
  @ApiBody({ type: LoginUserDto })
  @ApiResponse({ type: LoginUserResponseDto })
  @Post('login')
  login(@Body() p: LoginUserDto): Promise<LoginUserResponseDto> {
    return this.authService.login(p);
  }

  @ApiOperation({ summary: 'register' })
  @ApiBody({ type: CreateUserDto })
  @ApiResponse({ type: Boolean })
  @Post('register')
  register(@Body() u: CreateUserDto): Promise<boolean> {
    return this.authService.register(u);
  }
}
