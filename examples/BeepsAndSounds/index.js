const Launch = () => {
    let playButton = document.getElementById("playButton");
    playButton.onclick = function() {
        new Promise( (resolve,reject) => {
            var audio = new Audio("beep-1.mp3");
            resolve(audio);
        } ).then( audio => {
            audio.autoplay = false;
            audio.loop = false;
            audio.muted = false;
            audio.volume = 0.2;
            audio.playbackRate = 7;
            return audio;
        } ).then( audio => {
            audio.play();
        } ).catch( err => {
            console.error("Error: ", err );
        } )
    }
}

window.onload = Launch;