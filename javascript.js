// Função para mudar o texto
function mudarTexto() {
    const texto = document.getElementById('texto');
    if (texto.textContent.includes("Clique")) {
        texto.textContent = "cinza";
        texto.style.color = "green";
    } else {
        texto.textContent = "verde";
        texto.style.color = "black";
    }
}

// Funções para mudar a cor do botão
function mudarCor(botao) {
    botao.style.backgroundColor = "#e74c3c";
}

function voltarCor(botao) {
    botao.style.backgroundColor = "#3498db";
}