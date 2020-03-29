//importando o  modulo express
const express = require("express");

//instanciando o express
const server = express();

/**
 * sempre que o servidor for acessado em /rotas-definidas utilizo
 * os parametros da função anonima `req, res`
 * req fica ouvindo o valor a ser passado pela barra de endereços
 * res retorna um json utilizando o nome que req recebeu
 */

/**
 *  REQUEST BODY: é o modelo de arquitetura dos json ou xml
 *
 *  EXEMPLO: ##Form = {
 *                       Name: "Moisés",
 *                       Mail: "moisesboas@gmail.com",
 *                       Tell: "15 997471589"
 *                    }
 */

/**
 * Query Params
 *
 * req.query.nome
 *
 * test: http://localhost:3000/teste?nome=moises
 */
server.get("/teste", (req, res) => {
  const { nome } = req.query;
  return res.json({ message: `Hello ${nome}` });
});

/**
 * Route Params
 *
 * req.params.id
 *
 * test: http://localhost:3000/users/42
 */

const users = ["Moises", "Carlos", "Junior"];

server.get("/users/:index", (req, res) => {
  const { index } = req.params;
  return res.json(users[index]);
});

//servidor ouvindo na porta 3000
server.listen(3000);
