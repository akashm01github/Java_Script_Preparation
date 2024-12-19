function getData(dataId,nextData) {
    setTimeout(() => {
        console.log("Data is = ",dataId);
        if(nextData){
            nextData();
        }
    }, 2000)
}

getData(1,()=>{
    console.log("Getting Data2.....");
    getData(2,()=>{
        console.log("Getting Data3.....");
        getData(3,()=>{
            console.log("Getting Data4.....");
            getData(4);
        });
    });
});
