// Espera o documento HTML carregar completamente
document.addEventListener("DOMContentLoaded", () => {

    // Seleciona todos os botões e cartões
    const filterButtons = document.querySelectorAll(".filter-btn");
    const professionalCards = document.querySelectorAll(".profissional-card");

    // -----------------------------------------------------------------
    // NOVO: Função para formatar o texto dos dias
    // -----------------------------------------------------------------
    function formatarDias(disponibilidadeStr) {
        // Usa Regex para encontrar os dias (Seg, Ter, Qua, etc.)
        const diasRegex = /(Seg|Ter|Qua|Qui|Sex|Sab|Dom)/g;
        
        // ".match()" cria um array com os dias encontrados: ["Seg", "Qua", "Sex"]
        const diasArray = disponibilidadeStr.match(diasRegex);
        
        // Se encontrou dias, junta o array com ", "
        if (diasArray) {
            return diasArray.join(', ');
        }
        
        // Se algo der errado, só retorna o texto original
        return disponibilidadeStr;
    }

    // -----------------------------------------------------------------
    // NOVO: Loop para preencher a disponibilidade formatada
    // -----------------------------------------------------------------
    professionalCards.forEach(card => {
        // Encontra o <p> da disponibilidade dentro do cartão
        const pElement = card.querySelector('.availability-text');
        
        if (pElement) {
            // Pega a disponibilidade "crua" (ex: "SegQuaSex") do data-attribute
            const disponibilidade = card.dataset.availability;
            
            // Formata o texto (ex: "Seg, Qua, Sex")
            const textoFormatado = formatarDias(disponibilidade);
            
            // Insere o HTML final no elemento
            // (O innerHTML é usado para manter a tag <strong>)
            pElement.innerHTML = `<strong>Disponibilidade:</strong> ${textoFormatado}`;
        }
    });

    // -----------------------------------------------------------------
    // CÓDIGO ANTIGO: Lógica para filtrar ao clicar nos botões
    // -----------------------------------------------------------------
    filterButtons.forEach(button => {
        button.addEventListener("click", () => {
            
            const selectedDay = button.dataset.day;

            // Atualiza o visual do botão ativo
            filterButtons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");

            // Lógica de Filtragem
            professionalCards.forEach(card => {
                const availability = card.dataset.availability;

                if (selectedDay === "Todos") {
                    card.style.display = "block";
                } else if (availability.includes(selectedDay)) {
                    card.style.display = "block";
                } else {
                    card.style.display = "none";
                }
            });
        });
    });

});