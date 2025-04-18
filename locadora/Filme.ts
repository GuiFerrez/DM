// Guilherme Fernandes Rezende

export class Filme {
    private titulo: string;
    private diretor: string;
    private anoLancamento: number;
  
    constructor(titulo: string, diretor: string, anoLancamento: number) {
      this.titulo = titulo;
      this.diretor = diretor;
      this.anoLancamento = anoLancamento;
    }
  
    getTitulo(): string {
      return this.titulo;
    }
  
    getDiretor(): string {
      return this.diretor;
    }
  
    getAnoLancamento(): number {
      return this.anoLancamento;
    }
  }
  