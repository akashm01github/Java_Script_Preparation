// Practice Question

let data  = "Hello this is Website Data";


class User{
    constructor(userName, userEmail){
        this.userEmail = userEmail;

        this.userName = userName;

    }

    viewData(){
        console.log(`Website Data ${data}`);
    }
}

let userObj1  = new User("Akash","akash@email.com");

let userObj2 = new User("Aparna", "aa@email.com");


// Admin class

class Admin extends User{
    constructor(userName , userEmail){
        super(userName,userEmail);
    }
    editData(){
        data = "Some new Values";
    }
}

let admin1 = new Admin("adminName","admin@email.com");


let a = 5 ; 

let b = 10;

console.log("A + B = ",a+b);  
console.log("A + B = ",a+b);  
console.log("A + B = ",a+b);  
console.log("A + B = ",a+b);  
try{
    console.log("A + C = ",a+c);  
}
catch(err){
    console.log(err.message);
}

console.log("A + B = ",a+b);  
console.log("A + B = ",a+b);  
console.log("A + B = ",a+b);  
console.log("A + B = ",a+b);  
console.log("A + B = ",a+b);  
console.log("A + B = ",a+b);  

