
const isPrime = (num = null) => {
    try {
        if (num == null) {
            throw "Number not Given !";
        }
        let factors = 0;
        for (let i = 1; i <= num; i++) {
            factors = (num % i == 0) ? factors + 1 : factors;
        }
        if (factors == 2) {
            return true;
        } else {
            return false;
        }
    } catch (err) {
        console.error(err);
    }
}

const Run = () => {
    let num = Number( prompt("Enter a number") );
    if( ! isNaN( num ) ) {
        let numStatus = isPrime(num);
        if( numStatus ) {
            alert("It is a Prime Number !");
        } else {
            alert("It is a Not Prime Number !");
        }
    } else {
        alert("In-Valid Number Entered !")
    }
}

Run();