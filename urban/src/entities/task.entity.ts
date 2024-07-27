import { Entity, ManyToOne, PrimaryKey, Property } from '@mikro-orm/core';
import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsEnum, IsString } from 'class-validator';
import { v4 } from 'uuid';
import { UserEntity } from './user.entity';

export enum TaskStatus {
  TaskStatus_UnComplete = 'UnComplete',
  TaskStatus_Complete = 'Complete',
}

@Entity()
export class TaskEntity {
  @ApiProperty()
  @IsString()
  @PrimaryKey()
  id: string = v4();

  @ApiProperty()
  @IsString()
  @Property()
  title: string;

  @ApiProperty()
  @IsString()
  @Property()
  description: string;

  @ApiProperty()
  @IsEnum(TaskStatus)
  @Property({ default: TaskStatus.TaskStatus_UnComplete })
  status: TaskStatus;

  @ApiProperty()
  @IsDate()
  @Property()
  createdAt: Date = new Date();

  @ApiProperty()
  @IsDate()
  @Property()
  deadline: Date;

  @ApiProperty()
  @ManyToOne()
  user: UserEntity;
}
