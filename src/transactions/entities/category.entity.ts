import { IconType } from '../constants/category.constants';

export interface Category {
  id: string;
  name: string;
  description: string;
  iconType: IconType;
  color: string;
}
