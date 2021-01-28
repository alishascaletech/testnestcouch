export enum GameStatuses {
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE',
  PENDING = 'PENDING',
}

export enum GameTypes {
  SLOT = 'SLOT',
  TABLEGAME = 'TABLEGAME',
}

export enum LayoutConfigurations {
  SETTINGS = 'SETTINGS',
  FOOTERS = 'FOOTERS',
  DAILYLOGINBONUS = 'DAILYLOGINBONUS',
  LEVELTITLES = 'LEVELTITLES',
  MAGICBONUS = 'MAGICBONUS',
}

export enum GameSubTypes {
  SLOTS = 'SLOTS',
  BLACKJACK = 'BLACKJACK',
  DICE = 'DICE',
  ROULETTE = 'ROULETTE',
  POKER = 'POKER',
}

export enum BonusGroups {
  NONE = 'NONE',
  DIAMOND = 'DIAMOND',
  EMERALD = 'EMERALD',
  RUBY = 'RUBY',
  SAPPHIRE = 'SAPPHIRE',
  JADE = 'JADE',
  OPAL = 'OPAL',
  AMBER = 'AMBER',
  QUARTZ = 'QUARTZ',
}

export enum IntegrationTypes {
  IFRAME = 'IFRAME',
}

export enum SupportedLanguages {
  DE = 'DE',
  GB = 'GB',
  ES = 'ES',
  FR = 'FR',
  IT = 'IT',
  PL = 'PL',
  CZ = 'CZ',
  RU = 'RU',
  TR = 'TR',
  NL = 'NL',
  HU = 'HU',
  RO = 'RO',
  DK = 'DK',
  SE = 'SE',
  PT = 'PT',
  BR = 'BR',
}

export enum IFrameRatios {
  '4:3',
  '5:4',
  '4:4',
  '3:3',
}

export enum MobileIntegrationTypes {
  AIR = 'AIR',
}

export enum PartnerTypes {
  INTERNAL = 'INTERNAL',
  GLOBAL = 'GLOBAL',
  LOCAL = 'LOCAL',
}

export enum DeviceTypes {
  WEB = 'WEB',
  ANDROID = 'ANDROID',
  IOS = 'IOS',
}

export enum GameThemes {
  FRUIT = 'FRUIT',
  THEME = 'THEME',
  POLISH = 'POLISH',
  HISTORY = 'HISTORY',
  CASINO = 'CASINO',
  CELEBRITY = 'CELEBRITY',
}

export enum S3BucketTypes {
  PARTNER = 'PARTNER',
  GAME = 'GAME',
  BANNER = 'BANNER',
}

export enum CurrencyUnits {
  EURO = 'EURO',
}

export enum DailyQuestSubTasks {
  CHIPS_WIN = 'CHIPS_WIN',
  X_SPINS = 'X_SPINS',
  BIG_WIN = 'BIG_WIN',
  CONSECUTIVE_WINS = 'CONSECUTIVE_WINS',
}

export enum ExtraRewardTypes {
  'FACEBOOK_CONNECT' = 'facebook_connect',
  'REFERRAL_USED' = 'referral_used',
}

export enum BannerTypes {
  OFFER = 'OFFER',
  GAME = 'GAME',
}

export enum UserFilters {
  FIRSTNAME = 'LOWER(profile.first_name)',
  USERNAME = 'LOWER(profile.user_name)',
  EMAIL = 'LOWER(email)',
  MEMBERSINCE = 'profile.created',
  LEVEL = 'level',
  WALLETCHIPS = 'chips',
}

export enum GameFilters {
  GAMENAME = 'game_name',
  PRODUCER = 'producer',
  TOTALBETLINES = 'bet_lines',
}

export enum VoucherFilters {
  CREATED = 'createdAt',
  ACTIVATED = 'activatesOn',
  EXPIRED = 'expiresOn',
  CHIPS = 'chips',
}

export enum PackageFilters {
  PACKAGENAME = 'packageName',
  EXPIRED = 'offerExpire',
  PLATFORM = 'deviceType',
  SPECIAL_OFFERS = 'isSpecialOffer',
}

export enum PartnerFilters {
  PARTNERNAME = 'name',
  EMAIL = 'email',
}

export enum sortType {
  ASC = 'ASC',
  DESC = 'DESC',
}

export enum BonusTypes {
  SPECIAL_BONUS = 'special',
  FESTIVAL_BONUS = 'festival',
  SEASON_BONUS = 'season',
}
