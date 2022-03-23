// screen width is 256, height is 192

let imgBall = spriteArt(`
..wwww..
.wwrrww.
wwrrwrww
wrrwrrrw
wrrrrrrw
wwrrrrww
.wwrrww.
..wwww..`);

// the \n means new line
let imgPaddleR = spriteArt('.wwwwww.\nwwwwwwww\n' + 'wwuuuuww\n'.repeat(42) + 'wwwwwwww\n.wwwwww.');
let imgPaddleL = spriteArt('.wwwwww.\nwwwwwwww\n' + 'wwrrrrww\n'.repeat(42) + 'wwwwwwww\n.wwwwww.');

/* PART B: Make image for the wall */

// places a ball in center of the screen
let ball = createSprite(imgBall);
ball.x = width / 2;
ball.y = height / 2;

/* PART A0: create two paddles, place on each end of the screen */
let paddleL = createSprite(imgPaddleL);
paddleL.x = 5;
paddleL.y = height / 2;

let paddleR = createSprite(imgPaddleR);
paddleR.x = 240;
paddleR.y = height / 2;

function draw() {
	background(0);
	/* PART A1: draw the ball and paddles inside the p5 main draw function */

	ball.y += 1;

	paddleL.y = mouseY;
	paddleR.y = mouseY;

	drawSprites();
}
