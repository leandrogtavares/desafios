export const produtos = [
  {
    id: 1,
    createdAt: new Date("2023-01-01"),
    nome: "Camiseta",
    categoria: 1,
    avaliacoes: [1, 2],
    preco: 29.90
  },
  {
    id: 2,
    createdAt: new Date("2023-01-02"),
    nome: "Calça",
    categoria: 1,
    avaliacoes: [3, 4],
    preco: 59.90
  },
  {
    id: 3,
    createdAt: new Date("2023-01-03"),
    nome: "Tênis",
    categoria: 2,
    avaliacoes: [5, 6],
    preco: 99.90
  },
  {
    id: 4,
    createdAt: new Date("2023-01-04"),
    nome: "Relógio",
    categoria: 3,
    avaliacoes: [7, 8],
    preco: 199.90
  },
  {
    id: 5,
    createdAt: new Date("2023-01-05"),
    nome: "Livro",
    categoria: 4,
    avaliacoes: [9, 10],
    preco: 39.90
  }
];

export const categorias = [
  {
    id: 1,
    createdAt: new Date("2023-01-01"),
    nome: "Roupas"
  },
  {
    id: 2,
    createdAt: new Date("2023-01-01"),
    nome: "Calçados"
  },
  {
    id: 3,
    createdAt: new Date("2023-01-01"),
    nome: "Acessórios"
  },
  {
    id: 4,
    createdAt: new Date("2023-01-01"),
    nome: "Livros"
  }
];

export const avaliacoes = [
  {
    id: 1,
    createdAt: new Date("2023-01-06"),
    produtoId: 1,
    usuarioId: 1,
    comentario: "Gostei da camiseta, é confortável e bonita",
    nota: 4
  },
  {
    id: 2,
    createdAt: new Date("2023-01-07"),
    produtoId: 1,
    usuarioId: 2,
    comentario: "A camiseta é boa, mas veio com um pequeno defeito",
    nota: 3
  },
  {
    id: 3,
    createdAt: new Date("2023-01-08"),
    produtoId: 2,
    usuarioId: 3,
    comentario: "A calça é ótima, veste bem e tem um bom tecido",
    nota: 5
  },
  {
    id: 4,
    createdAt: new Date("2023-01-09"),
    produtoId: 2,
    usuarioId: 4,
    comentario: "A calça é bonita, mas ficou um pouco apertada",
    nota: 4
  },
  {
    id: 5,
    createdAt: new Date("2023-01-10"),
    produtoId: 3,
    usuarioId: 5,
    comentario: "O tênis é muito bom, confortável e resistente",
    nota: 5
  },
  {
    id: 6,
    createdAt: new Date("2023-01-11"),
    produtoId: 3,
    usuarioId: 6,
    comentario: "O tênis é bom, mas a cor não é igual a da foto",
    nota: 3
  },
  {
    id: 7,
    createdAt: new Date("2023-01-12"),
    produtoId: 4,
    usuarioId: 7,
    comentario: "O relógio é lindo, tem várias funções e é fácil de usar",
    nota: 5
  },
  {
    id: 8,
    createdAt: new Date("2023-01-13"),
    produtoId: 4,
    usuarioId: 8,
    comentario: "O relógio é bom, mas a bateria não dura muito",
    nota: 4
  },
  {
    id: 9,
    createdAt: new Date("2023-01-14"),
    produtoId: 5,
    usuarioId: 9,
    comentario: "O livro é muito interessante, tem uma história envolvente e bem escrita",
    nota: 5
  },
  {
    id: 10,
    createdAt: new Date("2023-01-15"),
    produtoId: 5,
    usuarioId: 10,
    comentario: "O livro é bom, mas a capa veio amassada",
    nota: 4
  }
];

// Criar um array de objetos para Usuario
export const usuarios = [
  {
    id: 1,
    createdAt: new Date("2023-01-01"),
    email: "ana@gmail.com"
  },
  {
    id: 2,
    createdAt: new Date("2023-01-01"),
    email: "bruno@gmail.com"
  },
  {
    id: 3,
    createdAt: new Date("2023-01-01"),
    email: "carla@gmail.com"
  },
  {
    id: 4,
    createdAt: new Date("2023-01-01"),
    email: "daniel@gmail.com"
  },
  {
    id: 5,
    createdAt: new Date("2023-01-01"),
    email: "elisa@gmail.com"
  },
  {
    id: 6,
    createdAt: new Date("2023-01-01"),
    email: "felipe@gmail.com"
  },
  {
    id: 7,
    createdAt: new Date("2023-01-01"),
    email: "gabriela@gmail.com"
  },
  {
    id: 8,
    createdAt: new Date("2023-01-01"),
    email: "henrique@gmail.com"
  },
  {
    id: 9,
    createdAt: new Date("2023-01-01"),
    email: "isabela@gmail.com"
  },
  {
    id: 10,
    createdAt: new Date("2023-01-01"),
    email: "joao@gmail.com"
  }
];

