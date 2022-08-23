/* nest generate controller products */
import {
  Controller,
  Get,
  Param,
  Query,
  Post,
  Body,
  Put,
  Delete,
  HttpCode,
  HttpStatus,
/*   ParseIntPipe */
} from '@nestjs/common';
import { ProductsService } from 'src/services/products.service';
import { ParseIntPipe } from 'src/common/parse-int.pipe';
import { CreateProductDto, UpdateProductDto } from 'src/dtos/products.dtos';
@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Get()
  getProducts(
    @Query('limit') limit: number,
    @Query('offset') offset: number,
    @Query('brand') brand: string,
  ) {
    /*     return {
      message: `products : limit=>${limit}, offset=>${offset}, brand ${brand}`,
    }; */
    return { message: this.productsService.findAll() };
  }
  @Get('filter')
  getProductFilter() {
    return {
      message: `Yo soy un filter`,
    };
  }
  @Get(':id')
  @HttpCode(HttpStatus.ACCEPTED)
  getProduct(@Param('id',ParseIntPipe) id: string) {
/*     return {
      message: `product ${params.id}`,
    }; */
    return{message: this.productsService.findOne(+id)}
  }
  @Post()
  create(@Body() payload: CreateProductDto) {
/*     return {
      message: 'accion de creare',
      payload,
    }; */
    return this.productsService.create(payload)
  }
  @Put(':id')
  update(@Param('id',ParseIntPipe) id: number, @Body() payload: UpdateProductDto) {
/*     return {
      id,
      payload,
    }; */
    return {
        message: this.productsService.update(+id,payload)
    }
  }
  @Delete(':id')
  delete(@Param('id',ParseIntPipe) id: number) {
    return {
      message: this.productsService.delete(+id),
    };
  }
}
