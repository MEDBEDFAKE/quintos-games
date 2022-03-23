// start of wrapper (I will explain how this works later)
(async () => {
	// your code goes here! below this line

	let choice = 0; // initialize choice to 0, user has not made any choice yet

	while (choice != null) {
		// while choice is not null (nothing)
		// null in this case indicates the player cancelled out of the prompt

		let msg = ''; // initialize message to empty String
		let options = [];

		if (choice == 0 || choice == 11) {
			/* PART A0: Start your story! */
			msg =
				'Welcome to your computer!\nEnter your password\n\n\t' +
				'1: 123\n\t' +
				'2: IdkJustAPassword123\n\t' +
				"3: Who are you? I DON'T KNOW YOU!";
			options = [1, 2, 3];
			let computer1 = `
      .-------------. 
      |.-"""""""""-.|
      ||Enter      ||
      ||Password   ||
			||           ||
			|| [   ]     ||
      |'-.........-'| 
      \`"")---(""\` 
     /:::::::::::\\"  _  
    /:::=======:::\\\`\\\`\\
    \`"""""""""""""\`  '-
			`;

			text(computer1, 15, 10);

			button('123', 214, 20);
		} else if (choice == 1) {
			/* PART A1: continue the story */
			msg = 'Your password was hacked! GJ man who cant make passwords!\n\n\t' + '4: ok\n\t' + '5: UNO REVERSE!';
			options = [4, 5];
		} else if (choice == 2) {
			msg =
				"Welcome to your computer!\nThat's a game... So...\nWhat do you want?\n\n\t" +
				'6: Play games\n\t' +
				'7: IDK can you try to do something for me?\n\t' +
				'8: Surf the internet';
			options = [6, 7, 8];
		} else if (choice == 5) {
			msg =
				'Welcome to computer of user "HackingIsCool123"!\nThat\'s a game... So...\nWhat do you want?\n\n\t' +
				'16: HACK! HACK! HACK\n\t' +
				'17: Console of life\n\t' +
				'18: Scam>:)';
			options = [16, 17, 18];
		} else if (choice == 16) {
			msg =
				'What do you want to hack?\n\n\t' +
				'15: A player with password 123\n\t' +
				'13: U.S. Departament of Defense\n\t' +
				'14: YouTube>:)';
			options = [15, 13, 14];
		} else if (choice == 6) {
			msg = 'Which game you want to play?\n\n\t' + '9: FNaF\n\t' + '10: Sims\n\t' + '11: Computer simulator!';
			options = [9, 10, 11];
		} else if (choice == 14) {
			msg = 'You tried, but YouTube is smarter:)\nNEW ENDING\n\n\t 0: Ok';
			open('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
			options = [0];
		} else if (choice == 13) {
			msg = 'FBI is knocking:)\nNEW ENDING\n\n\t0: Ok';
			open('https://www.youtube.com/watch?v=c6Dj0Cbux5g');
			options = [0];
		} else if (choice == 13) {
			msg = 'You hacked him already\n\n\t16: Ok';
			options = [0];
		}
		// prompt the player to make choices
		let userInput = await prompt(msg);

		if (options.includes(userInput)) {
			choice = userInput;
		} else {
			await alert('Sorry, invalid choice');
		}

		/* PART B0: end the game if there are no more choices to make */

		/* PART B1: check if the player made a valid choice, reject invalid choices */
	}

	exit(); // exits the game
})(); // end wrapper
