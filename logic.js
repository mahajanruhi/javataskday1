  //string acess
  let str = "welcome" ;
document.getElementById("acess").innerHTML = str.charAt(0);
//trim method
let name= "    Ruhi   ";
let newname= name.trim();
document.getElementById("trim").innerHTML =
"Length text1 = " + name.length + "<br>Length text2 = " + newname.length;

//arrayisarray

function myFunction() {
  var fruits = ["Banana", "Orange", "Apple", "Mango"];
  var x = document.getElementById("button");
  x.innerHTML = Array.isArray(fruits);
}
  // Array for each

  var txt = "";
  var numbers = [45, 4, 9, 16, 25];
  numbers.forEach(Function1);
  document.getElementById("each").innerHTML = txt;
  function Function1(value) {
    txt = txt + value + "<br>";
  }

  //Arraymap
  var num = [45, 4, 9, 16, 25];
  var num2 = num.map(myFunction);
  document.getElementById("mul").innerHTML = num2;
  function myFunction(value, index, array) 
  {
    return value * 2;
  }

//indexof
  let fruits = ["Apple", "Orange", "Apple", "Mango"];
  let position = fruits.indexOf("Apple") + 1;
  document.getElementById("index").innerHTML = "Apple is found in position " + position;
