import { Test } from '@nestjs/testing';
import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';
import { TaskStatus } from './tasks.model';

describe('TasksController', () => {
  let tasksController: TasksController;
  let tasksService: TasksService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [TasksController],
      providers: [TasksService],
    }).compile();

    tasksService = moduleRef.get<TasksService>(TasksService);
    tasksController = moduleRef.get<TasksController>(TasksController);
  });

  describe('getAllTask', () => {
    it('should return an array of tasks', async () => {
      const result = [
        {
          id: 'string',
          title: 'string',
          description: 'string',
          status: TaskStatus.OPEN,
        },
      ];
      jest.spyOn(tasksService, 'getAllTasks').mockImplementation(() => result);

      expect(tasksController.getAllTask()).toBe(result);
    });
  });
});
