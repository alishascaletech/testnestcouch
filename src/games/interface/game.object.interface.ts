import {
  GameStatuses,
  GameTypes,
  BonusGroups,
  IFrameRatios,
  MobileIntegrationTypes,
} from '../../config/constants';

export interface GameObject {
  id: string;
  producer: string;
  game_iframe_link: string;
  is_new_game: boolean;
  game_name: string;
  game_picture_url: string;
  game_logo: string;
  total_reels: number;
  game_status: GameStatuses;
  game_activated_at: number;
  game_type: GameTypes;
  game_slug: string;
  configurations: string[];
  game_description: string;
  sub_type: string;
  game_theme: string;
  min_bet_amount: number;
  bet_lines: number;
  min_bet_lines: number;
  max_bet_lines: number;
  release_date: string;
  unlock_level: number;
  unlock_group: BonusGroups;
  lang_param: string[];
  ratio: IFrameRatios;
  is_fix_size: boolean;
  is_mobile_support: boolean;
  created: number;
  updated: number;
  game_volatility: number;
  bonuses: string[];
  mobile?: {
    integration_type: MobileIntegrationTypes;
    min_app_version: string;
    max_app_version: string;
    web_url: string;
    unlock_level: number;
    min_device_memory: number;
    mobile_game_logo: string;
  };

  // for list response only
  isPopular?: boolean;
}
