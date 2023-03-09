const inquirer = require("inquirer");
const {codding} = require("../codding");
const {mainQuestions} = require("./question");

module.exports.main = () => {
    inquirer.prompt(mainQuestions).then(answer => {
        if (answer.main === "Codding") {
            codding()
        }
    })
}