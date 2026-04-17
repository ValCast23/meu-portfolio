
const meusProjetos = [
    { 
        nome: "Rótulo Erva-doce", 
        descricao: "Design de Etiquetas Para Organizadores.",
        imagem: "imagens/erva-doce.png" // Caminho para a imagem
    },
    { 
        nome: "Identidade Visual Para Casamentos", 
        descricao: "Papelaria fina e monograma para o casal A e M.",
        imagem: "imagens/casamento.png" 
    },
    { 
        nome: "Logo Delícias da Lúcia", 
        descricao: "Criação de marca para confeitaria artesanal.",
        imagem: "imagens/delicias-lucia.png" 
    }
];


const lista = document.getElementById("lista-projetos");

meusProjetos.forEach(projeto => {
    // elemento div para o card
    const card = document.createElement("div");
    card.classList.add("card");
    
    // imagem, o título e a descrição no card
    card.innerHTML = `
        <img src="${projeto.imagem}" alt="Pré-visualização do ${projeto.nome}" class="imagem-projeto">
        <div class="card-conteudo">
            <h3>${projeto.nome}</h3>
            <p>${projeto.descricao}</p>
        </div>
    `;
    

    lista.appendChild(card);
});