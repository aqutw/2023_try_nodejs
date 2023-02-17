const fs = require('fs')
async function thisThrows() {
    //throw new Error("Thrown from thisThrows()");
    fs.writeFileSync('/tmp11/test.txt', 'test')
}

thisThrows()
    .catch(console.error)
    .then(() => console.log('We do cleanup here'));
