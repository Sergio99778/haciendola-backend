import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

// Extra modules

import { PassportModule } from '@nestjs/passport';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    ProductsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
