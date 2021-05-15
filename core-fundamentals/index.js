
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
    console.log("Loop: ",`Index(${i})`);
}