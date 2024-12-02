// Seleciona o botão e o parágrafo
const botao = document.getElementById('meuBotao');
const frase = document.getElementById('minhaFrase');

// Adiciona um event listener ao botão
botao.addEventListener('click', () => {
  // Oculta o parágrafo
  frase.style.display = 'none';
});