// Guilherme Fernandes Rezende

import { Livro } from "./Livro";
import { Usuario } from "./Usuario";
import { Biblioteca } from "./Biblioteca";

const biblioteca = new Biblioteca();

const livro1 = new Livro("As Cores de Tefra", "Mirela Rios", 2003);
const livro2 = new Livro("O Último Horizonte", "Jonas Farias", 1999);
const livro3 = new Livro("Fragmentos de Um Amanhã", "Luiza Tenório", 2021);
const livro4 = new Livro("Caminhos Tortos", "Rodrigo Lemos", 2005);
const livro5 = new Livro("A Casa do Silêncio", "Helena Britto", 2014);
const livro6 = new Livro("Entre Linhas", "Cássio Veloso", 2018);
const livro7 = new Livro("O Chamado do Norte", "Bruno Mendes", 2010);
const livro8 = new Livro("Mistérios do Subsolo", "Paula Cruz", 2022);
const livro9 = new Livro("A Noite Azul", "Felipe Gomes", 2008);
const livro10 = new Livro("Versos Perdidos", "Carla Oliveira", 2001);

biblioteca.adicionarLivro(livro1);
biblioteca.adicionarLivro(livro2);
biblioteca.adicionarLivro(livro3);
biblioteca.adicionarLivro(livro4);
biblioteca.adicionarLivro(livro5);
biblioteca.adicionarLivro(livro6);
biblioteca.adicionarLivro(livro7);
biblioteca.adicionarLivro(livro8);
biblioteca.adicionarLivro(livro9);
biblioteca.adicionarLivro(livro10);

const usuario1 = new Usuario("Igor Martins", 32);
const usuario2 = new Usuario("Tatiane Silva", 24);
const usuario3 = new Usuario("Bruno Soares", 41);
const usuario4 = new Usuario("Amanda Freitas", 29);
const usuario5 = new Usuario("Marcos Pinho", 35);

biblioteca.adicionarUsuario(usuario1);
biblioteca.adicionarUsuario(usuario2);
biblioteca.adicionarUsuario(usuario3);
biblioteca.adicionarUsuario(usuario4);
biblioteca.adicionarUsuario(usuario5);

biblioteca.emprestarLivro(livro1, usuario1);
biblioteca.emprestarLivro(livro4, usuario2);
biblioteca.emprestarLivro(livro8, usuario3);
biblioteca.emprestarLivro(livro6, usuario5);

console.log(biblioteca)