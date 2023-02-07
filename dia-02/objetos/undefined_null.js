const pessoa = {
  nome: "Fulano",
  sobrenome: "da Silva",
  "nome-da-mae": "Mother",
  idade: undefined,
};

console.log(`pessoa.altura: ${pessoa.altura}`);

// delete pessoa.idade

if ("idade" in pessoa) {
  console.log(`pessoa.idade: ${pessoa.idade}`);
}