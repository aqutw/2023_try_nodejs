const fs = require('fs')
async function thisThrows() {
    //throw new Error("Thrown from thisThrows()");
    fs.writeFileSync('/tmp11/test.txt', 'test')
}

async function myFunctionThatCatches() {
    try {
        return thisThrows();
    } catch (e) {
        console.error(e);
    } finally {
        console.log('We do cleanup here');
    }
    return "Nothing found";
}

async function run() {
    const myValue = await myFunctionThatCatches();
    console.log(myValue);
}

run();
