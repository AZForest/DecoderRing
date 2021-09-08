# DecoderRing

Project that contains 3 real world ciphers that were solved using JavacScript: Caesar Shift, Polybius Square Cipher, and Substitution Cipher.

## Caesar Shift

![image](https://user-images.githubusercontent.com/61096655/132557351-8661ecd1-e130-4596-8151-36986f4cadac.png)

* src/caesar.js
* The Caesar Shift is a type of substitution cipher originally used by Julius Caesar to protect messages of military significance. 
* It relies on taking the alphabet and "shifting" letters to the right or left, based on the typical alphabetic order.
* Can both encode and decode a message
* Solved using a hash table

## Polybius Square Cipher

![image](https://user-images.githubusercontent.com/61096655/132559893-a133778f-9082-475d-889b-92385a605797.png)

* src/polybius.js
* The Polybius Square is a cipher that is achieved by arranging a typical alphabet into a grid. 
* Each letter is represented through a coordinate. For example, in the above table, the letter "B" would be represented by the numerical pair "21".
* Coordinates will be read by comparing the first digit to the number on the top of the table and the second digit to that on the left.
* Ex: "thinkful" -> "4432423352125413"
* Can both encode and decode a message
* Solved using a hash table and helper methods

## Substitution Cipher

![image](https://user-images.githubusercontent.com/61096655/132560342-c33e2b54-d44e-45fb-b0b8-c3c60d0871f1.png)

* src/substitution.js
* Takes a standard alphabet and transposes it a to a substitution alphabet, thereby decoding the message
* Can both encode and decode a message
* Solved using a hash table
