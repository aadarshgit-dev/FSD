const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const success = true; 
        if (success) {
            resolve("Promise resolved successfully!");
        } else {
            reject("Promise rejected.");
        }
    }, 1000);
});
myPromise.then(result=>console.log(result)).catch(error=>console.error(error));