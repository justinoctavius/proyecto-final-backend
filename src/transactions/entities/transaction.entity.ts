import {
  Column,
  Entity,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { TransactionType } from '../constants/transaction.constants';
import { Category } from './category.entity';

@Entity()
export class Transaction {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  description: string;

  @Column()
  mount: number;

  @Column()
  date: Date;

  @Column({ enum: TransactionType })
  type: TransactionType;

  @OneToOne(() => Category)
  category: Category;
}
