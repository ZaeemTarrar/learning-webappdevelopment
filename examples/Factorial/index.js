
const getFactorial = (num) => {
    try {
        if (num == null) {
            throw "Number not Given !";
        }
        let result = 1;
        for( let i = 1 ; i <= num ; i++ ) {
            result *= i;
        }
        return result;
    } catch (err) {
        console.error(err);
        return null;
    }
}

const Run = () => {
    let num = Number( prompt("Enter a number") );
    if( ! isNaN( num ) ) {
        let factorial = getFactorial(num);
        alert( JSON.stringify( factorial ) );
    } else {
        alert("In-Valid Number Entered !")
    }
}

Run();