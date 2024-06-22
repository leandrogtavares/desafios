class Cha {
  nome: string = 'cha'
}

export class ChaCamomila {
  nome: string = 'chaCamomila'
}

class Cafe {
  marca: string = 'cafe'
}

export class CafePilao extends Cafe {
  marca = 'cafePilao'
}

export class GarrafaTermica<Conteudo extends Cafe | Cha> {
  constructor(public itens: Conteudo[]) {

  }

  logarTipoDaCesta(): void {
    this.itens.forEach(item => {
      if (item instanceof Cha) {
        console.log(item.nome)
      }

      if (item instanceof Cafe) {
        console.log(item.marca)
      }
      
    })
  }

  primeiro(): Conteudo {
    return this.itens[0]
  }
}

function logarItens<ItemLogado extends Number>(itens: ItemLogado[]) {
  itens.forEach(item => console.log(item))
}