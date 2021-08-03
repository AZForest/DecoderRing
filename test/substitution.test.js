// Write your tests here!
const { substitution } = require('../src/substitution.js');
const { expect } = require('chai');

describe("substitution", () => {
    it("returns false if the given alphabet isn't exactly 26 characters long", () => {
        const actual = substitution("word", "abcde");
        expect(actual).to.be.false;
    })
})

describe("substitution", () => {
    it("correctly translates the given phrase, based on the alphabet given to the function", () => {
        const expected = "jrufscpw";
        const actual = substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev");
        expect(actual).to.equal(expected);
    })
})

describe("substitution", () => {
    it("returns false if there are any duplicate characters in the given alphabet", () => {
        const actual = substitution("thinkful", "xoyqmcgrukswaflnthdjpzibex"); //2 x's 
        expect(actual).to.be.false;
    })
})

describe("substitution", () => {
    it("maintains spaces in the message, before and after encoding", () => {
        const expected = 'elp xhm xf mbymwwmfj dne';
        const actual = substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev");
        expect(actual).to.equal(expected);
    })
})

describe("substitution", () => {
    it("maintains spaces in the message, before and after decoding", () => {
        const expected = "you are an excellent spy";
        const actual = substitution('elp xhm xf mbymwwmfj dne', "xoyqmcgrukswaflnthdjpzibev", false);
        expect(actual).to.equal(expected);
    })
})

describe("substitution", () => {
    it("ignores capital letters", () => {
        const expected = substitution("YoU aRe an EXcellenT SpY","xoyqmcgrukswaflnthdjpzibev" );
        const actual = substitution('you are an excellent spy', "xoyqmcgrukswaflnthdjpzibev" ); 
        expect(actual).to.equal(expected);
    })
})