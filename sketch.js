// animation.js

// Configurações iniciais
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

const cardWidth = 100;
const cardHeight = 150;
const cardImage = new Image();
cardImage.src = 'https://via.placeholder.com/100x150.png?text=Card'; // Substitua por sua imagem de carta

let x = 0; // Posição inicial x
const speed = 2; // Velocidade da animação

function drawCard(x) {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Limpa o canvas
    ctx.drawImage(cardImage, x, canvas.height / 2 - cardHeight / 2, cardWidth, cardHeight); // Desenha a carta
}

function animate() {
    x += speed; // Atualiza a posição x
    if (x > canvas.width) {
        x = -cardWidth; // Reposiciona a carta quando sai da tela
    }
    drawCard(x); // Desenha a carta na nova posição
    requestAnimationFrame(animate); // Solicita o próximo quadro da animação
}

cardImage.onload = () => {
    animate(); // Inicia a animação quando a imagem estiver carregada
};
