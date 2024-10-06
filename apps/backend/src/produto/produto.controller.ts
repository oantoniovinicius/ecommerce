import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { Produto } from "@gstore/core"
import { ProdutosPrisma } from './produtos.prisma';

@Controller('produtos')
export class ProdutoController {

  constructor(readonly repo: ProdutosPrisma){}

  @Post()
  async salvarProduto(@Body() produto: Produto): Promise<void> {
    return this.repo.salvar(produto)
  }

  @Get()
  async obterProdutos(): Promise<Produto[]> {
    return this.repo.obter()
  }

  @Get(':id')
  async obterProdutoPorId(@Param('id') id: string): Promise<Produto | null> {
    return this.repo.obterPorId(Number(id))
  }

  @Delete(':id')
  async excluirProduto(@Param('id') id: string): Promise<void> {
    return this.repo.excluir(Number(id))
  }
}