import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  NotFoundException,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from 'src/dto/create-task.dto';
import { UpdateTaskDto } from 'src/dto/update-task.dto';
import { handleHttpError } from 'src/utils/handleError';

@Controller('tasks')
export class TasksController {
  constructor(private taskService: TasksService) {}

  @Get()
  findAll() {
    return this.taskService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    // try {
    const task = await this.taskService.getTask(id);
    if (!task) {
      throw new NotFoundException('Task not found');
    }
    return task;
    // } catch (error) {
    //   console.log(error);
    //   handleHttpError('Error finding task');
    // }
  }
  @Post()
  async createTask(@Body() task: CreateTaskDto) {
    try {
      return await this.taskService.create(task);
    } catch (error) {
      console.log(error);
      handleHttpError('Error creando la task');
    }
  }

  @Put(':id')
  async updateTask(@Param('id') id: string, @Body() task: UpdateTaskDto) {
    const data = await this.taskService.updateTask(id, task);
    if (!data) {
      throw new NotFoundException(`Task ${id} not found`);
    }
    return data;
  }

  @Delete(':id')
  @HttpCode(204)
  async deleteTask(@Param('id') id: string) {
    // try {
    const task = await this.taskService.getTask(id);
    if (!task) {
      throw new NotFoundException('Task not found');
    }
    return await this.taskService.deleteTask(id);
    // } catch (error) {
    //   console.log(error);
    //   return handleHttpError('Error deleting task');
    // }
  }
}
