/*
    CIT 281 Project 2
    Name: Isabella Barillas
*/

// Returns a random number between min (inclusive) and max (exclusive)
const getRandomInteger =function(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }
  
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  let result = "";
  
  for (let i = 0; i < getRandomInteger(5, 26); i++) {
    result += alphabet[getRandomInteger(1, alphabet.length - 1)];
  }
  
  console.log(result);


  //Get and return a single, random, lowercase letter
  const getRandomLetter = function() {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const randomIndex = Math.floor(Math.random() * alphabet.length);
    return alphabet[randomIndex];
}

for (let i = 0; i < 1; i++) {
      console.log(getRandomLetter());
}


//return the random length string
const getRandomString = function(minLength, maxLength) {
    const length = getRandomInteger(minLength, maxLength);
    let result = "";

    for (let i = 0; i < length; i++) {
        result += getRandomLetter();
    }

    return result;
}

console.log(getRandomString(10, 20));


//Returns a string in ascending order
const getSortedString = function(string) { return string.split('').sort().join(''); }
console.log(getSortedString(getRandomString(10, 20)));
