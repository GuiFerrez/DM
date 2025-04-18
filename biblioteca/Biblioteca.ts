// Guilherme Fernandes Rezende

import { Livro } from "./Livro";
import { Usuario } from "./Usuario";

export class Biblioteca {
    private acervo: Livro[] = [];
    private usuarios: Usuario[] = [];

    adicionarLivro(livro: Livro): void {
        this.acervo.push(livro);
    }

    adicionarUsuario(usuario: Usuario): void {
        this.usuarios.push(usuario);
    }

    emprestarLivro(livro: Livro, usuario: Usuario): void {
        if (!this.acervo.includes(livro)) {
            console.log("Livro não encontrado no acervo.");
            return;
        }

        if (!this.usuarios.includes(usuario)) {
            console.log("Usuário não cadastrado.");
            return;
        }

        console.log(`O livro '${livro.getTitulo()}' foi emprestado para ${usuario.getNome()}.`);
    }
}