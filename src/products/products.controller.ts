import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dtos/createProduct.dto';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}
  // CRUD Products

  @Get()
  async findAll() {
    return await this.productsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return await this.productsService.findOne(id);
  }

  @Post()
  async create(@Body() product: CreateProductDto) {
    return await this.productsService.create(product);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() product: CreateProductDto) {
    return await this.productsService.update(id, product);
  }
}
