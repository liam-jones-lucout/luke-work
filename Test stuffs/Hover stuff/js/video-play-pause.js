var $btn = $(".btn-play-pause");
var video = $(".dinos-vid").get(0);

$btn.on('click', function () {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
});
