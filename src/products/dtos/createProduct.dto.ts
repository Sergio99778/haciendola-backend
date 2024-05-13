import { IsInt, IsNumber, IsPositive, IsString, Length } from 'class-validator';

export class CreateProductDto {
  @IsNumber()
  @IsPositive()
  SKU: number;

  @IsString()
  @Length(3, 255)
  Handle: string;

  @IsString()
  @Length(3, 255)
  Title: string;

  @IsString()
  @Length(3, 3000)
  Description: string;

  @IsNumber()
  @IsPositive()
  Grams: number;

  @IsNumber()
  @IsPositive()
  @IsInt()
  Stock: number;

  @IsNumber()
  @IsPositive()
  Price: number;

  @IsNumber()
  @IsPositive()
  @IsInt()
  'Compare Price': number;

  @IsNumber()
  @IsPositive()
  @IsInt()
  Barcode: number;
}
