const usuario = {
  nome: "Moises",
  idade: 22,
  endereco: {
    cidade: "Sorocaba",
    estado: "SP"
  }
};

/**
 * PARA LISTAR SEM DESESTRUTURAR
 * const nome = usuario.nome;
 * const idade = usuario.idade;
 * const cidade = usuario.endereco.cidade;
 * const estado = usuario.endereco.estado;
 *
 */

const estado = usuario.endereco.estado;

console.log(estado);
