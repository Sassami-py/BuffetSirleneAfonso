// Referências aos elementos das seções e da navegação
const sectionCardapio = document.getElementById('sectionCardapio');
const sectionContatos = document.getElementById('sectionContatos');
const navCardapio = document.getElementById('navCardapio');
const navContatos = document.getElementById('navContatos');

// Função para alternar entre as seções
function showSection(section) {
  sectionCardapio.classList.remove('active');
  sectionContatos.classList.remove('active');
  section.classList.add('active');
}

// Eventos para os botões de navegação
navCardapio.addEventListener('click', () => showSection(sectionCardapio));
navContatos.addEventListener('click', () => showSection(sectionContatos));

// Referências ao modal e seus elementos
const modal = document.getElementById('modal');
const modalBody = document.getElementById('modal-body');
const modalClose = document.getElementById('modal-close');
const btnWhatsapp = document.getElementById('btnWhatsapp');

// Dados dos cardápios sem imagens, apenas texto
const cardapios = {
  detalheChurrasco: {
    titulo: "Cardápio de Churrasco",
    conteudo: `
      <h3>Itens:</h3>
      <ul>
        <li>Arroz</li>
        <li>Feijão Tropeiro</li>
        <li>Mandioca</li>
        <li>Vinagrete</li>
        <li>Contra Filé</li>
        <li>Fraldinha</li>
        <li>Linguiça Toscan</li>
        <li>Coxinha da Asa</li>
      </ul>
    `,
    whatsappMsg: "Olá, gostaria de solicitar um orçamento para o Cardápio de Churrasco"
  },
  detalheJantar: {
    titulo: "Cardápio de Jantar",
    conteudo: `
      <h3>Entrada:</h3>
      <ul>
        <li>Salaminhi</li>
        <li>Lombo Canadense</li>
        <li>Peito de Peru</li>
        <li>Mussarela</li>
        <li>Provolone</li>
        <li>Parmesão</li>
        <li>Brie com Mel e Castanhas</li>
        <li>Frutas</li>
      </ul>
      <h3>Jantar:</h3>
      <ul>
        <li>Arroz</li>
        <li>Salada Tropical</li>
        <li>Filé de Frango ao Molho de 4 Queijos</li>
        <li>Lagarto ao Molho Madeira</li>
      </ul>
    `,
    whatsappMsg: "Olá, gostaria de solicitar um orçamento para o Cardápio de Jantar"
  },
  detalheFeijoada: {
    titulo: "Cardápio de Feijoada",
    conteudo: `
      <h3>Entradas:</h3>
      <ul>
        <li>Torresmo</li>
        <li>Fritas</li>
        <li>Calabresa Acebolada</li>
      </ul>
      <h3>Prato Principal:</h3>
      <ul>
        <li>Arroz</li>
        <li>Feijoada Completa</li>
        <li>Vinagrete</li>
        <li>Farofa de Banana</li>
        <li>Couve Refogada</li>
        <li>Laranja e Abacaxi Picados</li>
      </ul>
    `,
    whatsappMsg: "Olá, gostaria de solicitar um orçamento para o Cardápio de Feijoada"
  }
};

// Função para abrir o modal com os detalhes do cardápio
function openModal(detailId) {
  const dados = cardapios[detailId];
  if (dados) {
    modalBody.innerHTML = `<h2>${dados.titulo}</h2>${dados.conteudo}`;
    const numeroWhats = "62991674061"; // Número da dona do buffet
    btnWhatsapp.onclick = function() {
      const url = `https://wa.me/${numeroWhats}?text=${encodeURIComponent(dados.whatsappMsg)}`;
      window.open(url, '_blank');
    };
    modal.style.display = "block";
  }
}

// Evento para fechar o modal ao clicar no "X"
modalClose.addEventListener('click', () => {
  modal.style.display = "none";
});

// Fecha o modal se o usuário clicar fora dele
window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});

// Adiciona eventos para os itens do cardápio na lista
const itensCardapio = document.querySelectorAll('.cardapio-item');
itensCardapio.forEach(item => {
  item.addEventListener('click', (e) => {
    e.preventDefault();
    const detailId = item.getAttribute('data-detail');
    openModal(detailId);
  });
});
