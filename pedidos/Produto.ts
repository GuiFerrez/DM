// Guilherme Fernandes Rezende

export class Produto {
    private nome: string;
    private preco: number;
  
    constructor(nome: string, preco: number) {
      this.nome = nome;
      this.preco = preco;
    }
  
    getNome(): string {
      return this.nome;
    }
  
    getPreco(): number {
      return this.preco;
    }
  }