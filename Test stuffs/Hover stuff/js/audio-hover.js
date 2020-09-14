var $audio = $('#audio');
var $audioPlayer = $('#audio-player');

$audioPlayer.on('mouseenter focus', function () {
  $audio.get(0).play();
});

$audioPlayer.on('mouseleave blur', function () {
  $audio.get(0).pause();
});
