function resolveAfter2Seconds1() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('resolved');
        }, 2000);
    });
}
async function asyncCall1() {
    console.log('calling');
    const result = await resolveAfter2Seconds1();
    console.log(result);
}
asyncCall1();


// Define a function that returns a Promise resolving or rejecting after 2 seconds
function resolveAfter2Seconds() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const randomNumber = Math.random();
            if (randomNumber < 0.5) {
                resolve('resolved-----');
            } else {
                reject(new Error('rejected-----'));
            }
        }, 2000);
    });
}

// Async function to call resolveAfter2Seconds
async function asyncCall() {
    console.log('calling');
    try {
        // Await the resolution of resolveAfter2Seconds and log the result
        const result = await resolveAfter2Seconds();
        console.log(result);
    } catch (error) {
        console.error(error.message);
    }
}

// Call the async function
asyncCall();
