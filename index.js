// Você armazenará o tabuleiro de jogo como um array dentro de um objeto Gameboard, então comece por aí!

// Seu principal objetivo aqui é ter o mínimo de código global possível.

// Tente colocar o máximo que puder dentro das fábricas. 

// Neste projeto, pense cuidadosamente sobre onde cada parte da lógica deve residir.

// Concentre-se primeiro em colocar um jogo funcional no console.


// varificar se ja foi marcado
export default function Gameboard() {
    const linha = 3;
    const coluna = 3;
    const quadro = [];

    for (let i = 0; i < linha; i++) {
        quadro[i] = [];
        for (let j = 0; j < coluna; j++) {
            quadro[i][j] = null;
        }
    }

    const player = ["X", "O"];

    const jogar = function (l, c) {
        if (l >= linha || c >= coluna) {
            return 'Posição inválida';
        }

        if (quadro[l][c] !== null) {
            return 'Posição ocupada';
        }

        const marcar = quadro[l][c] = player[0];
        const vencedor = verificarVencedor(quadro); // Verificar se há um vencedor
        const ganhador = document.querySelector('.resu');
        if (vencedor) {
            console.log(`O jogado Deu ${vencedor}`);
            ganhador.innerHTML = `<strong>${vencedor}</strong>`
            return true;
        }
        imprimirTabuleiro();
        player.push(player.shift()); // Alternando entre os jogadores
        return marcar;
    };

    const verificarVencedor = function (quadro) {
        // Verificar se houve um vencedor
        for (let i = 0; i < 3; i++) {
            if (quadro[i][0] === quadro[i][1] && quadro[i][1] === quadro[i][2] && quadro[i][0] !== null) {
                return quadro[i][0]; // Retornar o vencedor
            }
        }

        // Verificar colunas
        for (let j = 0; j < 3; j++) {
            if (quadro[0][j] === quadro[1][j] && quadro[1][j] === quadro[2][j] && quadro[0][j] !== null) {
                return quadro[0][j];
            }
        }

        // Verificar diagonal principal
        if (quadro[0][0] === quadro[1][1] && quadro[1][1] === quadro[2][2] && quadro[0][0] !== null) {
            return quadro[0][0]; 
        }

        // Verificar diagonal secundária
        if (quadro[0][2] === quadro[1][1] && quadro[1][1] === quadro[2][0] && quadro[0][2] !== null) {
            return quadro[0][2]; 
        }

        // Verificar se todas as posições do tabuleiro estão preenchidas (empate)
        let tabuleiroCompleto = true;
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (quadro[i][j] === null) {
                    tabuleiroCompleto = false;
                    break;
                }
            }
            if (!tabuleiroCompleto) {
                break;
            }
        }
        if (tabuleiroCompleto) {
            return "empate"; // Retornar "empate" se todas as posições estiverem preenchidas e não houver vencedor
        }

        return null; // Nenhum vencedor encontrado
    };

    const imprimirTabuleiro = function () {
        console.log('Tabuleiro atual:');
        for (let i = 0; i < linha; i++) {
            console.log(quadro[i].join(' | '));
            if (i < linha - 1) {
                console.log('---------');
            }
        }
        console.log('\n');
    };

    return { jogar, quadro, };
}