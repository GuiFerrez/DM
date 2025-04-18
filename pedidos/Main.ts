// Guilherme Fernandes Rezende

import { Produto } from './Produto';
import { Cliente } from './Cliente';
import { Pedido } from './Pedido';


const p1 = new Produto("Mouse Gamer", 120.00);
const p2 = new Produto("Teclado Mecânico", 250.00);
const p3 = new Produto("Monitor 27", 900.00);
const p4 = new Produto("Notebook Ultrafino", 3500.00);
const p5 = new Produto("Cadeira Ergonômica", 850.00);
const p6 = new Produto("Impressora Wi-Fi", 600.00);
const p7 = new Produto("HD Externo 1TB", 320.00);
const p8 = new Produto("Pen Drive 64GB", 70.00);
const p9 = new Produto("Webcam Full HD", 200.00);
const p10 = new Produto("Microfone Profissional", 480.00);
const p11 = new Produto("Fonte 650W", 400.00);
const p12 = new Produto("Gabinete Gamer", 300.00);
const p13 = new Produto("Smartphone 5G", 2200.00);
const p14 = new Produto("Tablet Android", 1300.00);
const p15 = new Produto("Repetidor Wi-Fi", 180.00);
const p16 = new Produto("Roteador Mesh", 450.00);
const p17 = new Produto("Placa de Vídeo RTX", 4800.00);
const p18 = new Produto("Processador Octa-core", 1500.00);
const p19 = new Produto("Memória RAM 16GB", 380.00);
const p20 = new Produto("SSD NVMe 1TB", 520.00);


const c1 = new Cliente("Alana Martins", "Rua das Camélias, 45");
const c2 = new Cliente("Breno Farias", "Av. Brasil, 501");
const c3 = new Cliente("Carla Dias", "Rua Projetada, 123");
const c4 = new Cliente("Davi Gomes", "Travessa Norte, 78");
const c5 = new Cliente("Elaine Moreira", "Rua do Sol, 333");
const c6 = new Cliente("Fábio Costa", "Av. Central, 89");
const c7 = new Cliente("Giovana Luz", "Rua Azul, 159");
const c8 = new Cliente("Henrique Prado", "Rua Santa Maria, 44");
const c9 = new Cliente("Isabel Freitas", "Av. das Américas, 777");
const c10 = new Cliente("João Pedro Lima", "Rua das Rosas, 111");


const pedido1 = new Pedido(c1);
pedido1.adicionarProduto(p1, 2);
pedido1.adicionarProduto(p5, 1);
pedido1.finalizarPedido();

const pedido2 = new Pedido(c3);
pedido2.adicionarProduto(p2, 1);
pedido2.adicionarProduto(p6, 1);
pedido2.finalizarPedido();

const pedido3 = new Pedido(c5);
pedido3.adicionarProduto(p3, 1);
pedido3.adicionarProduto(p7, 2);
pedido3.finalizarPedido();

const pedido4 = new Pedido(c6);
pedido4.adicionarProduto(p13, 1);
pedido4.adicionarProduto(p15, 2);
pedido4.finalizarPedido();

const pedido5 = new Pedido(c9);
pedido5.adicionarProduto(p4, 1);
pedido5.adicionarProduto(p16, 1);
pedido5.finalizarPedido();

const pedido6 = new Pedido(c2);
pedido6.adicionarProduto(p8, 5);
pedido6.finalizarPedido();

const pedido7 = new Pedido(c4);
pedido7.adicionarProduto(p14, 1);
pedido7.adicionarProduto(p10, 1);
pedido7.finalizarPedido();

const pedido8 = new Pedido(c8);
pedido8.adicionarProduto(p11, 1);
pedido8.adicionarProduto(p12, 1);
pedido8.finalizarPedido();

const pedido9 = new Pedido(c7);
pedido9.adicionarProduto(p18, 1);
pedido9.adicionarProduto(p20, 1);
pedido9.finalizarPedido();

const pedido10 = new Pedido(c10);
pedido10.adicionarProduto(p17, 1);
pedido10.adicionarProduto(p19, 2);
pedido10.finalizarPedido();