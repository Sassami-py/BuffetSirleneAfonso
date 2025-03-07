/* Estilo do body e da imagem de fundo */
body {
  margin: 0;
  font-family: Arial, sans-serif;
  background: url('sua-imagem-de-fundo.jpg') no-repeat center center fixed; /* Use o arquivo "sua-imagem-de-fundo.jpg" */
  background-size: cover;
  color: #333;
}

/* Barra de navegação fixa */
nav {
  background-color: rgba(255, 255, 255, 0.8);
  padding: 10px;
  text-align: center;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 10;
}

nav button {
  background-color: #0078D7;
  color: white;
  border: none;
  padding: 10px 20px;
  margin: 5px;
  cursor: pointer;
  font-size: 16px;
  border-radius: 4px;
}

/* Seções: caixa centralizada em vez de tela inteira */
.section {
  display: none;
  max-width: 800px;
  margin: 120px auto 20px; /* espaço acima para a nav */
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.95);
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
}

.section.active {
  display: block;
}

h1 {
  text-align: center;
  font-size: 2em;
  margin-top: 0;
}

/* Estilo dos links da lista do cardápio */
ul {
  list-style-type: none;
  padding: 0;
  text-align: center;
}

ul li {
  margin: 10px 0;
}

ul li a {
  text-decoration: none;
  color: #0078D7;
  font-size: 18px;
}

/* Modal para detalhes do cardápio */
.modal {
  display: none; /* oculto inicialmente */
  position: fixed;
  z-index: 20;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0,0,0,0.5);
}

.modal-content {
  background-color: #fefefe;
  margin: 5% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 90%;
  max-width: 600px;
  position: relative;
  border-radius: 8px;
}

.modal-close {
  color: #aaa;
  position: absolute;
  right: 10px;
  top: 10px;
  font-size: 28px;
  font-weight: bold;
  cursor: pointer;
}

#btnWhatsapp {
  background-color: #25D366;
  color: white;
  border: none;
  padding: 10px 20px;
  margin-top: 20px;
  cursor: pointer;
  font-size: 16px;
  border-radius: 4px;
  display: block;
  width: 100%;
}

/* Seção de contatos: exibir ícones em lista, maiores e um abaixo do outro */
.contacts-container {
  text-align: center;
  padding: 40px;
}

.contact-icon {
  display: block;
  margin: 30px auto; /* aumenta o espaçamento vertical */
  width: 200px; /* aumenta o tamanho dos ícones */
}

/* Tabelas de cardápio: aumentar visualização e espaçamento */
.menu-table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
}

.menu-table td {
  vertical-align: top;
  padding: 10px;
  font-size: 1.1em;
}

.menu-table img {
  width: 80px;
  height: auto;
  display: block;
}

.menu-section-title {
  margin-top: 20px;
  font-weight: bold;
  text-decoration: underline;
  font-size: 1.2em;
}
