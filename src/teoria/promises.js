
async function rodarPrograma() {
  const resposta = await fetch('https://jsonplaceholder.typicode.com/posts')
  const posts = await resposta.json()
  console.log(posts)
  console.log('concluído')
}

rodarPrograma()