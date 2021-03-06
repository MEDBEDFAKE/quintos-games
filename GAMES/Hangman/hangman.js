// start of wrapper (I will explain how this works later)
(async () => {
	// your code goes here! below this line

	const hangman = [
		`
=========`,
		`
	    |
      |
      |
      |
      |
=========`,
		`
	+---+
      |
      |
      |
      |
      |
=========
		`,
		`
  +---+
  |   |
      |
      |
      |
      |
=========`,
		`
  +---+
  |   |
  O   |
      |
      |
      |
=========`,
		`
  +---+
  |   |
  O   |
  |   |
      |
      |
=========`,
		`
  +---+
  |   |
  O   |
 /|   |
      |
      |
=========`,
		`
  +---+
  |   |
  O   |
 /|\\  |
      |
      |
=========`,
		`
  +---+
  |   |
  O   |
 /|\\  |
 /    |
      |
=========`,
		`
  +---+
  |   |
  O   |
 /|\\  |
 / \\  |
      |
=========`
	];

	let wordsList = `abruptly absurd abyss affix askew avenue awkward axiom azure bagpipes bandwagon banjo bayou beekeeper bikini blitz blizzard boggle bookworm boxcar buckaroo buffalo buffoon buxom buzzard buzzing buzzwords cobweb croquet crypt cycle disavow dizzying duplex dwarves embezzle equip espionage euouae exodus faking fishhook fixable fjord flapjack flopping fluffiness flyby foxglove frazzled frizzled fuchsia funny gabby galaxy galvanize gazebo gizmo glowworm glyph gnarly gnostic gossip grogginess haiku haphazard hyphen icebox injury ivory ivy jackpot jawbreaker jaywalk jazzy jelly jigsaw jinx jiujitsu jockey jogging joking jovial joyful juicy jukebox jumbo kayak kazoo keyhole kilobyte kiosk kitsch kiwifruit klutz knapsack larynx lengths lucky luxury lymph marquee matrix megahertz microwave mnemonic mystify nightclub nowadays oxidize oxygen pajama phlegm pixel pizazz polka psyche puppy puzzling quartz queue quips quiz quizzes quorum razzmatazz rhubarb rhythm scratch snazzy sphinx squawk staff strength stretch stronghold stymied subway swivel syndrome thrift thumb topaz transcript transgress transplant twelfth triphthong unknown unzip vaporize voodoo vortex walkway waltz wave wavy waxy well whomever witch wizard wristwatch xylophone yacht youthful yummy zigzag zilch zipper zodiac zombie`;

	/* PART A: split the wordsList String into an array called words, then choose a random word */
	let words = wordsList.split(' ');
	log(words);
	let word = words[Math.floor(Math.random() * words.length)];
	log(word);

	/* PART B: make an array with a line for each letter in the word */
	// Example word: 'quiz'
	// lines -> ['_', '_', '_', '_']

	let lines = '_'.repeat(word.length).split('');
	log(lines);

	let wrong = 0;

	while (lines.includes('_')) {
		/* PART C: show the lines for the word below the hangman art */
		let guess = await prompt(hangman[wrong] + '\n\n' + lines.join(' '));

		let isWrong = true;
		for (let c = 0; c < word.length; c++) {
			if (guess == word[c]) {
				lines[c] = guess;
				isWrong = false;
			}
		}
		if (isWrong) {
			wrong++;
		}
		if (wrong == hangman.length) {
			break;
		}
	}

	if (wrong < hangman.length) {
		await alert('TY POBEDIL! The word was ' + word);
	} else {
		await alert('TY PROIGRAL AHAHAHAHAHAH BOT! The word was ' + word);
	}

	exit(); // exits the game
})(); // end
