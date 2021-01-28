import { ApiProperty } from '@nestjs/swagger';
import { MobileIntegrationTypes } from '../../config/constants';
import { GameObject } from '../interface/game.object.interface';

export class GameMobileConfigResponseDto {
  @ApiProperty()
  readonly integrationType: MobileIntegrationTypes;

  @ApiProperty()
  readonly minAppVersion: string;

  @ApiProperty()
  readonly maxAppVersion: string;

  @ApiProperty()
  readonly webUrl: string;

  @ApiProperty()
  readonly unlockLevel: number;

  @ApiProperty()
  readonly minDeviceMemory: number;

  @ApiProperty()
  readonly mobileGameLogo: string;

  constructor(mobile: GameObject['mobile']) {
    this.integrationType = mobile.integration_type;
    this.minAppVersion = mobile.min_app_version;
    this.maxAppVersion = mobile.max_app_version;
    this.webUrl = mobile.web_url;
    this.unlockLevel = mobile.unlock_level;
    this.minDeviceMemory = mobile.min_device_memory;
    this.mobileGameLogo = mobile.mobile_game_logo;
  }
}
