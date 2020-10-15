/**  KATA ⮕ Hello, Name or World! <8kyu>
 *** Define a method hello that returns "Hello, Name!" to a given name,
 *** or says Hello, World! if name is not given (or passed as an empty String).
 ***
 **/

//Assuming that name is a String and it checks for user
//typos to return a name with a first capital letter (Xxxx).
//hello "john"   => "Hello, John!"
//hello "aliCE"  => "Hello, Alice!"
//hello          => "Hello, World!" # name not given
//hello ''       => "Hello, World!" # name is an empty String

//function hello(str) {
//  if (typeof str === "undefined" || str.length === 0) {
//    return `Hello, World!`;
//  } else {
//    return `Hello, ${str[0].toUpperCase()}${str.substring(1).toLowerCase()}!`;
//  }
//}

//function hello(name) {
//  return `Hello, ${
//    name ? name[0].toUpperCase() + name.slice(1).toLowerCase() : "World"
//  }!`;
//}

function hello(name) {
  if (typeof name === "undefined" || name.length === 0) {
    return `Hello, World!`;
  } else {
    return (name =
      "Hello, " + name[0].toUpperCase() + name.slice(1).toLowerCase() + "!");
  }
}

document.body.innerHTML +=
  "</br>" + "<strong>" + "Hello, Name or World! (8kyu)" + "</strong>" + "</br>";
document.body.innerHTML += "</br>" + hello("john") + "</br>";
document.body.innerHTML += "</br>" + hello("aLiCE") + "</br>";
document.body.innerHTML += "</br>" + hello() + "</br>";
document.body.innerHTML += "</br>" + hello("") + "</br>";

/**  KATA ⮕ Returning Strings
 *** Description:
 *** Make a function that will return a greeting statement that uses an input;
 *** your program should return, "Hello, <name> how are you doing today?".
 ***
 **/

//function greet(name) {
//  return `Hello, ${name} how are you doing today?`;
//}

function greet(name) {
  return (name = "Hello, " + name + " how are you doing today?");
}

document.body.innerHTML +=
  "</br>" + "<strong>" + "Returning Strings (8kyu)" + "</strong>" + "</br>";
document.body.innerHTML += "</br>" + greet("Erik") + "</br>";

/**  KATA ⮕ You Can't Code Under Pressure #1
 *** Description:
 *** Code as fast as you can! You need to double the integer and return it.
 ***
 **/

function doubleInteger(i) {
  // i will be an integer. Double it and return it.
  return i * 2;
}

document.body.innerHTML +=
  "</br>" +
  "<strong>" +
  "You Can't Code Under Pressure #1 (8kyu)" +
  "</strong>" +
  "</br>";
document.body.innerHTML += "</br>" + doubleInteger(6) + "</br>";
