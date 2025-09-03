"use client";

import { useEffect, useState } from "react";
import { getProdutos } from "../../api/produtos";
import ProdutoCard from "../../components/ProdutoCard";

type Produto = {
  id: number;
  nome: string;
  preco: number;
};

export default function ProdutosPage() {
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getProdutos();
        setProdutos(data);
      } catch (error) {
        console.error("Erro ao carregar produtos:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-red-600">
        <p>Carregando produtos...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-red-600 p-10">
      <h1 className="text-4xl font-bold mb-10 text-center text-red-700">
        Produtos Sangrentos 🕸️
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {produtos.map((p) => (
          <ProdutoCard key={p.id} produto={p} />
        ))}
      </div>
    </div>
  );
}
