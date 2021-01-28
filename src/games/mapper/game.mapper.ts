import { GameRequestDto } from '../dto/game.request.dto';
import { GameObject } from '../interface/game.object.interface';
import { BonusGroups, MobileIntegrationTypes } from '../../config/constants';

export class GameMapper {
  /**
   * It maps input data into format that can be stored in database
   * @param payload Data that is to be formatted
   */
  mapGameData = (payload: GameRequestDto): GameObject => {
    const gameData = {
      id: '',
      producer: payload.producer,
      game_iframe_link: payload.iFrameLink,
      is_new_game: payload.isNew,
      game_name: payload.name,
      game_picture_url: payload.pictureUrl,
      game_logo: payload.gameLogo,
      total_reels: payload.totalReels,
      game_status: payload.status,
      game_activated_at: payload.status === 'ACTIVE' ? Date.now() : null,
      game_type: payload.type,
      game_slug: payload.slug,
      configurations: payload.configurations || [],
      game_description: payload.description || '',
      sub_type: payload.subType,
      game_theme: payload.theme || '',
      min_bet_amount: payload.minBetAmount || 0,
      bet_lines: payload.betLines || 0,
      min_bet_lines: payload.minBetLines || 0,
      max_bet_lines: payload.maxBetLines || 0,
      release_date: payload.releaseDate,
      unlock_level: payload.unlockLevel || 1,
      unlock_group: payload.unlockGroup || BonusGroups['NONE'],
      lang_param: payload.langParam || [],
      ratio: payload.ratio,
      is_fix_size: payload.isFixSize || true,
      is_mobile_support: payload.isMobileSupport || false,
      created: null,
      updated: null,
      game_volatility: payload.gameVolatility,
      bonuses: payload.bonuses || [],
    };
    if (payload.isMobileSupport) {
      gameData['mobile'] = {
        integration_type:
          payload.mobile.integrationType || MobileIntegrationTypes.AIR,
        min_app_version: payload.mobile.maxAppVersion,
        max_app_version: payload.mobile.maxAppVersion,
        web_url: payload.mobile.webUrl,
        unlock_level: payload.mobile.unlockLevel || 1,
        min_device_memory: payload.mobile.minDeviceMemory,
        mobile_game_logo: payload.mobile.mobileGameLogo,
      };
    }
    return gameData;
  };

  /**
   * maps game mapping list data
   * @param payload
   */
  mapGameMappingList = (payload: GameObject): Object => {
    return {
      gameId: payload.id,
      gameName: payload.game_name,
      producer: payload.producer,
    };
  };
}
