const inquirer = require("inquirer");
const {writeFileSync} = require("fs");
const {algorithmAction} = require("../algorithmAction")

module.exports.implementAlgorithm = function () {
    inquirer.prompt({
        type: 'editor', name: 'algorithm', message: 'Please write an algorithm.', waitUserInput: true,
    }).then(async answer => {
        await writeFileSync("./write.js", answer.algorithm, (err) => {
            if (err) {
                console.log(err);
            }
            console.log("The file was saved!");
        })
    }).catch((e) => console.log(e))
        .finally(() => require("../algorithmAction").algorithmAction())
}