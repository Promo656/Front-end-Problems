const methods = require("./jsUtils")
const colours = require("./helpers/colors")
const {exampleWD, data} = require("./helpers/texts")
const {exec} = require("child_process");

function start() {
    const methodsLength = Object.keys(methods).length;
    const random = Math.floor(Math.random() * methodsLength);
    const methodsName = Object.keys(methods);
    const name = methodsName[random]
    console.log(colours.fg.blue, data[name].description, colours.reset);
    console.log(colours.fg.green, exampleWD, colours.reset);
    console.log(colours.fg.white, data[name].example, colours.reset);


    // setTimeout(()=>open(name), 1000)
    // open(name)
}

function open(name) {
    exec(`micro ./helpers/${name}.js`, (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
            return;
        }
        console.log(`stdout: ${stdout}`);

    });

}

start()



