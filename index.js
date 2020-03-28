//importando o  modulo express
const express = require("express");

//instanciando o express
const server = express();

/**
 * sempre que o servidor for acessado em /teste utilizo
 * os parametros da função anonima `req, res`
 * req fica ouvindo o valor a ser passado pela barra de endereços
 * res retorna um json utilizando o nome que req recebeu
 */
server.get("/teste", (req, res) => {
  const nome = req.query.nome;
  return res.json({ message: `Hello ${nome}` });
});

//servidor ouvindo na porta 3000
server.listen(3000);
