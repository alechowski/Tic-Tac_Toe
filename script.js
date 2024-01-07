const gameboard = document.querySelector('.gameboard');
const gameboardBoxes = document.querySelectorAll('.gameboard-box');
const start = document.querySelector('.startgame');
const end = document.querySelector('.endgame');

const game = () => {
    startGame()
    endGame()
}

const startGame = () => {

    const optionBtn = document.querySelectorAll('.startgame-btn');
    optionBtn.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const player = e.target.textContent;
            console.log(player);
            start.style.display = 'none'
        })
    
    });

    

}

startGame()