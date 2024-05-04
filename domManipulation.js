import Gameboard from './index.js';


const jogo = Gameboard()

const kaio = document.querySelectorAll('.i')
kaio.forEach((kaio) => {
    kaio.addEventListener('click', (e) => {
        e.target.style.background = 'red';
        console.log(kaio.dataset.indice)
    })
})

console.log(jogo.quadro)