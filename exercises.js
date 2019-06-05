// 1)
// Function -  FirstFactorial(num)
// The function will take the num parameter being passed and return the factorial of it (ie. if num =3, return(3 * 2 * 1)).  For test cases, the range will be between 1 and 18.

// FIRST ATTEMPT:
// function firstFactorial(num) {
//     for (var i = 1; i < 19; i++) {
//         // console.log(firstFactorial[i]);
//         // console.log([i]);
//         if (num === 0) {
//             return 1;
//         }
//         // console.log(num)
//         return num * firstFactorial(num - 1);
//     }
//     console.log(firstFactorial[i]);
// }

function firstFactorial(num) {
    if (num === 1) {
        return 1;
    } else {
        return num * firstFactorial(num - 1);
    }
}
console.log(firstFactorial(18));


// 2)
// Function - SimpleAdding(num)
// The function will take the num parameter and add up all the numbers from 1 to num.  For test cases, the parameter num will be any number from 1 to 1000.

// FIRST ATTEMPT:
// function simpleAdding(num){
//     if (num )
// for (var i = 0; i<simpleAdding.length; i++){
//     console.log(simpleAdding(3);
// }
// }


// 3)
// Function - LetterCapitalize(str)
// The function will take the str parameter being passed and capitalize the first letter of each word.  Words will be separated by only one space.

// FIRST ATTEMPT:
// var ahhh = 'this is fricken hard';

// function letterCapitalize(str){
// return str.upperCase();
// return str.charAt(0).toUpperCase() + str.slice(1) FIRST 
// }

var ahhh = 'this is fricken hard';

function letterCapitalize(str) {
    var capIt = str.toLowerCase().split(' '); //DECLARE A VARIABLE AND ASSIGN IT A VALUE THAT CHANGES THE STRING INTO LOWER CASE LETTERS AND SPLITTING THEM INTO SUBSTRINGS 
    for (var i = 0; i < capIt.length; i++) { //LOOP THROUGH SUBSTRINGS
        capIt[i] = capIt[i].charAt(0).toUpperCase() + capIt[i].substring(1); // DEFINE LOOP - RETURN CHARACTOR AT 0 POSITION (1ST LETTER) OF EACH SUBSTRING AND RETURN VAR CAPIT (LOWERCASE) FROM 1 POSITION (2ND LETTER)
    }
    return capIt.join(' '); // JOIN SUBSTRINGS INTO STRING
}
console.log(letterCapitalize(ahhh));


// 4)
// Function rangeRover(arr)
// The function will take an array of two numbers and return the sum of those two numbers AND all numbers between them.  The lowest number will not always come first.  For example rangeRover([1, 4]) should return 10, i.e.(1 + 2 + 3 + 4), rangeRover([4, 1]) should also return 10.

// FIRST ATTEMPT:
// var num = [2, 4];

// function rangeRover(arr){
//     if (arr[0] === arr[0]){
//          return arr[0];
//      }else{
//      return arr[1] + rangeRover(arr[1]-1);
//      }
// }

//  console.log(rangeRover(num));

function rangeRover(arr){
    var array = [1, 4];
    var arrayA = array[0]; // 1
    var arrayB = array[1]; // 4
    var arrayC = 0;

    while (arrayA <= arrayB){ // LOOPS THROUGH BLOCK OF CODE
        arrayC = arrayC + arrayA;
        arrayA += 1;
    }
    return arrayC;
}

console.log(rangeRover([4, 1]));
// console.log(rangeRover(array)); // DIDN'T WORK - ARRAY IS NOT DEFINED?


// 5)
// Function missingLetter(str)
// The function will find the missing letter passed in the parameter and return it.  If all letters are present in the string, the return will be undefined.  For example missingLetter("abce") should return "d", missingLetter("bcd") should return undefined.


// 6)
// Function hailCaesar(num)
// The function will take the num parameter and convert the given number into a roman numeral.  For example hailCaesar(2) should return "II", hailCaesar(5) should return "V".


// 7)
// Function spinalTap(str)
// The function will convert a string to spinal case.  Spinal case is all-lowercase-words-joined-by-dashes.  For example spinalTap("I own this Taco Stand!") should return "i-own-this-taco-stand!".


// 8)
// Function sumFibs(num)
// The function will return the sum of all ODD Fibonacci numbers up to and including the passed number if it's a Fibonacci number.  The Fibonacci Sequence is the series of numbers: 0, 1, 1, 2, 3, 5, 8, 13, where the next number is found by adding up the two numbers before it.  For example subFibs(4) should return 5, sumbFibs(1000) should return 1785.
