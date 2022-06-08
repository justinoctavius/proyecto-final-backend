import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { IconType } from '../constants/category.constants';

@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column({ enum: IconType })
  iconType: IconType;

  @Column()
  color: string;
}
