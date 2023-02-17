const fs = require('fs')

async function thisThrows() {
    // throw new Error("Thrown from thisThrows()");
    fs.writeFileSync('/tmp11/test.txt', 'test')
}

try {
    thisThrows();
} catch (e) {
    console.error(e);
} finally {
    console.log('We do cleanup here');
}
