"use client";

type Produto = {
  id: number;
  nome: string;
  preco: number;
};

export default function ProdutoCard({ produto }: { produto: Produto }) {
  return (
    <div className="bg-black/80 border border-red-800 p-6 rounded-xl shadow-lg hover:shadow-red-900 transition">
      <h2 className="font-bold text-xl text-red-500">{produto.nome}</h2>
      <p className="mt-2 text-gray-300">R$ {produto.preco}</p>
      <button className="mt-4 bg-red-700 text-white px-4 py-2 rounded-lg hover:bg-red-900 transition">
        Comprar
      </button>
    </div>
  );
}
