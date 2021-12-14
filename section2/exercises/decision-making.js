/*
This exercise file is a little different from the others you have seen so far. Read carefully!

Below is a dynamic story that is created based on the value of three variables: doorChoice, bearClothing, bearChoice.
Spend some time changing the variables and running the file to see how the story changes.
*/

var doorChoice = 1;
var bearClothing = "";
var bearChoice = 5;

console.log("You enter a dark room with two doors. Do you go through #1 or #2?");

if (doorChoice === 1) {
  bearClothing = "hat";
} else {
  bearClothing = "scarf";
}

console.log("You see a bear putting on a " + bearClothing);
console.log("It looks like that " + bearClothing + " is too small for the bear, do you...");

console.log("1. Offer your own to the bear?");
console.log("2. Point it out to the bear?");
console.log("3. Make a dash for the next room?");

if (bearChoice === 1) {
  console.log("You offer the bear your " + bearClothing + " and the bear shows you a secret passage out!");
} else if (bearChoice === 2) {
  console.log("You tell the bear the " + bearClothing + " is too small and it starts to cry!");
} else if (bearChoice === 3) {
  console.log("You run as fast as you can into the next room. It's full of snakes!");
} else {
  console.log("You stay with the bear and become it's best friend!");
}

/*
Questions

1. In English, using technical vocabulary, describe what is happening between lines 14 and 18.
  The assignment of the variable 'bearClothing' is being determined by the value of the variable 'doorChoice.'
  If the value of 'doorChoice' is strictly equal to 1, the variable 'bearClothing' will be assigned to "hat."
  If the value of 'doorChoice' is anything else, the variable 'bearClothing' will be assigned to "scarf."

2. What variable has a new value assigned to it after the first if statement executes?
  The variable 'bearClothing' is assigned a new vlaue (either hat or scarf) after the 'doorChoice' script
  has determined whether 'doorChoice' === 1.

3. If you changed the variable doorChoice to equal 3, what would the bearClothing value be?
  If doorChoice is assigned to 3, the bearClothing would be assigned to scarf.

4. In English, using technical vocabulary, describe what is happening between lines lines 27 and 35.
  Between lines 27 and 35 is an "if/else" structure that serves as instructions for the code to run. If at any Point
  'if' is true,the other *else if* or *else* conditions aren't run. Once one of the conditions is executed, that’s all folks.

5. If you changed the variable bearChoice to equal 3, what will be the final outcome be?
  "You run as fast as you can into the next room. It's full of snakes!"

6. If you changed the variable doorChoice to equal 1, and the variable bearChoice to equal 2, what will be the final outcome be?
  "You tell the bear the hat is too small and it starts to cry!" 😢

7. What is your favorite ending?
  My favorite ending is any situation where bearChoice !== 1,2,3 (is not equal to 1, 2 or 3) and I stay with the bear and we become best friends.
*/
