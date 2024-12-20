// Promise in JS 

// const getPromise = ()=>{
//     return new Promise((resolve, reject)=>{
//         console.log("My Name is Akash Mukherjee");
//         // resolve("success");
//         reject("Network error");
    
//     }) 
// };

// let myPromise = getPromise();

// myPromise.then((res)=>{
//     console.log("Prmise Fillfill",res);
// })


// myPromise.catch((err)=>{
//     console.log("Promise Rejected",err);
// })

// Function-1
function asyncFunction(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("Some Data-1");
            resolve("Success");
        },4000)
    })
}

// Function-2
function asyncFunction2(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("Some Data-2");
            resolve("Success");
        },5000)
    })
}

// Fetching Data-1
console.log("Fetching Data-1...");
asyncFunction().then((res)=>{
    console.log(res);
    console.log("Fetching Data-2.......");
    asyncFunction2().then((res)=>{
        console.log(res);
    })
})




