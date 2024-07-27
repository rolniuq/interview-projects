import { InjectRepository } from '@mikro-orm/nestjs';
import { Injectable } from '@nestjs/common';
import { UserEntity } from '@entities';
import { EntityRepository } from '@mikro-orm/postgresql';
import { CreateUserDto } from '@dtos';
import { hashSync } from 'bcrypt';
import { defaultSalt } from '@constants';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: EntityRepository<UserEntity>,
  ) {}

  async register(u: CreateUserDto): Promise<UserEntity> {
    const user = this.userRepository.create(u);
    user.password = hashSync(u.password, process.env.SALT || defaultSalt);

    await this.userRepository.insert(user);

    return user;
  }

  async findByUserNameOrEmail(username: string): Promise<UserEntity> {
    return this.userRepository.findOne({
      $or: [{ username }, { email: username }],
    });
  }

  async findByUserName(username: string): Promise<UserEntity> {
    return this.userRepository.findOne({ username });
  }

  async findByEmail(email: string): Promise<UserEntity> {
    return this.userRepository.findOne({ email });
  }

  async findById(id: string): Promise<UserEntity> {
    return this.userRepository.findOne(id);
  }
}
