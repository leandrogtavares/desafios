const pessoa = { nome: 'Pedro', idade: 30, peso: 100}


for (let propriedade in pessoa) {
    const valor = pessoa[propriedade]
    console.log(valor);
}
