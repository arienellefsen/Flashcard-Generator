var basicCard = require('./BasicCard.js');
var clozeCard = require('./ClozeCard.js');
var inquirer = require('inquirer');

//need to ask what type of card user wants to create

function createCards() {
    inquirer.prompt([{
            type: 'list',
            name: 'cardType',
            message: 'What type of card would like to create?',
            choices: ['basic', 'cloze-deleted'],
            filter: function(val) {
                return val.toLowerCase();
            }
        },
        {
            name: "text",
            message: "Please enter the question for your card"
        }, {
            name: "cloze",
            message: "Please enter the answear for your card"
        }
    ]).then(function(answers) {
        if (answers.cardType == 'basic') {
            var firstPresident = basicCard(answers.text, answers.cloze);
            firstPresident.printFront();
            firstPresident.printBack();
        } else {
            var firstPresidentCloze = clozeCard(answers.text, answers.cloze);
            console.log(firstPresidentCloze.cloze);
            firstPresidentCloze.partial();
            firstPresidentCloze.fulltext();
        }
    });
};

//Initialize card
createCards();