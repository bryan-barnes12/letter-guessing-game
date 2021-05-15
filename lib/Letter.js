
class Letter {
    constructor(letter) {
        const visibleChars = ["'", ',', '-', '.', ':', '?', '·', '½', 'ä', 'é', ' ']
        if (visibleChars.includes(letter)) {
            this.visible = true;
        } else {
            this.visible = false;
        }
        this.letter = letter;
        this.char = letter;
    }
    guess(guessVal) {
        if (guessVal === this.letter) {
            this.visible = true;
            return true;
        } else {
            return false;
        }
    }
    toString() {
        if (!this.visible) {
            return '_';
        }
        return this.char;
    }
    getSolution() {
        return this.letter;
    }
}



module.exports = Letter;
