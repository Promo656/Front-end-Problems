const inquirer = require("inquirer");
const {coddingQuestions} = require("./question")
const {whatKindOfAlgorithms} = require("../kindOfAlgorithms")

module.exports.codding = () => {
    inquirer.prompt(coddingQuestions).then(answer => {
        if (answer.codding === "Repeat algorithm") {
            whatKindOfAlgorithms()
        }
    })
}