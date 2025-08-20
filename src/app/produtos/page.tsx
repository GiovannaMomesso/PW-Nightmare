import { produtos } from "@/api/produtos";
import ProdutoCard from "../../components/ProdutoCard";

export default function ProdutosPage() {
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
