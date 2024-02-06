/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal = {};
//give animal a property name species using dot notation
animal.species = "dog";
animal["name"] = "Sasha";
animal["noises"] = [];
console.log(animal);

//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var noises = [];
//use bracket notation to give noises a sound that my animal makes
noises[0] = "Woof";
console.log(noises);
//add 
noises.push("Whine");
//add another noise to the beginning using another method
noises.unshift("Bark");
noises[noises.length] = "Scratch";


//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////
//use bracket syntax
//assign the noises PROPERTY onto our noises array
animal["noises"] = noises;
animal.noises.push("snore");
console.log(animal)

/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 *
 * 2. What are the different ways of accessing elements on arrays?
 *
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////

var animals = [];
animals.push(animal);
console.log(animals);

var duck = { species: 'duck', name: 'Jerome', noises: ['quack', 'honk', 'sneeze', 'woosh'] };
animals.push(duck);
console.log(animals);

var bird = {species: "Bird", name: "Jimmy", noises:["CawCaw", "Baaa"] };
var tiger = {species: "Tiger", name: "Vince", noises: ["Roar", "Grrr"]};
animals.push(bird, tiger);



//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//because arrays puts elements in an ordered list naturally
var friends = [];
//write a function called get random
function getRandom(array){
  return Math.floor(Math.random() * array.length);
}

//get a random index
var randomIndex = getRandom(animals);
//now get a random animal
var randomAnimal = animals[randomIndex];
//add that randomAnimal's name to the friends list
friends.push(randomAnimal.name);
console.log("Friends:" , friends);
//take a random index and assign the friends prop to our friends list
animals[randomIndex]['friends'] = friends;

/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}