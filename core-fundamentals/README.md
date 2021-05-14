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
alert("hello word")
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

## Data Types

- String
- Number
- Boolean
- Array/List
- Object

## Declaration & Initialization

String

```
myName = "Zaeem Hassan Tarrar";
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

## Functions

```
function Multiply( p1, p2 ) {
  return p1 * p2;   // The function returns the product of p1 and p2
}
var x = Multiply( 5, 10 );
```

```
const add = ( a, b ) => {
    return a + b;
}
var x = add( 2, 7 );
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

## String Methods

## Number Methods

## Date Methods

## Array Methods

## Object Methods
