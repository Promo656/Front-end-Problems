const inquirer = require("inquirer");
const {writeFileSync} = require("fs");

module.exports.implementAlgorithm = async () => {
    inquirer.prompt({
        type: 'editor', name: 'algorithm', message: 'Please write an algorithm.', waitUserInput: true,
    }).then(answer => {
        console.log("Before writing")
        writeFileSync("./write.js", answer.algorithm, (err) => {
            if (err) {
                console.log(err);
            }
            console.log("The file was saved!");
        })
        console.log("After writing")
    })
}