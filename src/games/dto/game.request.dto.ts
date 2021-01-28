import {
  SupportedLanguages,
  IFrameRatios,
  GameThemes,
} from '../../config/constants';
import { GameSubTypes, BonusGroups } from '../../config/constants';
import {
  IsString,
  MaxLength,
  IsNotEmpty,
  IsBoolean,
  IsEnum,
  IsOptional,
  IsArray,
  IsNumber,
  Matches,
  ValidateNested,
  Min,
  Max,
} from 'class-validator';
import {
  GameStatuses,
  GameTypes,
  LayoutConfigurations,
} from '../../config/constants';
import { Transform, Type } from 'class-transformer';
import { GameMobileConfigDto } from './game.mobile.config.dto';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class GameRequestDto {
  @ApiProperty({ description: 'Producer name' })
  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  @Transform(value => value.trim())
  producer: string;

  @ApiProperty({ description: 'Game Iframe link' })
  @IsString()
  @IsNotEmpty()
  @Transform(value => value.trim())
  iFrameLink: string;

  @ApiProperty({ description: 'Is new game' })
  @IsBoolean()
  isNew: boolean;

  @ApiProperty({ description: 'Game name to be displayed' })
  @IsString()
  @IsNotEmpty()
  @Transform(value => value.trim())
  name: string;

  @ApiProperty({ description: 'Game picture Url' })
  @IsString()
  @IsNotEmpty()
  @Transform(value => value.trim())
  pictureUrl: string;

  @ApiProperty({ description: 'Game logo' })
  @IsString()
  @IsNotEmpty()
  @Transform(value => value.trim())
  gameLogo: string;

  @ApiProperty({ description: 'Total reels' })
  @IsNumber()
  @Min(0)
  @IsNotEmpty()
  totalReels: number;

  @ApiProperty({ description: 'Current game status', enum: GameStatuses })
  @IsEnum(GameStatuses)
  @IsNotEmpty()
  status: GameStatuses;

  @ApiProperty({ description: 'Game unique slug string' })
  @IsNotEmpty()
  @Matches(/^[^-_%$@!#^&*()+/(0-9)]([a-z]*[-]*)*[^-_%$@!#^&*()+/(0-9)]$/, {
    message: 'Game slug must contain only lowercase-letters & hyphen(-)',
  })
  @MaxLength(30)
  @Transform(value => value.trim())
  slug: string;

  @ApiProperty({ description: 'Game type', enum: GameTypes })
  @IsEnum(GameTypes)
  @IsOptional()
  type: GameTypes;

  @ApiPropertyOptional({
    description: 'Game layout configurations',
    enum: LayoutConfigurations,
  })
  @IsOptional()
  @IsArray()
  @IsEnum(LayoutConfigurations, { each: true })
  configurations: string[];

  @ApiPropertyOptional({ description: 'Game description' })
  @IsOptional()
  @IsString()
  @Transform(value => value.trim())
  description: string;

  @ApiPropertyOptional({ description: 'Sub-type of game', enum: GameSubTypes })
  @IsOptional()
  @IsEnum(GameSubTypes)
  @IsOptional()
  subType: GameSubTypes;

  @ApiPropertyOptional({ description: 'Theme of game', enum: GameThemes })
  @IsOptional()
  @IsEnum(GameThemes)
  @IsNotEmpty()
  theme: GameThemes;

  @ApiProperty({ description: 'Minimum bet amount' })
  @IsNumber()
  @Min(0)
  @IsNotEmpty()
  minBetAmount: number;

  @ApiProperty({
    description: 'Total bet lines',
  })
  @IsNumber()
  @IsNotEmpty()
  betLines: number;

  @ApiProperty({
    description: 'Minimum bet lines',
  })
  @IsNumber()
  @IsNotEmpty()
  @Min(0)
  minBetLines: number;

  @ApiProperty({
    description: 'Maximum bet lines',
  })
  @IsNumber()
  @IsNotEmpty()
  @Min(0)
  maxBetLines: number;

  @ApiProperty({ description: 'Game launch date' })
  @IsNotEmpty()
  @Matches(/\d\d-\d\d-\d\d\d\d/, {
    message: 'ReleaseDate must in MM-DD-YYYY format',
  })
  @Transform(value => value.trim())
  releaseDate: string;

  @ApiProperty({ description: 'Initial unlocked level' })
  @IsOptional()
  @IsNumber()
  @Min(0)
  unlockLevel: number;

  @ApiProperty({ description: 'Initial unlocked group', enum: BonusGroups })
  @IsOptional()
  @IsEnum(BonusGroups)
  unlockGroup: BonusGroups;

  @ApiPropertyOptional({
    description: 'Additionaly supported languages',
    enum: SupportedLanguages,
  })
  @IsOptional()
  @IsArray()
  @IsEnum(SupportedLanguages, { each: true })
  langParam: string[];

  @ApiProperty({ description: 'Game I-frame ratio in web', enum: IFrameRatios })
  @IsEnum(IFrameRatios)
  ratio: IFrameRatios;

  @ApiProperty({ description: 'Is game of fixed-size' })
  @IsOptional()
  @IsBoolean()
  @IsNotEmpty()
  isFixSize: boolean;

  @ApiProperty({ description: 'Is game supported in mobile' })
  @IsBoolean()
  @IsNotEmpty()
  isMobileSupport: boolean;

  @ApiProperty({ description: 'Game volatility value between 1 to 5' })
  @IsNumber()
  @Min(1)
  @Max(5)
  @IsNotEmpty()
  gameVolatility: number;

  @ApiProperty({ description: 'bonus tags' })
  @IsArray()
  @IsString({ each: true })
  @IsNotEmpty()
  bonuses: string[];

  @ApiPropertyOptional()
  @IsOptional()
  @ValidateNested()
  @Type(() => GameMobileConfigDto)
  mobile: GameMobileConfigDto;
}
