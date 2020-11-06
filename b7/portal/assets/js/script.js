let slideItem = 0;

window.onload = function () {
  setInterval(changeSlide, 3000);

  let slidewidth = document.getElementById('slideshow').offsetWidth;
  let objs = document.getElementsByClassName('slideshow-slide');
  for (var i = 0; i < objs.length; i++) {
    objs[i].style.width = slidewidth + 'px';
  }
};

function changeSlide() {
  let slidewidth = document.getElementById('slideshow').offsetWidth;

  if (slideItem >= 3) {
    slideItem = 0;
  } else {
    slideItem++;
  }

  document.getElementsByClassName('slideshow-area')[0].style.marginLeft =
    '-' + slidewidth * slideItem + 'px';
}

function passSlide(pos) {
  slideItem = pos;
  let slidewidth = document.getElementById('slideshow').offsetWidth;
  document.getElementsByClassName('slideshow-area')[0].style.marginLeft =
    '-' + slidewidth * slideItem + 'px';
}

function toggleMenu() {
  let menu = document.getElementById('menu');

  if (menu.style.display == 'none' || menu.style.display == '') {
    menu.style.display = 'block';
  } else {
    menu.style.display = 'none';
  }
}
