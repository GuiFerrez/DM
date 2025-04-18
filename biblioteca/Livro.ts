// Guilherme Fernandes Rezende

export class Livro {
    private titulo: string;
    private autor: string;
    private anoPublicacao: number;

    constructor(titulo: string, autor: string, anoPublicacao: number) {
        this.titulo = titulo;
        this.autor = autor;
        this.anoPublicacao = anoPublicacao;
    }

    getTitulo(): string {
        return this.titulo;
    }

    getAutor(): string {
        return this.autor;
    }

    getAnoPublicacao(): number {
        return this.anoPublicacao;
    }
}