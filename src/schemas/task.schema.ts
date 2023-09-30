import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

//We need the schema to create with the class typè

@Schema({
  timestamps: true,
})
export class Task {
  //In this part we really need to use Prop because it's how we actually use the ORM
  @Prop({
    unique: true,
    required: true,
    trim: true,
  })
  title: string;
  @Prop({
    required: true,
    trim: true,
  })
  description: string;
  @Prop({
    default: false,
  })
  done: boolean;
}

export const TaskSchema = SchemaFactory.createForClass(Task);
