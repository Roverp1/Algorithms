const substringSearch = (substing, string) => {
  const subStrLength = substing.length;
  const stringLength = string.length;

 // Iterate over the string, shifting one character at a time
  for (let i = 0; i <= stringLength - subStrLength; i++) {
    let j = 0;

// For the current index i, check if the substring matches
    while (j < subStrLength && string[i + j] === substing[j]) {
      j++;
    }

   // If the substring matches at index i, log the index
    if (j === subStrLength) {
      console.log(`substingtern found at index ${i}`);
    }
  }
}

// Test 1
const string1 = "AABAACAADAABAABA";
const substring1 = "AABA";
console.log(`Test 1, string with length of ${string1.length}, searching for substring of length ${substring1.length}:`);
substringSearch(substring1, string1);

// Test 2
const string2 = "agd";
const substring2 = "g";
console.log("\nTest 2:");
substringSearch(substring2, string2);


// New Test 3
const string3 = "Hello, World!";
const substring3 = "World";
console.log("\nTest 3:");
substringSearch(substring3, string3);

// New Test 4
const string4 = "The quick brown fox jumps over the lazy dog";
const substring4 = "fox";
console.log("\nTest 4:");
substringSearch(substring4, string4);
