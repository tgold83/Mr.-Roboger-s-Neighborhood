Describe: inputNumber()

Test: "It should return an array of numbers from 0 to the user's inputted number"
Code: inputNumber(5);
Expected Output: [0, 1, 2, 3, 4, 5]

Describe convertNum()

Test: "It should convert numbers to string."
Code: convertNum(1)
Expected Output: "1"

Test: "It should convert 1 in user's inputted number into 'Beep!'"
Code: convertNum(1);
Expected Output: "Beep!"

Test: "It should convert 2 in user's inputted number into 'Boop!'"
Code: convertNum(2);
Expected Output: "Boop!"

Test: "It should convert 3 in user's inputted number into 'Beep!'"
Code: convertNum(3);
Expected Output: "Won't you be my neighbor?"

Test: "It should return 'Beep!' if any 1 is in users input"
Code: convertNum(11);
Expected Output: "Beep!"

Test: "It should return 'Boop!' if any 2 is in user input"
Code: convertNum(20);
Expected Output: "Boop!"

<!-- Test: "It should convert any 3 in user's inputted number into 'Beep!'"
Code: convertNum(3);
Expected Output: "Won't you be my neighbor?" -->
