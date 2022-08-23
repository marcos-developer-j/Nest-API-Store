/* dtos : Data Tranfer Obajects*/
/* npm i class-validator class-transformer @nestjs/mapped-types */
/* import { ValidationPipe } from '@nestjs/common'; Para main.ts*/
/* app.useGlobalPipes(new ValidationPipe()); */
import {
  IsString,
  IsNumber,
  IsUrl,
  IsNotEmpty,
  IsPositive,
} from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;
  @IsString()
  @IsNotEmpty()
  readonly description: string;
  @IsNumber()
  @IsNotEmpty()
  @IsPositive()
  readonly price: number;
  @IsNumber()
  @IsNotEmpty()
  @IsPositive()
  readonly stock: number;
  @IsUrl()
  @IsNotEmpty()
  readonly image: string;
}
export class UpdateProductDto extends PartialType(CreateProductDto) {}
