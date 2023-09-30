import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '../.env',
    }),
    MongooseModule.forRoot('mongodb://localhost/taskdb'),
    TasksModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
