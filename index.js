class heroi {
  constructor(nome, idade, tipo){
    this.nome = nome
    this.idade = idade
    this.tipo = tipo
  }

  atacar(){
    let ataque = ""
    switch(this.tipo) {
      case "guerreiro":
        ataque = "usou sua espada"
        break
      case "mago":
        ataque = "usou seu cajado"
        break
      case "bárbaro":
        ataque = "usou seu machado"
        break
      case "ninja":
        ataque = "usou suas shurikens"
        break
    }
    console.log(`O ${this.tipo} ${this.nome}, de ${this.idade} anos, ${ataque}.`);
  }
}

const heroi1 = new heroi("Péricles", 18, "mago");
heroi1.atacar();

const heroi2 = new heroi("Cleiton", 27, "guerreiro");
heroi2.atacar();

const heroi3 = new heroi("Clóvis", 74, "bárbaro");
heroi3.atacar();

const heroi4 = new heroi("Ernesto", 22, "ninja");
heroi4.atacar();