import { Module } from '@nestjs/common';
import { ProdutoController } from './produto.controller';
import { DbModule } from 'src/db/db.module';
import { ProdutosPrisma } from './produtos.prisma';

@Module({
  imports: [DbModule],
  controllers: [ProdutoController],
  providers: [ProdutosPrisma],
})
export class ProdutoModule {}