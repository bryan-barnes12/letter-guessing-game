const words = require('./words');


class StringToObj {
    constructor(str) {
        str
            .join(',')
//            .join('')
            .split('')
            .sort()
            .forEach((letter) => this[letter] ? this[letter]++ : this[letter] = 1)
    }
}
const wordObj = new StringToObj(words);

console.log('words :>> ', wordObj);