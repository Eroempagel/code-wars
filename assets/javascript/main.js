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
