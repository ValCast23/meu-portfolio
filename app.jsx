import './App.css'

// 1. COMPONENTE DE CARD (Componentização)
function ProjetoCard({ projeto }) {
  return (
    <div className="card">
      <img src={projeto.imagem} alt={projeto.nome} className="imagem-projeto" />
      <div className="card-conteudo">
        <h3>{projeto.nome}</h3>
        <p>{projeto.descricao}</p>
      </div>
    </div>
  )
}

// 2. SEÇÃO DE PROJETOS (Renderização de Dados Dinâmicos)
function SecaoProjetos() {
  // Array de objetos solicitado
  const meusProjetos = [
    { 
      id: 1,
      nome: "Rótulo Erva-doce", 
      descricao: "Design de Etiquetas Para Organizadores.",
      imagem: "/imagens/erva-doce.png" 
    },
    { 
      id: 2,
      nome: "Identidade Visual Casamento", 
      descricao: "Papelaria fina para Adayane e Matheus.",
      imagem: "/imagens/casamento.png" 
    },
    { 
      id: 3,
      nome: "Logo Delícias da Lúcia", 
      descricao: "Criação de marca para confeitaria.",
      imagem: "/imagens/delicias-lucia.png" 
    }
  ];

  return (
    <section id="projetos">
      <h2>Meus Projetos</h2>
      <div id="lista-projetos">
        {meusProjetos.map(proj => (
          <ProjetoCard key={proj.id} projeto={proj} />
        ))}
      </div>
    </section>
  );
}

export default function App() {
  return (
    <div className="portfolio">
      <header>
        <nav>
          <ul>
            <li><a href="#sobre">Sobre Mim</a></li>
            <li><a href="#projetos">Projetos</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <section id="sobre">
          <h1>Sobre Mim</h1>
          <img src="/imagens/sua-foto.jpg" alt="Minha Foto" className="foto-perfil" />
          <p>Tecnóloga em Alimentos e graduanda em Tecnologia em Sistemas para Internet.</p>
        </section>
        <SecaoProjetos />
      </main>
      <footer>
        <p>&copy; 2026 - Desenvolvido com React</p>
      </footer>
    </div>
  )
}