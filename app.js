document.getElementById('acao').addEventListener('click', () => {
  const quando = new Date().toLocaleString();
  document.getElementById('saida').textContent = `Funcionando! ${quando}`;
});