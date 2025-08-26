import prompt from 'prompt-sync';
export class FuncoesES {
    constructor() {
        this.prompt = prompt()
    }

    cadastroCompleto(campos) {
        let dados = [];
        for (let i=0; i < campos.length; i++) {
            let valor = this.entrada(`Digite ${campos[i]}: `);
            dados[i] = valor;
        }
        return dados;
    }

    entrada(mensagem) {
        return this.prompt(mensagem);
    }

    mensagemSimples(mensagem) {
        console.log(mensagem);
    }

    mensagemCompleta(mensagem) {
        console.log("******************************");
        console.log(mensagem);
        console.log("******************************");
    }
}
