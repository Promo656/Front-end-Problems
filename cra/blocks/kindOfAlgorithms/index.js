const inquirer = require("inquirer");
const {kindOfAlgorithmsQuestion} = require("./question")
const {kindOfSearchingAlgorithms} = require("../algorithms/searching")

module.exports.whatKindOfAlgorithms = () => {
    inquirer.prompt(kindOfAlgorithmsQuestion).then(answer => {
        if (answer.kindOfAlgorithms === "Searching") {
            kindOfSearchingAlgorithms()
        }
    })
}