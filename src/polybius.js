// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  function polybius(input, encode = true) {
    // your solution code here
    if (!encode) {
      let length = 0;
      for (let i = 0; i < input.length; i++) {
        if (input[i] !== " ") length++;
      }
      if (length % 2 !== 0) return false;
    }
    input = input.toLowerCase();
    
    let polybiusSquare = initializeSquare();
    //console.log(polybiusSquare);

    function initializeSquare() {
        let polybiusSquare = [
            [],
            [],
            [],
            [],
            []
        ];
        let alphabet = "abcdefghiklmnopqrstuvwxyz";
        for (let i = 0; i < 5; i++) {
            let temp = (i * 5) + 5;
            for (let j = i * 5; j < temp; j++) {
                if (alphabet[j] === 'i') polybiusSquare[i].push('i/j');
                else polybiusSquare[i].push(alphabet[j]);
            }
        }
        return polybiusSquare;
    }

    function searchNumber(letter) {
      //console.log(letter);
      if (letter === 'i' || letter === 'j') return '42';
        for (let i = 0; i < 5; i++) {
            for (let j = 0; j < 5; j++) {
                //console.log(polybiusSquare[i][j]);
                if (polybiusSquare[i][j] === letter) {
                    //console.log(i, j);
                    return `${j + 1}${i + 1}`;
                } 
            }
        }
    }

    function searchLetter(number) {
        let num = [number[0], number[1]];
        //console.log(num);
        return polybiusSquare[num[1] - 1][num[0] - 1];
    }

    let result = "";
    if (encode) {
        for (let i = 0; i < input.length; i++) {
            if (input[i] === ' ') result += ' ';
            else {
                result += searchNumber(input[i]);
            }
        }
    } else {
        let i = 0;
        while (i < input.length) {
            if (input[i] === ' ') {
                result += ' ';
                i++;
            }
            else {
                let num = `${input[i]}${input[i+1]}`;
                if (searchLetter(num) === 'i/j') result += '(i/j)';
                else result += searchLetter(num);
                i += 2;
            }
        }
    }
    console.log(result);
    return result;
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
