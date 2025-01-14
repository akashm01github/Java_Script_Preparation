let student = {
    fullName : "Akash Mukherjee",
    marks: 75,
    printMarks: function(){
        console.log("Marks is: ",this.marks);
    }
}

const employee = {
    calTax(){
        console.log("The Tax is : 10%");
    }
}

let akash = {
    salary : 18000,
    calTax(){
        console.log("The Tax is: 5%");
    }
}

// akash.calTax();
akash.__proto__ = employee;


// CLASS IN JAVASCRIPT 

class ToyotaCar {
    start(){
        console.log("Car is Starting"); 
    }

    stop(){
        console.log("Car is Stoping");
    }

    constructor(brand,milage){
        console.log("Hello this is Constructor.");
        this.carBrand = brand;
        this.carMilage = milage;
    }
}

let fortuner = new ToyotaCar("Tyota",20);

console.log(fortuner);


let lexus = new ToyotaCar("Lexux",30);
console.log(lexus);



