// call back hell. When we make one async inside another async .Below is a call back hell.
setTimeout(() => {
    console.log('Hello 1:');
    setTimeout(() => {
        console.log('Hello 2:');
    }, timeout);
}, 5000);

// Promise
//We have states(pending,fullfilled ,rejected) and result(undefined,result value , error object) properties
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
resolveAfter2Seconds()
    .then(() => { console.log('Success'); })
    .catch(() => { console.log('Rejected'); })

//promise.any()
//promise.all()