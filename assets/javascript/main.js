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

/**  KATA ⮕ Student's Final Grade
 ***
 ***
 **/

//function finalGrade (exam, projects) {
//    if(exam > 90 || projects > 10) return 100;
//    if(exam > 75 && projects >= 5) return 90;
//    if(exam > 50 && projects >= 2) return 75;
//    return 0;
//  }

function finalGrade(exam, projects) {
  if (exam > 90 || projects > 10) {
    return 100;
  }

  if (exam > 75 && projects >= 5) {
    return 90;
  }

  if (exam > 50 && projects >= 2) {
    return 75;
  }

  return 0;
}

/**  KATA ⮕ Century From Year (8kyu)
 *** Description:
 *** The first century spans from the year 1 up to and including the year 100,
 *** The second - from the year 101 up to and including the year 200, etc.
 ***
 **/

//centuryFromYear(1705)  returns (18)
//centuryFromYear(1900)  returns (19)
//centuryFromYear(1601)  returns (17)
//centuryFromYear(2000)  returns (20)

//const century = Math.floor(year/100);
//return year % 100 > 0 ? century +1 : century;

//function century(year) {
//return year % 100 > 0 ? Math.floor(year/ 100) +1 : Math.floor(year / 100);
//}

//function century(year) {
//   return Math.ceil(year/100); //using ceiling method to round up to nearest century (100)
//  }

function century(year) {
  const century = Math.floor(year / 100);
  const decade = year % 100;

  if (decade > 0) {
    return century + 1;
  }
  return century;
}

document.body.innerHTML +=
  "</br>" + "<strong>" + "Century From Year (8kyu)" + "</strong>" + "</br>";
document.body.innerHTML += "</br>" + century(1705) + "</br>";
document.body.innerHTML += "</br>" + century(1900) + "</br>";
document.body.innerHTML += "</br>" + century(1601) + "</br>";
document.body.innerHTML += "</br>" + century(2000) + "</br>";

/**  KATA ⮕ Remove Duplicate Words (7kyu)
 *** Description:
 *** Your task is to remove all duplicate words from a string,
 *** leaving only single (first) words entries.
 ***
 **/

//Example:

//Input:
//'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'

//Output:
//'alpha beta gamma delta'

/* possible solutions */
//const removeDuplicateWords = s => [...new Set(s.split(' '))].join(' ')

//const removeDuplicateWords = s => {
//  const set = new Set(s.split(' '));
//  return Array.from(set).join(' ');
//}

//const removeDuplicateWords = s => {
//  let arr = s.split(" ");
//  let sFiltered = [];
//
//  for (let str of arr) if (!sFiltered.includes(str)) sFiltered.push(str)
//
//  return sFiltered.join(" ")
//}

/* DMG's Solution */

// 1. Create an array of all words, by splitting the sting on spaces.
//    a. Look into using .split?
// 2. Create an array of unique words
// 3. Loop over the array of all words
//    a. Increment an index variable to keep track where we are in the array
// 4. check the array of unique words to see if it ALREADY includes the current word.
// 5. If it does not, add it to the array of unique words
// 6. If it does, skip this word
// 7. Join the unique words, separating by spacves.
//    a. Look into using .join()

function removeDuplicateWords(s) {
  const allWords = s.split(" ");
  const uniqueWords = [];

  let index = 0;
  while (index < allWords.length) {
    const currentWord = allWords[index];
    if (!uniqueWords.includes(currentWord)) {
      uniqueWords.push(currentWord);
    }
    index += 1;
  }
  const result = uniqueWords.join(" ");
  return result;
}

/**  KATA ⮕ Grasshopper-Debug sayHello (8kyu)
 *** Description:
 *** The starship Enterprise has run into some problem when creating
 *** a program to greet everyone as they come aboard. It is your job
 *** to fix the code and get the program working again!
 ***
 **/

//Example output:
//Hello, Mr. Spock
function sayHello(name) {
  return "Hello" + ", " + name;
}

//function sayHello (name) {
//  return 'Hello, ' +  name;
//}

//const sayHello = name => `Hello, ${name}`;

//function sayHello(name) {
//  return `Hello, ${name}`
//}

//function sayHello (name) {
//  var fullString = "Hello, " + name;
//  return fullString;
//}

/**  KATA ⮕ Grasshopper-Function syntax debugging (8kyu)
 *** Description:
 *** A student was working on a function and made some syntax mistakes
 *** while coding. Help them find their mistakes and fix them.
 ***
 **/
function main(verb, noun) {
  return verb + noun;
}

/**  KATA ⮕ Grasshopper- Basic Function Fixer (8kyu)
 *** Description:
 *** I created this function to add five to any number that was
 *** passed in to it and return the new value. It doesn't throw any
 *** errors but it returns the wrong number.
 ***
 *** Can you help me fix the function?
 ***
 **/
function addFive(num) {
  var total = num + 5;
  return total;
}

/**  KATA ⮕ Beginner Series #1 School Paperwork (8kyu)
 *** Description:
 *** Your classmates asked you to copy some paperwork for them.
 *** You know that there are 'n' classmates and the paperwork has 'm' pages.
 *** Your task is to calculate how many blank pages do you need.
 ***
 **/
//Example:
//paperwork(5, 5) == 25

function paperwork(n, m) {
  let result = n * m;
  if (n < 0 || m < 0) {
    return 0;
  }
  return result;
}

//function paperwork(n, m) {
//  return n > 0 && m > 0 ? n * m : 0
//}

//function paperwork(n, m) {
//  return n < 0 || m < 0 ? 0 : n * m;
//}

//function paperwork(n, m) {
//  if (m < 0 || n < 0) {
//    return 0;
//  }
//  return m * n;
//}

/**  KATA ⮕ Jenny's secret message (8kyu)
 *** Description:
 *** Jenny has written a function that returns a greeting for a user.
 *** However, she's in love with Johnny, and would like to greet him
 *** slightly different. She added a special case to her function,
 *** but she made a mistake.
 ***
 *** Can you help her?
 ***
 **/
function greet(name) {
  if (name === "Johnny") {
    return "Hello, my love!";
  } else {
    return "Hello, " + name + "!";
  }
}

/**  KATA ⮕ Grasshopper-Combine strings (8kyu)
 *** Description:
 *** Create a function named combineNames that accepts two parameters
 *** (first and last name). The function should return the full name.
 ***
 **/
//Example:
//combineNames('James', 'Stevens')

//returns:
//'James Stevens'
function combineNames(firstName, lastName) {
  let result = firstName + " " + lastName;
  return result;
}

/**  KATA ⮕  If/else syntax debug (8kyu)
 *** Description:
 *** While making a game, your partner, Greg, decided to create a function to
 *** check if the user is still alive called checkAlive/CheckAlive/check_alive.
 *** Unfortunately, Greg made some errors while creating the function.
 ***
 *** checkAlive/CheckAlive/check_alive should return true if the player's
 *** health is greater than 0 or false if it is 0 or below.
 ***
 *** The function receives one parameter health which will always
 *** be a whole number between -10 and 10.
 ***
 **/
function checkAlive(health) {
  if (health > 0) {
    return true;
  } else {
    return false;
  }
}

/**  KATA ⮕ Grasshopper-Variable Assignment Debug (8kyu)
 *** Description:
 *** Fix the variables assigments so that this code stores the string
 *** 'devLab' in the variable name.
 ***
 **/
let a = "dev";
let b = "Lab";

let name = a + b;

/**  KATA ⮕ Grasshopper- Messi Goals (8kyu)
 *** Description:
 *** Use variables to find the sum of the goals Messi scored in 3 competitions
 ***
 ***
 **/
//Information
//Messi goal scoring statistics:

//Competition	     Goals
//La Liga	          43
//Champions League	10
//Copa del Rey	     5
//Task
//1) Create these three variables and store the appropriate values using the
// table above:

//laLigaGoals
//championsLeagueGoals
//copaDelReyGoals

//2) Create a fourth variable named totalGoals that stores
// the sum of all of Messi's goals for this year.

let laLigaGoals = 43;
let championsLeagueGoals = 10;
let copaDelReyGoals = 5;

let totalGoals = laLigaGoals + championsLeagueGoals + copaDelReyGoals;

/**  KATA ⮕ Grasshopper-Order of operations (8kyu)
 *** Description:
 *** You are running the calculation 2 + 2 * 2 + 2 * 2 and expect to get
 *** the answer 32 but instead the function keeps returning 10. Fix the
 *** function to make it return 32 without changing the number or the operators.
 ***
 **/
// parenthesis, exponents, multiplication/division, addition/subtraction
function orderOperations() {
  return (2 + 2) * (2 + 2) * 2;
}

/**  KATA ⮕ Keep Hydrated! (8kyu)
 *** Description:
 *** Nathan loves cycling.
 *** Because Nathan knows it is important to stay hydrated, he drinks
 *** 0.5 litres of water per hour of cycling.
 *** You get given the time in hours and you need to return the number
 *** of litres Nathan will drink, rounded to the smallest value.
 ***
 **/
//For example:
//time = 3 ----> litres = 1
//time = 6.7---> litres = 3
//time = 11.8--> litres = 5

function litres(time) {
  let hydro = 0.5;
  return Math.floor(hydro * time);
}

/**  KATA ⮕ Is it even? (8kyu)
 *** Description:
 *** In this Kata we are passing a number (n) into a function.
 *** Your code will determine if the number passed is even (or not).
 *** The function needs to return either a true or false.
 *** Numbers may be positive or negative, integers or floats.
 *** Floats are considered UNeven for this kata.
 ***
 **/
//function testEven(n) {
//  n = Number(n);
//  return n === 0 || !!(n && !(n % 2));
//}

function testEven(n) {
  return n % 2 === 0;
}

/**  KATA ⮕ Return Negative (8kyu)
 *** Description:
 *** In this simple assignment you are given a number
 *** and have to make it negative. But maybe the number is already negative?
 ***
 **/

//Example:
//makeNegative(1); // return -1
//makeNegative(-5); // return -5
//makeNegative(0); // return 0
//makeNegative(0.12); // return -0.12

function makeNegative(num) {
  if (num > 0) {
    return num * -1;
  } else if (num === 0) {
    return 0;
  } else {
    return num;
  }
}

//function makeNegative(num) {
//  return -Math.abs(num);
//}

/**  KATA ⮕ Opposite number (8kyu)
 *** Description:
 *** Very simple, given a number, find its opposite.
 ***
 **/

//Examples:
//  1 : -1
// 14 : -14
//-34 :  34
function opposite(number) {
  return number * -1;
}

/**  KATA ⮕ Basic Mathematical Operations (8kyu)
 *** Description:
 *** Your task is to create a function that does four basic mathematical
 *** operations.
 *** The function should take three arguments - operation(string/char),
 *** value1(number), value2(number).
 *** The function should return result of numbers after applying the
 *** chosen operation.
 ***
 **/
//Examples
//basicOp('+', 4, 7)         // Output: 11
//basicOp('-', 15, 18)       // Output: -3
//basicOp('*', 5, 5)         // Output: 25
//basicOp('/', 49, 7)        // Output: 7

function basicOp(operation, value1, value2) {
  if (operation === "+") {
    return value1 + value2;
  } else if (operation === "-") {
    return value1 - value2;
  } else if (operation === "*") {
    return value1 * value2;
  } else if (operation === "/") {
    return value1 / value2;
  }
}

//function basicOp(operation, value1, value2) {
//  switch (operation) {
//      case '+':
//          return value1 + value2;
//      case '-':
//          return value1 - value2;
//      case '*':
//          return value1 * value2;
//      case '/':
//          return value1 / value2;
//      default:
//          return 0;
//  }
//}

//function basicOp(o, a, b) {
//  return eval(a+o+b);
//}

//function basicOp(operation, value1, value2)
//{
//  let cases = {
//    '+': value1 + value2,
//    '-': value1 - value2,
//    '*': value1 * value2,
//    '/': value1 / value2
//  };
//  return cases[operation]
//}
