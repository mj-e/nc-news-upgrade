import { expect } from 'chai';
import firstLetterCapital from '../src/helpers/capitalize.js';

describe('#firstLetterCapital', () => {
    it('should be a function', () => {
        expect(firstLetterCapital).to.be.a('function');
    });
    it('returns the first letter of every word capitalized', () => {
        expect(firstLetterCapital('hello')).to.equal('Hello');
        expect(firstLetterCapital('hello world')).to.equal('Hello World');
        expect(firstLetterCapital('this is a test')).to.equal('This Is A Test');
    });
    it('should not capitalize any other letter within the words passed', () => {
        const words = firstLetterCapital('chai assertion tests');
        expect(words[1]).to.equal('h');
        expect(words[6]).to.equal('s');
        expect(words[16]).to.equal('e');
    });
    it('should ignore word if it begins with none lowercase letter', () => {
        const words = firstLetterCapital('1chai assertion tests');
        expect(words).to.equal('1chai Assertion Tests');
    });
});