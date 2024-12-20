// function getData(dataId,nextData) {
//     setTimeout(() => {
//         console.log("Data is = ",dataId);
//         if(nextData){
//             nextData();
//         }
//     }, 2000)
// }





// CALLBACKSHELL IN JS

// getData(1,()=>{
//     console.log("Getting Data2.....");
//     getData(2,()=>{
//         console.log("Getting Data3.....");
//         getData(3,()=>{
//             console.log("Getting Data4.....");
//             getData(4);
//         });
//     });
// });


// SAME TASK USING PROMISE



function getData(dataId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Data is = ", dataId);
            resolve("Completed");
        }, 2000)
    })
}


getData(1).then((res)=>{
    return getData(2);
}).then((res)=>{
    return getData(3);
}).then((res)=>{
    return getData(4);
})


// PROMISES CODE 

// let promise = new Promise((resolve, reject) => {
//     console.log("I am a Promise");
//     resolve(123);
//     // reject("Some Error Occured");
// });


// console.log(promise);



