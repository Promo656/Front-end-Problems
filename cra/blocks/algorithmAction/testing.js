const {execSync} = require("child_process")

module.exports.testAlgorithm =async () => {
    const result = execSync("npm test")
    console.log(result)
}