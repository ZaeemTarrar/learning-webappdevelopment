
const Step1 = async () => {
    let Url = 'https://jsonplaceholder.typicode.com/todos/1';
    let response = await fetch(Url)
        .then(response => response.json());
    return response;
};

const Step2 = async () => {
    let Url = 'https://jsonplaceholder.typicode.com/todos/2';
    let response = await fetch(Url)
        .then(response => response.json());
    return response;
};

const Step3 = async () => {
    let Url = 'https://jsonplaceholder.typicode.com/todos/3';
    let response = await fetch(Url)
        .then(response => response.json());
    return response;
};

const Launch = () => {
    let Chain = new Promise((resolve, reject) => resolve() );
    
    Chain.then( () => {
        return Step1();
    }).then((A)=>{
        return [A, Step2()];
    }).then(([A,B])=>{
        return [A, B, Step3()];
    }).then(([A,B,C])=>{
        console.log(A,B,C);
    }).catch(err => {
        console.error(err);
    })
}

window.onload = Launch