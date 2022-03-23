const target = `
 .d88b. 
.8P  Y8.
88    88
88    88
 8b  d8 
 'Y88P' `.slice(1);
// slice removes the first character from the String
// in this case I remove the new line at the beginning
// so the first line of the button will be at the proper
// row value

/* PART A0: change the values of row and col to be random */
// screen size is 80 cols x 30 rows
// target is 8w x 6h
// drawing starts from top left corner
// we want to draw the target within the bounds of the frame
// 30 rows - 6 target height - 1 frame line = 23
// 80 columns - 8 target width - 1 frame line = 71

let btn;
let clicks = 0;
let times = [];

async function showResults() {
	let speeds = [];

	for (let i = 0; i < 9; i++) {
		speeds[i] = times[i + 1] - times[i];
	}
	log(speeds);

	let sum = 0;
	for (let i = 0; i < 9; i++) {
		sum = sum + speeds[i];
	}
	let avg = Math.round(sum / 9);

	let fastest = speeds[0];
	let slowest = speeds[0];
	for (let i = 1; i < 9; i++) {
		if (fastest > speeds[i]) {
			fastest = speeds[i];
		}
		if (slowest < speeds[i]) {
			slowest = speeds[i];
		}
	}

	await alert(
		'Your average speed was ' +
			avg +
			'ms\n' +
			'Your fastest speed was ' +
			fastest +
			'ms\n' +
			'Your slowest speed was ' +
			slowest +
			'ms'
	);
}

function makeTarget() {
	let row = Math.ceil(Math.random() * 23);
	let col = Math.ceil(Math.random() * 71);
	log(row, col);
	btn = button(target, row, col, click);
}

function click() {
	times.push(Date.now());
	log(times);
	clicks++;
	console.log(clicks);
	btn.erase();
	makeBackground();
	if (clicks < 10) {
		makeTarget();
	} else {
		showResults();
	}
}

async function makeBackground() {
	pattern = `⎺\⎽⎽/⎺⎺\⎽⎽/⎺`.repeat(1000);
	text(pattern, 1, 1);
}

async function startGame() {
	makeBackground();
	await alert('Click the buttons as fast as possible', 10, 30, 20);
	makeBackground();
	makeTarget();
}

startGame();

/* PART B: Use recursion to make a new button after clicking a button */

/* PART C: Limit clicks to 20, calculate stats */

/* PART D: Make a background pattern */
