// Guilherme Fernandes Rezende

import { Filme } from './Filme';
import { Cliente } from './Cliente';
import { Locadora } from './Locadora'; 

const locadora = new Locadora();


const filme1 = new Filme("O Enigma do Horizonte", "André Souza", 2010);
const filme2 = new Filme("Sombras da Noite", "Carla Mendes", 2015);
const filme3 = new Filme("A Última Jornada", "Fernando Lima", 2018);
const filme4 = new Filme("Caminhos Cruzados", "Luciana Ribeiro", 2020);
const filme5 = new Filme("Reflexos do Passado", "Marcos Oliveira", 2022);

locadora.adicionarFilme(filme1);
locadora.adicionarFilme(filme2);
locadora.adicionarFilme(filme3);
locadora.adicionarFilme(filme4);
locadora.adicionarFilme(filme5);

const cliente1 = new Cliente("Ana Paula", 28);
const cliente2 = new Cliente("Bruno Henrique", 35);
const cliente3 = new Cliente("Carla Souza", 22);
const cliente4 = new Cliente("Diego Martins", 40);
const cliente5 = new Cliente("Eduarda Lima", 30);

locadora.adicionarCliente(cliente1);
locadora.adicionarCliente(cliente2);
locadora.adicionarCliente(cliente3);
locadora.adicionarCliente(cliente4);
locadora.adicionarCliente(cliente5);


locadora.alugarFilme(filme1, cliente1);
locadora.alugarFilme(filme3, cliente2);
locadora.alugarFilme(filme5, cliente4);
