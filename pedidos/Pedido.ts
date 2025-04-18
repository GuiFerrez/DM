// Guilherme Fernandes Rezende

import { Produto } from "./Produto";
import { Cliente } from "./Cliente";

export class Pedido {
  private produtos: { produto: Produto; quantidade: number }[] = [];
  private cliente: Cliente;

  constructor(cliente: Cliente) {
    this.cliente = cliente;
  }

  adicionarProduto(produto: Produto, quantidade: number): void {
    let itemExistente = null;
    for (let i = 0; i < this.produtos.length; i++) {
      if (this.produtos[i].produto === produto) {
        itemExistente = this.produtos[i];
        break;
      }
    }

    if (itemExistente) {
      itemExistente.quantidade += quantidade;
    } else {
      this.produtos.push({ produto, quantidade });
    }
  }

  calcularTotal(): number {
    return this.produtos.reduce(
      (total, item) => total + item.produto.getPreco() * item.quantidade,
      0
    );
  }

  finalizarPedido(): void {
    console.log(`\nPedido para: ${this.cliente.getNome()}`);
    console.log(`Endereço: ${this.cliente.getEndereco()}`);
    console.log("Resumo do Pedido:");
    this.produtos.forEach((item) => {
      console.log(
        `- ${item.produto.getNome()} | Quantidade: ${
          item.quantidade
        } | Preço Unitário: R$${item.produto.getPreco().toFixed(2)}`
      );
    });
    console.log(`Total do Pedido: R$${this.calcularTotal().toFixed(2)}\n`);
  }
}
