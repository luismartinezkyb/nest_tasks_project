import { IsBoolean, IsNotEmpty, IsOptional, IsString, MinLength } from 'class-validator';

export class CreateTaskDto {
    @IsNotEmpty()
    @IsString()
    @MinLength(3)
    title:string
    @IsString()
    @IsNotEmpty()
    description?:string
    @IsBoolean()
    @IsOptional()
    done?: boolean
}
