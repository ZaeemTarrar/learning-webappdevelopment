# Javascript - Core Fundamentals

## Javascript injection in Html5

```
<!DOCTYPE html>
<html lang="en">
<head>
    <title> JavaScript </title>
</head>
<body>

</body>
<script type="text/javascript" >
    // Javascript code here
</script>
</html>
```

## JS - Hello world

```
alert("hello word");
console.log("hello world);
```

## Comments

```
// Comments
/*
    Multi-line
*/
```

## Variables / Constants

**Constant** value can not be changed

```
const x = "hello word";
```

**Variable** value can be changed

Functional / Global Scoped. `Var` has no Block Scope

```
var x = "hello word";
```

Blocked Scope

```
let y = "hello word";
```

**Note:** variable without `var` drags it to the global scope

## Data Types

- String
- Number
- Boolean
- Date
- Array/List
- Object

`null` `""` `0` `undefined` `NaN`

## Declaration & Initialization

String

```
myName = "Zaeem Hassan Tarrar";
fatherName = 'Maalik Tarrar';
```

Number

```
Age = 24;
```

Boolean

```
isMale = true;
```

Symbols ( Unique Idnetifiers )

```
Symbol("id") // "symbol"
```

Array/List

```
favouriteFruits = [
    "apples",
    "mangoes",
    "oranges"
]
```

Object

```
address = {
    street: 2,
    house: 44,
    city: "lahore",
    residential: false
}
```

Deleting Entity / Garbage Collection and Cleaning

```
delete address.city
```

## Add Variables to Strings

`${variable}`

```
let price = 500;
let sentence = "I bought the cat for about ${price} rupees";
```

## Type Conversions

Check type by `typeof`

Following are the Methods Used for Type Conversions

`Number()` `String()` `Boolean()`

## Operators

### Arithmetic Operators

`+` **Addition**

`-` **Subtraction**

`*` **Multiplication**

`/` **Division**

`%` **Modulus** ( Remainder operator )

`**` **Exponentiation**

### Assignment Operators

`=` **Assignment**

`+ =` **Add and Assign**

`- =` **Subtract and Assign**

`* =` **Multiply and Assign**

`/ =` **Divide and Assign**

`% =` **Extract Remainder and Assign**

### Equality Operators

`==` **Match the Value**

`===` **Match the Value and Datatype**

### In-equality Operators

`!=` **Does Value Not Match**

`!==` **Does the Value Not Match and Datatype is Same**

```
!(true) = false
```

### Conditional Operators

`<` **Less Than**

`>` **Greater Than**

`< =` **Less Than and Equal to**

`> =` **Greater Than Equal to**

### Logical Operators

`&` **AND Operator**

TRUE only if both conditions/values are true

`|` **OR Operator**

TRUE if any condition/value is true

`^` **XOR Operator**

TRUE if any condition/value are different

`~` **NOT Operator**

Inverts All Bits

## Spread Operator (...)

It Copies all the data from `Array` or `Object` to another location

```
var a = [1,2,3,4,5];
var b = {
  name: "zaeem",
  age: 24
}
var new_a = [...a];
var new_b = {...b};
```

### Extras

```
// output
alert(obj);

// using object as a property key
anotherObj[obj] = 123;
```

```
// explicit conversion
let num = Number(obj);

// maths (except binary plus)
let n = +obj; // unary plus
let delta = date1 - date2;

// less/greater comparison
let greater = user1 > user2;
```

```
alert( 'a' > 'Z' ); // true
alert( 'Österreich' > 'Zealand' ); // true
```

## Conditional Statements

**IF**

```
if {
    // Some code here
}
```

```
if {
    // Some code here
} else {
    // Some code here
}
```

```
if {
    // Some code here
} else if {
    // ...
} else if {
    // ...
} else {
    // Some code here
}
```

**Switch**

```
switch(expression) {
  case x:
    // code block
    break;
  case y:
    // code block
    break;
  default:
    // code block
}
```

**Terenary**

```
var cost = ( isMember ? '$2.00' : '$10.00' ) ;
```

## Loops

**For**

```
for (var i = 0; i < 10; i++) {
  alert(i);
}
```

```
for (var i = 0; len = 4, i < len; i++) {
  alert(i);
}
```

**For-in**

```
var person = {fname:"John", lname:"Doe", age:25};

var text = "";
var x;
for (x in person) {
  text += person[x];
}
```

```
var numbers = [45, 4, 9, 16, 25];

var txt = "";
var x;
for (x in numbers) {
  txt += numbers[x] + "<br>";
}
```

**For-Each**

```
var numbers = [45, 4, 9, 16, 25];
numbers.forEach( function( value, index, array ) {
    // Some code here
});
```

**For-of**

```
let cars = ["BMW", "Volvo", "Mini"];
let text = "";

for (let x of cars) {
  text += x;
}
```

```
for (let char of "test") {
  // triggers 4 times: once for each character
  alert( char ); // t, then e, then s, then t
}
```

**While**

```
while (i < 10) {
  text += "The number is " + i;
  i++;
}
```

**Do-While**

```
do {
  text += "The number is " + i;
  i++;
}
while (i < 10);
```

**Loop-Breaks**

- continue `iternation starts again`
- break `loop stops iterating`

**Outer-Breaks**

```
outer: for (let i = 0; i < 3; i++) {

  for (let j = 0; j < 3; j++) {

    let input = prompt(`Value at coords (${i},${j})`, '');

    // if an empty string or canceled, then break out of both loops
    if (!input) break outer; // (*)

    // do something with the value...
  }
}
alert('Done!');
```

## Functions

```
function Multiply( p1, p2 ) {
  return p1 * p2;   // The function returns the product of p1 and p2
}
var x = Multiply( 5, 10 );
```

`() => {}` Lambda Functions

```
const add = ( a, b ) => {
    return a + b;
}
var x = add( 2, 7 );
```

`Asyncronous Methods`

These methods wait till the code is completely executed, however normally javascript code
keeps running the next line inspite of waiting for to get executed completely

```
var x = async () => {

}
asyncfunction run() {
    await x();
}
```

```
async function f() {

  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("done!"), 1000)
  });

  let result = await promise; // wait until the promise resolves (*)

  alert(result); // "done!"
}

f();
```

```
class Waiter {
  async wait() {
    return await Promise.resolve(1);
  }
}

new Waiter()
  .wait()
  .then(alert); // 1 (this is the same as (result => alert(result)))
```

`Callback Functions`

```
let A = () => {}
let B = ( cb ) => {
    if( true ) {
        cb();
    } else {

    }
}
B( A );
```

```
function showMessage(from, text = anotherFunction()) {
  // anotherFunction() only executed if no text given
  // its result becomes the value of text
}
```

```
function doNothing() {
  return;
}

alert( doNothing() === undefined ); // true
```

```
function User() {
  alert(new.target);
}

// without "new":
User(); // undefined

// with "new":
new User(); // function User { ... }
```

```
let user = new User; // <-- no parentheses
// same as
let user = new User();
```

```
function Rabbit() {}
// by default:
// Rabbit.prototype = { constructor: Rabbit }

alert( Rabbit.prototype.constructor == Rabbit ); // true
```

## Exception Handling

Trial Wraps

```
try {
  // Some code here
}
catch(err) {
  // Error
}
```

```
try {
  // First
}
catch(err) {
  // If Error in First
}
finally {
  // Second
}
```

```
let error = new Error(message);
// or
let error = new SyntaxError(message);
let error = new ReferenceError(message);
// ...
```

```
try {
  user = { /*...*/ };
} catch (err) {
  if (err instanceof ReferenceError) {
    alert('ReferenceError'); // "ReferenceError" for accessing an undefined variable
  }
}
```

```
class ValidationError extends Error {
  constructor(message) {
    super(message); // (1)
    this.name = "ValidationError"; // (2)
  }
}

function test() {
  throw new ValidationError("Whoops!");
}

try {
  test();
} catch(err) {
  alert(err.message); // Whoops!
  alert(err.name); // ValidationError
  alert(err.stack); // a list of nested calls with line numbers for each
}
```

Creating Custom Errors

```
throw "Too big";    // throw a text
throw 500;          // throw a number
```

## Script Modes

written at the top of the script

`strict-mode` uses the modern code

`soft-mode` uses old/classic code

## `This` in Objects

```
var person = {
  firstName: "John",
  lastName : "Doe",
  id       : 5566,
  fullName : function() {
    return this.firstName + " " + this.lastName;
  }
};
```

## Get Set Enumerable Configurable

```
let obj = {
  get propName() {
    // getter, the code executed on getting obj.propName
  },

  set propName(value) {
    // setter, the code executed on setting obj.propName = value
  }
};
```

## Classes & Objects

```
class MyClass {
  // class methods
  constructor() { ... }
  method1() { ... }
  method2() { ... }
  method3() { ... }
  ...
}
```

```
class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
  age() {
    let date = new Date();
    return date.getFullYear() - this.year;
  }
}

let myCar = new Car("Ford", 2014);
```

`Inheritance`

```
class A {
    constructor(name) {
        this.name = name
    }
    get Name() {
        return this.name;
    }
    set Name(x) {
        this.name = x;
    }
    static hello() {
        return "Hello!!";
    }
}
class B extends A {
    constructor(name,age) {
        super(name);
        this.age = age;
    }
    get Age() {
        return this.age;
    }
    set Age(x) {
        this.age = x;
    }
}
```

```
let animal = {
  eats: true
};
let rabbit = {
  jumps: true
};

rabbit.__proto__ = animal; // (*)

// we can find both properties in rabbit now:
alert( rabbit.eats ); // true (**)
alert( rabbit.jumps ); // true
```

```
let animal = {
  eats: true,
  walk() {
    /* this method won't be used by rabbit */
  }
};

let rabbit = {
  __proto__: animal
};

rabbit.walk = function() {
  alert("Rabbit! Bounce-bounce!");
};

rabbit.walk(); // Rabbit! Bounce-bounce!
```

```
let animal = {
  eats: true
};

let rabbit = {
  jumps: true,
  __proto__: animal
};

for(let prop in rabbit) {
  let isOwn = rabbit.hasOwnProperty(prop);

  if (isOwn) {
    alert(`Our: ${prop}`); // Our: jumps
  } else {
    alert(`Inherited: ${prop}`); // Inherited: eats
  }
}
```

```
let obj = {};

alert(obj.__proto__ === Object.prototype); // true

alert(obj.toString === obj.__proto__.toString); //true
alert(obj.toString === Object.prototype.toString); //true
```

```
class CoffeeMachine {
  #waterLimit = 200;

  #fixWaterAmount(value) {
    if (value < 0) return 0;
    if (value > this.#waterLimit) return this.#waterLimit;
  }

  setWaterAmount(value) {
    this.#waterLimit = this.#fixWaterAmount(value);
  }

}

let coffeeMachine = new CoffeeMachine();

// can't access privates from outside of the class
coffeeMachine.#fixWaterAmount(123); // Error
coffeeMachine.#waterLimit = 1000; // Error
```

```
let animal = {
  name: "Animal",
  eat() {
    alert(`${this.name} eats.`);
  }
};

let rabbit = {
  __proto__: animal,
  name: "Rabbit",
  eat() {
    // that's how super.eat() could presumably work
    this.__proto__.eat.call(this); // (*)
  }
};

rabbit.eat(); // Rabbit eats.
```

```
class Animal {}
class Rabbit extends Animal {}

// for statics
alert(Rabbit.__proto__ === Animal); // true

// for regular methods
alert(Rabbit.prototype.__proto__ === Animal.prototype); // true
```

## Function Objects

```
var Vehicle = function(name,model) {
    // Public
    this.name = name;
    // Private
    var model = model;

    // Public
    this.getName = function() {
        return this.name;
	}
    this.setName = function(x) {
        this.name = x;
	}
    // Private
    var getModel = function() {
        return model;
	}
}

var BMW = new Vehicle("BMW","2020");
```

```
// mixin
let sayHiMixin = {
  sayHi() {
    alert(`Hello ${this.name}`);
  },
  sayBye() {
    alert(`Bye ${this.name}`);
  }
};

// usage:
class User {
  constructor(name) {
    this.name = name;
  }
}

// copy the methods
Object.assign(User.prototype, sayHiMixin);

// now User can say hi
new User("Dude").sayHi(); // Hello Dude!
```

## Promises

```
new Promise((resolve, reject) => {
    console.log('Initial');

    resolve();
})
.then(() => {
    throw new Error('Something failed');

    console.log('Do this');
})
.catch(() => {
    console.error('Do that');
})
.then(() => {
    console.log('Do this, no matter what happened before');
});
```

```
Promise.all([
  new Promise(resolve => setTimeout(() => resolve(1), 3000)), // 1
  new Promise(resolve => setTimeout(() => resolve(2), 2000)), // 2
  new Promise(resolve => setTimeout(() => resolve(3), 1000))  // 3
]).then(alert); // 1,2,3 when promises are ready: each promise contributes an array member
```

```
let urls = [
  'https://api.github.com/users/iliakan',
  'https://api.github.com/users/remy',
  'https://api.github.com/users/jeresig'
];

// map every url to the promise of the fetch
let requests = urls.map(url => fetch(url));

// Promise.all waits until all jobs are resolved
Promise.all(requests)
  .then(responses => responses.forEach(
    response => alert(`${response.url}: ${response.status}`)
  ));
```

```
let urls = [
  'https://api.github.com/users/iliakan',
  'https://api.github.com/users/remy',
  'https://no-such-url'
];

Promise.allSettled(urls.map(url => fetch(url)))
  .then(results => { // (*)
    results.forEach((result, num) => {
      if (result.status == "fulfilled") {
        alert(`${urls[num]}: ${result.value.status}`);
      }
      if (result.status == "rejected") {
        alert(`${urls[num]}: ${result.reason}`);
      }
    });
  });
```

```
Promise.race([
  new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
  new Promise((resolve, reject) => setTimeout(() => reject(new Error("Whoops!")), 2000)),
  new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000))
]).then(alert); // 1
```

```
Promise.any([
  new Promise((resolve, reject) => setTimeout(() => reject(new Error("Whoops!")), 1000)),
  new Promise((resolve, reject) => setTimeout(() => resolve(1), 2000)),
  new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000))
]).then(alert); // 1
```

```
let promise = new Promise(function(resolve, reject) {
  setTimeout(() => resolve(1), 1000);
});

promise.then(function(result) {
  alert(result); // 1
  return result * 2;
});

promise.then(function(result) {
  alert(result); // 1
  return result * 2;
});

promise.then(function(result) {
  alert(result); // 1
  return result * 2;
});
```

## Maths Methods

```
Math.E        // returns Euler's number
Math.PI       // returns PI
Math.SQRT2    // returns the square root of 2
Math.SQRT1_2  // returns the square root of 1/2
Math.LN2      // returns the natural logarithm of 2
Math.LN10     // returns the natural logarithm of 10
Math.LOG2E    // returns base 2 logarithm of E
Math.LOG10E   // returns base 10 logarithm of E
```

```
Math.round(x)       // returns the nearest integer
Math.floor(x);      // returns rounded down integer
Math.ceil(x);       // returns rounded up integer
Math.trunc(x);      // return integer part of number
Math.sign(x);       // returns if x is negative, null or positive
Math.pow(x,y)      // returns the value of x to the power y
Math.sqrt(x)      // returns square root of x
Math.cbrt(x)      // returns cube root of x
Math.abs(x)      // returns absolute positive value of x
Math.sin(x)      // returns absolute positive value of x
Math.cos(x)      // returns absolute positive value of x
Math.tan(x)      // returns absolute positive value of x
Math.min( list )      // returns absolute positive value of x
Math.max( list )      // returns absolute positive value of x
Math.random();     // returns a random number
Math.log(x);     // returns logrithm
Math.log2(x);     // returns logrithm base 2
Math.log10(x);     // returns logrithm base 10
Math.exp(x);        // e power x
```

## Random Number

```
Math.floor(Math.random() * 10);     // returns a random integer from 0 to 9
```

## String Methods

String Concatination

```
var x = "Hello";
var y = "World";
var z = x + " " + y;
```

String Complicated Symbols

`/'` **Single Quote**

`/"` **Double Quote**

`//` **Slash**

`/b` **Backspace**

`/n` **New-line**

Literal String

```
var word = "hello world";
```

Object String

```
var word = new String("hello world");
```

**String Equality**

- `TRUE` Literal String == Object String
- `FALSE` Literal String === Object String

String legnth

```
var x = word.length;
```

Index of Position of First Occurance

```
var str = "Please locate where 'locate' occurs!";
var pos = str.indexOf("locate");
```

`search starting position in second parameter`

```
var str = "Please locate where 'locate' occurs!";
var pos = str.indexOf("locate",15);
```

Index of Position of Last Occurance

```
var str = "Please locate where 'locate' occurs!";
var pos = str.lastIndexOf("locate");
```

`search starting position in second parameter`

```
var str = "Please locate where 'locate' occurs!";
var pos = str.lastIndexOf("locate",15);
```

**Note:** `-1` Means Text was not found !

`search position`

```
var str = "Please locate where 'locate' occurs!";
var pos = str.search("locate");
```

`Sub String Extraction`

```
slice( start, end )
substring( start, end )
substr( start, length )
```

```
var str = "Apple, Banana, Kiwi";
var res = str.slice(7, 13);
```

**Note:** `Negative-Value` Means to count from the end

```
var str = "Apple, Banana, Kiwi";
var res = str.substring(7, 13);
```

```
var str = "Apple, Banana, Kiwi";
var res = str.substr(7, 6);
```

Replacing String / Sub String

```
str = "Please visit Microsoft!";
var n = str.replace("Microsoft", "W3Schools");
```

Insensitive - Replacements

```
str = "Please visit Microsoft!";
var n = str.replace(/MICROSOFT/i, "W3Schools");
```

All Replacements

```
str = "Please visit Microsoft and Microsoft!";
var n = str.replace(/Microsoft/g, "W3Schools");
```

Case-Transform

- .toUpperCase()
- .toLowerCase()

Joining Strings

```
var text1 = "Hello";
var text2 = "World";
var text3 = text1.concat(" ", text2);
```

String Trimming

```
var str = "       Hello World!        ";
alert( str.trim() );
```

String Padding

```
let str = "5";
str = str.padStart(4,0);
// result is 0005
```

```
let str = "5";
str = str.padEnd(4,0);
// result is 5000
```

Pulling Character & Character Codes

```
var str = "HELLO WORLD";
str.charAt(0);            // returns H
```

```
var str = "HELLO WORLD";
str.charCodeAt(0);         // returns 72
```

String Splitting

```
var txt = "a,b,c,d,e";   // String
txt.split(",");          // Split on commas
txt.split(" ");          // Split on spaces
txt.split("|");          // Split on pipe
```

`in` Operator

```
alert( "Widget".includes("id") ); // true
alert( "Widget".includes("id", 3) ); // false, from position 3 there is no "id"
alert( "Widget".startsWith("Wid") ); // true, "Widget" starts with "Wid"
alert( "Widget".endsWith("get") ); // true, "Widget" ends with "get"
```

## Number Methods

- .toString()
- .toExponential( digits ) `Scientific notation`
- .toFixed()

```
var x = 9.656;
x.toFixed(0);           // returns 10
x.toFixed(2);           // returns 9.66
x.toFixed(4);           // returns 9.6560
x.toFixed(6);           // returns 9.656000
```

- .toPrecision( rate )

```
var x = 9.656;
x.toPrecision();        // returns 9.656
x.toPrecision(2);       // returns 9.7
x.toPrecision(4);       // returns 9.656
x.toPrecision(6);       // returns 9.65600
```

- Converting to Numbers

`Number()` `parseInt()` `parseFloat()`

- Number Limits

`Number.MAX_VALUE` `Number.MIN_VALUE`
`POSITIVE_INFINITY` `POSITIVE_INFINITY`
`Number.NaN`

## Date Methods

Initializing

```
new Date()
new Date(year, month, day, hours, minutes, seconds, milliseconds)
new Date(milliseconds)
new Date(date string)
```

- .toUTCString()
- .toDateString()
- .toISOString()

- .getFullYear()
- .getMonth()
- .getDate()
- .getHours()
- .getMinutes()
- .getSeconds()
- .getMiliseconds()
- .getTime()
- .getDay()
- .getNow()

- .setDate()
- .setFullYear()
- .setHours()
- .setMiliseconds()
- .setMinutes()
- .setMonths()
- .setSeconds()
- .setTime()

```
// we have date1 and date2, which function faster returns their difference in ms?
function diffSubtract(date1, date2) {
  return date2 - date1;
}

// or
function diffGetTime(date1, date2) {
  return date2.getTime() - date1.getTime();
}
```

```
let ms = Date.parse('2012-01-26T13:51:50.417-07:00');

alert(ms); // 1327611110417  (timestamp)
```

## Array Methods

```
var numbers = [ 1, 2, 3, 4 ]
var numbers = new Array( 1, 2, 3, 4 )
```

- list.length()
- list.sort()
- list.forEach( function )

- list.push()
- list.pop()
- list.shift()
- list.unshift()

- join( seperator )
- splice()

```
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon", "Kiwi");
```

- concat()

```
var myGirls = ["Cecilie", "Lone"];
var myBoys = ["Emil", "Tobias", "Linus"];
var myChildren = myGirls.concat(myBoys);   // Concatenates (joins) myGirls and myBoys
```

```
ar arr1 = ["Cecilie", "Lone"];
var arr2 = ["Emil", "Tobias", "Linus"];
var arr3 = ["Robin", "Morgan"];
var myChildren = arr1.concat(arr2, arr3);   // Concatenates arr1 with arr2 and arr3
```

- slice( digit )
- toString()
- sort()
- reverse()
- map()

```
var numbers1 = [45, 4, 9, 16, 25];
var numbers2 = numbers1.map( function(value, index, array) {
  return value * 2;
} );
```

```
let filteredArr = arr.filter(item => item >= 10);
```

Checks

```
var arr = []
typeof arr
```

```
Array.isArray(fruits);   // returns true
```

```
fruits instanceof Array;   // returns true
```

```
Object.keys(user) = ["name", "age"]
Object.values(user) = ["John", 30]
Object.entries(user) = [ ["name","John"], ["age",30] ]
```

```
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

alert( matrix[1][1] ); // 5, the central element
```

## Regular expressions

Structure

```
/pattern/modifiers;
```

```
/school/i       // case-sensitive match
/school/g       // global match
/school/m       // multi-line match
```

## JavaScript Object Notation ( JSON )

It is written in files with `.json` extension

**Format**

```
{
"employees":[
    {
      "firstName":"John",
      "lastName":"Doe"
    },
    {
        "firstName":"Anna",
        "lastName":"Smith"
    },
    {
        "firstName":"Peter",
        "lastName":"Jones"
    }
]
}
```

**Conversions**

`JSON.parse( Object )`
`JSON.stringify( Object )`

```
let user = {
  name: "John"
};

let descriptor = Object.getOwnPropertyDescriptor(user, 'name');

alert( JSON.stringify(descriptor, null, 2 ) );
/* property descriptor:
{
  "value": "John",
  "writable": true,
  "enumerable": true,
  "configurable": true
}
*/
```

## Time Laps and Intervals

`1000` = 1 Second

Wait Method before specific code
`setTimeout( function, time )`

setTimout( () => {
// Some Code here
// Will run after the given time
}, 1000 )

Loop over a particular code
`setInterval( function, time )`

setInterval( () => {
// Some Code here
// Will run after the given time
}, 1000 )

Loop running after every second

```
var loop = setInterval( () => {
    alert("hello world");
}, 1000 );
```

Exiting Loop

```
clearInterval( loop );
```

```
function sayHi(phrase, who) {
  alert( phrase + ', ' + who );
}

setTimeout(sayHi, 1000, "Hello", "John"); // Hello, John
```

```
function defer(f, ms) {
  return function() {
    setTimeout(() => f.apply(this, arguments), ms);
  };
}

function sayHi(who) {
  alert('Hello, ' + who);
}

let sayHiDeferred = defer(sayHi, 2000);
sayHiDeferred("John"); // Hello, John after 2 seconds
```

```
function defer(f, ms) {
  return function(...args) {
    let ctx = this;
    setTimeout(function() {
      return f.apply(ctx, args);
    }, ms);
  };
}
```

```
Function.prototype.defer = function(ms) {
  let f = this;
  return function(...args) {
    setTimeout(() => f.apply(this, args), ms);
  }
};

// check it
function f(a, b) {
  alert( a + b );
}

f.defer(1000)(1, 2); // shows 3 after 1 sec
```

## Object And Array Destructuring

**Object**

```
var user = {
  name: "zaeem",
  age: 24
}
var { name, age } = user;
var { name as x, age as y } = user;
```

**Array**

```
var numbers = [ 2,5,9 ]
var [ x, y, z ] = numbers;
```

```
var numbers = [ 2,5,9,3,6,3,6,8,3,6 ]
var [ x, y, z, ...a ] = numbers;
```

### Using Destructuring

```
[guest, admin] = [admin, guest];
```

## Nullish coalescing operator

`??` Operator

```
// if there's no "count" parameter, show "unknown"
function showCount(count) {
  alert(count ?? "unknown");
}
```

### Optional Chaining Operator

`?.`

```
var age = person?.age;
```

```
let result = someInterface.customMethod?.();
```

### Chaining of Methods / Functions

```
const dog = {
  is: null,
  log: () => console.log(this.is),
  bark() {
    this.is = "woofing";
    this.log();
    return this;
  },
  walk() {
    this.is = "walking";
    this.log();
    return this;
  },
  eat() {
    this.is = "eating";
    this.log();
    return this;
  }
};

dog
  .bark()
  .eat()
  .walk();
```

```
class Car {
   constructor() {
      this.wheels = 4
      this.doors = 4
      this.topSpeed = 100
      this.feulCapacity = "400 Litres"
   }
   setWheels(w) {
      this.wheels = w;
      return this;
   }
   setDoors(d) {
      this.doors = d;
      return this;
   }
   setTopSpeed(t) {
      this.topSpeed = t;
      return this;
   }
   setFeulCapacity(fc) {
      this.feulCapacity = fc;
      return this;
   }
   displayCarProps() {
      console.log(`Your car has ${this.wheels} wheels,\
      ${this.doors} doors with a top speed of ${this.topSpeed}\
      and feul capacity of ${this.feulCapacity}`)
   }
}

let sportsCar = new Car()
   .setDoors(2)
   .setTopSpeed(250)
   .setFeulCapacity("600 Litres")
   .displayCarProps()
```

### Prototypes of Functions

`FunctionName`.`Prototype`.`Method/Property` = `Value`

```
function Dog() {}

Dog.prototype.is = null;
Dog.prototype.log = function() {
  console.log(this.is);
};
Dog.prototype.bark = function() {
  this.is = "woofing";
  this.log();
  return this;
};
Dog.prototype.walk = function() {
  this.is = "walking";
  this.log();
  return this;
};
Dog.prototype.eat = function() {
  this.is = "eating";
  this.log();
  return this;
};
const dog = new Dog();
dog
  .bark()
  .eat()
  .walk();
```

```
let animal = {
  eats: true
};

// create a new object with animal as a prototype
let rabbit = Object.create(animal);

alert(rabbit.eats); // true

alert(Object.getPrototypeOf(rabbit) === animal); // true

Object.setPrototypeOf(rabbit, {}); // change the prototype of rabbit to {}
```

### The New Function

```
let func = new Function ([arg1, arg2, ...argN], functionBody);
```

```
let sum = new Function('a', 'b', 'return a + b');
alert( sum(1, 2) ); // 3
```

```
function getFunc() {
  let value = "test";

  let func = function() { alert(value); };

  return func;
}

getFunc()(); // "test", from the Lexical Environment of getFunc
```

### Data Caching

This is normally done to improve performance

```
function slow(x) {
  // there can be a heavy CPU-intensive job here
  alert(`Called with ${x}`);
  return x;
}

function cachingDecorator(func) {
  let cache = new Map();

  return function(x) {
    if (cache.has(x)) {    // if there's such key in cache
      return cache.get(x); // read the result from it
    }

    let result = func(x);  // otherwise call func

    cache.set(x, result);  // and cache (remember) the result
    return result;
  };
}

slow = cachingDecorator(slow);

alert( slow(1) ); // slow(1) is cached and the result returned
alert( "Again: " + slow(1) ); // slow(1) result returned from cache

alert( slow(2) ); // slow(2) is cached and the result returned
alert( "Again: " + slow(2) ); // slow(2) result returned from cache
```

### Maps and Sets

`Maps`

```
let map = new Map();

map.set('1', 'str1');   // a string key
map.set(1, 'num1');     // a numeric key
map.set(true, 'bool1'); // a boolean key

// remember the regular Object? it would convert keys to string
// Map keeps the type, so these two are different:
alert( map.get(1)   ); // 'num1'
alert( map.get('1') ); // 'str1'

alert( map.size ); // 3
```

```
let recipeMap = new Map([
  ['cucumber', 500],
  ['tomatoes', 350],
  ['onion',    50]
]);

// iterate over keys (vegetables)
for (let vegetable of recipeMap.keys()) {
  alert(vegetable); // cucumber, tomatoes, onion
}

// iterate over values (amounts)
for (let amount of recipeMap.values()) {
  alert(amount); // 500, 350, 50
}

// iterate over [key, value] entries
for (let entry of recipeMap) { // the same as of recipeMap.entries()
  alert(entry); // cucumber,500 (and so on)
}

// runs the function for each (key, value) pair
recipeMap.forEach( (value, key, map) => {
  alert(`${key}: ${value}`); // cucumber: 500 etc
});
```

`Sets`

```
let set = new Set();

let john = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };

// visits, some users come multiple times
set.add(john);
set.add(pete);
set.add(mary);
set.add(john);
set.add(mary);

// set keeps only unique values
alert( set.size ); // 3

for (let user of set) {
  alert(user.name); // John (then Pete and Mary)
}
```

```
let set = new Set(["oranges", "apples", "bananas"]);

for (let value of set) alert(value);

// the same with forEach:
set.forEach((value, valueAgain, set) => {
  alert(value);
});
```

```
function unique(arr) {
  return Array.from(new Set(arr));
}
```

`Weak-Map`

The first difference between `Map` and `WeakMap` is that keys must be objects, not primitive values

```
let weakMap = new WeakMap();

let obj = {};

weakMap.set(obj, "ok"); // works fine (object key)

// can't use a string as the key
weakMap.set("test", "Whoops"); // Error, because "test" is not an object
```

`Weak-Set`

The first difference between `Set` and `WeakSet` is that keys must be objects, not primitive values

```
let visitedSet = new WeakSet();

let john = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };

visitedSet.add(john); // John visited us
visitedSet.add(pete); // Then Pete
visitedSet.add(john); // John again

// visitedSet has 2 users now

// check if John visited?
alert(visitedSet.has(john)); // true

// check if Mary visited?
alert(visitedSet.has(mary)); // false

john = null;

// visitedSet will be cleaned automatically
```

### Generator Functions

```
function* generateSequence() {
  yield 1;
  yield 2;
  return 3;
}

let one = generator.next();
let two = generator.next();
let three = generator.next();

alert(JSON.stringify(three)); // {value: 3, done: true}
```

```
function* generateSequence() {
  yield 1;
  yield 2;
  return 3;
}

let generator = generateSequence();

for(let value of generator) {
  alert(value); // 1, then 2
}
```

```
function* generateSequence(start, end) {
  for (let i = start; i <= end; i++) yield i;
}
```

```
function* generateSequence(start, end) {
  for (let i = start; i <= end; i++) yield i;
}

function* generatePasswordCodes() {

  // 0..9
  yield* generateSequence(48, 57);

  // A..Z
  yield* generateSequence(65, 90);

  // a..z
  yield* generateSequence(97, 122);

}

let str = '';

for(let code of generatePasswordCodes()) {
  str += String.fromCharCode(code);
}

alert(str); // 0..9A..Za..z
```

```
function* gen() {
  try {
    let result = yield "2 + 2 = ?"; // (1)

    alert("The execution does not reach here, because the exception is thrown above");
  } catch(e) {
    alert(e); // shows the error
  }
}

let generator = gen();

let question = generator.next().value;

generator.throw(new Error("The answer is not found in my database")); // (2)
```

### Module Import / Export

Modules always work in strict mode

```
// 📁 sayHi.js
export function sayHi(user) {
  alert(`Hello, ${user}!`);
}
```

```
<script type="module">
  import {sayHi} from './say.js';

  document.body.innerHTML = sayHi('John');
</script>
```

```
// 📁 main.js
import {sayHi} from './sayHi.js';

alert(sayHi); // function...
sayHi('John'); // Hello, John!
```

```
import {sayHi, sayBye} from './say.js';
import * as say from './say.js';
import {sayHi as hi, sayBye as bye} from './say.js';
```

```
export default class { // no class name
  constructor() { ... }
}

export {default as User} from './user.js'; // re-export default
```

```
export * from './user.js'; // to re-export named exports
export {default} from './user.js'; // to re-export the default export
```

`Dynamic Import`

```
let modulePath = prompt("Which module to load?");

import(modulePath)
  .then(obj => <module object>)
  .catch(err => <loading error, e.g. if no such module>)
```

`Inside Functions`

```
let {hi, bye} = await import('./say.js');

hi();
bye();
```
