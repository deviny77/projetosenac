import { Usuario } from './usuario.js';
import { FuncoesES } from './entradaSaida.js';
import Filme from './filme.js';
import { Serie } from './serie.js';

const objEntradaSaida = new FuncoesES();
var usuarios = [];
var filmes = [new Filme('O Senhor dos Anéis', 178, 'A jornada de Frodo para destruir o Um Anel.', 2001),
    new Filme('Matrix', 136, 'A luta de Neo contra as máquinas que controlam a realidade.', 1999),
    new Filme('Inception', 148, 'Um ladrão que invade os sonhos para roubar segredos.', 2010)];

var series = [new Serie("Episódio piloto",50,"alguma coisa aconteceu",2020,1,1,"Serie nova"),
    new Serie("Episódio 2",50,"alguma coisa aconteceu denovo",2020,2,1,"Serie nova"),
    new Serie("Episódio 3",50,"alguma coisa aconteceu",2020,3,1,"Serie nova"),
    new Serie("Episódio novo",50,"alguma coisa aconteceu antes",2021,1,2,"Serie nova")
];
// objEntradaSaida.mensagemCompleta(series[0].compartilhar());


const usuario1 = new Usuario('Roberval','robe@email.com','987654321');
usuario1.senha = '123456';
objEntradaSaida.mensagemCompleta(usuario1.senha)

// let dados = objEntradaSaida.cadastroCompleto(['nome', 'email', 'senha']);
// usuarios.push(new Usuario(dados[0], dados[1], dados[2])); 

// objEntradaSaida.mensagemCompleta(`Usuário ${usuarios[0].nome} cadastrado com sucesso!`);


// objEntradaSaida.mensagemCompleta(`Assinatura do usuário: ${usuarios[0].retornarAssinatura()}`);
// objEntradaSaida.mensagemCompleta(`Assinatura do usuário: ${usuarios[0].validarAssinatura()}`);

// usuarios[0].adicionarAssinatura(30);

// objEntradaSaida.mensagemCompleta(`Assinatura do usuário: ${usuarios[0].retornarAssinatura()}`);
// objEntradaSaida.mensagemCompleta(`Assinatura do usuário: ${usuarios[0].validarAssinatura()}`);