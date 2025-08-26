import Filme from "./filme.js";

export class Serie extends Filme {
    constructor(nome, duracao, sinopse, ano, episodio, temporada, nomeSerie) {
        super(nome, duracao, sinopse, ano);
        this.episodio = episodio;
        this.temporada = temporada;
        this.nomeSerie = nomeSerie;

    }

    compartilhar() {
        return "Estou assistindo a série " + this.nome +
            " que conta a seguinte história: " + this.sinopse +
            ", foi lançada em " + this.ano +
            " e tem duração de " + this.duracao + " minutos por episódio." +
            " Total de episódios: " + this.episodio;
    }

    assistir() {
        return "Assistindo série " + this.nome +
            " - Tempo restante -> " + this.duracao * this.episodio + " minutos.";
    }
}