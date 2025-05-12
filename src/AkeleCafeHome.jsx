import React from "react";

export default function AkeleCafeHome() {
  return (
    <div className="min-h-screen bg-[#3A5D38] text-white font-sans">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 border-b border-[#E6D6C2]">
        <div className="text-2xl font-bold tracking-wide">Akele Café</div>
        <nav className="space-x-4 text-sm">
          <a href="#shop" className="hover:underline">Loja</a>
          <a href="#plans" className="hover:underline">Assinaturas</a>
          <a href="#about" className="hover:underline">Sobre</a>
          <a href="#contact" className="hover:underline">Contato</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center text-center bg-cover bg-center" style={{ backgroundImage: "url('/images/bg-cafe-wall.jpg')" }}>
        <div className="bg-black bg-opacity-50 p-8 rounded-xl">
          <h1 className="text-4xl font-bold mb-4">Sinta o aroma. Prove a origem.</h1>
          <button className="bg-[#E6D6C2] text-[#1A1A1A] hover:bg-[#d4c2ae] px-6 py-2 rounded" >Conheça nossos grãos</button>
        </div>
      </section>

      {/* Produtos em destaque */}
      <section id="shop" className="bg-white text-[#1A1A1A] py-12 px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Grãos em Destaque</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-[#E6D6C2] p-6 rounded-xl shadow-md">
              <img src={`/images/cafe-${i}.jpg`} alt={`Grão de café ${i}`} className="w-full h-48 object-cover rounded" />
              <h3 className="text-xl font-semibold mt-4">Café Especial {i}</h3>
              <p className="text-sm mt-2">Grão 100% arábica de origem única, sabor equilibrado.</p>
              <button className="mt-4 bg-[#3A5D38] text-white hover:bg-[#2f4b2f] w-full py-2 rounded">Adicionar ao carrinho</button>
            </div>
          ))}
        </div>
      </section>

      {/* Sobre */}
      <section id="about" className="py-16 px-6 bg-[#3A5D38] text-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Nossa História</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <img src="/images/cafeteria-interior.jpg" alt="Interior do Akele Café" className="rounded-lg shadow-lg" />
            <p className="text-lg leading-relaxed">
              O Akele Café nasceu da paixão por cafés especiais e experiências memoráveis. Trazemos até você grãos selecionados direto dos produtores com compromisso de qualidade e sustentabilidade.
            </p>
          </div>
        </div>
      </section>

      {/* Contato */}
      <section id="contact" className="bg-[#E6D6C2] text-[#1A1A1A] py-12 px-6">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Fale com a gente</h2>
          <p className="mb-6">Dúvidas, pedidos personalizados ou parcerias? Estamos aqui.</p>
          <form className="space-y-4">
            <input type="text" placeholder="Nome" className="w-full p-2 border rounded" />
            <input type="email" placeholder="Email" className="w-full p-2 border rounded" />
            <textarea placeholder="Mensagem" className="w-full p-2 border rounded h-32" />
            <button className="bg-[#3A5D38] text-white hover:bg-[#2f4b2f] w-full py-2 rounded">Enviar</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 bg-[#1A1A1A] text-[#E6D6C2] text-sm">
        © {new Date().getFullYear()} Akele Café. Todos os direitos reservados.
      </footer>
    </div>
  );
}
