///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
////    ______                _   _                ////
////    |  ___|              | | (_)               ////
////    | |_ _   _ _ __   ___| |_ _  ___  _ __     ////
////    |  _| | | | '_ \ / __| __| |/ _ \| '_ \    ////
////    | | | |_| | | | | (__| |_| | (_) | | | |   ////
////    \_|  \__,_|_| |_|\___|\__|_|\___/|_| |_|   ////
////                                               ////
////                                               ////
////    ______               _   _                 ////
////    | ___ \             | | (_)                ////
////    | |_/ / __ __ _  ___| |_ _  ___ ___        ////
////    |  __/ '__/ _` |/ __| __| |/ __/ _ \       ////
////    | |  | | | (_| | (__| |_| | (_|  __/       ////
////    \_|  |_|  \__,_|\___|\__|_|\___\___|       ////
////                                               ////
////                                               ////
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////


// Q1
// Write a function called `sum` that takes two
// parameters and returns the sum of those 2 numbers.

function sum (x, y){
  return x + y;
}
// console.log(sum(5,77));


// Q2
// Write a function named `avg` that takes 3 parameters
// and returns the average of those 3 numbers.

function avg (x, y, z) {
  return (x + y + z)/3;
}

// console.log(avg(6,4,11))


// Q3
// Write a function called `getLength` that takes one
// parameter (a string) and returns the length

function getLength (string) {
  return string.length;
};
// console.log(getLength('guyfdafsd'))

// Q4
// Write a function called `greaterThan` that takes
// two parameters and returns `true` if the second
// parameter is greater than the first. Otherwise
// the function should return `false`.

function greaterThan (x, y) {
  if (x < y ){
  return true}
 else {return false};
 }
// console.log(greaterThan(4,3))

// Q5
// Write a function called `greet` that takes a
// single parameter and returns a string that
// is formated like "Hello, Name!" where *Name*
// is the parameter that was passed in.

function greet (name) {
  return "Hello, " + name +"!";
}
// console.log(greet('jeff'));

// Q6
// Write a function called `madlib` that takes
// 4 or more parameters (words). The function
// should insert the words into a pre-defined
// sentence. Finally the function should return
// that sentence.
// Note: When I say words and sentence I mean
// strings. For example:
// words: "quick", "fox", "fence"
// sentence: "quick brown fox jumps over the fence"

function madlib (adj, noun1, noun2, verb) {
  return "The agile " + adj + " " + noun1 + " " + verb + " to the " + noun2;
}
// console.log(madlib('red', 'house', 'pizza', 'partied'));


///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
