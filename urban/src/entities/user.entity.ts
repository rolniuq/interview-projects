import { Entity, PrimaryKey, Property } from '@mikro-orm/core';
import { IsEmail, IsNotEmpty } from 'class-validator';
import { v4 } from 'uuid';

@Entity()
export class UserEntity {
  @PrimaryKey()
  id: string = v4();

  @Property({ unique: true })
  @IsNotEmpty()
  username: string;

  @Property({ unique: true })
  @IsEmail()
  email: string;

  @Property()
  @IsNotEmpty()
  password: string;

  @Property({ default: true })
  isActive: boolean = true;
}
