
const getFabonacciSeries = (num1, num2, limit = 1) => {
    try {
        let series = [num1, num2];
        let starter = 0;
        while (starter < limit) {
            var thirdNum = num1 + num2;
            series.push(thirdNum);
            num1 = num2;
            num2 = thirdNum;
            starter++;
        }
        return series;
    } catch (err) {
        console.error(err);
        return null;
    }
}

const Run = () => {
    let num1 = Number(prompt(`Enter the first Number`));
    let num2 = Number(prompt(`Enter the second Number`));
    let num3 = Number(prompt(`Enter the Pattern Limit`));
    if ( ! ( isNaN(num1) && isNaN(num2) && isNaN(num3) ) ) {
        let series = getFabonacciSeries(num1,num2,num3);
        alert( JSON.stringify(series) );
    } else {
        alert("In-Valid Number Entered !")
    }
} 

Run();