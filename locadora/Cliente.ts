// Guilherme Fernandes Rezende

export class Cliente {
    private nome: string;
    private idade: number;
  
    constructor(nome: string, idade: number) {
      this.nome = nome;
      this.idade = idade;
    }
  
    getNome(): string {
      return this.nome;
    }
  
    getIdade(): number {
      return this.idade;
    }
  }
  