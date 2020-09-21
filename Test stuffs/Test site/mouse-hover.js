   
const elementToAudio = {
   shop: "chest",
   challenge: "llama",
   pass: "battle"
}

const AUDIO_VOLUME = 0.05;

function setupMouseEvents(mouseEventElement, audioElement) {
   mouseEventElement.onmouseover = function () {
      audioElement.play();
      mouseEventElement.classList.add("unpaused");
      audioElement.currentTime = 0;
   }

   mouseEventElement.onmouseout = function () {
      audioElement.pause();
      mouseEventElement.classList.remove("unpaused");
   }
}
for (const elementId in elementToAudio) {
   
   const audioId = elementToAudio[elementId];

   const element = document.getElementById(elementId);
   const audio = document.getElementById(audioId);
   audio.volume = AUDIO_VOLUME;

   setupMouseEvents(element, audio);
}




// fade in / fade out

const timeout = setTimeout(() => {console.log("TIMEOUT")}, 5000)
const interval = setInterval(() => { console.log("INTERVAL") }, 2000)

clearTimeout(timeout)
clearInterval(interval)