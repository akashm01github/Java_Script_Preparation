// ! Object de-structure and JSON API intro

const course = {
    courseName : "Full Stack Domination",
    price: 6000,
    teacher: "Hitesh"
}

const {teacher} = course;

console.log(teacher);

// ! Object de-structure
const navbar = ({company}) =>{

}

navbar(company = "Google")

// ! Function in JS 

// function syaMyName(){
//     console.log("Hello I name is Aaksh Mukherjee");
// }

// console.log(syaMyName());

// ** ADD Two Number Function

function addNumber(number1, number2){
    let ans  = number1 + number2;
    return ans
}

console.log(addNumber(5,5));


// Login Meassage Function 

function logInMessage(username){
    return `${username} Just Loged In`
}

console.log(logInMessage("Aritra"));