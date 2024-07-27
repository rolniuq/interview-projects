import {
  CreateTaskDto,
  GetTaskDto,
  UpdateTaskDto,
  UpdateTaskStatusDto,
} from '@dtos';
import { TaskEntity } from '@entities';
import { AuthGuard } from '@guards';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiBody,
  ApiOperation,
  ApiParam,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { TaskService } from './task.service';

@ApiTags('Task')
@ApiBearerAuth()
@Controller('task')
@UseGuards(AuthGuard)
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @ApiOperation({ summary: 'Create new task' })
  @ApiBody({ type: CreateTaskDto })
  @ApiResponse({ status: 201, type: TaskEntity })
  @Post()
  async create(@Request() req, @Body() p: CreateTaskDto) {
    return this.taskService.create(req.user.userId, p);
  }

  @ApiOperation({ summary: 'Get all tasks for user' })
  @ApiResponse({ status: 200, type: [TaskEntity] })
  @ApiParam({ name: '', type: GetTaskDto })
  @Get()
  async findByUserId(@Request() req) {
    return this.taskService.findByUserId(req.user.userId, req);
  }

  @ApiOperation({ summary: 'Update task status' })
  @ApiResponse({ status: 200, type: TaskEntity })
  @ApiParam({ name: 'id', type: String })
  @ApiBody({ type: UpdateTaskStatusDto })
  @Patch('status/:id')
  async updateStatus(@Param('id') id: string, @Body() p: UpdateTaskStatusDto) {
    return this.taskService.updateStatus(id, p);
  }

  @ApiOperation({ summary: 'Update task' })
  @ApiResponse({ status: 200, type: TaskEntity })
  @ApiParam({ name: 'id', type: String })
  @ApiBody({ type: UpdateTaskDto })
  @Patch(':id')
  async update(@Param('id') id: string, @Body() p: UpdateTaskDto) {
    return this.taskService.update(id, p);
  }

  @ApiOperation({ summary: 'Delete task' })
  @ApiResponse({ status: 200, type: Number })
  @ApiParam({ name: 'id', type: String })
  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.taskService.remove(id);
  }
}
