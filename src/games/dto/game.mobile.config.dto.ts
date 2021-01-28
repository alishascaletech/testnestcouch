import {
  IsPositive,
  IsNumber,
  IsEnum,
  IsNotEmpty,
  IsString,
  MaxLength,
  IsBoolean,
  Min,
  IsOptional,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { MobileIntegrationTypes } from '../../config/constants';
import { Transform } from 'class-transformer';

export class GameMobileConfigDto {
  @ApiProperty({
    description: 'Game Integration type for mobile',
    enum: MobileIntegrationTypes,
  })
  @IsOptional()
  @IsEnum(MobileIntegrationTypes)
  @IsNotEmpty()
  integrationType: MobileIntegrationTypes;

  @ApiProperty({
    description: 'Minimum required app-version to play game',
    example: '19_0_0',
  })
  @IsString()
  @IsOptional()
  @MaxLength(15)
  @Transform(value => value.trim())
  minAppVersion: string;

  @ApiProperty({
    description: 'Minimum required app-version to play game',
    example: '22_0_0',
  })
  @IsString()
  @IsOptional()
  @MaxLength(15)
  @Transform(value => value.trim())
  maxAppVersion: string;

  @ApiProperty({
    description: 'Game web url',
  })
  @IsString()
  @IsNotEmpty()
  @Transform(value => value.trim())
  webUrl: string;

  @ApiProperty({ description: 'Initial unlocked level' })
  @IsOptional()
  @IsNumber()
  @Min(0)
  unlockLevel: number;

  @ApiProperty({ description: 'Minimum required device memory' })
  @IsOptional()
  @IsNumber()
  @IsPositive()
  minDeviceMemory: number;

  @ApiProperty({ description: 'Mobile Game logo - portrait image' })
  @IsString()
  @IsNotEmpty()
  @Transform(value => value.trim())
  mobileGameLogo: string;
}
