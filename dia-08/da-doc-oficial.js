function* gen() {
  yield 1;
  yield 2;
  yield 3;
}
const g = gen();

console.log(g.next());
console.log(g.next());
console.log(g.next());
console.log(g.next());
const grupos = new Map();
  const roles = new Map();
  const usuarios = [];
  
  grupos.set('user1', ['g1', 'g2', 'gAdm']);
  grupos.set('user2', ['g1']);
  
  roles.set('user1', ['role1']);
  roles.set('user2', ['role1', 'role2']);
  
  usuarios.push({
    id: 'user1',
    nome: 'Fulano',
  })
  
  usuarios.push({
    id: 'user2',
    nome: 'Beltrano',
  });

function* meuMockDoDbDeUsuarios() {
  yield usuarios;
  yield grupos;
  yield roles;
};

const chamaMockBanco = meuMockDoDbDeUsuarios();

const usuariosMock = chamaMockBanco.next();
const gruposDoMock = chamaMockBanco.next();
const rolesDoMock = chamaMockBanco.next();

usuariosMock.value.forEach(usuario => {
  console.log({
    ...usuario,
    grupos: gruposDoMock.value.get(usuario.id),
    roles: rolesDoMock.value.get(usuario.id),
  })
})


