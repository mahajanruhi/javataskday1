//classes
class employee {
    constructor(name, position) {
      this.name = name;
      this.position = position;
    }
  }
  
    const employee1 = new employee("Tamana", "manager");
    const employee2 = new employee("nehmat", "teamhead");
  
  document.getElementById("class").innerHTML =
  employee1.name + " " + employee2.name;

 //function call
 function myDisplayer(value) {
  document.getElementById("call").innerHTML = value;
}
function Firstname() {
  myDisplayer("ruhi");
}
function secondname() {
  myDisplayer("gupta");
}
//functioncall
Firstname();
secondname();
//asynchronous function
function sum(a,b){
document.getElementById("sum").innerHTML = a+b;
}
function Calculator(a, b, sumCallback) {
  sumCallback(a,b);
}
Calculator(1,2,sum);
//setinterval
function text() {
  document.getElementById("mydiv").textContent += "hello";
}
setInterval(text,2000);
//promise
function myDisplayer(some) {
  document.getElementById("prom").innerHTML = some;
}
let myPromise = new Promise(function(myResolve, myReject) {
  let x = 0;
  if (x == 0) {
    myResolve("True");
  } else {
    myReject("False");
  }
});
myPromise.then(
  function(yes) {myDisplayer(yes);},
  function(no) {myDisplayer(no);}
);
//Asyncawait
async function message() {
  let myPromise = new Promise(function(resolve, reject) {
    resolve (" Welcome everyone !!");
  });
  document.getElementById("await").innerHTML = await myPromise;
}

message();
//DOM css
document.getElementById("p2").style.color = "green";
document.getElementById("p2").style.fontFamily = "cambria";
//Dom nodes
let part= document.getElementById("d1");
let ListofNode=part.querySelectorAll("p");
document.getElementById("a1").innerHTML=ListofNode.length;
//Htmlevents
function displayDate() {
  document.getElementById("click").innerHTML = Date();
}

