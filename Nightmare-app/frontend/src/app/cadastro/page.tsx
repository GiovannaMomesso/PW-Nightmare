"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { cadastrarUsuario } from "@/api/usuarios";

export default function CadastroPage() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [mensagem, setMensagem] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await cadastrarUsuario(nome, email, senha);

    if (res.ok) {
      const data = await res.json();
      setMensagem(data.mensagem);
      router.push("/produtos"); // envia para produtos após cadastro
    } else {
      const data = await res.json();
      setMensagem(data.mensagem || "Erro ao cadastrar.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black font-vt323">
      <div className="w-full max-w-md bg-black border border-red-900 p-8 rounded-xl shadow-md">
        <h1 className="text-3xl font-bold mb-6 text-red-600 text-center">
          Cadastro
        </h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            className="bg-black border border-red-700 p-3 rounded text-white placeholder-gray-500 focus:outline-none focus:border-red-500"
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-black border border-red-700 p-3 rounded text-white placeholder-gray-500 focus:outline-none focus:border-red-500"
          />
          <input
            type="password"
            placeholder="Senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            className="bg-black border border-red-700 p-3 rounded text-white placeholder-gray-500 focus:outline-none focus:border-red-500"
          />
          <button className="bg-red-700 text-white py-2 rounded-lg hover:bg-red-900 transition">
            Cadastrar
          </button>
        </form>

        {mensagem && <p className="mt-4 text-center text-red-400">{mensagem}</p>}
      </div>
    </div>
  );
}
