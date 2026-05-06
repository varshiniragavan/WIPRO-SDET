function getData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data received");
        }, 2000);
    });
}

 
getData().then((data) => {
    console.log(data);
}).catch((error) => {
    console.error("Error:", error);
});


setTimeout(() => {
    console.log("Data received");
}, 5000);

 

setInterval(() => {
    console.log("Checking for new data...");
}, 3000);