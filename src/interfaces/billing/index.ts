import { GetQueryInterface } from 'interfaces';

export interface BillingInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;
  amount?: number;

  _count?: {};
}

export interface BillingGetQueryInterface extends GetQueryInterface {
  id?: string;
}
