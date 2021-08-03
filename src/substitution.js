// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    // your solution code here
    input = input.toLowerCase();
    if (!alphabet || alphabet.length !== 26) return false;
    let uniqueValues = {};
    for (let i = 0; i < alphabet.length; i++) {
      if (alphabet[i] in uniqueValues) {
        return false;
      } else {
        uniqueValues[alphabet[i]] = 1;
      }
    }
    
    const normalAlphabet = "abcdefghijklmnopqrstuvwxyz";
    let hashTable = {};
    for (let i = 0; i < 26; i++) {
        hashTable[normalAlphabet[i]] = alphabet[i];
    }

    let result = "";
    if (encode) {
      for (let i = 0; i < input.length; i++) {
        if (input[i] in hashTable) {
            result += hashTable[input[i]];
        } else {
            result += input[i];
        }
      }
    } else {
      let entries = Object.entries(hashTable);
      for (let i = 0; i < input.length; i++) {
        if (input[i] === ' ') result += ' ';
        else {
          let realVal = entries.find(el => el[1] === input[i]);
          result += realVal[0];
        }       
      }
    }
    return result;
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
