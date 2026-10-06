import Link from "next/link";

export default function Sobre() {
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
              <Link href="/blog" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
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
            Sobre este blog
          </h1>
          <p className="text-lg mb-8">
            Seguro de Vida EUA foi criado para ajudar brasileiros imigrantes a entenderem as opções de seguro de vida nos Estados Unidos, considerando suas necessidades específicas como repatriação, remessas para o Brasil e beneficiários internacionais.
          </p>
        </div>
      </header>

      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Nossa missão
          </h2>
          <p className="text-lg text-center mb-8 max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
            Fornecer informações claras, precisas e úteis em português sobre seguro de vida nos EUA, ajudando famílias a tomar decisões informadas que protejam seus entes queridos em ambos os países.
          </p>
        </div>
      </section>

      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Por que confiar neste conteúdo?
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                Independente
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Não somos uma seguradora ou corretora. Nosso objetivo é educar, não vender produtos específicos.
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                Foco no imigrante brasileiro
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Entendemos as particularidades de quem vive nos EUA e tem vínculos financeiros, familiares e emocionais com o Brasil.
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                Atualizado regularmente
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Acompanhamos mudanças na legislação, produtos de seguro e práticas do mercado para manter o conteúdo relevante.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Como apoiamos este trabalho
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Este blog é mantido independente. Podemos receber comissão de corretoras parceiras quando você decide trabalhar com elas após ler nosso conteúdo, mas isso nunca afeta nossas recomendações ou análises.
          </p>
        </div>
      </section>
    </div>
  );
}