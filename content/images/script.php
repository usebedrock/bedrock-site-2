#!/usr/bin/php -f

<?php

  include "../libraries/wideimage/WideImage.php";
  
  // Resize takes width and height
  // "If one dimension isn’t specified (or null is given), it’s calculated from the ratio of the other dimension."
  WideImage::load('content/original/riri.jpg')->resize(800)->saveToFile('content/800x450/riri.jpg');
  WideImage::load('content/original/broncho.jpg')->resize(800)->saveToFile('content/800x450/broncho.jpg');
  WideImage::load('content/original/pukkelpop2016.jpg')->resize(800)->saveToFile('content/800x450/pukkelpop2016.jpg');
  WideImage::load('content/original/stage1.jpg')->resize(800)->saveToFile('content/800x450/stage1.jpg');
  
  // File sizes of resuls pretty much blow, even after imageOptim

?>