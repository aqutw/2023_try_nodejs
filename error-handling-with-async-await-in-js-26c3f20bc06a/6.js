function thisThrows() {
    throw new Error("Thrown from thisThrows()");
}

function myFunctionThatCatches() {
    try {
        return thisThrows();
    } catch (e) {
        throw new TypeError(e.message);
    } finally {
        console.log('We do cleanup here');
    }
}

async function run() {
    try {
        await myFunctionThatCatches();
    } catch (e) {
        console.error(e);
    }
}

run();

// Outputs:
// We do cleanup here
// TypeError: Error: Thrown from thisThrows()
//    at myFunctionThatCatches (/repo/error_stacktrace_1.js:9:15) <-- Error points to our try catch block
//    at run (/repo/error_stacktrace_1.js:17:15)
//    at Object.<anonymous> (/repo/error_stacktrace_1.js:23:1)
