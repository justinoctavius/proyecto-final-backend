import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from '../entities/category.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category)
    private categoryRepository: Repository<Category>,
  ) {}
  async findAll() {
    Logger.log('Start getting categories');
    const categories = await this.categoryRepository.find();
    Logger.log('End getting categories');
    return categories;
  }
}
