import { Controller, Get, Post, Body, Param, Delete, Patch, Query } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task, TaskStatus } from './tasks.model';
import { CreateTaskDto } from './dto/create-tasks.dto';
import { GetTasksFilterDto } from './dto/get-tasks-filters.dto';

@Controller('tasks')
export class TasksController {
    constructor(private tasksService: TasksService){}
    
    @Get()
    /* getTasks(@Query() filterDto: GetTasksFilterDto): Task[]{
        if(Object.keys(filterDto).length){
            return this.tasksService.getTasksWithFilters(filterDto);
        }
        return this.tasksService.getAllTasks();
    } */
    getAllTask(): Task[]{
        return this.tasksService.getAllTasks();
    }

    @Get('/:id')
    getTaskById(@Param('id') id: string): Task{
        return this.tasksService.getTaskById(id);
    } 

    @Post()
    createTask(@Body() createTaskDto: CreateTaskDto){
        return this.tasksService.createTask(createTaskDto);
    }

    @Delete('/:id')
    deleteTask(@Param('id') id:string){
        this.tasksService.deleteTask(id);
    }

    @Patch('/:id/status')
    updateTask(
        @Param('id') id:string,
        @Param('status')status: TaskStatus
        ): Task {
            return this.tasksService.updateTask(id, status);
        }
}
