const inquirer = require("inquirer");
const {kindOfSearchingAlgorithmsQuestions} = require("./question")
const {algorithmAction} = require("../../algorithmAction/index")

module.exports.kindOfSearchingAlgorithms = () => {
    inquirer.prompt(kindOfSearchingAlgorithmsQuestions).then(answer => {
        if (answer.kindOfAlgorithms === "Binary search") {
            algorithmAction()
        }
    })
}