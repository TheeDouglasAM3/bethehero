const express = require('express');

const routes = express.Router();

/**
 * Tipos de parâmetros:
 * Query params - parâmetros nomeados enviados na rota após "?" (filtro, paginação)
 * Route params - parâmetros utilizados para identificar recursos
 * Request body - corpo da requisição, utilizado para criar ou alterar recursos
 */

routes.post('/users', (request, response) => {
    const params = request.body;
    console.log(params);
    return response.json({
        evento: 'Semana OmniStack 11.0',
        aluno: 'Douglas Alves Marcelino'
    });
})

module.exports = routes;