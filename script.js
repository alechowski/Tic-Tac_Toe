const gameboard = document.querySelector('.gameboard');
const gameboardBoxes = document.querySelectorAll('.gameboard-box');
const start = document.querySelector('.startgame');
const end = document.querySelector('.endgame');

let player;

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
            console.log(e.target.dataset.num);
        })
    })
}

const endGame = () => {
	end.style.display = 'flex';
};

startGame();
gameplay();
