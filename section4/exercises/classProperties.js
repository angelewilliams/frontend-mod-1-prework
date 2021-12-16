/*
In the exercise below, write your own code where indicated
to achieve the desired result.

Make sure to run the file with node in your command line.
*/

//-------------------
// Part 1: Syntax and Naming Conventions
//-------------------

// For each prompt:
  // Write a class skeleton
  // Create 2 object instances and store in variables
  // Log each variable to the console.
  // You do not need any proerties at this time!!

// Prompt 1: Dog
 class Dog {}
  var corgi = new Dog();
  var greatDane = new Dog();

console.log(corgi);
console.log(greatDane);

// Prompt 2: Snack
class Snack {}

  var tortillaChips = new Snack();
  var hummus = new Snack();

console.log(tortillaChips);
console.log(hummus);


// Prompt 3: Shirt
class Shirt {}
  var tShirt = new Shirt ();
  var buttonUp = new Shirt ();

console.log(tShirt);
console.log(buttonUp);


//-------------------
// Part 2: Properties
//-------------------

// For each prompt:
  // Write a class skeleton
  // Add a constructor method
  // Assign 3 properties (names and values of your choice) to each class
  // Create an object instance and store in variable
  // Log that variable to the console.

// Prompt 1: Dog

class Dog1 {
  constructor () {
    this.breed = "Husky";
    this.weight = 50;
    this.color = "brown";
    this.age = 1;
  }

}
var husky = new Dog1();
console.log(husky);


// Prompt 2: Snack
class Snack1 {
  constructor() {
    this.name = "Pretzel";
    this.taste = "salty";
    this.container = "bag";
    this.expirationDate = "12/12/22";
  }
}
var pretzels = new Snack1();
console.log(pretzels);

// Prompt 3: Shirt
class Shirt1 {
  constructor() {
    this.type = "Button down";
    this.fabric = "cotton";
    this.buttons = 10;
    this.pattern = "stripes";
  }
}
var buttonDown = new Shirt1();
console.log(buttonDown);

//-------------------
// Part 3: Dynamic Properties
//-------------------
// For each prompt:
  // Write a class skeleton
  // Add a constructor method
  // Declare 3 parameters in the consutructor
  // Assign 3 properties (names and values of your choice), using the parameters
  // Create 2 object instances and store in variables (passing in different arguments)
  // Log those variables to the console.

// Prompt 1: Dog
class Dog2 {
constructor (breed, weight, color, age) {
  this.breed = breed;
  this.weight = weight;
  this.color = color;
  this.age = age;
}
}

var goldenRetriever = new Dog2("Golden Retriever", 65, "Golden", 4);
var kuvasz = new Dog2("Kuvasz", 80, "White", 7);
console.log(goldenRetriever);
console.log(kuvasz);

// Prompt 2: Snack
class Snack2 {
constructor(name, taste, container, expirationDate) {
  this.name = name;
  this.taste = taste;
  this.container = container;
  this.expirationDate = expirationDate;
}
}
var popcorn = new Snack2("Popcorn", "Salty", "bag", "11/30/23");
console.log(popcorn);
var appleSauce = new Snack2("Apple Sauce", "Cinnamon", "cup", "12/31/21");
console.log(appleSauce);

// Prompt 3: Shirt
class Shirt2 {
constructor(type, fabric, buttons, pattern) {
  this.type = type;
  this.fabric = fabric;
  this.buttons = buttons;
  this.pattern = pattern;
}
}
var flannel = new Shirt2("Flannel", "cotton flannel", 8, "plaid");
console.log(flannel);
var runningTank = new Shirt2("Running tank top","88% polyester, 12% elastane", 0, "solid color");
console.log(runningTank);
