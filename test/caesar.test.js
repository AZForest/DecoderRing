// Write your tests here!
const { caesar } = require('../src/caesar.js');
const { expect } = require('chai');

describe("casear", () => {
    it("should return false if the shift value is equal to 0", () => {
        const actual = caesar("word", 0);
        expect(actual).to.be.false;
    })
})

describe("casear", () => {
    it("should return false if the shift value is less than -25", () => {
        const actual = caesar("word", -26);
        expect(actual).to.be.false;
    })
})

describe("casear", () => {
    it("should return false if the shift value is greater than 25", () => {
        const actual = caesar("word", 26);
        expect(actual).to.be.false;
    })
})

describe("casear", () => {
    it("should return false if the shift value is not present", () => {
        const actual = caesar("word");
        expect(actual).to.be.false;
    })
})

describe("casear", () => {
    it("ignores capital letters", () => {
        const expected = caesar("Word", 3);
        const actual = caesar("word", 3);
        expect(actual).to.equal(expected);
    })
})

describe("casear", () => {
    it("handles shifts that go past the end of the alphabet", () => {
        const expected = "c";
        const actual = caesar("z", 3);
        expect(actual).to.equal(expected);
    })
})

describe("casear", () => {
    it("It maintains spaces and other nonalphabetic symbols in the message, before and after encoding", () => {
        const expected = 'bpqa qa i amkzmb umaaiom!';
        const actual = caesar("This is a secret message!", 8);
        expect(actual).to.equal(expected);
    })
})

describe("casear", () => {
    it("It maintains spaces and other nonalphabetic symbols in the message, before and after decoding", () => {
        const expected = "this is a secret message!";
        const actual = caesar('bpqa qa i amkzmb umaaiom!', 8, false);
        expect(actual).to.equal(expected);
    })
})

