
//as funçoes abaixo devem receber um array como ['a','b','c'] e um separador = /
// e retornar ['c','/', 'b', '/', 'a']

function inverterArrayPuro(array, separador) {
    const arrayInvertido = []
    for (let i = array.length - 1; i >= 0; i--) {
      arrayInvertido.push(array[i])
    }

    return arrayInvertido
}


function inverterArrayComFuncoesJs(array, separador = null) {
    //digite seu código aqui
}



function assertArrayEqual(arrayA, arrayB) {
    if (!Array.isArray(arrayA)) {
        throw new Error(`Assertion failed. Array A is not an array`)
    }

    if (!Array.isArray(arrayB)) {
        throw new Error(`Assertion failed. Array B is not an array`)
    }

    if (arrayA?.length !== arrayB?.length) {
        throw new Error(`Assertion failed. Array lengths differ. Array A ${arrayA}, Array B ${arrayB}`)
    }

    for (let i = 0; i < arrayA.length; i++) {
        if (arrayA[i] !== arrayB[i]) {
            throw new Error(`Assertion failed. Array elements differ. Array A ${arrayA}, Array B ${arrayB}`)
        }
    }
}


assertArrayEqual(inverterArrayPuro(['a', 'b', 'c'], '/'), ['c', 'b', 'a'])
// assertArrayEqual(inverterArrayPuro(['a', 'b', 'c'], '/'), ['c', '/', 'b', '/', 'a'])
// assertArrayEqual(inverterArrayComFuncoesJs(['a', 'b', 'c'], '/'), ['c', '/', 'b', '/', 'a'])

console.log(inverterArrayPuro(['a', 'b', 'c']))

console.log('All tests passed!')