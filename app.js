// Dados fictícios — ajuste como quiser
const diaristas = [
  {
    nome: "Ana Souza",
    cidade: "Fortaleza",
    funcoes: ["Diarista", "Passadeira"],
    disponibilidade: ["Seg", "Qua", "Sex"]
  },
  {
    nome: "Beatriz Lima",
    cidade: "Caucaia",
    funcoes: ["Cozinheira", "Diarista"],
    disponibilidade: ["Ter", "Qui", "Sab"]
  },
  {
    nome: "Carla Nascimento",
    cidade: "Maracanaú",
    funcoes: ["Babá", "Cuidadora de idoso"],
    disponibilidade: ["Seg", "Ter", "Qui"]
  },
  {
    nome: "Daniela Alves",
    cidade: "Fortaleza",
    funcoes: ["Diarista"],
    disponibilidade: ["Qua", "Sex", "Dom"]
  }
];

// Dias usados no filtro
const DIAS = ["Seg", "Ter", "Qua", "Qui", "Sex", "Sab", "Dom"];

let filtroDia = null;

function renderFiltros() {
  const wrap = document.getElementById("filtros");
  wrap.innerHTML = "";
  const todos = document.createElement("button");
  todos.textContent = "Todos";
  todos.className = filtroDia === null ? "active" : "";
  todos.onclick = () => { filtroDia = null; render(); };
  wrap.appendChild(todos);

  DIAS.forEach(d => {
    const btn = document.createElement("button");
    btn.textContent = d;
    btn.className = filtroDia === d ? "active" : "";
    btn.onclick = () => { filtroDia = d; render(); };
    wrap.appendChild(btn);
  });
}

function cardHtml(p) {
  const funcoes = p.funcoes.map(f => `<span class="tag">${f}</span>`).join("");
  const dias = p.disponibilidade.map(d => `<span class="tag">${d}</span>`).join("");
  return `
    <article class="card" aria-label="${p.nome}">
      <h3>${p.nome}</h3>
      <p class="muted">${p.cidade}</p>
      <p>${funcoes}</p>
      <p><strong>Disponibilidade:</strong> ${dias}</p>
    </article>
  `;
}

function renderLista() {
  const lista = document.getElementById("lista");
  const dados = filtroDia
    ? diaristas.filter(p => p.disponibilidade.includes(filtroDia))
    : diaristas;
  lista.innerHTML = dados.map(cardHtml).join("");
}

function render() {
  renderFiltros();
  renderLista();
}

render();