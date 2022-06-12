import { TransactionType } from '../constants/transaction.constants';

export interface TransactionQueryParams {
  type?: TransactionType;
  mount?: number;
  date?: Date;
}
