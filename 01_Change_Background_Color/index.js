const btn = document.querySelector('button');

btn.addEventListener('click', changeBackgroundColor);

function random(number) {
    return Math.floor(Math.random() * (number+1));
  }

  function changeBackgroundColor() {
    const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
    document.body.style.backgroundColor = rndCol;
    
  }