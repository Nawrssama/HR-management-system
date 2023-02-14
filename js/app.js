'use strict';

function Employee(Full_Name,Department,Level,ImageURL){
   
    this.Full_Name = Full_Name;
    this.Department = Department;
    this.Level = Level;
    this.ImageURL = ImageURL;
    this.Salary = 0;
    this.uniqueID = 1000;
    
}

Employee.prototype.uniqueIdNumber = function(){
    return (this.uniqueID = Number(Math.floor(Math.random() * Date.now()).toString().slice(0,4)));
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
    let net = randomnumber * 0.075;
    return this.Salary = randomnumber - net;
}

// Employee.prototype.render = function(){
//     document.write(`full name : ${this.Full_Name} salary is ${this.Salary} <br/>`);

// }

// let Ghazi = new Employee(1000,"Ghazi Samer","Administration","Senior","image/actor 1.png",)
// let Lana  = new Employee(1001,"Lana Ali","Finance","Senior","image/actor 1.png",)
// let Tamara  = new Employee(1002,"Tamara Ayoub","Marketing","Senior","image/actor 1.png",)
// let Safi  = new Employee(1003,"Safi Walid","Development","Senior","image/actor 1.png",)
// let Omar  = new Employee(1004,"Omar Zaid","Administration","Senior","image/actor 1.png",)
// let Rana  = new Employee(1005,"Rana Saleh","Development","Junior","image/actor 1.png",)
// let Hadi   = new Employee(1006,"Hadi Ahmad","Finance","Mid-Senior","image/actor 1.png",)

// Ghazi.Salarycal();
// Lana.Salarycal();
// Tamara.Salarycal();
// Safi.Salarycal();
// Omar.Salarycal();
// Rana.Salarycal();
// Hadi.Salarycal();

// Ghazi.render();
// Lana.render();
// Tamara.render();
// Safi.render();
// Omar.render();
// Rana.render();
// Hadi.render();

Employee.prototype.render = function(){

        
    let container ;
    switch (this.Department){
        case "Administration":

            const container = document.getElementById('Administration');
            console.log(container);

            
    
            const devel = document.createElement('div');
            devel.classList.add('container1');
            container.appendChild(devel);



            const imgel = document.createElement('img');
            devel.appendChild(imgel);
            imgel.setAttribute('src',this.ImageURL);
            imgel.width = "100";
            imgel.height = "100";

            const nameel = document.createElement('p');
            devel.appendChild(nameel);
            nameel.textContent = `name : ${this.Full_Name}`;

            const idel = document.createElement("p");
            devel.appendChild(idel);
            idel.textContent = `ID : ${this.uniqueID}`;

            const depel = document.createElement('p');
            devel.appendChild(depel);
            depel.textContent = `Deperatment : ${this.Department}`;

            const lvlel = document.createElement('p');
            devel.appendChild(lvlel);
            lvlel.textContent = `Level : ${this.Level}`;

            const salel = document.createElement('p');
            devel.appendChild(salel);
            salel.textContent = `Salary : ${this.Salary}`

            break;


        case "Marketing":

            const container2 = document.getElementById('Marketing');
            console.log(container2);
            
            const devel2 = document.createElement('div');
            devel2.classList.add('container2')
            container2.appendChild(devel2);
        
            const imgel2 = document.createElement('img');
            devel2.appendChild(imgel2);
            imgel2.setAttribute('src',this.ImageURL);
            imgel2.width = "100";
            imgel2.height = "100";
        
            const nameel2 = document.createElement('p');
            devel2.appendChild(nameel2);
            nameel2.textContent = `name : ${this.Full_Name}`;
        
            const idel2 = document.createElement("p");
            devel2.appendChild(idel2);
            idel2.textContent = `ID : ${this.uniqueID}`;
        
            const depel2 = document.createElement('p');
            devel2.appendChild(depel2);
            depel2.textContent = `Deperatment : ${this.Department}`;
        
            const lvlel2 = document.createElement('p');
            devel2.appendChild(lvlel2);
            lvlel2.textContent = `Level : ${this.Level}`;
        
            const salel2 = document.createElement('p');
            devel2.appendChild(salel2);
            salel2.textContent = `Salary : ${this.Salary}`

            break;


        case "Development": 

            const container3 = document.getElementById('Development');
            console.log(container3);

            
            const devel3 = document.createElement('div');
            devel3.classList.add('container3');
            container3.appendChild(devel3);
        
            const imgel3 = document.createElement('img');
            devel3.appendChild(imgel3);
            imgel3.setAttribute('src',this.ImageURL);
            imgel3.width = "100";
            imgel3.height = "100";
        
            const nameel3 = document.createElement('p');
            devel3.appendChild(nameel3);
            nameel3.textContent = `name : ${this.Full_Name}`;
        
            const idel3 = document.createElement("p");
            devel3.appendChild(idel3);
            idel3.textContent = `ID : ${this.uniqueID}`;
        
            const depel3 = document.createElement('p');
            devel3.appendChild(depel3);
            depel3.textContent = `Deperatment : ${this.Department}`;
        
            const lvlel3 = document.createElement('p');
            devel3.appendChild(lvlel3);
            lvlel3.textContent = `Level : ${this.Level}`;
        
            const salel3 = document.createElement('p');
            devel3.appendChild(salel3);
            salel3.textContent = `Salary : ${this.Salary}`

            break;


        case "Finance":   

            const container4 = document.getElementById('Finance');
            console.log(container4);

            
            const devel4 = document.createElement('div');
            devel4.classList.add('container4')
            container4.appendChild(devel4);
        
            const imgel4 = document.createElement('img');
            devel4.appendChild(imgel4);
            imgel4.setAttribute('src',this.ImageURL);
            imgel4.width = "100";
            imgel4.height = "100";
        
            const nameel4 = document.createElement('p');
            devel4.appendChild(nameel4);
            nameel4.textContent = `name : ${this.Full_Name}`;
        
            const idel4 = document.createElement("p");
            devel4.appendChild(idel4);
            idel4.textContent = `ID : ${this.uniqueID}`;
        
            const depel4 = document.createElement('p');
            devel4.appendChild(depel4);
            depel4.textContent = `Deperatment : ${this.Department}`;
        
            const lvlel4 = document.createElement('p');
            devel4.appendChild(lvlel4);
            lvlel4.textContent = `Level : ${this.Level}`;
        
            const salel4 = document.createElement('p');
            devel4.appendChild(salel4);
            salel4.textContent = `Salary : ${this.Salary}`;

            break;


    }

  

}

let employeeform = document.getElementById('employeeForm');
employeeform.addEventListener('submit', addNewEmployeeHandler);

function addNewEmployeeHandler(event){
    event.preventDefault();
    console.log(event);

    let img = event.target.imgUrl.value;
    let name = event.target.name.value;
    let department = event.target.Department.value;
    let level = event.target.Level.value;
    
    let newEmployee = new Employee( name , department, level, img  );
    
    newEmployee.Salarycal();
    newEmployee.uniqueIdNumber();
    newEmployee.render();
}