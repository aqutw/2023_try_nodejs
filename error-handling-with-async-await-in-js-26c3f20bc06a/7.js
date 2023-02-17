function thisThrows() {
    throw new Error("Thrown from thisThrows()");
}

function myFunctionThatCatches() {
    try {
        return thisThrows();
    } catch (e) {
        // Maybe do something else here first.
        throw e;
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
// Error: Thrown from thisThrows()
//     at thisThrows (/repo/error_stacktrace_2.js:2:11) <-- Notice we now point to the origin of the actual error
//     at myFunctionThatCatches (/repo/error_stacktrace_2.js:7:16)
//     at run (/repo/error_stacktrace_2.js:18:15)
//     at Object.<anonymous> (/repo/error_stacktrace_2.js:24:1)
