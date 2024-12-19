// Inheritance In JavaScript 

class Parent {



    hello() {
        console.log("This is Hello Function.");
    }
}


class Child extends Parent { }

let obj = new Child();



class Person {

    constructor(personName) {
        this.spices = "Homo Sapiens";

        this.personName = personName;
    }



    eat() {
        console.log("This is Eat Function");
    }

    sleep() {
        console.log("This is Sleeping");
    }
}

// Engineer Function 
class Engineer extends Person {
    work() {
        super.eat();
        console.log("This is Work Function");
    }

    constructor(personName) {
        super(personName);
    }
}


// let akash  = new Engineer();

let engObj = new Engineer("Akash");









// Doctor Function

class Doctor extends Person {
    work() {
        console.log("Treat Patent and Give Medicine");
    }
}

// let aritra = new Doctor();






