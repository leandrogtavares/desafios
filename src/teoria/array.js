const nomes = ['joão', 'maria', 'pedro', 'bia']

// ^
/* 
nomeABuscar = 'maria'
posicao = 1
elementoNaPosicao = 'maria'
 */

function existe(array, elemento) {
  for (let posicao = array.length - 1; posicao > 0; posicao--) {
    const elementonaPosicao = array[posicao]

    if (elementonaPosicao === elemento) {
      return true
    }
  }
  return false
}

///-------------------------------------------------------

const procurado = 'pedro'

//fazer com que funcione como o includes
existe(nomes, 'alan')

if (existe(nomes, procurado)) {
  console.log('Procurado encontrado via temNome');
} else {
  console.log('Procurado não encontrado via temNome');
}


if (nomes.includes(procurado)) {
  console.log('Procurado encontrado via includes');
} else {
  console.log('Procurado não encontrado via includes');
}


const stringJuncao = nomes.join(';')
console.log(stringJuncao)

const novoArray = stringJuncao.split(';')
console.log('novoArray: ', novoArray)

nomes.splice(2, 1, 'bob')

console.log(nomes)

const pedacos = nomes.slice(1, 3)
console.log('pedaços: ', pedacos);

const array1 = ['uva', 'pera']
const array2 = ['melão', 'manga']

const uniao = [...array1, ...array2]
console.log(uniao);