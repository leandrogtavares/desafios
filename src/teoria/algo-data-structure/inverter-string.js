const str = "Hello, World"
//percorrer a string
//adicionar cada elemento num array
//inveter o array
//juntar a string

let strInvertida = str[str.length - 1]

for(let posicao = str.length - 1; posicao > 0; ) {
  const letra = str[posicao]
  strInvertida += letra
  posicao--
}

console.log(strInvertida)