"use client";

import { useState } from "react";
import { cadastrarUsuario } from "@/api/usuarios";
import Link from "next/link";

export default function CadastroPage() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [mensagem, setMensagem] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const sucesso = cadastrarUsuario(nome, email, senha);
    if (sucesso) {
      setMensagem("Cadastro realizado com sucesso!");
      setNome("");
      setEmail("");
      setSenha("");
    } else {
      setMensagem("Email já cadastrado.");
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

        <p className="mt-6 text-center text-gray-400">
          Já tem uma conta?{" "}
          <Link href="/login" className="text-red-500 hover:underline">
            Faça login aqui
          </Link>
        </p>
      </div>
    </div>
  );
}
