import Link from "next/link";

export default function Blog() {
  return (
    <div className="min-h-screen bg-zinc-50 font-sans dark:bg-black">
      <nav className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm sticky top-0 z-50 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="text-xl font-semibold text-gray-900 dark:text-white">
                Seguro de Vida EUA
              </Link>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <Link href="/sobre" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
                Sobre
              </Link>
              <Link href="/blog" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors font-bold">
                Blog
              </Link>
              <Link href="/contato" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
                Contato
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <header className="bg-gradient-to-b from-indigo-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="display-4 font-bold mb-6">
            Blog
          </h1>
          <p className="text-lg mb-8">
            Artigos práticos sobre seguro de vida nos EUA para brasileiros imigrantes.
          </p>
        </div>
      </header>

      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Últimos artigos
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <article className="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                  Como o seguro de vida ajudou uma família brasileira a trazer o ente querido de volta para o Brasil
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Historia real de como um pagamento de seguro de vida fez possível o traslado internacional para o enterro no homeland, custando menos que o esperado.
                </p>
                <Link href="/blog/repatriacao-historia-real" className="text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-300 font-medium">
                  Ler artigo →
                </Link>
              </div>
            </article>
            <article className="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                  Repatriação: Quanto reservar e como evitar surpresas
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Cálculo dos custos de traslado internacional por estado brasileiro e dicas para escolher o beneficiário certo.
                </p>
                <Link href="/blog/repatriacao-quanto-reservar" className="text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-300 font-medium">
                  Ler artigo →
                </Link>
              </div>
            </article>
            <article className="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                  Beneficiário internacional: Passo a passo para nomear parentes no Brasil
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Evite perda de até 25% com impostos e taxa de transferência seguindo estas orientações práticas.
                </p>
                <Link href="/blog/beneficiario-internacional-passo-a-passo" className="text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-300 font-medium">
                  Ler artigo →
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
}