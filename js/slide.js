'use strict';
{
  const images = [
    'img/sec5/img01.jpg',
    'img/sec5/img02.jpg',
    'img/sec5/img03.jpg',
    '',
    '',
    '',
    '',
    '',
  ];

  let currentIndex = 0;

  const mainImage = document.getElementById('slideMain');
  mainImage.src = images[currentIndex];

  images.forEach((image, index) => {
    const img = document.createElement('img');
    img.src = image;

    const li = document.createElement('li');
    if(index === currentIndex){
      li.classList.add('sec5--current');
    }

    li.addEventListener('click', () => {
      if (image === ''){
        mainImage.src = 'img/sec5/img00.jpg';
      }else{
        mainImage.src = image;
      }
      const thumbnails = document.querySelectorAll('.thumbnails > li');
      thumbnails[currentIndex].classList.remove('sec5--current');
      currentIndex = index;
      thumbnails[currentIndex].classList.add('sec5--current');
    });

    if (image === '') {
      img.src = 'img/sec5/img00.jpg';
      li.appendChild(img);
      document.querySelector('.thumbnails').appendChild(li);
    } else{
      li.appendChild(img);
      document.querySelector('.thumbnails').appendChild(li);
    }

  });

  const next = document.getElementById('next');
  next.addEventListener('click', () => {
    let target = currentIndex + 1;
    if(target === images.length){
      target = 0;
    }
    const thumbnails = document.querySelectorAll('.thumbnails > li')[target].click();
  });

  let timeoutId;

  const prev = document.getElementById('prev');
  prev.addEventListener('click', () => {
    let target = currentIndex - 1;
    if(target < 0){
      target = images.length - 1;
    }
    const thumbnails = document.querySelectorAll('.thumbnails > li')[target].click();
  });

  function playSlideshow(){
   timeoutId = setTimeout(() => {
      next.click();
      playSlideshow();
    },1000);
  }

  let isPlaying = false;

  const play = document.getElementById('play');
  play.addEventListener('click', () => {
    if(isPlaying === false){
      playSlideshow();
      play.textContent = 'Pause';
    }else{
      clearTimeout(timeoutId);
      play.textContent = 'Play';
    }
    isPlaying = !isPlaying;
  });
}
