import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  GameStatuses,
  GameTypes,
  BonusGroups,
  IFrameRatios,
} from '../../config/constants';
import { GameMobileConfigResponseDto } from './game.mobile.config.response.dto';
import { GameObject } from '../interface/game.object.interface';

export class GameResponseDto {
  @ApiProperty()
  readonly id: string;

  @ApiProperty()
  readonly producer: string;

  @ApiProperty()
  readonly iFrameLink: string;

  @ApiProperty()
  readonly isNew: boolean;

  @ApiProperty()
  readonly name: string;

  @ApiProperty()
  readonly pictureUrl: string;

  @ApiProperty()
  readonly gameLogo: string;

  @ApiProperty()
  readonly totalReels: number;

  @ApiProperty()
  readonly status: GameStatuses;

  @ApiProperty()
  readonly gameActivatedAt: string | null;

  @ApiProperty()
  readonly slug: string;

  @ApiProperty()
  readonly type: GameTypes;

  @ApiProperty()
  readonly configurations: string[];

  @ApiProperty()
  readonly description: string;

  @ApiProperty()
  readonly subType: string;

  @ApiProperty()
  readonly theme: string;

  @ApiProperty()
  readonly minBetAmount: number;

  @ApiProperty()
  readonly betLines: number;

  @ApiProperty()
  readonly minBetLines: number;

  @ApiProperty()
  readonly maxBetLines: number;

  @ApiProperty()
  readonly releaseDate: string;

  @ApiProperty()
  readonly unlockLevel: number;

  @ApiProperty()
  readonly unlockGroup: BonusGroups;

  @ApiProperty()
  readonly langParam: string[];

  @ApiProperty()
  readonly ratio: IFrameRatios;

  @ApiProperty()
  readonly isFixSize: boolean;

  @ApiProperty()
  readonly isMobileSupport: boolean;

  @ApiPropertyOptional()
  readonly mobile?: GameMobileConfigResponseDto;

  @ApiProperty()
  readonly gameVolatility: string;

  @ApiProperty()
  readonly bonuses: string[];

  @ApiProperty()
  readonly isPopular: boolean;

  @ApiProperty()
  readonly createdDate: string;

  @ApiProperty()
  readonly updatedDate: string;

  @ApiProperty()
  readonly isGuestGame: boolean;

  constructor(game: GameObject, isGuestGame?: boolean) {
    this.id = game.id;
    this.producer = game.producer;
    this.iFrameLink = game.game_iframe_link;
    this.isNew = game.is_new_game;
    this.name = game.game_name;
    this.pictureUrl = game.game_picture_url;
    this.gameLogo = game.game_logo;
    this.totalReels = game.total_reels;
    this.status = game.game_status;
    this.gameActivatedAt = game.game_activated_at
      ? new Date(game.game_activated_at).toISOString()
      : null;
    this.slug = game.game_slug;
    this.type = game.game_type;
    this.configurations = game.configurations;
    this.description = game.game_description;
    this.subType = game.sub_type ? game.sub_type : undefined;
    this.theme = game.game_theme;
    this.minBetAmount = game.min_bet_amount;
    this.betLines = game.bet_lines;
    this.minBetLines = game.min_bet_lines;
    this.maxBetLines = game.max_bet_lines;
    this.releaseDate = game.release_date;
    this.unlockLevel = game.unlock_level;
    this.unlockGroup = game.unlock_group;
    this.langParam = game.lang_param;
    this.ratio = game.ratio;
    this.isFixSize = game.is_fix_size;
    this.isMobileSupport = game.is_mobile_support;
    this.createdDate = new Date(game.created).toISOString();
    this.updatedDate = game.updated ? new Date(game.updated).toISOString() : '';
    this.gameVolatility = `${game.game_volatility}/5`;
    this.bonuses = game.bonuses;
    this.mobile = game.is_mobile_support
      ? new GameMobileConfigResponseDto(game.mobile)
      : null;
    this.isPopular = game.isPopular || false;
    this.isGuestGame = isGuestGame || false;
  }
}
