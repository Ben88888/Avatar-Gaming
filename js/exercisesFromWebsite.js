var side1 = 5; 
var side2 = 6; 
var side3 = 7; 
var s = (side1 + side2 + side3)/2;
var area =  Math.sqrt(s*((s-side1)*(s-side2)*(s-side3)));
console.log(area);

const guessingFunction = () => {
var num = Math.ceil(Math.random() * 10);
 var gnum = prompt('Guess the number between 1 and 10 inclusive');
 if (gnum == num)
   alert('Matched');
  else
   alert('Not matched, the number was ' + num);
}
// HOMEWORK: Check how many times this has to run in order to get a value of more than 200,300,400,500
const computerVsComputer = () => {
  let counter = 0;
  for (let i = 1; i <= 1000; i++) {
    let num = Math.ceil(Math.random() * 10);
    let gnum = Math.ceil(Math.random() * 10);
    if (gnum == num) {
      counter = counter + 1;
    }
  }
  return counter;
}

const winCounterN = (n) => {
  let counterN = 0;
  while(computerVsComputer() <= n) {
    counterN = counterN + 1;
  }
  return counterN;
  
}
console.log(winCounterN(140));

function cToF(celsius) 
{
  var cTemp = celsius;
  var cToFahr = cTemp * 9 / 5 + 32;
  var message = cTemp+'\xB0C is ' + cToFahr + ' \xB0F.';
    console.log(message);
}

function fToC(fahrenheit) 
{
  var fTemp = fahrenheit;
  var fToCel = (fTemp - 32) * 5 / 9;
  var message = fTemp+'\xB0F is ' + fToCel + '\xB0C.';
    console.log(message);
} 
cToF(60);
fToC(45);

function difference(n)
 {
    if (n <= 13)
        return 13 - n;
    else
        return (n - 13) * 2;
 }
console.log(difference(32))
console.log(difference(11))

function sumTriple (x, y) {
  if (x == y) {
    return 3 * (x + y);
    } 
   else
   {
    return (x + y);
   }
 }
console.log(sumTriple(10, 20));
console.log(sumTriple(10, 10));

function diff_num(n) {
  if (n <= 19) {
    return (19 - n);
    }
  else
    {
     return (n - 19) * 3;
    }
}

console.log(diff_num(12));
console.log(diff_num(19));
console.log(diff_num(22));

const positiveNegative = (x, y) => {
  return (x < 0 && y > 0 || y < 0 && x > 0); 
}
console.log(2, -2);
console.log(2, 2);
console.log(-2, -2);
console.log(-2, 2);

const stringCheck = (str) => {
  if (str === null || str === undefined || str.substring(0, 2) === 'Py') {
   return str;
  } else {
    return "Py" + str;
  }
}
console.log("Pyter");
console.log("ter");

const letterRemover = (str, position) => {
  return str.substring(0, position) + str.substring(position + 1, str.length);
}
console.log(letterRemover("gaming", 3));

// exercise 23
function letterReplacer(str)  {
  const mid_char = str.substring(1, str.length - 1);
  return (str.charAt(str.length - 1)) + mid_char + str.charAt(0);
}
console.log(letterReplacer('semeM'));

// exercise 24
const letterPlacer = (str) => {
  return str.charAt(0) + str + str.charAt(0); 
}
console.log(letterPlacer("Memes"));

// exercise 25
const dividesByDividerOrDivider2 = (num, divider, divider2) => {
    if (num % divider == 0 || num % divider2 == 0) {
      return true;
    } else {
      return false;
  }
}
console.log(dividesByDividerOrDivider2(21, 3, 7));

// exercise 26
const add3Characters = (str) => {
  const firstThreeLetters = str.substring(0, 3);
  return firstThreeLetters + str + firstThreeLetters;
}
console.log(add3Characters('string'));

/**
 * This function checks if a given string starts with the word 'Java'.
 * The description of the function is taken for excersise 27.
 * @param {string} str The given string.
 */
const startsWithJava = (str) => {
  const part = str.substring(0, 4);
  if (part == 'Java') {
    return true;
  } else {
    return false;
  }
} 
console.log(startsWithJava('Javascript'));

/**
 * this function checks if num and num2 are both in the range of start and end.
 * exercise 28
 * @param {number} num the first given number to check
 * @param {number} num2 the second given number to check
 * @param {number} start the start of the range
 * @param {number} end the end of the range
 */
const isThisTheRightRange = (num, num2, start, end) => {
  if(start <= num && num <= end && start <= num2 && num2 <= end) {
    return true;
  } else {
    return false;
  }
} 
console.log(isThisTheRightRange(88, 51, 50, 99));

/**
 * this function checks if at least one of the numbers are in the range of start and end
 * exercise 29
 * @param {number} num the first given number to check
 * @param {number} num2 the second given number to check
 * @param {number} num3 the third given number to check
 * @param {number} start the start of the range
 * @param {number} end the end of the range
 */
const isThisTheRightRange2 = (num, num2, num3, start, end) => {
  if((start <= num && num <= end) || (start <= num2 && num2 <= end) || (start <= num3 && num3 <= end)) {
    return true;
  } else {
    return false;
  }
} 
console.log(isThisTheRightRange2(88, 51, 68 , 50, 99));

/**
 * this function check if the word "script" starts at the 4th index and ends at the end of the string.
 * exercise 30
 * @param {string} str the full word
 */
const stringCheck = (str) => {
  const start = str.substring(0, 4);
  const position5ToEnd = str.substring(4, str.length + 1);
  if (position5ToEnd == 'script') {
    return start;
  } else {
    return str;
  }
} 
console.log(stringCheck('Memescript'));

/**
 * this function checks which one of the 3 given integers is the largest.
 * exercise 31
 * @param {number} integer the first given number
 * @param {number} integer2 the second given number
 * @param {number} integer3 the third given number
 */
const whichIsLarger = (integer, integer2, integer3) => {
  let largestInteger = 0;
    if (integer > integer2) {
      largestInteger = integer;
    } else {
      largestInteger = integer2;
     } if (integer3 > largestInteger) {
      largestInteger = integer3;
    }
    return largestInteger;
}
console.log(whichIsLarger(1, 2, 3));

/**
 * this function checks which one of the 3 given integers is the largest.
 * exercise 31 alternate
 * @param {number} integer the first given number
 * @param {number} integer2 the second given number
 * @param {number} integer3 the third given number
 */
const whichIsLargerV2 = (integer, integer2, integer3) => {
  if (integer > integer2 && integer > integer3) {
    return integer;
  } else if (integer2 > integer && integer2 > integer3) {
    return integer2;
  } else {
    return integer3;
  }
}
console.log(whichIsLargerV2(1, 4, 3));

/**
 * this function checks which one of the 2 given numbers is closer to 100.
 * exercise 32
 * @param {number} num the first given number
 * @param {number} num2 the second given number
 */
const whichIsCloserTo100 = (num, num2) => {
  const firstDiff = Math.abs(100 - num);
  const secondDiff = Math.abs(100 - num2);
  if (firstDiff < secondDiff) {
    return num;
  } else {
    return num2;
  }
}
console.log(whichIsCloserTo100(99, 101));

/**
 * this function checks if 2 given numbers are both between one of 2 given ranges.
 * exercise 33
 * @param {number} num the first given number
 * @param {number} num2 the second given number
 * @param {number} start the start of the first range
 * @param {number} start2 the start of the second range
 * @param {number} end the end of the first range
 * @param {number} end2 the end of the second range
 */
const rangeBoolean = (num, num2, start, start2, end, end2) => {
  if ((start <= num && num <= end && start <= num2 && num2 <= end) || (start2 <= num && num <= end2 && 2 <= num2 && num2 <= end2)) {
    return true;
  } else {
    return false
  }
}
console.log(rangeBoolean(88, 90, 40, 60, 70, 100));

/**
 * exercise 35
 * this function checks if a character is used in a word/string 2 to 4 times.
 * @param {string} str the given string
 * @param {letter} char the given letter
 */
const characterCounterAndCheck = (str, char) => {
  let otherChar = 0;
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) == char) {
      otherChar++;
    }
  }
  return (otherChar >= 2 && otherChar <= 4);
}
console.log(characterCounterAndCheck("Memes", "e"));

/**
 * exercise 36
 * this function checks if given integers are positive and it checks if their last digits are the same.
 * @param {number} a the first given number
 * @param {number} b the second given number
 * @param {number} c the third given number
 */
const lastDigit = (a, b, c) => {
  if (a > 0 && b > 0 && c > 0) {
    return (a % 10 == b % 10 && a % 10 == c % 10 && b % 10 == c % 10);
  } else {
    return false;
  }
}
console.log(lastDigit(28, 88, 9008));

/**
 * exercise 37
 * this function puts the first 3 letters of a word in the lower case and the rest of the letters in 
 * upper case. if the word has 3 letters or less then the function puts the whole word in th upper case.
 * @param {string} str 
 */
const lowerCaseUpperCase = (str) => {
    if (str.length < 3) {
      return str.toUpperCase();
    }
    firstThreeLetters = (str.substring(0, 3)).toLowerCase();
    theRestOfTheLetters = str.substring(3, str.length).toUpperCase();  
    return firstThreeLetters + theRestOfTheLetters;
}
console.log(lowerCaseUpperCase('MEMes'));
console.log(lowerCaseUpperCase('b'));

/**
 * exercise 38
 * this function checks if a mark is bigger than or equal to 89 or 90.
 * @param {number} totalMarks the total marks
 * @param {boolean} isTheExam true or false
 */
const markCheck = (totalMarks, isTheExam) => {
  if (isTheExam) {
    return totalMarks >= 90;
  }
  return (totalMarks >= 89 && totalMarks <= 100);
}
console.log(markCheck(88, "")); // false
console.log(markCheck(89, "")); // true
console.log(markCheck(90, true)); // true
console.log(markCheck(89, true)); // false


/**
 * exercise 39
 * this function checks if the sum of 2 given integers is in the range 50...80.
 * @param {number} a the first given number
 * @param {number} b the secend given number
 */
const sumRange = (a, b) => {
  const aBSum = a + b; 
  if (50 <= aBSum && aBSum <= 80) {
    return 65;
  } else {
    return 80;
  }
}
console.log(sumRange(50, 2));
console.log(sumRange(79, 2));

/**
 * exercise 40
 * this function checks if one of 2 given integers, their sum or their difference is equal to 8.
 * @param {number} a the first given number.
 * @param {number} b the second given number.
 */
const isIt8 = (a, b) => {
  return (a == 8 || b == 8 || a + b == 8 || Math.abs(a - b) == 8);
}
console.log(isIt8(8, 9));
console.log(isIt8(9, 8));
console.log(isIt8(3, 5));
console.log(isIt8(32, 24));
console.log(isIt8(24, 32));
console.log(isIt8(33, 32));

/**
 * exercise 41
 * this function checks if 3 numbers are the same.
 * @param {number} a the first given number
 * @param {number} b the second given number
 * @param {nummber} c the third given number
 */
const areTheyTheSame = (a, b, c) => {
  if(a == b && b == c && a == c) {
    return 30;
  } else if ((a == b && a != c) || (b == c && b != a) || (a == c && c != b)) {
    return 20;
  } else {
    return 40;
  }
}
console.log(areTheyTheSame(5, 5, 5));
console.log(areTheyTheSame(1, 2, 3));
console.log(areTheyTheSame(51, 51, 52));
console.log(areTheyTheSame(5, 11, 11));
console.log(areTheyTheSame(8, 4, 8));

/**
 * exercise 42
 * this function checks if 3 numbers are "strict mode" or "soft mode".
 * @param {number} a the first given number
 * @param {number} b the second given number
 * @param {number} c the third given number
 */
const strictSoft = (isStrictMode, a, b, c) => {
  if (isStrictMode) {
    return (a < b && b < c);
   } else {
    return (a < c);
  }
}
console.log(strictSoft(true, 1, 2, 3));
console.log(strictSoft(true, 5, 5, 6));
console.log(strictSoft(false, 8, 7, 9));
console.log(strictSoft(false, 14, 13, 11));

/**
 * exercise 46
 * this function checks if a and b are positive and if they are positive it checks if one of them
 * (not both) divide c or d.
 * @param {number} a the first given integer
 * @param {number} b the second given integer
 * @param {number} c the first given divider
 * @param {number} d the second given divider
 */
const whichOneDivides = (a, b, c, d) => {
  if (0 > a || 0 > b) {
    return false;
  } else {
      return (a % c == 0 && b % c != 0 && b % d != 0 || a % d == 0 && b % d != 0 && b % c != 0 ||
      a % c != 0 && b % c == 0 && a % d != 0 || a % d != 0 && b % d == 0 && a % c != 0);
  }
}
console.log(whichOneDivides(49, 81, 7, 11));
console.log(whichOneDivides(8, 14, 7, 11));
console.log(whichOneDivides(22, 13, 7, 11));
console.log(whichOneDivides(18, 88, 7, 11));
console.log(whichOneDivides(-41, 17, 7, 11));
console.log(whichOneDivides(2, -89, 7, 11));
console.log(whichOneDivides(98, 49, 7, 11));
console.log(whichOneDivides(98, 99, 7, 11));
console.log(whichOneDivides(99, 98, 7, 11));
console.log(whichOneDivides(22, 99, 7, 11));

/**
 * exercise 47
 * this function checks if a is in the range of num and num2 inclusive.
 * @param {number} a the given number
 * @param {number} num the start of the range
 * @param {number} num2 the end of the range
 */
const anotherExerciseWithRange = (a, num, num2, x, y) => {
  if (a <= num || num2 <= a) {
    return false;
  } else if (a >= x && a <= y) {
    return true;
  } else {
    return false
  }
}
console.log(test_digit(40, 40, 10000, 400, 45));  
console.log(test_digit(80, 40, 10000, 320, 79));  
console.log(test_digit(89, 40, 10000, 4000, 30));

/**
 * exercise 48
 * this function reverses a given word.
 * @param {string} str the given word
 */
const reverseThis = (str) => {
  let newString = "";
    for (var i = str.length - 1; i >= 0; i--) { 
      newString += str[i];
  } return newString;
}
console.log(reverseThis('Memes'));

/**
 * exercise 94
 * This function finds the number which appears most in a given array of integers.
 * @param {number} a
 */
const arrayElementMode = (a) => {
  var c = [];
    arg = 0;

    for(var i = 0; i < 100; i++) {
      c.push(0);
    }
}
for(var i = 0; i < a.length; i++) {
  c[a[i] - 1]++;
  if(c[a[i] - 1] > c[arg]) {
    arg = a[i] - 1;
  }
return arg + 1;  
}
console.log(arrayElementMode(1, 32, 8, 49, 8, 8, 11, 99, 87, 16));
