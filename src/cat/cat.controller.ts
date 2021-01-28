import { Controller, Get, Param, Query, Post } from '@nestjs/common';
import { CatService } from './cat.service';
import { Cat } from './cat.entity';

@Controller('cat')
export class CatController {
  constructor(private catService: CatService) {}

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Cat> {
    return this.catService.findOne(id);
  }
}
