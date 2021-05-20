// 'strict-mode'


// alert("Hello world !");
console.log("Hello world !");

// <===== =====>

let name = "Zeem Hassan Tarrar";            // String
let qualification = 'BSIT';                     // single quote string
let age = 25;                                   // Number
let isStudent = true;                           // Boolean
let today = new Date();                         // Date
// Array / List
let fruits = [
      "apples",
      "mangoes",
      "bananas",
      "grapes"
];
// Object
let cat = {
    name: "tom",
    gender: "male",
    hasNails: true,
    fingers: 4
};

console.log("Name: ",name);
console.log("Qualification: ",qualification);
console.log("Age: ",age);
console.log("Is Student: ",isStudent);
console.log("Today: ",today);
console.log("Fruits: ",fruits);
console.log("Cat: ",cat);

// <===== =====>

// Addition
console.log("2 + 2 = ", 2 + 2);
// Subtraction
console.log("2 - 2 = ", 2 - 2);
// Multipy
console.log("2 * 2 = ", 2 * 2);
// Division
console.log("2 / 2 = ", 2 / 2);
// Remainder
console.log("2 % 2 = ", 2 % 2);

// <===== =====>

let x1 = 12;
let x2 = 45;
let x3 = 31;

console.log("Asignment Operators Section: ");
console.log("Starts: ",x1,x2,x3);
x1 += x2;
console.log("x1 += x2: ",x1,x2,x3);
x2 -= x3;
console.log("x2 -= x3: ",x1,x2,x3);
x3 *= x1;
console.log("x3 *= x1: ",x1,x2,x3);
x1 /= x2;
console.log("x1 /= x2: ",x1,x2,x3);
x2 %= x3;
console.log("x2 %= x3: ",x1,x2,x3);

// <===== =====>

let x4 = 24;        // Number
let x5 = "24";      // String

console.log("x4 == x5: ", x4 == x5 );
console.log("x4 === x5: ", x4 === x5 );

// <===== =====>

let x6 = ( 4 == 4 );
console.log("x6: ",x6);
console.log("not x6: ",!x6);

// <===== =====>

let x7 = 3;
let x8 = 5;
let x9 = 11;

console.log("x7 > x8: ",(x7 > x8));
console.log("x8 < x9: ",(x8 < x9));
console.log("x9 >= x9: ",(x9 >= x9));
console.log("x8 <= x8: ",(x8 <= x8));

// <===== =====>

console.log("True & True: ", ( true & true ) );
console.log("True & False: ", ( true & false ) );
console.log("False & True: ", ( false & true ) );
console.log("False & False: ", ( false & false ) );

console.log("True | True: ", ( true | true ) );
console.log("True | False: ", ( true | false ) );
console.log("False | True: ", ( false | true ) );
console.log("False | False: ", ( false | false ) );

console.log("True ^ True: ", ( true ^ true ) );
console.log("True ^ False: ", ( true ^ false ) );
console.log("False ^ True: ", ( false ^ true ) );
console.log("False ^ False: ", ( false ^ false ) );

// (-1)(n + 1)
console.log("Bit Not: ", "~(-4): ",~-4);

// <===== =====>

let myAge = 25;

if( myAge < 10 ) {
    console.log("I am a baby");
} else if ( myAge <= 25 ) {
    console.log("I am young blood");
} else if ( myAge > 25 && myAge < 50 ) {
    console.log("I am old");
} else {
    console.log("I am in the grave !");
}

// <===== =====>

let myGrade = "B-";

switch( myGrade ) {
    case "A+": {
        console.log("Excelent");
    }
    break;
    case "A": {
        console.log("Great");
    }
    break;
    case "A-": {
        console.log("Very Good");
    }
    break;
    case "B+": {
        console.log("Good");
    }
    break;
    case "B": {
        console.log("Keep it Up");
    }
    case "B-": {
        console.log("You did well");
    }
    break;
    case "C+": {
        console.log("Need Improvements");
    }
    break;
    case "C": {
        console.log("Better work hard");
    }
    break;
    case "C-": {
        console.log("I am disappointed");
    }
    break;
    default: {
        console.log("Failure");
    }
    break;
}

// <===== =====>

let gender = "Male";
let isGenderMale = ( gender.toLowerCase() == "male" ) ? true : false;

console.log("Gender: ",gender);
console.log("Is Gender Male: ", isGenderMale );

// <===== =====>

for( let i = 0 ; i < 10; i++ ) {
    if( i == 3 ) {
        continue;
    }
    if( i == 8 ) {
        break;
    }
    console.log("Loop: ",`Index(${i})`);
}

for( let fruit of fruits ) {
    console.log( fruit );
}

let numbers = [ 23, 54, 21, 56, 32, 49, 92 ];
numbers.forEach( function( value, index, array ) {
    console.log(value,index,array[index]);
} );

for( let entity in cat ) {
    console.log( entity );
}

let x11 = 1;
while( x11 < 10 ) {
    console.log(x11);
    x11++
}

let x12 = 1;
do {
    console.log(x12);
    x12++
} while( x12 < 10 );

// <===== =====>

function Add(num1, num2) {
    return num1 + num2;
}

console.log("Addition Function: ", Add( 3,6 ) );

// <===== =====>

const Subtract = (num1,num2) => {
    return num1 - num2;
}

console.log("Subtraction Function: ", Subtract( 3,6 ) );

// <===== =====>

const doSomething = async () => {
    await setTimeout( async () => {
        console.log("Doing Something !");
    }, 1000 );
    console.log("Done Something !");
}
doSomething();

// <===== =====>

const A = () => {
    console.log("Done!");
}
const B = ( cb = null ) => {
   console.log("I am Working ...");
   if( cb != null ) {
       cb();
   }
}

B( A );

// <===== =====>

try {
    let x13 = 20;
    if( x13 > 30 ) {
        throw "Error";
    } else {
        console.log("No Exceptions");
    }
} catch( err ) {
    console.log("Error: ",err);
} finally {
    console.log("Task Completed !");
}

// <===== =====>

var person = {
    firstName: "John",
    lastName : "Doe",
    id: 5566,
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
};

// <===== =====>

class Animal {
    constructor( name ) {
        this.name = name;
    }
    get Name() {
        return this.name;
    }
    set Name(x) {
        this.name = x;
    }
    static speak() {
        console.log("Hi ... I am an Animal !");
    }
}
class Mammal extends Animal {
    constructor(name,hasHair,averageAge) {
        super(name);
        this.hasHair = hasHair;
        this.averageAge = averageAge;
    }
    get HasHair() {
        return this.hasHair;
    }
    set HasHair(x) {
        this.hasHair = x;
    }
    get AverageAge() {
        return this.averageAge;
    }
    set AverageAge(x) {
        this.averageAge = x;
    }
}

var Snake = new Animal("Black Mamba");
var Dog = new Mammal("German Sheferd",true,25);

Snake.Name = "King Cobra";

console.log("Snake: ",Snake);
console.log("Dog: ",Dog);
Animal.speak();

// <===== =====>

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
console.log("Vehicle: ",BMW);

// <===== =====>

const samplePromise = new Promise((resolve, reject) => {
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

samplePromise;

const samplePromise2 = new Promise( (resolve,reject) => {
    console.log("Step 1");
    let requestStatus = true;
    if( requestStatus ) {
        resolve();
    } else {
        reject();
    }
} ).then( () => {
    console.log("Step 2");
    let student = "Jhonny";
    return student;
} ).then( (person) => {
    console.log("Step 3");
    console.log(`Hi ${person}`);
} );

samplePromise2.then( () => {
    console.log("Task Completed !");
} ).catch( (err) => {
    console.log("Error: ",err);
} )

// <===== =====>

console.log("Round: ", Math.round(4.3));
console.log("Floor: ", Math.floor(4.3));
console.log("Ceil: ", Math.ceil(4.3));
console.log("Power: ", Math.pow(2,3));
console.log("Sin: ", Math.sin(1));
console.log("Random: ", Math.random());
console.log("Min: ", Math.min([2,5,9,1,6,2,0]));

let RandomNumber = Math.floor(Math.random() * 10);     // returns a random integer from 0 to 9
console.log("Random Number: ",RandomNumber);

// <===== =====>

// console.clear();

var word1 = " a quick brown fox jumped over the lazy dogs ";
var word2 = new String("a quick brown fox jumped over the lazy dogs");

console.log("word1 == word2: ", word1 == word2);
console.log("word1 === word2: ", word1 === word2);

console.log("Word1 Length: ", word1.length);
console.log("Word1 Length: ", word1.length);

console.log(word1);

console.log("Index of Position of First Occurance: ",word1.indexOf("lazy"));
console.log("search starting position in second parameter: ",word1.indexOf("lazy",15));
console.log("Index of Position of Last Occurance: ",word1.lastIndexOf("lazy"));
console.log("search starting position in second parameter: ",word1.lastIndexOf("lazy",40));
console.log("search position: ",word1.search("jumped"));
console.log("Slice: ",word1.slice(10,25));
console.log("SubString: ",word1.substring(10,25));
console.log("Substr: ",word1.substr(10,15));
console.log("Trim: ",word1.trim());
console.log("UpperCase: ",word1.toUpperCase());
console.log("LowerCase: ",word1.toLowerCase());
console.log("Character: ",word1.charAt(0));
console.log("Character Code: ",word1.charCodeAt(0));
console.log("Split to Array: ",word1.trim().split(" "));

let word3 = "5";
console.log( "Pad Start: ", word3.padStart(4,0) );
console.log( "Pad End: ", word3.padEnd(4,0) );

// <===== =====>

var x = 9.656;
console.log("Number Fixed to 0: ", x.toFixed(0));
console.log("Number Fixed to 2: ", x.toFixed(2));
console.log("Number Fixed to 4: ", x.toFixed(4));
console.log("Number Fixed to 6: ", x.toFixed(6));

console.log("Number Precision to None: ", x.toPrecision());
console.log("Number Precision to 2: ", x.toPrecision(2));
console.log("Number Precision to 4: ", x.toPrecision(4));
console.log("Number Precision to 6: ", x.toPrecision(6));

console.log("To Exponential Form: ", x.toExponential(1) );

let y1 = "43.464754";

console.log("Number: ", Number( y1 ));
console.log("Integer: ", parseInt( y1 ));
console.log("Float: ", parseFloat( y1 ));

console.log("Max Value: ", Number.MAX_VALUE)
console.log("Min Value: ", Number.MIN_VALUE)

// <===== =====>

let D = new Date();
console.log(D);
let DateStringFormat = `${D.getDate()}/${D.getMonth()}/${D.getFullYear()} `+
                            ` ${D.getHours()}:${D.getMinutes()}:${D.getSeconds()}:${D.getMilliseconds()}`;
console.log("Custom Date Format: ",DateStringFormat);

// <===== =====>

var numbers1 = [ 1, 2, 3, 4 ]
var numbers2 = new Array( 1, 2, 3, 4 )

console.log("Array: ", numbers1);
numbers1.push(34);
console.log("Array: ", numbers1);
numbers1.push(12);
console.log("Array: ", numbers1);
numbers1.pop();
console.log("Array: ", numbers1);
numbers1.unshift(18);
console.log("Array: ", numbers1);
numbers1.unshift(11);
console.log("Array: ", numbers1);
numbers1.shift();
console.log("Array: ", numbers1);

console.log("Array Length: ", numbers1.length);
console.log("Array: ", numbers1);
console.log("Array: ", numbers1.sort());
numbers1.splice(1,3);
console.log("Array: ", numbers1);
console.log("Array Concat: ", numbers1.concat([51,82,65]));
console.log("Array Reverse: ", numbers1.reverse());

numbers1 = numbers1.map( (value,index,array) => {
    let square = Math.pow(value,2);
    return square;
} )

console.log("Mapped Array: ", numbers1);

console.log("Type Of: ", typeof numbers1);
console.log("Is Array: ", Array.isArray(numbers1));
console.log("Instance Of: ", numbers1 instanceof Array);

// <===== =====>

let Stringified = JSON.stringify(cat);
console.log("Object To JSON: ",Stringified);
console.log("JSON To Object: ",JSON.parse( Stringified ));

// <===== =====>

let counter = 1;
let loop = setInterval( () => {
    console.log(`Counter: ${counter}`);
    counter++;
    if( counter >= 10 ) {
        clearInterval( loop );
    }
}, 1000 );

// <===== =====>

var a = [1,2,3,4,5];
var b = {
  name: "zaeem",
  age: 24
}
var new_a = [...a];
var new_b = {...b};
var c = { ...b, digits: [...a] }

console.log("Spread Operator - New A: ", new_a);
console.log("Spread Operator - New B: ", new_b);
console.log("Spread Operator - C: ", c);

// <===== =====>

function countDown( timeLeft = 0 ) {
    console.log(`Time Left: ${timeLeft}`);
    timeLeft--;
    if( timeLeft + 1 > 0 ) {
        countDown(timeLeft);
    }
}

countDown(10);

// <===== =====>

const asd = {
    name: "tarzan",
    sound: "alohamorah"
}
var w = asd?.age;
console.log("Optional Chaining Operator: ",w);