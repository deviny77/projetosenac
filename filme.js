export default class Filme {
    constructor(nome, duracao, sinopse, ano) {
        this.nome = nome;
        this.duracao = duracao;
        this.sinopse = sinopse;
        this.ano = ano;
    }

    compartilhar() {
        return "Estou assistindo o filme " + this.nome +
            " que conta a seguinte história: " + this.sinopse +
            ", foi lançado em " + this.ano +
            " e tem duração de " + this.duracao + " minutos.";
    }

    assistir() {
        return "Assistindo filme " + this.nome +
            " - Tempo restante -> " + this.duracao + " minutos.";
    }
}