import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product) private productRepository: Repository<Product>,
  ) {}

  findAll(): Promise<Product[]> {
    return this.productRepository.find();
  }

  // findOne(id: number): Promise<Product | null> {
  //   return this.productRepository.findOne({ SKU: id });
  // }

  async remove(id: number): Promise<void> {
    await this.productRepository.delete(id);
  }

  async create(product: Product): Promise<Product> {
    return this.productRepository.save(product);
  }

  // async update(id: number, product: Product): Promise<Product> {
  //   await this.productRepository.update(id, product);
  //   return this.productRepository.findOne(id);
  // }

  async findBySKU(SKU: number): Promise<Product> {
    return this.productRepository
      .createQueryBuilder('product')
      .where('product.SKU = :SKU', { SKU })
      .getOne();
  }
}
