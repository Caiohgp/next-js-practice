import { Home, User, Search } from 'lucide-react';
import Image from 'next/image';

const courses = [
  { 
    title: 'Ciência da Aprendizagem', 
    slug: 'learning-science', 
    image: '/learning-science.png' 
  },
  { 
    title: 'Ciência da Persuasão', 
    slug: 'persuasion', 
    image: '/persuasion.png' 
  },
  { 
    title: 'Mindset de Crescimento', 
    slug: 'mindset', 
    image: '/mindset.png' 
  },
];

export default function Dashboard() {
  const continueWatching = ["VENDAS", "DROPSHIPPING", "EMPREENDEDORISMO", "COMUNICAÇÃO"];

  return (
    <div className="flex min-h-screen bg-[#0a0a0a] text-white">
      {/* Sidebar */}
      <aside className="w-64 bg-[#0a0a0a] border-r border-zinc-800 p-6 flex flex-col">
        <div className="mb-10 text-xs font-bold tracking-widest text-zinc-500">Curso</div>

        <div className="flex flex-col items-center mb-8">
          <div className="w-16 h-16 bg-zinc-800 rounded-full mb-2 border border-zinc-700 flex items-center justify-center">
            <User size={32} className="text-zinc-500" />
          </div>
          <span className="text-xs text-zinc-400">Caio</span>
          <div className="w-full mt-4 h-1 bg-zinc-800 rounded-full overflow-hidden">
            <div className="bg-green-500 h-full w-1/3"></div>
          </div>
        </div>

        <nav className="space-y-4">
          <div className="flex items-center gap-3 text-green-500 font-medium cursor-pointer">
            <Home size={20} /> Início
          </div>
          <div className="flex items-center gap-3 text-zinc-400 hover:text-white cursor-pointer transition">
            <User size={20} /> Minha Conta
          </div>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        {/* Header/Search */}
        <header className="p-6 flex justify-center">
          <div className="relative w-full max-w-xl">
            <Search className="absolute left-3 top-2.5 text-zinc-500" size={18} />
            <input
              type="text"
              placeholder="Pesquisar cursos e aulas..."
              className="w-full bg-zinc-900 border border-zinc-800 rounded-full py-2 pl-10 pr-4 focus:outline-none focus:border-green-500"
            />
          </div>
        </header>

        <section className="px-8 py-4">
          <h2 className="text-lg font-semibold mb-4">Continuar progresso</h2>
          <div className="grid grid-cols-4 gap-4">
            {continueWatching.map((item) => (
              <div key={item} className="bg-[#141414] aspect-video rounded-md p-4 flex flex-col justify-between border border-transparent hover:border-zinc-700 transition cursor-pointer">
                <span className="text-xs font-bold text-center mt-4">
                  <Image src="/core.png" alt="core image" width={700} height={700} className="inline-block mr-2" />
                  
                </span>
                <div className="h-1  rounded-full text-center text-3xl my-8 w-full">
                  {item}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="px-8 py-8">
          <h2 className="text-lg font-semibold">Conteúdo Bônus</h2>
          <p className="text-md text-zinc-500 mb-6">Recursos exclusivos para os alunos</p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {courses.map((course) => (
              <div key={course.slug} className="relative group cursor-pointer rounded-lg overflow-hidden border border-zinc-800">
                <div className="aspect-[16/9] relative">
                  <Image
                    src={course.image}
                    alt={course.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {/* Overlay Gradient like in your reference image */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent"></div>

                  {/* Title on top of image 
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-white font-bold text-sm uppercase tracking-wider">
                      {course.title}
                    </h3>
                  </div>
                  */}
                </div>

              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}