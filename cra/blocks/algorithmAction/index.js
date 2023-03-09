const inquirer = require("inquirer");
const {algorithmActionQuestion} = require("./question")
const {implementAlgorithm} = require("./implement")
const {testAlgorithm} = require("./testing")
// const {kindOfSearchingAlgorithms} = require("../algorithms/searching")

const algorithmAction = () => {
    inquirer.prompt(algorithmActionQuestion).then(async answer => {
        if (answer.algorithmAction === "Implement") {
            await implementAlgorithm()
        } else if (answer.algorithmAction === "Test") {
            await testAlgorithm()
        }

        /*    while (true) {
                switch (answer.algorithmAction) {
                    case "Implement":
                        implementAlgorithm()
                        break
                    case "Test":
                        testAlgorithm()
                        break
                    case "Back":
                        // kindOfSearchingAlgorithms()
                        break
                    default:
                        // kindOfSearchingAlgorithms()
                        break
                }
            }*/
    })
}

module.exports = {
    algorithmAction
}