// Passo 1: Importar o express
const express = require('express');

// Passo 2: "Criar" a aplicação
const app = express();

// Passo 3: Criando a API
const books = [
  { id: 1, title: 'The Lord of Rings', author: 'J.R.R. Tolkien' },
  { id: 2, title: 'Dune', author: 'Frank Herbert' },
  { id: 3, title: 'Foundation', author: 'Isaac Asimov' },
  { id: 4, title: 'The Man in The High Castle', author: 'Philip K Dick' },
  { id: 5, title: '1984', author: 'George Orwell' },
  { id: 6, title: 'Brave New World', author: 'Aldous Huxley' }
];

// Passo 5: Criar os gets (ordenados por rotas específicas)
app.get('/books', (_req, res) => {
  res.json(books)
});

// Passo 6: Criar os posts

// Passo 7: Criar os puts

// Passo 8: Criar o delete

// Passo 4: "Abrir a porta" em que a aplicação vai rodar
app.listen(3000, () => console.log('Aplicação rodando na porta 3000'));