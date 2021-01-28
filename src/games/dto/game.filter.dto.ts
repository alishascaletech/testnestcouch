import { ApiPropertyOptional } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsEnum, IsOptional, IsString } from 'class-validator';
import { GameFilters, sortType } from '../../config/constants';
import { PageFilterDto } from '../../../dto/page.filter.dto';

export class GameFilterDto extends PageFilterDto {
  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  @Transform(value => value.trim())
  search: string;

  @ApiPropertyOptional({ enum: Object.keys(GameFilters) })
  @IsOptional()
  @IsEnum(Object.keys(GameFilters))
  sort: string;

  @ApiPropertyOptional({ enum: sortType })
  @IsOptional()
  @IsEnum(sortType)
  sortType: sortType;
}
