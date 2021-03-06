import { Controller, Get } from '@nestjs/common';
import { CategoryService } from '../../services/category.service';

@Controller('categories')
export class CategoryController {
  constructor(private categoryService: CategoryService) {}

  @Get()
  async getCategories() {
    return await this.categoryService.findAll();
  }
}
