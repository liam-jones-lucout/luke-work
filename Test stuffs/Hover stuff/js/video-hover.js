var $polystar = $('.polystar');

$polystar.on('mouseenter focus', function () {
  $polystar.get(0).play();
});

$polystar.on('mouseleave blur', function () {
  $polystar.get(0).pause();
});
