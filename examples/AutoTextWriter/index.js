const Launch = () => {
    const Speed = 20;
    const para = document.getElementById("paragraph");
    let mainText = `Lorem Ipsum is simply dummy text of the printing and 
    typesetting industry. Lorem Ipsum has been the industry's 
    standard dummy text ever since the 1500s, when an unknown 
    printer took a galley of type and scrambled it to make a 
    type specimen book. It has survived not only five centuries, 
    but also the leap into electronic typesetting, 
    remaining essentially unchanged. Lorem Ipsum is simply dummy text of the printing and 
    typesetting industry. Lorem Ipsum has been the industry's 
    standard dummy text ever since the 1500s, when an unknown 
    printer took a galley of type and scrambled it to make a 
    type specimen book. It has survived not only five centuries, 
    but also the leap into electronic typesetting, 
    remaining essentially unchanged. `;
    let written = 0;

    const Run = () => {
        console.log(`Looping: ${written}`);
        para.innerHTML = mainText.slice(0,written);
        written++;
        if( written >= mainText.length ) {
            clearInterval( loop );
            console.log("Loop Ends");
        }
    }

    var loop = setInterval(Run,Speed);
}

window.onload = Launch;