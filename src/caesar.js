// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    // your solution code here
    if (!shift || shift === 0 || shift < -25 || shift > 25) return false;

    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let hashTable = {};
    for (let i = 1; i < 27; i++) {
      hashTable[alphabet[i - 1]] = i;
    }
    //console.log(hashTable);

    let result = "";
    input = input.toLowerCase();
    for (let i = 0; i < input.length; i++) {
        let entries = Object.entries(hashTable);
        if (input[i] in hashTable) {
            let charValue = hashTable[input[i]];
            let temp;
            (encode) ? temp = charValue + shift : temp = charValue - shift;
            if (temp > 26) temp = temp - 26;
            if (temp < 1) temp = 26 + temp;
            let hashEntry = entries.find(el => el[1] === temp);
            result += hashEntry[0];
        } else {
          result += input[i];
        }
    }
    console.log(result);
    return result;
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
