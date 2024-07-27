import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { defaultLimit, defaultPage } from 'src/constants/task.constant';
import { TaskStatus } from 'src/entities/task.entity';

export class CreateTaskDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiProperty()
  @IsNotEmpty()
  deadline: Date;

  @ApiProperty()
  @IsString()
  description?: string;
}

export class UpdateTaskDto extends PartialType(CreateTaskDto) {}

export class GetTaskDto {
  @ApiProperty()
  page?: number = defaultPage;

  @ApiProperty()
  limit?: number = defaultLimit;

  @ApiProperty()
  order?: -1 | 1 = -1;

  @ApiProperty()
  status?: TaskStatus;
}

export class UpdateTaskStatusDto {
  @ApiProperty({ enum: TaskStatus })
  @IsEnum(TaskStatus)
  @IsNotEmpty()
  status: TaskStatus;
}
