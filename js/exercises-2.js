// ---------------------
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in JavaScript.
// ---------------------

function max(num1, num2){
  if(num1 > num2)
    return num1;
    else {
      return num2 };
  }
 // console.log(max(45,102));

// ---------------------
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// ---------------------

function maxOfThree(x, y, z){
  return Math.max(x, y, z);
}
// console.log(maxOfThree(89,6,9));

// ---------------------
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// ---------------------

function isVowel(char){
    if(char = 'a,e,i,o,u'.split(',')){
   return true;
 }  else {
    return false;
  };
 }

// console.log(isVowel('c'));

// ---------------------
// Write a function translate() that will translate a text into "Rovarspraket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
// ---------------------

function rovarspraket(phrase){
  var letter =
    if(letter = "a,e,i,o,u".split(",")){
      return letter;
    }  else { return letter +=letter}
    }



// ---------------------
// Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
// ---------------------

function reverse(string){
  return string.split('').reverse().join('');
}
// console.log(reverse('I am cool!'));
