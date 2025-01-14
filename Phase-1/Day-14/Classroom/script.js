let dogdata  = document.querySelector("#data");
let button  = document.querySelector(".btn");
console.log(dogdata);

const URL =  "https://dog-api.kinduff.com/api/facts";

const getFacts = async ()=>{
    console.log("Getting Data...........");
    let response  =await fetch(URL);
    console.log(response); //JSON FORMAT
    let data =await response.json();
    dogdata.innerText = data.facts;
}



// USING PROMISES 

// function getFacts(){
//     console.log("Getting Data........");
//     fetch(URL)
//     .then((res)=>{
        
//         return res.json();
//     })
    
//     .then((data)=>{
//         console.log(data.facts);
//         dogdata.innerText = data.facts;
//     })
    
// }


// ADD EVENT LISTENER
button.addEventListener("click",getFacts);
