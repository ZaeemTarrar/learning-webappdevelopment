
const isEven = (num = null) => {
    try {
        if (num == null) {
            throw "Number not Given !";
        }
        if( num % 2 == 0 ) {
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
        let numStatus = isEven(num);
        if( numStatus ) {
            alert("It is an Even Number !");
        } else {
            alert("It is an Odd Number !");
        }
    } else {
        alert("In-Valid Number Entered !")
    }
}

Run();