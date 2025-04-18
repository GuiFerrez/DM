// Guilherme Fernandes Rezende

export class Cliente {
    private nome: string;
    private endereco: string;
  
    constructor(nome: string, endereco: string) {
      this.nome = nome;
      this.endereco = endereco;
    }
  
    getNome(): string {
      return this.nome;
    }
  
    getEndereco(): string {
      return this.endereco;
    }
  }