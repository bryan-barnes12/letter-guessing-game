const Letter = require("./Letter");

class Word {
  constructor(str) {
      const strToArr = str.split('');
      this.letters = strToArr.map(char => new Letter(char))
  };
  guessLetter(character) {
    const searchLetter = this.letters.filter((item) => item.guess(character));
      return searchLetter.length > 0;

  }
  guessedCorrectly() {
    const searchLetter = this.letters.filter((item) => item.visible);
    return searchLetter.length == this.letters.length;
  }
  toString() {
    return this.letters.join(' ');
  }
}
module.exports = Word;
