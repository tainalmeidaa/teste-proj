// Selecionando os elementos do HTML
let contador = 0;
const valorDisplay = document.getElementById('numero');
const btnMais = document.getElementById('btn-mais');
const btnMenos = document.getElementById('btn-menos');

// Função para atualizar a cor baseada no valor
function atualizarCor() {
    if (contador > 0) valorDisplay.style.color = "#28a745";
    else if (contador < 0) valorDisplay.style.color = "#dc3545";
    else valorDisplay.style.color = "#00d4ff";
}

// Evento de clique para somar
btnMais.addEventListener('click', () => {
    contador++;
    valorDisplay.innerText = contador;
    atualizarCor();
});

// Evento de clique para subtrair
btnMenos.addEventListener('click', () => {
    contador--;
    valorDisplay.innerText = contador;
    atualizarCor();
});
