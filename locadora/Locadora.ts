// Guilherme Fernandes Rezende

import { Filme } from './Filme'; 
import { Cliente } from './Cliente';

export class Locadora {
  private catalogo: Filme[] = [];
  private clientes: Cliente[] = [];

  adicionarFilme(filme: Filme): void {
    this.catalogo.push(filme);
  }

  adicionarCliente(cliente: Cliente): void {
    this.clientes.push(cliente);
  }

  alugarFilme(filme: Filme, cliente: Cliente): void {
    const filmeEncontrado = this.catalogo.find(f => f === filme);
    const clienteEncontrado = this.clientes.find(c => c === cliente);

    if (!filmeEncontrado) {
      console.log("Filme não encontrado no catálogo.");
      return;
    }

    if (!clienteEncontrado) {
      console.log("Cliente não cadastrado.");
      return;
    }

    console.log(`O filme '${filme.getTitulo()}' foi alugado para ${cliente.getNome()}.`);
  }
}
