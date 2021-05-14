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

## String Methods

## Number Methods

## Date Methods

## Array Methods

## Object Methods
