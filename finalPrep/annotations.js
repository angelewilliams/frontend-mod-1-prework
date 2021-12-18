// Add your annotations, line by line, to the code below using code comments.
// Use the double // to create a new comment

//Build a Bear
//declare a function called buildABear and idenify 5 parameters
function buildABear(name, age, fur, clothes, specialPower) {
  // define greeting string variable with concatented with name variable in string
  var greeting = `Hey partner! My name is ${name} - will you be my friend?!`;
  //define demographics variable assigned to array including variables: name and age
  var demographics = [name, age];
  // define powerSaying variable assiged to interpolated string with variable specialPower
  var powerSaying = "Did you know that I can " + specialPower + " ?";
  // define builtBear object with 6 static keys
  var builtBear = {
    // define basicInfo key assigned to demographics variable
    basicInfo: demographics,
    // define clothes key assigned to clothes variable
    clothes: clothes,
    // define exterior key assigned to fur variable
    exterior: fur,
    // define cost key assigned to 49.99 float/number
    cost: 49.99,
    // define sayings key assigned to array including variables: greeting, powerSaying and a string
    sayings: [greeting, powerSaying, "Goodnight my friend!"],
    // define isCuddly key assigned to boolean:true
    isCuddly: true,
    //end of key object defining
  };
  //return statement to
  return builtBear
}

buildABear('Fluffy', 4, 'brown', ['pants', 'jorts', 'tanktop'], 'give you nightmares');
function buildABear(name, age, fur, clothes, specialPower) {
  // define greeting string variable with concatented with name variable in string
  var greeting = `Hey partner! My name is ${name} - will you be my friend?!`;
  //define demographics variable assigned to array including variables: name and age
  var demographics = [name, age];
  // define powerSaying variable assiged to interpolated string with variable specialPower
  var powerSaying = "Did you know that I can " + specialPower + " ?";
  // define builtBear object with 6 static keys
  var builtBear = {
    // define basicInfo key assigned to demographics variable
    basicInfo: demographics,
    // define clothes key assigned to clothes variable
    clothes: clothes,
    // define exterior key assigned to fur variable
    exterior: fur,
    // define cost key assigned to 49.99 float/number
    cost: 49.99,
    // define sayings key assigned to array including variables: greeting, powerSaying and a string
    sayings: [greeting, powerSaying, "Goodnight my friend!"],
    // define isCuddly key assigned to boolean:true
    isCuddly: true,
    //end of key object defining
  };
  //return object contents to console when function is executed with arguments
  return builtBear
}
//call function buildABear with arguments needed
buildABear('Fluffy', 4, 'brown', ['pants', 'jorts', 'tanktop'], 'give you nightmares');
//call function buildABear with arguments needed
buildABear('Sleepy', 2, 'purple', ['pajamas', 'sleeping cap'], 'sleeping in');




//FizzBuzz
//define function fizzBuzz with 3 parameters
function fizzBuzz(num1, num2, range) {
  // start loop for array index (i) is assigned to 0, repeat for i<= range parameter input, increase i by one every loop
  for (var i = 0; i <= range; i++) {
    // check if i modulo num1 argument is exactly equal to 0 AND i modulo num2 argument is exactly equal to 0
    if (i % num1 === 0 && i % num2 === 0) {
      //if true, log 'fizzbuzz' string to the console
      console.log('fizzbuzz');
      //if above wasn't true, evaluate if i modulo num1 argument is exactly equal to 0
    } else if (i % num1 === 0) {
      //if that is statisfied, log 'fizz' string to console
      console.log('fizz');
      //if above wasn't true, evaluate if i modulo num2 argument is exactly equal to 0
    } else if (i % num2 === 0) {
      //if true log 'buzz' string to console
      console.log('buzz');
      //if none aboe are true then
    } else {
      //log i to console
      console.log(i);
    }
  }
}
//call fizzBuzz function with arguments (3, 5, 100)
fizzBuzz(3, 5, 100);
//call fizzBuzz function with arguments (5, 8, 400)
fizzbuzz(5, 8, 400);
