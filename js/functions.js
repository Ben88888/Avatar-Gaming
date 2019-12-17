
const printCommonElements = (a, b) => {
	for (var i = 0; i < a.length; i++) {
		for (var j = 0; j < b.length; j++) {
			if (a[i] == b[j]) {
				console.log(a[i]);
			}
		}
	}
}




const wordFinder = (a, b) => {
  let indexA = 0;
  let indexB = 0;
  while (indexB < b.length && indexA < a.length) {
    if (b[indexB] == a[indexA]) {
      indexB++;
      indexA++;
    } else {
      indexA++;
      indexB = 0;
     }
  } 
    return indexB == b.length;
 }
 console.log(wordFinder());
 
 
 
  
 const oppositeWordFinder = (a,b) => {
	for(i = 0; i < a.length; i++) { 
		var indexB = b.length - i - 1;
		if  (a[i] != b[indexB]) {
		return false;
		}	
	} return true;
 }
 
 
 
 
const sumLetters = (letter, word) => {
	 let sum = 0;
	for (var j = 0; j < word.length; j++) {
		if (letter == word[j]) {
			sum++;
		}
	}
	return sum;
}
console.log(sumLetters("m", "memes"));




const palindromeFinder = (word) => {
	return oppositeWordFinder(word, word);
}
console.log(palindromeFinder(""));
 
 
 
const replace = (word, letter1, letter2) => {
  let newWord = "";
  for(var i = 0; i < word.length; i++) {
    if (word[i] == letter1) {
       newWord = newWord + letter2;
  } else {
     newWord = newWord + word[i];
     }
	} return newWord;
}  
console.log(replace("", "", ""));



const replaceV2 = (word, letter1, letter2, letter3, letter4) => {
  let newLetters = "";
  for (i = 0; i < 10; i++) {
   newLetters += letter2;
  }
	let newWord = replace (word, letter1, newLetters);
	let newWord2 = replace (newWord, letter3, letter4 + letter4);
	return newWord2;
}
console.log(replaceV2("Howdy", "H", "o", "w", "o"));

/**
 * Reverses the order of a given number.
 * @param {Number} number the given number
 * Example: 4321 => 1234
 */
const reverseNumber = (number) => {
	let reversedNumber = 0;
	let n = number;
	while (n > 0) {
		let lastNumber = n % 10;
		reversedNumber = reversedNumber * 10;
		reversedNumber = reversedNumber + lastNumber;
		n = Math.floor(n / 10);
	}
	return reversedNumber;
}