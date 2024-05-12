const gameboard = document.querySelector('.gameboard');
const gameboardBoxes = document.querySelectorAll('.gameboard-box');
const start = document.querySelector('.startgame');
const end = document.querySelector('.endgame');

let player;
let computer;
let madeMoves = [
    ['', '', '',
     '', '', '', 
     '', '', '']
];



let board = [];

const game = () => {
	startGame();
    checkPlayer();
    captureMoves();
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

    // gameboardBoxes.forEach((box) => {
    //     board.push(box.textContent)
    //     console.log(board);
    // });
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
            field = e.target.dataset.num - 1
            e.target.textContent = player;
            madeMoves[field] = player;
            computerMove();
        })
    })
};

const computerMove = () => {
    let field;
    let move = Math.floor(Math.random()*9);
    checkPlayer();
    // gameboardBoxes.forEach(box => {
    //     if(box.dataset.num == move && box.textContent === '') {
    //         field = box.dataset.num;
    //         box.textContent = computer;
    // }
    // });

    // console.log(board[move]);
    // if (move == board[move]) {
    //     board[move].textContent = computer
    //     console.log(board[move]);
    // }
    
    // for (const move in WINS) {
    //     // console.log(move);
    //     // console.log(WINS);
    //     // console.log(board[move])
    //     // for (const position in move){
    //     //     console.log(position);
    //     // }
    // }

    // const bestMoves = [5, 1, 3, 7 ,9, 2, 4, 6, 8]
    // for (move in bestMoves) {
    //     console.log(board[move] = computer);
    //     if(move == board[move] && board[move] == '') {
    //         board[move] = computer
    //         console.log(board[move]);
    //     }
    // }
};

// const checkWinner = () => {
//     const WINS = [
//         [1,2,3],
//         [4,5,6],
//         [7,8,9],
//         [1,4,7],
//         [2,5,8],
//         [3,6,9],
//         [1,5,9],
//         [3,5,7],
//                     ];

//     for (const row in WINS) {
//         if (board[row[0]] == board[row[1]] == board[row[2]] != '') {
//             const winner = board[row[0]]
//             console.log(row);
//         }
//     }
// }
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
