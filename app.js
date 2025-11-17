// Espera o documento HTML carregar completamente antes de rodar o script
document.addEventListener("DOMContentLoaded", () => {

    // 1. Seleciona todos os botões de filtro
    const filterButtons = document.querySelectorAll(".filter-btn");
    
    // 2. Seleciona todos os cartões de profissionais
    const professionalCards = document.querySelectorAll(".profissional-card");

    // 3. Adiciona um "ouvinte" de clique para cada botão
    filterButtons.forEach(button => {
        button.addEventListener("click", () => {
            
            // Pega o dia do atributo "data-day" do botão clicado
            const selectedDay = button.dataset.day;

            // --- Atualiza o visual do botão ativo ---
            // Remove a classe 'active' de todos os botões
            filterButtons.forEach(btn => btn.classList.remove("active"));
            // Adiciona a classe 'active' apenas no botão que foi clicado
            button.classList.add("active");

            // --- Lógica de Filtragem ---
            // Passa por cada cartão de profissional
            professionalCards.forEach(card => {
                // Pega os dias disponíveis do atributo "data-availability"
                const availability = card.dataset.availability;

                // Compara o dia selecionado com a disponibilidade do cartão
                if (selectedDay === "Todos") {
                    // Se "Todos" for clicado, mostra todos os cartões
                    card.style.display = "block";
                } else if (availability.includes(selectedDay)) {
                    // Se a disponibilidade INCLUI o dia selecionado, mostra o cartão
                    card.style.display = "block";
                } else {
                    // Senão, esconde o cartão
                    card.style.display = "none";
                }
            });
        });
    });
});