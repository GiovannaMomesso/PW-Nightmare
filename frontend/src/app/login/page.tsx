"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

async function loginUsuario(email: string, senha: string) {
  const res = await fetch("http://localhost:3001/api/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, senha }),
  });

  if (!res.ok) return null;
  return res.json();
}


export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [mensagem, setMensagem] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await loginUsuario(email, senha);

    if (res) {
      setMensagem(res.mensagem);
      localStorage.setItem("token", res.token);
      localStorage.setItem("usuario", res.mensagem); // salva nome
      router.push("/produtos"); // vai para produtos
    } else {
      setMensagem("Email ou senha incorretos.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black font-vt323">
      <div className="w-full max-w-md bg-black border border-red-900 p-8 rounded-xl shadow-[0_0_25px_rgba(255,0,0,0.6)]">
        <h1 className="text-3xl font-bold mb-6 text-red-600 text-center">Login</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
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
            Entrar
          </button>
        </form>

        {mensagem && <p className="mt-4 text-center text-red-400">{mensagem}</p>}
      </div>
    </div>
  );
}
