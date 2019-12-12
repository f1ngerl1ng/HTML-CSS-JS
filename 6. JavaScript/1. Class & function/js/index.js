/*
let Person = {
    name: "Jack",
    age: 26,

    ShowPerson(){
        console.log("Моя первая функция в JS");
        console.log("Name = ", Person.name);
        console.log("Age = ", Person.age);
    },
    SetName(newName){
        if(typeof(newName) === "string")
        {
            this.name = newName;
        }

    }

}
console.log(Person);
console.log("Name = ", Person.name);
console.log("Age = ", Person.age);

Person.name = "Alex";
console.log("Name = ", Person.name);

Person.ShowPerson();

Person.SetName("Tom");
Person.ShowPerson();
*/
const Person = [
    {
    name: "Jack",
    age: 26,

    ShowPerson(){
        console.log("Моя первая функция в JS");
        console.log("Name = ", this.name);
        console.log("Age = ", this.age);
    },
    SetName(newName){
        if(typeof(newName) === "string")
        {
            this.name = newName;
        }
    }
    }, 
    {
        name: "Anister",
    age: 20,

    ShowPerson(){
        console.log("Моя первая функция в JS");
        console.log("Name = ", this.name);
        console.log("Age = ", this.age);
    },
    SetName(newName){
        if(typeof(newName) === "string")
        {
            this.name = newName;
        }

    }
    }
]

/*
console.log(Person);

const mapPerson = Person.map((item) =>{
item.ShowPerson();
});
*/


function Plus(...params)
{
    let rezult = 0;
    for(let i = 0; i < params.length; i++)
    { rezult += params[i];}
    return rezult;

}
/*
console.log(Plus(2, 6, 50));
*/

const Minus = function(a, b){
    return a - b;
};

console.log(Minus(8,2));

const Multiple = (...params) =>{
    let rezult = 0;
    for(let i = 0; i < params.length; i++){
        rezult *= params[i];
    }
    return rezult;
}

/*
console.log("Multiple => ", Multiple(2, 2, 2, 2));

(function () {
    var x = "Hello";
    console.log("x => ", x);
})();
*/

function User(name, age){
    this.name = name;
    this.age = age;

    this.ShowUser = function(){
        console.log("Name => ", this.name, "Age => ", this.age );
    }
}


let user1 = new User("Bob", 30);
user1.ShowUser();

