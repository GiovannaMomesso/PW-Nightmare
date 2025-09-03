export async function getProdutos() {
  const res = await fetch("http://localhost:4000/api/produtos", {
    cache: "no-store", // garante dados sempre atualizados
  });

  if (!res.ok) {
    throw new Error("Erro ao buscar produtos");
  }

  return res.json();
}
