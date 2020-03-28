const express = require("express");

const server = express();

/**
 * Query Params = ?teste=1
 * localhost:3000/teste?nome=Moises;
 * const nome = req.query.nome;
 *
 *
 * Route Params = /users/1
 *
 * Request body = { "name": "Moisés", "email:""moisesboas@gmail.com" }
 *
 */

//CRUD - CREATE, READ, UPDATE, DELETE

// const Users = ["Moisés", "Junior", "Carlos"];

// server.get("/teste", (req, res) => {
//   const nome = req.query.nome;
//   return res.json({ message: `Hello ${nome}` });
// });
