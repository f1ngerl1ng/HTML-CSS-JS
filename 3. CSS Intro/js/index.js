// var a = 5; // ES 5
// let b = 10; // ES 6
// let c = "Bill";


// console.log("B => ", b, " type => ", typeof(b));
// console.log("C => ", c, " type => ", typeof(c));

// c = 100500.2143;
// console.log("C afer = ", c, " type => ", typeof(c));

// let exit = false;
// console.log("exit => ", exit, " type => ", typeof(exit))

// let name = parseInt(prompt("Enter your name: "));
// document.write(name, " type => ", typeof(name));

// let a = parseInt(prompt("Enter first digit: "));
// let b = parseInt(prompt("Enter second digit: "));

// if (a > b){
// document.write(a, " > ", b);
// }else if( a < b){
// document.write(a, " < ", b);
// }
// else{
// document.write(a, " = ", b);
// }

// let c = prompt("Enter first: ");
// let d = parseInt(prompt("Enter second: "));

// if (c === d){
// document.write("True!");
// }
// else{
// document.write("False!")
// }

let day = prompt("Введите велечину в дюймах: ");

let day = prompt("Enter days number");

switch(day){
case '1': document.write("Monday");
break;
default: document.write("R.T.F.M.");
break;
}

const arr = [1, 4, "Bill", true, [33, "?", [33, "FUN"]], {
name: "Bill",
age: 45
}];
document.write(arr[4][1]);

let newElem = 100500;
arr[4].push(newElem);

console.log(arr);



// document.write("<h2>", b, "</h2>");