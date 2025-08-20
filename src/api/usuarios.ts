type Usuario = {
  id: number;
  nome: string;
  email: string;
  senha: string;
};

export let usuarios: Usuario[] = [];

export function cadastrarUsuario(nome: string, email: string, senha: string) {
  const existe = usuarios.find((u) => u.email === email);
  if (existe) return false;

  const novoUsuario: Usuario = {
    id: usuarios.length + 1,
    nome,
    email,
    senha,
  };
  usuarios.push(novoUsuario);
  return true;
}

export function loginUsuario(email: string, senha: string) {
  return usuarios.find((u) => u.email === email && u.senha === senha) || null;
}
