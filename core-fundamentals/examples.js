
const collectPersonalInfo = () => {
    let person = {
        firstName: prompt("Enter First Name"),
        lastName: prompt("Enter Last Name"),
        age: Number(prompt("Enter Age")),
        isMale: prompt("Enter `true` is Male `false` if not") == "true" ? true : false
    }
    console.log(person);
}

const collectHobbies = () => {
    let hobbies = [];
    let loop = true;
    while (loop) {
        let hobby = prompt("Enter Your Hobby");
        hobbies.push(hobby);
        loop = prompt("Do you have more hobbies") == "true" ? true : false;
    }
    console.log("My Hobbies: ", hobbies);
}

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

// collectPersonalInfo();
// collectHobbies();
// console.log( isPrime( 7 ) );