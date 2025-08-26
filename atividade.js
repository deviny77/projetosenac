const prompt = require("prompt-sync")();

// Vetores
let usuarios = [];
let filmes = ["Matrix", "Vingadores", "Homem-Aranha", "Titanic"];
let series = ["Breaking Bad", "Stranger Things", "The Boys", "Loki"];

function menuPrincipal() {
    while (true) {
        console.log("\n===== MENU PRINCIPAL =====");
        console.log("1 - Cadastrar Usuário");
        console.log("2 - Login");
        console.log("0 - Sair");

        let opcao = prompt("Escolha uma opção: ");

        switch (opcao) {
            case "1":
                cadastrarUsuario();
                break;
            case "2":
                loginUsuario();
                break;
            case "0":
                console.log("Saindo... até logo!");
                return;
            default:
                console.log("Opção inválida!");
        }
    }
}

function cadastrarUsuario() {
    let nome = prompt("Digite o nome do usuário: ");
    let senha = prompt("Digite a senha: ");
    usuarios.push({ nome, senha });
    console.log("Usuário cadastrado com sucesso!");
}

function loginUsuario() {
    let nome = prompt("Digite seu nome: ");
    let senha = prompt("Digite sua senha: ");

    let usuario = usuarios.find(u => u.nome === nome && u.senha === senha);

    if (usuario) {
        console.log(`\n✅ Bem-vindo, ${usuario.nome}!`);
        menuLogado(usuario);
    } else {
        console.log("❌ Usuário ou senha inválidos!");
    }
}

function menuLogado(usuario) {
    while (true) {
        console.log("\n===== MENU DO USUÁRIO =====");
        console.log("1 - Listar Filmes");
        console.log("2 - Listar Séries");
        console.log("3 - Assistir Filme");
        console.log("4 - Assistir Série");
        console.log("5 - Compartilhar Filme");
        console.log("6 - Compartilhar Série");
        console.log("0 - Logout");

        let opcao = prompt("Escolha uma opção: ");

        switch (opcao) {
            case "1":
                listar(filmes, "Filmes");
                break;
            case "2":
                listar(series, "Séries");
                break;
            case "3":
                assistir(filmes, "filme");
                break;
            case "4":
                assistir(series, "série");
                break;
            case "5":
                compartilhar(filmes, "filme", usuario.nome);
                break;
            case "6":
                compartilhar(series, "série", usuario.nome);
                break;
            case "0":
                console.log("Você fez logout!");
                return;
            default:
                console.log("Opção inválida!");
        }
    }
}

function listar(lista, titulo) {
    console.log(`\n===== ${titulo} =====`);
    lista.forEach((item, index) => {
        console.log(`${index} - ${item}`);
    });
}

function assistir(lista, tipo) {
    listar(lista, tipo);
    let indice = parseInt(prompt(`Escolha o número do ${tipo}: `));
    if (indice >= 0 && indice < lista.length) {
        console.log(`▶️ Você está assistindo ${lista[indice]}!`);
    } else {
        console.log("❌ Opção inválida!");
    }
}

function compartilhar(lista, tipo, usuario) {
    listar(lista, tipo);
    let indice = parseInt(prompt(`Escolha o número do ${tipo} para compartilhar: `));
    if (indice >= 0 && indice < lista.length) {
        console.log(`🔗 ${usuario} compartilhou o ${tipo} "${lista[indice]}" com os amigos!`);
    } else {
        console.log("❌ Opção inválida!");
    }
}

// Iniciar programa
menuPrincipal();