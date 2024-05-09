import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  SKU: number;

  @Column()
  Handle: string;

  @Column()
  Title: string;

  @Column()
  Description: string;

  @Column()
  Grams: number;

  @Column()
  Stock: number;

  @Column()
  Price: number;

  @Column()
  'Compare Price': number;

  @Column()
  Barcode: number;
}
