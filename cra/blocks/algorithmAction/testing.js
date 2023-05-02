const {execSync} = require("child_process")

module.exports.testAlgorithm = async () => {
    try {
        console.log(await execSync("npm test"))
    } catch (e) {
        console.log(e)
    } finally {
        require("../algorithmAction").algorithmAction()
    }
}