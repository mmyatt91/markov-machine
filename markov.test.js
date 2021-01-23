const markov = require("./markov")

describe ("Markov Machine", function () {

    test('make chains', function () {
        const mm = new markov.MarkovMachine ('I am Sam. Sam I am.');
        expect(typeof mm.makeChains).toEqual('function')
        expect(mm.makeChains).not.toBeNull()
    });
    test('make text', function () {
        const mm = new markov.MarkovMachine('I am Sam. Sam I am.'); 
        let words = mm.makeText()
        expect(words).toBeDefined();
    })
    test('make text-  num input', function () {
        const mm = new markov.MarkovMachine('I am Sam. Same I am.')
        let words = mm.makeText(2)
        expect(words.split(" ").length).toEqual(2)
    })
})