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