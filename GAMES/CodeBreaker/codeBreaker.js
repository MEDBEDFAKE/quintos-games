async function start() {
	let letters = [
		'A',
		'B',
		'C',
		'D',
		'E',
		'F',
		'G',
		'H',
		'I',
		'J',
		'K',
		'L',
		'M',
		'N',
		'O',
		'P',
		'Q',
		'R',
		'S',
		'T',
		'U',
		'V',
		'W',
		'X',
		'Y',
		'Z'
	];
	let message = await prompt('Pls write message');
	message = message.toUpperCase();
	let secret = '';
	for (let i in message) {
		let character = message[i];
		let pos = letters.indexOf(character);
		console.log(character, pos);
		if (pos == -1) {
			secret += character;
		} else {
			pos--;
			secret += letters[pos];
		}
		console.log(secret);
	}
	await alert(secret);
}
start();
