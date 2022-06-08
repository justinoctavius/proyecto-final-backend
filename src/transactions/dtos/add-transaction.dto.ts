import { TransactionType } from '../constants/transaction.constants';

export interface AddTransactionDto {
  mount: number;
  description: string;
  type: TransactionType;
  category_id: string;
  date: Date;
}
