var expect = require('chai').expect;

function titleCase(title) {
    var words = title.split(' ');
    var titleCaseWords = words.map(function(word) {
        return word[0].toUpperCase() + word.slice(1);
    });

    return titleCaseWords.join(' ');
}

expect(titleCase('the great mouse detective')).to.be.a('string');
expect(titleCase('a')).to.equal('A');
expect(titleCase('ver')).to.equal('Ver');
expect(titleCase('one two')).to.equal('One Two');