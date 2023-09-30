import { IsBoolean, IsNotEmpty, IsOptional, IsString, MinLength } from 'class-validator';

export class UpdateTaskDto {
    @IsOptional()
    @IsString()
    @MinLength(3)
    title:string
    @IsString()
    @IsOptional()
    description?:string
    @IsBoolean()
    @IsOptional()
    done?: boolean
}
