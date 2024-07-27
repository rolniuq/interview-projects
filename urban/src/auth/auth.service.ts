import { CreateUserDto, LoginUserDto, LoginUserResponseDto } from '@dtos';
import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compareSync } from 'bcrypt';
import { UserService } from 'src/modules/user/user.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly userService: UserService,
  ) {}

  async login(p: LoginUserDto): Promise<LoginUserResponseDto> {
    const user = await this.userService.findByUserNameOrEmail(p.username);
    if (!user) {
      throw new NotFoundException('user not found');
    }

    if (!compareSync(p.password, user.password)) {
      throw new UnauthorizedException('password mismatch');
    }

    const accessToken = await this.jwtService.signAsync({
      userId: user.id,
      username: user.username,
      email: user.email,
    });

    return {
      AccessToken: accessToken,
    };
  }

  async register(u: CreateUserDto): Promise<boolean> {
    let user = await this.userService.findByUserName(u.username);
    if (user) {
      throw new BadRequestException('user already exists');
    }

    user = await this.userService.findByEmail(u.email);
    if (user) {
      throw new BadRequestException('user already exists');
    }

    const userCreated = await this.userService.register(u);
    if (!userCreated) {
      throw new InternalServerErrorException('failed to create user');
    }

    return true;
  }
}
