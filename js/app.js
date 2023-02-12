'use strict';

function Employee(Employee_ID,Full_Name,Department,Level,ImageURL,Salary){
    this.Employee_ID = Employee_ID;
    this.Full_Name = Full_Name;
    this.Department = Department;
    this.Level = Level;
    this.ImageURL = ImageURL;
    this.Salary = Salary;
    
}



Employee.prototype.Salarycal = function(){
    let min;
    let max;
    switch (this.Level){
        case "Junior":
            min =  500;
            max = 1000;
            break;
        case "Mid-Senior":
            min = 1000;
            max = 1500;
            break;
        case "Senior":
            min = 1500;
            max = 2000;
            break;
        
    }
    let randomnumber = Math.floor(Math.random()*(max - min + 1)) + min;
    let net = randomnumber * 0.075
    return this.Salary = randomnumber - net;
}

Employee.prototype.render = function(){
    document.write(`full name : ${this.Full_Name} salary is ${this.Salary} <br/>`)
}

let Ghazi = new Employee(1000,"Ghazi Samer","Administration","Senior","image/actor 1.png",)
let Lana  = new Employee(1001,"Lana Ali","Finance","Senior","image/actor 1.png",)
let Tamara  = new Employee(1002,"Tamara Ayoub","Marketing","Senior","image/actor 1.png",)
let Safi  = new Employee(1003,"Safi Walid","Development","Senior","image/actor 1.png",)
let Omar  = new Employee(1004,"Omar Zaid","Administration","Senior","image/actor 1.png",)
let Rana  = new Employee(1005,"Rana Saleh","Development","Junior","image/actor 1.png",)
let Hadi   = new Employee(1006,"Hadi Ahmad","Finance","Mid-Senior","image/actor 1.png",)

Ghazi.Salarycal();
Lana.Salarycal();
Tamara.Salarycal();
Safi.Salarycal();
Omar.Salarycal();
Rana.Salarycal();
Hadi.Salarycal();

Ghazi.render();
Lana.render();
Tamara.render();
Safi.render();
Omar.render();
Rana.render();
Hadi.render();

