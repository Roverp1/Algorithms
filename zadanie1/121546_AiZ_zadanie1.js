// function for generating array of random prime numbers
const randomPrimeArr = lengthOfArr => {
  const mainArr = [];

  while (mainArr.length !== lengthOfArr) {

    // generating arr with random numbers
    // if 0 in array - geometric mean will always be 0
    
    let randomNum = Math.floor(Math.random() * 10000) + 1;
    if (!isPrime(randomNum)) {
      randomNum++;
    } else {
      mainArr.push(randomNum);
    }
  }
  return mainArr;
}


// funciton for checking if the number is prime
function isPrime(num) { 

  // every prime number is equal to 6k + r, except for 2 and 3
  // where k - is every positive interger
  // and r - is equal to 1 or -1
  if (num <= 0) return false;
  if (num <= 3) return true;
  if (num % 2 === 0 || num % 3 === 0) return false;
  
  // i = 6k - 1, where k = 1 
  let i = 5;
  while (i <= Math.sqrt(num)) {
    // if number composed of prime numbers, than it is a composite number 
    if ((num % i) === 0 || (num % (i + 2)) === 0) return false;
    i += 6;
  }
  return true;
}


// functions for checking arithmetic and geomentric means
const checkArithmeticMean = arr => (arr.reduce((accumulator, current) => accumulator + current) / arr.length) > 5 ? true : false;
const checkGeometricMean = arr => Math.pow((arr.reduce((accumulator, current) => accumulator * current), 1 / arr.length)) > 5 ? true : false;

// functions for calculating arithmetic and geometric means
const arithmeticMean = arr => (arr.reduce((accumulator, current) => accumulator + current) / arr.length);
const geometricMean = arr => Math.pow(arr.reduce((accumulator, current) => accumulator * current), 1 / arr.length);


const endingArr = randomPrimeArr(10 + Math.floor(Math.random() * 11));

// if arithmetic or geomtric means <= 5, making smallest numbers in array = 7 
while (!checkArithmeticMean(endingArr) && !checkGeometricMean(endingArr)) {
  const indexOfLowestNum = endingArr.indexOf(Math.min(...endingArr));
  endingArr[indexOfLowestNum] = 7;

  console.log(checkArithmeticMean(endingArr))
}

console.log(endingArr);
/* endingArr.forEach(num => {
  console.log(`Is ${num} prime? ${isPrime(num)}`);
}); */

const arrOfNumbers = [2, 4, 8, 16, 32];

console.log(`is 35 Prime? - ${isPrime(35)}`)
console.log(`is 36 Prime? - ${isPrime(36)}`)
console.log(`is 37 Prime? - ${isPrime(37)}`)
console.log(`is 5 Prime? - ${isPrime(5)}`)

console.log(`arithmeticMean of ${arrOfNumbers} = ${arithmeticMean(arrOfNumbers)}`)
console.log(`geometricMean of ${arrOfNumbers} = ${geometricMean(arrOfNumbers)}`)
