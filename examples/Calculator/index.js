
class Calculator {
    static Add(x,y) {
        return x + y;
    }
    static Subtract(x,y) {
        return x - y;
    }
    static Multiply(x,y) {
        return x * y;
    }
    static Divide(x,y) {
        return x / y;
    }
    static Remainder(x,y) {
        return x % y;
    }
    static Square(x) {
        return Math.pow(x,2);
    }
    static Cube(x) {
        return Math.pow(x,3);
    }
}

const Run = () => {
    let Text = `Press '1' to Add Numbers\nPress '2' to Subtract Numbers\nPress '3' to Multiply Numbers\nPress '4' to Divide Numbers\n`;
    Text += `Press '5' to get Remainder of Numbers\nPress '6' to get Square of Number\nPress '7' to get Cube of Number\n`;
    Text += `Press '8' to Quit Application\n`;
    let loop = true;
    while( loop ) {
        let selection = Number(prompt( Text ) );
        switch( selection ) {
            case 1: {
                var x = Number( prompt("Enter First Number") );
                var y = Number( prompt("Enter Second Number") );
                if( ! ( isNaN( x ) && isNaN( y ) ) ) {
                    alert( ` ${x} + ${y} = ${ Calculator.Add(x,y) } ` )
                } else {
                    alert("Invalid Entries !");
                }
            }
            break;
            case 2: {
                var x = Number( prompt("Enter First Number") );
                var y = Number( prompt("Enter Second Number") );
                if( ! ( isNaN( x ) && isNaN( y ) ) ) {
                    alert( ` ${x} - ${y} = ${ Calculator.Subtract(x,y) } ` )
                } else {
                    alert("Invalid Entries !");
                }
            }
            break;
            case 3: {
                var x = Number( prompt("Enter First Number") );
                var y = Number( prompt("Enter Second Number") );
                if( ! ( isNaN( x ) && isNaN( y ) ) ) {
                    alert( ` ${x} * ${y} = ${ Calculator.Multiply(x,y) } ` )
                } else {
                    alert("Invalid Entries !");
                }
            }
            break;
            case 4: {
                var x = Number( prompt("Enter First Number") );
                var y = Number( prompt("Enter Second Number") );
                if( ! ( isNaN( x ) && isNaN( y ) ) ) {
                    alert( ` ${x} / ${y} = ${ Calculator.Divide(x,y) } ` )
                } else {
                    alert("Invalid Entries !");
                }
            }
            break;
            case 5: {
                var x = Number( prompt("Enter First Number") );
                var y = Number( prompt("Enter Second Number") );
                if( ! ( isNaN( x ) && isNaN( y ) ) ) {
                    alert( ` ${x} % ${y} = ${ Calculator.Remainder(x,y) } ` )
                } else {
                    alert("Invalid Entries !");
                }
            }
            break;
            case 6: {
                var x = Number( prompt("Enter First Number") );
                if( ! isNaN( x ) ) {
                    alert( ` Square of ${x} = ${ Calculator.Square(x) } ` )
                } else {
                    alert("Invalid Entries !");
                }
            }
            break;
            case 7: {
                var x = Number( prompt("Enter First Number") );
                if( ! isNaN( x ) ) {
                    alert( ` Cube of ${x} = ${ Calculator.Cube(x) } ` )
                } else {
                    alert("Invalid Entries !");
                }
            }
            break;
            case 8: {
                loop = false;
            }
            break;
            default: {
                alert("Invalid Entry !");
            }
        }
    }
}

Run();