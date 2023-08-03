//loops

//2 formas : tradicional vs functional

// 2 tipos : loop de posição vs loop de elemento

//tradicional
//                 0         1       2       3        4           
const frutas = ['banana', 'melão', 'maçã', 'uva']
                                                //    ^     

//                    0         1          2         3
const sobreNomes = ['Silva', 'Tavares', 'Correia', 'Martins']
//                                                                      ^

// for(posicao = 0; posicao < sobreNomes.length; posicao++) {
//     const sobreNome = sobreNomes[posicao]
//     sobreNomes[posicao] = 'Sr ' + sobreNome
// }


const pessoa = { nome: 'Pedro', idade: 30, peso: 100}

let posicao = 0
for (let sobreNome of sobreNomes) { 
    sobreNome = 'Sr ' + sobreNome
    sobreNomes[posicao] = sobreNome
    posicao++
}

console.log(sobreNomes)

for (let propriedade in pessoa) {
    const valor = pessoa[propriedade]
    console.log(valor);
}


//funcional

frutas.forEach((fruta, index) => console.log(index + '-' + fruta))



