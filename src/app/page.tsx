export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-black text-red-700 font-[cinzel] p-8">
      <h1 className="text-5xl font-extrabold mb-6 text-red-700 drop-shadow-lg">
        Bem-vindo à Nightmare 🕷️
      </h1>

      <p className="text-lg text-gray-200 mb-8 text-center max-w-2xl">
        Onde a escuridão encontra os melhores preços.  
        Faça login, cadastre-se... se tiver coragem.
      </p>

      <div className="flex space-x-6">
        <a
          href="/produtos"
          className="px-6 py-3 bg-red-700 text-black rounded-xl shadow-lg hover:bg-red-900 transition font-bold"
        >
          Ver Produtos
        </a>
        <a
          href="/login"
          className="px-6 py-3 bg-gray-800 text-red-700 border border-red-700 rounded-xl shadow-lg hover:bg-gray-900 transition font-bold"
        >
          Login
        </a>
      </div>
    </main>
  );
}
