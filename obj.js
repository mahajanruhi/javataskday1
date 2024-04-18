const person = {
    fname:"ruhi",
    lname:"gupta",
    age:25
  }; 
  let txt = "";
  for (let x in person) {
    txt += person[x] + " ";
  }
  document.getElementById("loop").innerHTML = txt;
//adding properties
  const pers = {
    firstname: "mahi",
    lastname: "mahajan",
    age: 50,
    eyecolor: "blue"
  };
  pers.nationality = "Indian";
  document.getElementById("add").innerHTML =
  pers.firstname + " is " + pers.nationality + ".";
  //deleting properties
  const personname = {
    firstname: "suraj",
    lastname: "thapa",
    age: 50,
    eyecolor: "blue"
  };
  delete personname.age;
  document.getElementById("delete").innerHTML =
  personname.firstname + " is " + personname.age + " years old.";
//nested properties
  let x = "";
const myObj = {
  name: "kanu",
  age: 30,
  cars: [
    {name:"Ford", models:["Fiesta", "Focus", "Mustang"]},
    {name:"BMW", models:["320", "X3", "X5"]},
    {name:"Fiat", models:["500", "Panda"]}
  ]
}
for (let i in myObj.cars) {
  x += "<h2>" + myObj.cars[i].name + "</h2>";
  for (let j in myObj.cars[i].models) {
    x += myObj.cars[i].models[j] + "<br>";
  }
}
document.getElementById("nest").innerHTML = x;
//object new method
const person1 = {
  firstName: "vihan",
  lastName: "roy",
  id: 5566,
};
person1.name = function() {
  return this.firstName + " " + this.lastName;
};

document.getElementById("method").innerHTML =
"My father is " + person1.name(); 
//object properties by forin loop
const person2 = {
  name: "Nehmat",
  age: 30,
  city: "India"
};
let text = "";
for (let x in person) {
  text += person[x] + " ";
};
document.getElementById("prop").innerHTML = text;
//json stringyfy--
const per = {
  name: "neeraj",
  age: 30,
  city: "america"
};
document.getElementById("con").innerHTML = JSON.stringify(per);
//json stringyfy function
const person4 = {
  name: "jasmin",
  age: function () {return 30;}
};
person4.age = person4.age.toString();
document.getElementById("gify").innerHTML = JSON.stringify(person4);
//object constructor
function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
}
const myFather = new Person("John", "Doe", 50, "blue");
const myMother = new Person("Sunita", "sharma", 48, "green");
document.getElementById("cons").innerHTML =
"My father is " + myFather.age + ". My mother is " + myMother.age + "."; 
//prototype property
function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
}
Person.prototype.nationality = "English";
const Father = new Person("John", "Doe", 50, "blue");
document.getElementById("pro").innerHTML =
"The nationality of my father is " + Father.nationality; 
//foreach method for set
const letters = new Set(["a","b","c"]);
let tex = "";
letters.forEach (function(value) {
  tex += value + "<br>";
})
document.getElementById("set").innerHTML = tex;
//map object using map sets
const fruits = new Map();
fruits.set("apples", 500);
fruits.set("bananas", 300);
fruits.set("oranges", 200);
document.getElementById("map").innerHTML = fruits.get("apples");
//function expresion
const p = function (a, b) {return a * b};
document.getElementById("exp").innerHTML = p;
//arrow functions
const y = (x, y) => x * y;
document.getElementById("arrow").innerHTML = y(5, 5);
//default parameter values
function myFunction(x, y = 10) {
  return x + y;
}
document.getElementById("pass").innerHTML = myFunction(5);
