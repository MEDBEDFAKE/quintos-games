// start of wrapper (I will explain how this works later)
(async () => {
	// your code goes here! below this line
	let number = Math.ceil(Math.random() * 100);
	let guess;

	while (guess != number) {
		guess = await prompt('Число? (1-100)');
		if (guess == number) {
			await alert('ОМАЙГАД ТЫ ПРАВ');
		} else if (guess > number) {
			await alert('Меньше');
		} else if (guess < number) {
			await alert('Больше');
		}
	}
	exit(); // exits the game
})(); // end
