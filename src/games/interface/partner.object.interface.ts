import { PartnerTypes } from '../../config/constants';

export interface PartnerObject {
  email: string;
  type: PartnerTypes;
  name: string;
  address: string;
  city: string;
  zip_code: string;
  country: string;
  phone: string;
  active: boolean;
  secret_key: string;
  partner_logo: string;
  game_count: number;
  created_at: number;
  updated_at: number;
}
