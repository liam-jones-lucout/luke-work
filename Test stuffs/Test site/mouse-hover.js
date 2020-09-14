   
const elementToAudio = {
   shop: "chest",
   challenge: "llama",
   pass: "battle"
}

const AUDIO_VOLUME = 0.05;

for (const elementId in elementToAudio) {
   if (elementToAudio.hasOwnProperty(elementId)) {
      const audioId = elementToAudio[elementId];
      
      const element = document.getElementById(elementId);
      const audio = document.getElementById(audioId);
      audio.volume = AUDIO_VOLUME;

      setupMouseEvents(element, audio);
   }
}

function setupMouseEvents(mouseEventElement, audioElement) {
   mouseEventElement.onmouseover = function () {
      audioElement.play();
   }

   mouseEventElement.onmouseout = function () {
      audioElement.pause();
   }
}
