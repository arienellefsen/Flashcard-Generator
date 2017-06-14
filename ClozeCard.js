"use strict";

function ClozeCards(text, cloze) {
    if (!(this instanceof ClozeCards)) {
        return new ClozeCards(text, cloze);
    }
    this.cloze = cloze;
    this.text = text;
}

ClozeCards.prototype.fulltext = function() {
    var error = this.cloze + ' does not appear in ' + this.text;
    var pattern = RegExp(this.cloze, 'gi');
    var result = this.text.match(pattern);
    if (result !== null) {
        return console.log("Card Full Text: " + this.text)
    } else {
        return console.log("Error: " + error);
    }
};

ClozeCards.prototype.partial = function() {
    var createPartial = this.text.replace(this.cloze, '...');
    return console.log("Partial Text: " + createPartial);
};

module.exports = ClozeCards;