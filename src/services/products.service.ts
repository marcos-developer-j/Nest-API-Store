/* nest generate service products */
import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from './../entities/product.entity';
import { CreateProductDto, UpdateProductDto } from 'src/dtos/products.dtos';

@Injectable()
export class ProductsService {
  private counterId = 1;
  private products: Product[] = [
    {
      id: 1,
      name: 'Product 1',
      description: 'Texto',
      price: 123,
      stock: 1,
      image: '',
    },
  ];

  findAll() {
    return this.products;
  }
  findOne(id: number) {
    const product = this.products.find((item) => item.id === id);
    if (!product) {
      throw new NotFoundException('findOne.Product.service Product not found');
    }
    return product;
  }

  create(payload: CreateProductDto) {
    this.counterId = this.counterId + 1;
    const newProduct = {
      id: this.counterId,
      ...payload,
    };
    this.products.push(newProduct);
    return newProduct;
  }
  update(id: number, payload: UpdateProductDto) {
    const productFound = this.products.find((item) => item.id === id);
    if (productFound) {
      const index = this.products.findIndex((item) => item.id === id);
      this.products[index] = {
        ...productFound,
        ...payload,
      };
      return {
        message: 'Product Updated',
      };
    } else {
      return {
        message: 'Product Not Found',
      };
    }
  }
  delete(id: number) {
    const productFound = this.products.find((item) => item.id === id);
    if (!productFound) {
        throw new NotFoundException('delete.product.service Element not found') 
    }
    this.products.filter((item) => item.id !== id);
    return {
      erased: productFound,
      message: 'Completly Removed',
    };
    }
}
