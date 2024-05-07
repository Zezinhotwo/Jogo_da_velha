import Gameboard from './index.js';

const jogo = Gameboard();

const quadrados = document.querySelectorAll('.i');

quadrados.forEach((quadrado) => {
    quadrado.addEventListener('click', (e) => {
        const quadradoLinha = Number(quadrado.dataset.linha);
        const quadradoColuna = Number(quadrado.dataset.coluna);
        const resultado = jogo.jogar(quadradoLinha, quadradoColuna);

        if (resultado === "X") {
            // e.target.style.background = 'red';
            e.target.classList.add("xis");
        } else if (resultado === "O") {
            // e.target.style.background = 'blue';
            e.target.classList.add("bola");
        }

        console.log(resultado); // Imprimir o resultado do jogo no console

        // Incrementar o número do quadrado após cada jogada
        jogo.quadro++;

        // Verificar se o jogo terminou e tomar as medidas necessárias, se aplicável
        // Exemplo: exibir uma mensagem de vitória, desabilitar a interação com os quadrados, etc.
    });
});

const botaoReset = document.querySelector('button');

botaoReset.addEventListener('click', () => {
    window.location.reload();
});