const gameboard = document.querySelector('.gameboard');
const gameboardBoxes = document.querySelectorAll('.gameboard-box');
const start = document.querySelector('.startgame');
const end = document.querySelector('.endgame');

let player;

const WINS = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [1,4,7],
    [2,5,8],
    [3,6,9],
    [1,5,9],
    [3,5,7],
                ]

const game = () => {
	startGame();
	endGame();
};

const startGame = () => {
	const optionBtn = document.querySelectorAll('.startgame-btn');
	optionBtn.forEach((btn) => {
		btn.addEventListener('click', (e) => {
			player = e.target.textContent;
			console.log(player);
			start.style.display = 'none';
		});
	});
};

const gameplay = () => {
    gameboardBoxes.forEach((box) => {
        box.addEventListener('click', (e) => {
            if(e.target.textContent != ''){
                return
            }
            e.target.textContent = player
            console.log(e.target.dataset.num);
        })
    })
}

const endGame = () => {
	end.style.display = 'flex';
};

startGame();
gameplay();
