console.log("One");
console.log("Two");




// setTimeout(()=>{
//     console.log("Hello this is Akash");
// },4000);

console.log("Three");
console.log("Four");

function sum(a,b){
    console.log("SUM = ",a+b);
}


function calculator(a,b, sumCallback){
    sumCallback(a,b);
}

calculator(10,20,sum);

function multiply(a,b,multi){
    multi(a,b);
}

multiply(10,20,(a,b)=>{
    console.log("A * B =",a*b);
})


let helloMessage = ()=>{
    console.log("Hello My Name is Akash Mukherjee");
}

setTimeout(helloMessage,5000);

// CALLBACKS HELL

let age = 23;

if(age >= 18){
    if(age >= 60){
        console.log("Senior");
    }else{
        console.log("Middle");
    }
}else{
    console.log("Child");
}


// NESTING

for(let i =0 ; i<5; i++){
    let str = "";
    for(let j = 0; j<5; j++){
        str = str + j;
    }
    console.log(i,str);
}