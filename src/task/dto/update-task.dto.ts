import { IsOptional, IsString, Length } from "class-validator";

export class UpdateTaskDto{
    @IsOptional()
    @IsString()
    @Length(3, 20)
    title?: string;
    @IsOptional()
    @IsString()
    description?: string;
}