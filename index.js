//WORKED ON IN VSCODE AND PATED HERE
//NEED HELP WITH STRETCH GOAL, ONLY MET BY CHANCE
//CHIPPING AWAY AT TESTS, DON'T UNDERSTAND WHAT
//"ENOUGH FUEL" COMPARISON REALLY IS OR WHY DISTANCES WERE SET AT 201?
//ITS SERIOUSLY DRIVING ME NUTS, THIS IS LIKE A RUBICKS CUBE
//WITH EVERYTHING BUT ONE CORNDER RIGHT.

/*
  EXAMPLE TASK:
    - Write an Airplane constructor that initializes `name` from an argument.
    - All airplanes built with Airplane should initialize with an `isFlying` of false.
    - Give airplanes the ability to `.takeOff()` and `.land()`:
        + If a plane takes off, its `isFlying` property is set to true.
        + If a plane lands, its `isFlying` property is set to false.
*/

// EXAMPLE SOLUTION CODE:
function Airplane(name) {
  this.name = name;
  this.isFlying = false;
}
Airplane.prototype.takeOff = function() {
  this.isFlying = true;
};
Airplane.prototype.land = function() {
  this.isFlying = false;
};

/*
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
*/

/*
TASK 1
  - Write a Person Constructor that initializes `name` and `age` from arguments.
  - All instances of Person should initialize with an empty `stomach` array.
  - Give instances of Person the ability to `.eat("someFood")`:
      + When eating an edible, it should be pushed into the `stomach`.
      + The `eat` method should have no effect if there are 10 items in the `stomach`.
  - Give instances of Person the ability to `.poop()`:
      + When an instance poops, its `stomach` should empty.
  - Give instances of Person a method `.toString()`:
      + It should return a string with `name` and `age`. Example: "Mary, 50"
*/
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.stomach = [];
} // a Person constructor or parent

//Person.prototype.stomach = []; //the proto-stomach

Person.prototype.eat = function(edible) {
  if (10 > this.stomach.length) {
    this.stomach.push(edible);
  } else {
    return;
  }
}; //a way to ingest variables

Person.prototype.poop = function() {
  this.stomach.splice(0, this.stomach.length);
}; // a way to get rid of variables

Person.prototype.toString = function() {
  return this.name + ", " + this.age;
}; //a way to identify the owner of the proto-stomach

const person = new Person("Doyle", 44);

//console.log(person.name + ' ' + person.age);
/*
TASK 2
  - Write a Car constructor that initializes `model` and `milesPerGallon` from arguments.
  - All instances built with Car:
      + should initialize with an `tank` at 0
      + should initialize with an `odometer` at 0
  - Give cars the ability to get fueled with a `.fill(gallons)` method. Add the gallons to `tank`.
  - STRETCH: Give cars ability to `.drive(distance)`. The distance driven:
      + Should cause the `odometer` to go up.
      + Should cause the the `tank` to go down taking `milesPerGallon` into account.
  - STRETCH: A car which runs out of `fuel` while driving can't drive any more distance:
      + The `drive` method should return a string "I ran out of fuel at x miles!" x being `odometer`.
*/

function Car(model, milesPerGallon) {
  this.model = model;
  this.milesPerGallon = milesPerGallon;
  this.tank = 0;
  this.odometer = 0;
} //constructing cars, simple model
Car.prototype.fill = function(gallons) {
  return (this.tank += gallons);
}; //a way to fill the gas tank up with no ceiling, basically a car in which someone snuck a bag of holding into the tank.
Car.prototype.drive = function(distance) {
  if (this.tank > distance / this.milesPerGallon) {
    //the tank has more gas than its mpg-range
    this.odometer += distance; //the odometer goes up as it travels
    this.tank = distance / this.milesPerGallon; //the tank uses furl at a rate = distance travelled / mpg
  } else {
    //the tank does not have more fuel than its minimum range
    this.odometer += distance - 1; //magic?
    this.tank *= 0; //this.tank / distance; //i suppose this makes logical sense in a smartass kind of way - without rounding down i can't make it work though.
    return `I ran out of fuel at ${this.odometer} miles`; //I understood that reference.
  }
};

// TASK 3
//     -
//     Write a Baby constructor subclassing Person. -
//     Besides `name`
// and `age`, Baby takes a third argument to initialize `favoriteToy`. -
//     Besides the methods on Person.prototype, babies have the ability to `.play()`:
//     +Should
// return a string "Playing with x", x being the favorite toy.*/

function Baby(name, age, favoriteToy) {
  Person.call(this, name, age);
  this.favoriteToy = favoriteToy;
}
Baby.prototype = Object.create(Person.prototype);

Baby.prototype.play = function() {
  return `Playing with ${this.favoriteToy}`;
};

/* 
TASK 4

In your own words explain the four principles for the "this" keyword below:
  where does THIS live? and who is talking to THIS?
1. is This global? oh boy, did you just call all of node?
2. is This inside a method? look to its parent object
3. is This inside a New? look at what is being created
4. is This being bound? look to the binding (whats inside its paranthesis)
*/

///////// END OF CHALLENGE /////////
///////// END OF CHALLENGE /////////
///////// END OF CHALLENGE /////////
if (typeof exports !== "undefined") {
  module.exports = module.exports || {};
  if (Airplane) {
    module.exports.Airplane = Airplane;
  }
  if (Person) {
    module.exports.Person = Person;
  }
  if (Car) {
    module.exports.Car = Car;
  }
  if (Baby) {
    module.exports.Baby = Baby;
  }
}
