//Dado um grupo de animais. Imprimir as seguintes messanges como segue:
//1) Tranquilo => quando for um animal que come plantas
//2) Corre => quando for um animal que come carne
//3) Tranquilo Corre => quanto for um animal que come ambos

const animais = [
    { nome: 'Leão', comida: ['carne'] },
    { nome: 'Elefante', comida: ['plantas'] },
    { nome: 'Girafa', comida: ['plantas'] },
    { nome: 'Urso', comida: ['plantas', 'carne'] },
    { nome: 'Porco', comida: ['plantas', 'carne'] },
]


/*  
if (vetorTem(comida, 'plantas') && vetorTem(comida, 'carne')) {

        } else if (vetorTem(comida, 'plantas')) {
            
        } else if (vetorTem(comida, 'carne')) {
            
        }
*/
//pecorrer o vetor de animais e pegar cada animal
//pecorrer o vetor comida daquele animal
//verificar se aquele vetor comida possui plantas ou carne
function imprimiAvisos(animais) {
    for(let posicaoDeAnimal = 0; posicaoDeAnimal < animais.length; posicaoDeAnimal++) {
        const animal = animais[posicaoDeAnimal]
        
        let comePlanta
        let comeCarne

        for(let tipoDeComida of animal.comida) {
            if (tipoDeComida === 'plantas') {
                comePlanta = true
            }

            if (tipoDeComida === 'carne') {
                comeCarne = true
            }
        }

        if (comePlanta && comeCarne) {
            console.log(`${animal.nome} => tranquilo corre`)
        } else if (comePlanta) {
            console.log(`${animal.nome} => tranquilo`)
        } else if (comeCarne) {
            console.log(`${animal.nome} => corre`)
        }
    }
}


imprimiAvisos(animais)