const gameboard = document.querySelector('.gameboard');
const gameboardBoxes = document.querySelectorAll('.gameboard-box');
const start = document.querySelector('.startgame');
const end = document.querySelector('.endgame');

let player;
let computer;
let madeMoves = [];

const WINS = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [1,4,7],
    [2,5,8],
    [3,6,9],
    [1,5,9],
    [3,5,7],
                ];

const game = () => {
	startGame();
    checkPlayer();
	endGame();
};

const startGame = () => {
	const optionBtn = document.querySelectorAll('.startgame-btn');
	optionBtn.forEach((btn) => {
		btn.addEventListener('click', (e) => {
			player = e.target.textContent;
			start.style.display = 'none';
		});
	});
};

const checkPlayer = () => {
    if(player === 'X') {
        computer = 'O';
    }else if (player === 'O'){
        computer = 'X';
    }
}

const playerMove = () => {
    gameboardBoxes.forEach((box) => {
        box.addEventListener('click', (e) => {
            if(e.target.textContent != ''){
                return;
            };
            e.target.textContent = player;
            computerMove();
        })
    })
};

const computerMove = () => {
    let field;
    let move = Math.floor(Math.random()*9)+1;
    checkPlayer();
    gameboardBoxes.forEach(box => {
        if(box.dataset.num == move && box.textContent === '') {
            field = box.dataset.num;
            box.textContent = computer;
        }
    });

};

const endGame = () => {
	end.style.display = 'flex';
};

const restart = () => {
    player = '';
    computer = '';
    start.style.display = 'flex';
    end.style.display = 'none';
};

startGame();
checkPlayer();
playerMove();
