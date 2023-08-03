//condicional - se
//laços - loops - for, while

//executar um conjuto de instruções por um número de vezes definidas ou indefidas
//até que se atinja uma condição

const dados = [1]

for (let i = 0; i < dados.length; i++) {
    console.log('hello')
}

let j = 0
while (j < dados.length) {
    console.log('hello!!!')
    j++
}


//tipos de for
const letras = ['a', 'b', 'c', 'd', 'e']

// ########### for tradicional #############
for (let contador = 0; contador < letras.length; contador++) {
    console.log(letras[contador])
}

console.log()


// ########### for each - para cada elemento ##########
for (let letra of letras) {
    console.log(letra)
}


// ########### for each - para cada propriedade ############

//nome =>  joao
//idade => 29

const pessoa = { nome: 'joao', idade: '29', peso: '75kg', time: 'Flamengo' }

console.log(pessoa.nome)
console.log(pessoa['nome'])

console.log()

for (let propriedade in pessoa) {
    console.log(`${propriedade} => ${pessoa[propriedade]}`)
}


// ########### for funcional  ##############
//usando função flexa
letras.forEach(ltr => imprimeLetra(ltr)) 

//usando diretamente a referência da função desejada
letras.forEach(imprimeLetra)

function imprimeLetra(letra) {
    console.log()
    console.log(letra)
}


const bichos = [
    { nome: 'Leão', comida: ['carne'] },
    { nome: 'Elefante', comida: ['plantas'] },
    { nome: 'Girafa', comida: ['plantas'] },
    { nome: 'Urso', comida: ['plantas', 'carne'] },
    { nome: 'Porco', comida: ['plantas', 'carne'] },
]

function imprimiAvisos(animais) {

    //for tradicinal
    for (let posicao = 0; posicao < animais.length; posicao++) {
        //lidando com a POSIÇÃO
        //uso a posição para pegar o elemento
        const animal = animais[posicao]
        console.log(`posição: ${posicao} - nome ${animal.nome}`);
    }

    console.log()

    //for each - não funcional
    for (let animal of animais) {
        //lidando com um elemento por vez
        console.log(`nome: ${animal.nome}`)
    }

    console.log()

    //for functional - foreach
    //esse for tem foco em ser um for para cada elemento mas também lhe confere
    //acesso à posição de cada elemento
    //Acaba, em realidade, sendo uma mescla entre ambos evitando a necessidade
    //de uma versão funcional para cada
    animais.forEach((animal, posicao) => {
        //lidando com um elemento por vez mas também possuo accesso à posição
        console.log(`posição: ${posicao} - nome ${animal.nome}`);
    });
}


imprimiAvisos(bichos)