const inquirer = require("inquirer");
const {algorithmActionQuestion} = require("./question")
const {implementAlgorithm} = require("./implement")
const {testAlgorithm} = require("./testing")
// const {kindOfSearchingAlgorithms} = require("../algorithms/searching")

module.exports.algorithmAction = function () {
    inquirer.prompt(algorithmActionQuestion).then( answer => {
        if (answer.algorithmAction === "Implement") {
             implementAlgorithm()
        } else if (answer.algorithmAction === "Test") {
             testAlgorithm()
        }

        /*  switch (answer.algorithmAction) {
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
          }*/
    })
}