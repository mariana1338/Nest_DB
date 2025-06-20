import { IsEnum } from "class-validator";
import { TaskStatus } from "../status/status-task";


export class UpdateStatusTaskDto{
    @IsEnum(TaskStatus,{
        message:'Status must be a valid enum value: pending, in_progress, completed, or cancelled.'
    })
    status: TaskStatus;
}