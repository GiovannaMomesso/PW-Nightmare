export async function cadastrarUsuario(nome: string, email: string, senha: string) {
  const res = await fetch("http://localhost:4000/api/cadastro", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ nome, email, senha }),
  });

  return res.ok;
}

export async function loginUsuario(email: string, senha: string) {
  const res = await fetch("http://localhost:4000/api/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, senha }),
  });

  if (res.ok) {
    return await res.json();
  }
  return null;
}
