import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 font-sans dark:bg-black">
      <nav className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm sticky top-0 z-50 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <a href="/" className="text-xl font-semibold text-gray-900 dark:text-white">
                Seguro de Vida EUA
              </a>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <a href="/sobre" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
                Sobre
              </a>
              <a href="/blog" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
                Blog
              </a>
              <a href="/contato" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
                Contato
              </a>
            </div>
          </div>
        </div>
      </nav>

      <header className="bg-gradient-to-b from-indigo-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="display-4 font-bold mb-6">
            Seguro de Vida nos EUA para Brasileiros
          </h1>
          <p className="text-lg mb-8">
            Tudo o que você precisa saber sobre proteção familiar, repatriação, remessas e beneficiários internacionais – explicado em português claro e direto.
          </p>
          <div className="space-y-4 sm:space-y-0 sm:flex sm:justify-center">
            <a
              href="#guia"
              className="bg-white/20 hover:bg-white/30 dark:bg-white/10 dark:hover:bg-white/20 px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Baixe nosso guia gratuito
            </a>
            <a
              href="#newsletter"
              className="border border-white/30 hover:border-white/50 dark:border-white/20 dark:hover:border-white/40 px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Receba novidades por e-mail
            </a>
          </div>
        </div>
      </header>

      <section id="como-funciona" className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Como funciona?
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                1. Entenda suas necessidades
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Avalie sua situação: família no Brasil, remessas mensais, desejo de repatriação e plano de longo prazo.
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                2. Escolha a apólice certa
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Compare term life, whole life, universal e indexed universal life considerando seus objetivos transfronteiriços.
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                3. Proteja sua família
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Tenha tranquilidade sabendo que seus entes queridos serão amparados, seja nos EUA ou no Brasil.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="para-que-e" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Para quem é este blog?
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="text-center">
              <div className="w-20 h-20 bg-indigo-600 text-white rounded-full flex items-center justify-center mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                Brasileiros imigrantes
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Que vivem nos EUA e enviam dinheiro para o Brasil ou planejam ser enterrados lá.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-indigo-600 text-white rounded-full flex items-center justify-center mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                Famílias com bens em dois países
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Que precisam planejar a sucessão considerando leis brasileiras e americanas.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-indigo-600 text-white rounded-full flex items-center justify-center mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                Quem busca orientação em português
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Prefere explicações claras sem jargões de seguradoras americanas.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="ultimos-artigos" className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Últimos artigos
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* Placeholder cards - we will replace with real blog posts later */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                  Guia Completo: Term Life vs. Seguro Permanente para Brasileiros
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Descubra qual tipo de apólice faz mais sentido considerando suas remessas para o Brasil e planos de longo prazo.
                </p>
                <a href="#" className="text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-300 font-medium">
                  Ler artigo →
                </a>
              </div>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                  Repatriação: Quanto reservar e como evitar surpresas
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Cálculo dos custos de traslado internacional por estado brasileiro e dicas para escolher o beneficiário certo.
                </p>
                <a href="#" className="text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-300 font-medium">
                  Ler artigo →
                </a>
              </div>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                  Beneficiário internacional: Passo a passo para nomear parentes no Brasil
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Evite perda de até 25% com impostos e taxa de transferência seguindo estas orientações práticas.
                </p>
                <a href="#" className="text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-300 font-medium">
                  Ler artigo →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="guia" className="py-20 bg-gradient-to-b from-indigo-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Receba nosso guia gratuito
          </h2>
          <p className="text-lg text-center mb-8 max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
            5 erros que brasileiros cometem ao escolher seguro de vida nos EUA – e como evitá-los.
          </p>
          <form className="max-w-md mx-auto space-y-4">
            <div className="flex space-x-2">
              <input
                type="email"
                placeholder="Seu melhor e-mail"
                className="flex-1 min-w-0 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 text-gray-900 dark:text-white"
                required
              />
              <button
                type="submit"
                className="bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white font-medium py-3 px-6 rounded-lg transition-colors"
              >
                Baixar guia
              </button>
            </div>
            <p className="text-sm text-center text-gray-500 dark:text-gray-400">
              Nunca compartilharemos seu e-mail. Você pode se descadastrar a qualquer momento.
            </p>
          </form>
        </div>
      </section>

      <section id="newsletter" className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Fique por dentro das novidades
          </h2>
          <p className="text-lg text-center mb-8 max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
            Receba artigos exclusivos, atualizações de legislação e dicas práticas direto na sua caixa de entrada.
          </p>
          <form className="max-w-md mx-auto space-y-4">
            <div className="flex space-x-2">
              <input
                type="email"
                placeholder="Seu e-mail"
                className="flex-1 min-w-0 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 text-gray-900 dark:text-white"
                required
              />
              <button
                type="submit"
                className="bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white font-medium py-3 px-6 rounded-lg transition-colors"
              >
                Inscrever-se
              </button>
            </div>
            <p className="text-sm text-center text-gray-500 dark:text-gray-400">
              Enviamos no máximo um e-mail por semana. Seu e-mail está seguro conosco.
            </p>
          </form>
        </div>
      </section>

      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <h3 className="font-semibold mb-4 text-white">Seguro de Vida EUA</h3>
              <p className="text-gray-400">
                Guia independente para brasileiros imigrantes sobre proteção familiar transfronteiriça.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold mb-4 text-white">Navegação</h3>
              <a href="/" className="block hover:text-white transition-colors">Início</a>
              <a href="/sobre" className="block hover:text-white transition-colors">Sobre</a>
              <a href="/blog" className="block hover:text-white transition-colors">Blog</a>
              <a href="/contato" className="block hover:text-white transition-colors">Contato</a>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold mb-4 text-white">Tópicos</h3>
              <a href="#" className="block hover:text-white transition-colors">Repatriação</a>
              <a href="#" className="block hover:text-white transition-colors">Remessas</a>
              <a href="#" className="block hover:text-white transition-colors">Beneficiários internacionais</a>
              <a href="#" className="block hover:text-white transition-colors">Impostos Brasil-EUA</a>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold mb-4 text-white">Contato</h3>
              <p className="flex items-center space-x-2 text-gray-400">
                <span>📧</span>
                <span>contato@segurovidaeua.com</span>
              </p>
            </div>
          </div>
          <div className="mt-10 pt-8 border-t border-gray-800 text-center text-gray-500">
            &copy; {new Date().getFullYear()} Seguro de Vida EUA. Todos os direitos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
}
