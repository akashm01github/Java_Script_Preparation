// Async and Await

async function hello(){
    console.log("Hello Akash");
}

function api(){
    return new Promise((resolve,regect)=>{
        setTimeout(()=>{
            console.log("Weather Data");
            resolve(200);
        },2000)
    })
}

async function getWeatherData(){
    await api(); //1ST CALL
    await api(); //2ND CALL
}

function getData(dataId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Data is = ", dataId);
            resolve("Completed");
        }, 4000)
    })
}

async function getAllData(){
    console.log("Getting Data-1......")
    await getData(1);
    console.log("Getting Data-2......")
    await getData(2);
    console.log("Getting Data-3......")
    await getData(3);
    console.log("Getting Data-4......")
    await getData(4);
}

getAllData();




