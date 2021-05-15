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

Function Scoped

```
var x = "hello word";
```

Block Scoped

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

Deleting Entity

```
delete address.city
```

## Add Variables to Strings

`${variable}`

```
let price = 500;
let sentence = "I bought the cat for about ${price} rupees";
```

## Operators

### Arithmetic Operators

`+` **Addition**

`-` **Subtraction**

`*` **Multiplication**

`/` **Division**

`%` **Modulus** ( Remainder operator )

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

Creating Custom Errors

```
throw "Too big";    // throw a text
throw 500;          // throw a number
```

## Strict Mode

`strict-mode` written at the top of the script

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

## Classes & Objects

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
