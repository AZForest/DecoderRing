// Write your tests here!
const { polybius } = require('../src/polybius.js');
const { expect } = require('chai');

describe("polybius", () => {
    it("When encoding, it translates the letters i and j to 42", () => {
        const expected = "4242";
        const actual = polybius("ij");
        expect(actual).to.equal(expected);
    })
})

describe("polybius", () => {
    it("When decoding, it translates 42 to (i/j)", () => {
        const expected = '(i/j)a(i/j)b';
        const actual = polybius("42114221", false);
        expect(actual).to.equal(expected);
    })
})

describe("polybius", () => {
    it("ignores capital letters", () => {
        const expected = polybius('a message');
        const actual = polybius('A Message');
        expect(actual).to.equal(expected);
    })
})

describe("polybius", () => {
    it("maintains spaces in the message, before and after encoding", () => {
        const expected ='3251 131343 254324 1341';
        const actual = polybius("He llo wor ld");
        expect(actual).to.equal(expected);
    })
})

describe("polybius", () => {
    it("maintains spaces in the message, before and after decoding", () => {
        const expected = "he llo wor ld";
        const actual = polybius("3251 131343 254324 1341", false);
        expect(actual).to.equal(expected);
    })
})


