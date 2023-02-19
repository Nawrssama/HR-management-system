"use strict";

let employeeArr = [];
function getEmplyee(){
    let jsonArr = localStorage.getItem("allEmployee");
    employeeArr = JSON.parse(jsonArr)
}

getEmplyee();

function totalSalary (employeeArr){
    let sum = 0;
    for (let i = 0 ; i < employeeArr.length ; i++){
        sum += employeeArr[i].salary;
    }
    return sum;
}

function avarageSalary (employeeArr){
    let sum = 0;
    for(let i = 0 ; i < employeeArr.length ; i++){
        sum += employeeArr[i].salary;
    }
    return sum/employeeArr.length;
}

function render(){
    const container = document.getElementById('employeetable');
    container.innerHTML = '';
    if (employeeArr == null){
        employeeArr = [];
    }

    const table = document.createElement("table");
    container.appendChild(table);
    table.setAttribute("border", "3");
    table.setAttribute("width", "80%");

    //////////////// first row /////////////////////////////

    const tr1 = document.createElement("tr");
    table.appendChild(tr1);

    const th1 = document.createElement("th");
    tr1.appendChild(th1);
    th1.textContent = "Department";

    const th2 = document.createElement("th");
    tr1.appendChild(th2);
    th2.textContent = "Number of employees";

    const th3 = document.createElement("th");
    tr1.appendChild(th3);
    th3.textContent = "Average salary";

    const th4 = document.createElement("th");
    tr1.appendChild(th4);
    th4.textContent = "Total salary";

    ///////////////// second row ////////////////////////////

    const tr2 = document.createElement("tr");
    table.appendChild(tr2);

    const td1 = document.createElement("td");
    tr2.appendChild(td1);
    td1.textContent = "Administration";
    let newArr = employeeArr.filter(e => e.Department ==="Administration");

    const tda = document.createElement("td");
    tr2.appendChild(tda);
    tda.textContent = newArr.length;

    const tda2 = document.createElement("td");
    tr2.appendChild(tda2);
    tda2.textContent = avarageSalary(newArr);

    const tda3 = document.createElement("td");
    tr2.appendChild(tda3);
    tda3.textContent = totalSalary(newArr);

    ///////////////// third row ////////////////////////////

    const tr3 = document.createElement("tr");
    table.appendChild(tr3);

    const td2 = document.createElement("td");
    tr3.appendChild(td2);
    td2.textContent = "Marketing";
    let newArr2 = employeeArr.filter(e => e.Department ==="Marketing");

    const tdm = document.createElement("td");
    tr3.appendChild(tdm);
    tdm.textContent = newArr2.length;

    const tdm2 = document.createElement("td");
    tr3.appendChild(tdm2);
    tdm2.textContent = avarageSalary(newArr2);

    const tdm3 = document.createElement("td");
    tr3.appendChild(tdm3);
    tdm3.textContent = totalSalary(newArr2);

    ///////////////// forth row ////////////////////////////

    const tr4 = document.createElement("tr");
    table.appendChild(tr4);
    
    const td3 = document.createElement("td");
    tr4.appendChild(td3);
    td3.textContent = "Development";
    let newArr3 = employeeArr.filter(e => e.Department ==="Development");

    const tdd = document.createElement("td");
    tr4.appendChild(tdd);
    tdd.textContent = newArr3.length;

    const tdd2 = document.createElement("td");
    tr4.appendChild(tdd2);
    tdd2.textContent = avarageSalary(newArr3);

    const tdd3 = document.createElement("td");
    tr4.appendChild(tdd3);
    tdd3.textContent = totalSalary(newArr3);

    ///////////////// fifth row ////////////////////////////

    const tr5 = document.createElement("tr");
    table.appendChild(tr5);

    const td4 = document.createElement("td");
    tr5.appendChild(td4);
    td4.textContent = "Finance";
    let newArr4 = employeeArr.filter(e => e.Department ==="Finance");

    const tdf = document.createElement("td");
    tr5.appendChild(tdf);
    tdf.textContent = newArr4.length;

    const tdf2 = document.createElement("td");
    tr5.appendChild(tdf2);
    tdf2.textContent = avarageSalary(newArr4);

    const tdf3 = document.createElement("td");
    tr5.appendChild(tdf3);
    tdf3.textContent = totalSalary(newArr4);

    ///////////////// sixth row ////////////////////////////

    const tr6 =document.createElement("tr");
    table.appendChild(tr6);

    const td5 = document.createElement("td");
    tr6.appendChild(td5);
    td5.textContent = "Total";

    const tdt = document.createElement("td");
    tr6.appendChild(tdt);
    tdt.textContent = employeeArr.length;

    const tdt2 = document.createElement("td");
    tr6.appendChild(tdt2);
    tdt2.textContent = avarageSalary(employeeArr);

    const tdt3 = document.createElement("td");
    tr6.appendChild(tdt3);
    tdt3.textContent = totalSalary(employeeArr);

    ///////////////// end of table ////////////////////////////

}

render();
