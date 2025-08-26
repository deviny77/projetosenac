const usuario = require('./usuario.js');
const entradaSaida = require('./entradaSaida.js');
const objEntradaSaida = new entradaSaida();

var usuarios = [new usuario('Roberval', 'robe@hotmail.com','senha123'),
                new usuario('joao', 'joao@gmail.com','Senha@segura123'),
                new usuario('Douglas', 'dg@hotmail.com','Dg@654321'),
                new usuario('Maria', 'maria@uol.com','senha123456')
];

//FAZER LOGIN ( de forma que ele pergunte email e senha), e faça login no usuário correto

let dadosLogin = objEntradaSaida.cadastroCompleto(['email', 'senha']);


//METODO COPILOT
let usuarioLogado = usuarios.find(u => u.fazerLogin(dadosLogin[0], dadosLogin[1]));

console.log(usuarioLogado);

//METODO SIMPLES
for (let i = 0; i < usuarios.length; i++) {
    if (usuarios[i].fazerLogin(dadosLogin[0], dadosLogin[1])) {
        usuarioLogado = usuarios[i];
        break;
    }
}
console.log(usuarioLogado);

//METODO COM FILTRO
var usuarioEncontrado = usuarios.find(u => u.email === dadosLogin[0]);
if(usuarioEncontrado.fazerLogin(dadosLogin[0], dadosLogin[1])) {
    usuarioLogado = usuarioEncontrado;
}

console.log(usuarioLogado);

//METODO USANDO FOR (ENCONTRANDO ANTES)
var usuarioEncontrado = null;
for (let i = 0; i < usuarios.length; i++) { 
    if (usuarios[i].email === dadosLogin[0]) {
        usuarioEncontrado = usuarios[i];
        break;
    }
}       
if (usuarioEncontrado && usuarioEncontrado.fazerLogin(dadosLogin[0], dadosLogin[1])) {
    usuarioLogado = usuarioEncontrado;
}
console.log(usuarioLogado);