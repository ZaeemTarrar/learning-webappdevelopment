

const Run = () => {

    console.log("Program Starts");

    var tagRef_day = document.getElementById("day");
    var tagRef_time = document.getElementById("time");

    var loop = setInterval(() =>{
        
        var today = new Date();

        var dateString = `${today.getDate()}/${today.getMonth()}/${today.getFullYear()}`;
        var timeString = `${today.getHours() % 12}:${today.getMinutes()}:${today.getSeconds()} ${ today.getHours() >= 12 ? "p.m" : "a.m" }`;

        tagRef_day.innerHTML = ` ${dateString} `;
        tagRef_time.innerHTML = ` ${timeString} `;

    },1000);

    console.log("Program Ends");

}

window.onload = Run;