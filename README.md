
# _Mr. Roboger's Neighborhood_

#### By _Ted Gold_

#### _A simple JavaScript interface that turns the user's input number into results with "Beep!", "Boop!", and "Won't you be my neighbor?" instead of 1s, 2s, or 3s._

## Technologies Used

* _JavaScript_
* _HTML_
* _CSS_

## Description

_This browser application allows users to input any number and get a return that lists out every number counting up from 0 to the user's inputed number. It will then replace any number with a 3 to the string "Won't you be my neighbor?". If the there is a 2 but no 3, it will turn the number into the string "Boop!". If there is a 1 but not 2 or 3 it will turn the number into the string "Beep!"._

## Setup/Installation Requirements

* _Clone this repository to your desktop_
* _Navigate to the top level of the directory_
* _Open index.HTML in your browser_
* _Enter a number in the box_
* _Click Submit_
* _Enjoy!_

## Known Bugs

* _No known bugs at the moment_

## Tests

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

Test: "It should convert 3 in user's inputted number into 'Won't you be my neighbor?'"
Code: convertNum(3);
Expected Output: "Won't you be my neighbor?"

Test: "It should return 'Beep!' if any 1 is in users input"
Code: convertNum(11);
Expected Output: "Beep!"

Test: "It should return 'Boop!' if any 2 is in user input"
Code: convertNum(20);
Expected Output: "Boop!"

Test: "It should return 'Won't you be my neighbor' if any 3 is in user input"
Code: convertNum(30);
Expected Output: "Won't you be my neighbor?"

Test: "It should return 'Won't you be my neighbor?' if any 3 is in user input regardless of 1 or 2"
Code: convertNum(312);
Expected Output: "Won't you be my neighbor?"

Test: "It should return 'Boop!' if any 2 is in user input regardless of 1"
Code: convertNum(212);
Expected Output: "Boop!"

## License

_MIT License

Copyright (c) [2022] [Ted Gold]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE._

Copyright (c) _2022_ _Ted Gold_