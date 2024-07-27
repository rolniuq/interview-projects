import {
  CreateTaskDto,
  GetTaskDto,
  UpdateTaskDto,
  UpdateTaskStatusDto,
} from '@dtos';
import { TaskEntity } from '@entities';
import { InjectRepository } from '@mikro-orm/nestjs';
import { EntityManager, EntityRepository } from '@mikro-orm/postgresql';
import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(TaskEntity)
    private readonly taskRepository: EntityRepository<TaskEntity>,
    private readonly em: EntityManager,
  ) {}

  async create(userId: string, t: CreateTaskDto): Promise<TaskEntity> {
    const task = this.taskRepository.create({ ...t, user: userId });
    await this.taskRepository.insert(task);

    return task;
  }

  async findByUserId(userId: string, f: GetTaskDto): Promise<TaskEntity[]> {
    const filter = {
      user: userId,
      ...(!f.status ? {} : { status: f.status }),
    };
    const options = {
      orderBy: { createdAt: -1 },
      limit: f.limit,
      offset: (f.page - 1) * f.limit,
    };

    return this.taskRepository.find(filter, options);
  }

  async update(id: string, p: UpdateTaskDto): Promise<TaskEntity> {
    const task = await this.taskRepository.findOne(id);
    if (!task) {
      throw new NotFoundException('Task not found');
    }

    this.taskRepository.assign(task, p);

    await this.em.flush();

    return task;
  }

  async updateStatus(id: string, p: UpdateTaskStatusDto): Promise<TaskEntity> {
    const task = await this.taskRepository.findOne(id);
    if (!task) {
      throw new NotFoundException('Task not found');
    }

    task.status = p.status;

    await this.em.flush();

    return task;
  }

  async remove(id: string): Promise<number> {
    const task = await this.taskRepository.findOne(id);
    if (!task) {
      throw new NotFoundException('Task not found');
    }

    return this.taskRepository.nativeDelete(task);
  }
}
