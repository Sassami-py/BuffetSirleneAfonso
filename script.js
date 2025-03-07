// Variáveis para controle das seções
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

// Eventos de navegação
navCardapio.addEventListener('click', () => showSection(sectionCardapio));
navContatos.addEventListener('click', () => showSection(sectionContatos));

// Modal
const modal = document.getElementById('modal');
const modalBody = document.getElementById('modal-body');
const modalClose = document.getElementById('modal-close');
const btnWhatsapp = document.getElementById('btnWhatsapp');

// Dados dos cardápios com listas de itens e espaço para imagens
const cardapios = {
  detalheChurrasco: {
    titulo: "Cardápio de Churrasco",
    conteudo: `
      <table class="menu-table">
        <tr>
          <td><img src="placeholder.jpg" alt="Arroz"></td>
          <td>Arroz</td>
        </tr>
        <tr>
          <td><img src="placeholder.jpg" alt="Feijão Tropeiro"></td>
          <td>Feijão Tropeiro</td>
        </tr>
        <tr>
          <td><img src="placeholder.jpg" alt="Mandioca"></td>
          <td>Mandioca</td>
        </tr>
        <tr>
          <td><img src="placeholder.jpg" alt="Vinagrete"></td>
          <td>Vinagrete</td>
        </tr>
        <tr>
          <td><img src="placeholder.jpg" alt="Contra Filé"></td>
          <td>Contra Filé</td>
        </tr>
        <tr>
          <td><img src="placeholder.jpg" alt="Fraldinha"></td>
          <td>Fraldinha</td>
        </tr>
        <tr>
          <td><img src="placeholder.jpg" alt="Linguiça Toscan"></td>
          <td>Linguiça Toscan</td>
        </tr>
        <tr>
          <td><img src="placeholder.jpg" alt="Coxinha da Asa"></td>
          <td>Coxinha da Asa</td>
        </tr>
      </table>
    `,
    whatsappMsg: "Olá, gostaria de solicitar um orçamento para o Cardápio de Churrasco"
  },
  detalheJantar: {
    titulo: "Cardápio de Jantar",
    conteudo: `
      <p class="menu-section-title">Entrada:</p>
      <table class="menu-table">
        <tr>
          <td><img src="placeholder.jpg" alt="Salaminhi"></td>
          <td>Salaminhi</td>
        </tr>
        <tr>
          <td><img src="placeholder.jpg" alt="Lombo Canadense"></td>
          <td>Lombo Canadense</td>
        </tr>
        <tr>
          <td><img src="placeholder.jpg" alt="Peito de Peru"></td>
          <td>Peito de Peru</td>
        </tr>
        <tr>
          <td><img src="placeholder.jpg" alt="Mussarela"></td>
          <td>Mussarela</td>
        </tr>
        <tr>
          <td><img src="placeholder.jpg" alt="Provolone"></td>
          <td>Provolone</td>
        </tr>
        <tr>
          <td><img src="placeholder.jpg" alt="Parmesão"></td>
          <td>Parmesão</td>
        </tr>
        <tr>
          <td><img src="placeholder.jpg" alt="Brie com Mel e Castanhas"></td>
          <td>Brie com Mel e Castanhas</td>
        </tr>
        <tr>
          <td><img src="placeholder.jpg" alt="Frutas"></td>
          <td>Frutas</td>
        </tr>
      </table>
      <p class="menu-section-title">Jantar:</p>
      <table class="menu-table">
        <tr>
          <td><img src="placeholder.jpg" alt="Arroz"></td>
          <td>Arroz</td>
        </tr>
        <tr>
          <td><img src="placeholder.jpg" alt="Salada Tropical"></td>
          <td>Salada Tropical</td>
        </tr>
        <tr>
          <td><img src="placeholder.jpg" alt="Filé de Frango ao Molho de 4 Queijos"></td>
          <td>Filé de Frango ao Molho de 4 Queijos</td>
        </tr>
        <tr>
          <td><img src="placeholder.jpg" alt="Lagarto ao Molho Madeira"></td>
          <td>Lagarto ao Molho Madeira</td>
        </tr>
      </table>
    `,
    whatsappMsg: "Olá, gostaria de solicitar um orçamento para o Cardápio de Jantar"
  },
  detalheFeijoada: {
    titulo: "Cardápio de Feijoada",
    conteudo: `
      <p class="menu-section-title">Entradas:</p>
      <table class="menu-table">
        <tr>
          <td><img src="placeholder.jpg" alt="Torresmo"></td>
          <td>Torresmo</td>
        </tr>
        <tr>
          <td><img src="placeholder.jpg" alt="Fritas"></td>
          <td>Fritas</td>
        </tr>
        <tr>
          <td><img src="placeholder.jpg" alt="Calabresa Acebolada"></td>
          <td>Calabresa Acebolada</td>
        </tr>
      </table>
      <p class="menu-section-title">Prato Principal:</p>
      <table class="menu-table">
        <tr>
          <td><img src="placeholder.jpg" alt="Arroz"></td>
          <td>Arroz</td>
        </tr>
        <tr>
          <td><img src="placeholder.jpg" alt="Feijoada Completa"></td>
          <td>Feijoada Completa</td>
        </tr>
        <tr>
          <td><img src="placeholder.jpg" alt="Vinagrete"></td>
          <td>Vinagrete</td>
        </tr>
        <tr>
          <td><img src="placeholder.jpg" alt="Farofa de Banana"></td>
          <td>Farofa de Banana</td>
        </tr>
        <tr>
          <td><img src="placeholder.jpg" alt="Couve Refogada"></td>
          <td>Couve Refogada</td>
        </tr>
        <tr>
          <td><img src="placeholder.jpg" alt="Laranja e Abacaxi Picados"></td>
          <td>Laranja e Abacaxi Picados</td>
        </tr>
      </table>
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

// Fechar o modal ao clicar no "X"
modalClose.addEventListener('click', () => {
  modal.style.display = "none";
});

// Fechar o modal se o usuário clicar fora dele
window.addEventListener('click', (event) => {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});

// Adicionar eventos para os itens do cardápio
const itensCardapio = document.querySelectorAll('.cardapio-item');
itensCardapio.forEach(item => {
  item.addEventListener('click', (e) => {
    e.preventDefault();
    const detailId = item.getAttribute('data-detail');
    openModal(detailId);
  });
});

// Adicionar eventos para os ícones de contatos
const contactIcons = document.querySelectorAll('.contact-icon');
contactIcons.forEach(icon => {
  icon.addEventListener('click', () => {
    const link = icon.getAttribute('data-link');
    window.open(link, '_blank');
  });
});
