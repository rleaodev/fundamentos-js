const chaveComputada = "minhaChaveBolada";
const pessoa = {
  nome: "Fulano",
  sobrenome: "da Silva",
  "nome-da-mae": "Mother",
  [chaveComputada]: "foobar",
};
console.log(pessoa.nome);
console.log(pessoa['nome']);

for (let key in pessoa) {
  console.log(`Chave ${key} = ${pessoa[key]}`)
}