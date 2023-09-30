import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateTaskDto } from 'src/dto/create-task.dto';
import { UpdateTaskDto } from 'src/dto/update-task.dto';
import { Task } from 'src/schemas/task.schema';

@Injectable()
export class TasksService {
  constructor(@InjectModel(Task.name) private taskModel: Model<Task>) {}

  findAll() {
    return this.taskModel.find();
  }
  async create(createTask: CreateTaskDto) {
    const newTask = new this.taskModel(createTask);
    return newTask.save();
    // const createdTask = this.taskModel.create(createTask);
    // return createTask;
  }

  async getTask(id:string){
    return this.taskModel.findById(id);
  }
  async deleteTask(id: string) {
    return this.taskModel.findByIdAndDelete(id);
  }
  async updateTask(id: string, task: UpdateTaskDto) {
    return this.taskModel.findByIdAndUpdate(id, task, { new: true });
  }
}
