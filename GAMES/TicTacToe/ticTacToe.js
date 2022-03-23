const title = `
TTTTT IIIII   CCC
  T     I    C
  T     I    C
  T     I    C
  T   IIIII   CCC

TTTTT  AAA    CCC
  T   A   A  C
  T   AAAAA  C
  T   A   A  C
  T   A   A   CCC

TTTTT  OOO   EEEE
  T   O   O  E
  T   O   O  EEE
  T   O   O  E
  T    OOO   EEEE`.slice(1);

text(title, 5, 6);

const bigSpace = '        \n'.repeat(7);

const bigO = `
 OOOOOO
OO    OO
OO    OO
OO    OO
OO    OO
OO    OO
 OOOOOO`.slice(1); // slice off the first newline character

const bigX = `
XX    XX
 XX  XX
  XXXX
   XX
  XXXX
 XX  XX
XX    XX`.slice(1);

const gridRow = 3;
const gridCol = 26;

/* PART A: finish the grid of 9x8 spaces */
text('─'.repeat(26), gridRow + 7, gridCol);
text('─'.repeat(26), gridRow + 15, gridCol); // draw another horizontal line

text('│\n'.repeat(23), gridRow, gridCol + 8);
text('│\n'.repeat(23), gridRow, gridCol + 17); // draw another vertical line

let board = [
	[' ', ' ', ' '],
	[' ', ' ', ' '],
	[' ', ' ', ' ']
];

let turnX = true;
let scoreX = 0;
let scoreO = 0;

function pickRandomTurn() {
	if (Math.random() < 0.5) {
		turnX = true;
	} else {
		turnX = false;
	}
}
pickRandomTurn();

function displayTurn() {
	if (turnX == true) {
		text('Ход для х', 5, 55);
	} else {
		text('Ход для о', 5, 55);
	}
}

displayTurn();

function displayScores() {
	text('Очки х: ' + scoreX, 3, 55);
	text('Очки о: ' + scoreO, 4, 55);
}

displayScores();

function checkForWinner(mark) {
	for (let i = 0; i < 3; i++) {
		// all rows
		if (board[i][0] == mark && board[i][1] == mark && board[i][2] == mark) {
			return true;
		}
		// all columns
		if (board[0][i] == mark && board[1][i] == mark && board[2][i] == mark) {
			return true;
		}
	}

	if (board[0][0] == mark && board[1][1] == mark && board[2][2] == mark) {
		return true;
	}
	if (board[0][2] == mark && board[1][1] == mark && board[2][0] == mark) {
		return true;
	}

	return false;
}

function checkForDraw() {
	for (let row = 0; row < 3; row++) {
		for (let col = 0; col < 3; col++) {
			if (board[row][col] == ' ') {
				return false;
			}
		}
	}
	return true;
}

async function takeTurn(row, col) {
	if (board[row][col] == 'x' || board[row][col] == 'o') {
		await alert('Ты не можешь туда пойти!', 20, 60, 12);
		return;
	}

	let mark;
	if (turnX) {
		text(bigX, gridRow + row * 8, gridCol + col * 9);
		board[row][col] = 'x';
		mark = 'x';
	} else {
		text(bigO, gridRow + row * 8, gridCol + col * 9);
		board[row][col] = 'o';
		mark = 'o';
	}

	log(board.join('\n'));

	if (checkForWinner(mark)) {
		await alert(mark + ' победил!', 20, 55, 20);
		if (turnX) {
			scoreX += 1;
			turnX = false;
		} else {
			scoreO += 1;
			turnX = true;
		}
		startNewGame();
		displayScores();
		return;
	}

	if (checkForDraw()) {
		await alert('Ничья!', 20, 55, 20);
		pickRandomTurn();
		startNewGame();
		return;
	}

	//change turns (flips value of turnX)
	turnX = !turnX;
	displayTurn();
}

function startNewGame() {
	board = [
		[' ', ' ', ' '],
		[' ', ' ', ' '],
		[' ', ' ', ' ']
	];

	for (let row = 0; row < 3; row++) {
		for (let col = 0; col < 3; col++) {
			text(bigSpace, gridRow + row * 8, gridCol + col * 9);
		}
	}
	displayTurn();
}

/* PART A: Make the buttons in the grid */
// note the intervals! row += 8 and col += 9

for (let row = 0; row < 3; row++) {
	for (let col = 0; col < 3; col++) {
		button(bigSpace, gridRow + row * 8, gridCol + col * 9, () => {
			takeTurn(row, col);
		});
	}
}
