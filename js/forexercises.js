// Prints all of the numbers in the range with the start and the end.
const printRange = (start, end) => {
	for(let i = start; i <= end; i++) {
		console.log(i);
    }
}

// Prints all of the numbers in the range which are divisible by the divider.
const printRangeDividersBy = (start, end, divider) => {
	for(let i = start; i <= end; i++) {
		if (i % divider == 0) {
			console.log(i);
		}
	}
}

// Prints all of the numbers in the range which are not divisible by the divider.
const printRangeNotDividersBy = (start, end, divider) => {
	for(let i = start; i <= end; i++) {
		if (i % divider != 0) {
			console.log(i);
		}
	}
}

// Returns the sum of all of the numbers in range
const sumRange = (start, end) => {
	let sum = 0;
	for(let i = start; i <= end; i++) {
		sum += i;
	}
	return sum;
}

// Prints all of the primes in the range with the start and the end.
// 1, 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 51
const primesInRange = (start, end) => {
	for(let i = start; i <= end; i++) {
		let isIPrime = true;
		for(let j = 2; j < i; j++) {
			if (i % j == 0) {
				isIPrime = false;
			}
		}
		if (isIPrime == true) {
			console.log(i);
		}
	}
}

const multiRange = (start, end) => {
	let multi = 1;
	for(let i = start; i <= end; i++) {
		multi *= i;
	}
	return multi;
}

const numberOfPrimesInRange = (start, end) => {
	let primeCounter = 0;
	for(let i = start; i <= end; i++) {
		let isIPrime = true;
		for(let j = 2; j < i; j++) {
			if (i % j == 0) {
				isIPrime = false;
			}
		}
		if (isIPrime == true) {
			primeCounter++;
		}
	}  return primeCounter
}

const nonPrimesInRange = (start, end) => {
	for(let i = start; i <= end; i++) {
		let isIPrime = true;
		for(let j = 2; j < i; j++) {
			if (i % j == 0) {
				isIPrime = false;
			}
		}
		if (isIPrime == false) {
			console.log(i);
		}
	}
}