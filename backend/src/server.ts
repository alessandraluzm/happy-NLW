import express from 'express'

// express = framework que ajuda a configurar rotas (requisição e resposta)
const app = express();

// Rota
// Recurso = usuário

// Métodos HTTP
// Parametros

app.get('/users', (request, response) =>{
    return response.json({ message: 'Hello World'});
});

app.listen(3333);