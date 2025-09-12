const lv1 = document.getElementById("lv1")
const btn = document.getElementById('btn-text');
const boredProgress = document.getElementById('boredness');
const nextBtn = document.getElementById('next');
const mickey = document.getElementById('mickey');
const eric = document.getElementById('eric');
const sonic = document.getElementById('sonic');
const mike = document.getElementById('mike');
const bill = document.getElementById('bill');
const herobrine = document.getElementById('herobrine');
const lightning = document.getElementById('lightning');
let e = false,
  m = false,
  s = false,
  mi = false,
  b = false,
  h = false;
let boredness = 100;
const sounds = [
  'Meow',
  'Woof',
  'Quack',
  'Purr',
  'Moo',
  'Buzz',
  'Tweet',
  'Baa',
  'Oink',
  'Neigh',
];
const punctuations = ['...', '!', '?', '-', '.', ':', ','];
const specials = ['()', '""', '<>'];

sound();

btn.onclick = () => {
  sound();
  boredness--;
  updateProgress();
};

document.addEventListener('contextmenu', e => {
  e.preventDefault();
});

function sound() {
  let punctuation;
  btn.innerText = sounds[Math.floor(Math.random() * sounds.length)];
  if (Math.round(Math.random()) === 1) {
    punctuation = punctuations[Math.floor(Math.random() * punctuations.length)];
    btn.innerText += punctuation;
  } else {
    punctuation = specials[Math.floor(Math.random() * specials.length)];
    btn.innerText = punctuation[0] + btn.innerText + punctuation[1];
  }
}

setInterval(() => {
  if (boredness < 100) {
    boredness++;
    updateProgress();
  }
}, 150);

mickey.addEventListener('click', () => {
  if (!m) {
    let deg = 20;
    boredness -= 10;
    updateProgress();
    m = true;
    setInterval(() => {
      deg = deg < 2000 ? deg * 1.04 : deg + 200;
      mickey.style.transform = `rotate(${deg}deg)`;
    }, 40);
  }
});

eric.addEventListener('click', () => {
  if (!e) {
    let dialation = 1;
    let out = true;
    boredness -= 10;
    updateProgress();
    e = true;
    setInterval(() => {
      if (out) {
        dialation *= 1.1;
        if (dialation >= 15) {
          out = false;
        }
      } else {
        dialation /= 1.1;
        if (dialation <= 0.1) {
          out = true;
        }
      }
      eric.style.transform = `scaleY(${dialation}) rotate(-85deg)`;
    }, 40);
  }
});

sonic.addEventListener('click', () => {
  if (!s) {
    let x = window.innerWidth;
    let y = window.innerHeight;
    boredness -= 10;
    updateProgress();
    s = true;
    setInterval(() => {
      sonic.style.left = Math.floor(Math.random() * x) + 'px';
      sonic.style.top = Math.floor(Math.random() * y) + 'px';
      sonic.style.transform = `rotate(${Math.floor(Math.random() * 360)}deg)`;
    }, 100);
  }
});

mike.addEventListener('click', () => {
  if (!mi) {
    let gray = 0.5;
    let dark = true;
    boredness -= 10;
    updateProgress();
    mi = true;
    setInterval(() => {
      if (dark) {
        gray *= 1.6;
        if (gray >= 5000) {
          dark = false;
        }
      } else {
        gray /= 1.6;
        if (gray <= 0.1) {
          dark = true;
        }
      }
      mike.style.filter = `grayscale(${gray}%) brightness(${
        100 - gray / 10
      }%) drop-shadow(0px 0px 10px gray)`;
    }, 50);
  }
});

bill.addEventListener('click', () => {
  document.body.classList.add('dark');
  if (!b) {
    let hue = 0;
    let size = 0;
    let grow = true;
    boredness -= 10;
    updateProgress();
    b = true;
    setInterval(() => {
      bill.style.filter = `hue-rotate(${hue}deg) drop-shadow(0px 0px ${size}px hsl(${
        hue + 66
      },100%,50%))`;
      hue += 10;
      if (grow) {
        size += 2;
        if (size >= 30) grow = false;
      } else {
        size -= 2;
        if (size <= 0) grow = true;
      }
    }, 50);
  }
});

herobrine.addEventListener('click', () => {
  document.body.classList.add('dark');
  if (!h) {
    boredness -= 10;
    updateProgress();
    h = true;
    light();
    setInterval(() => {
      if (Math.random() <= 0.2) {
        light();
      }
    }, 500);
  }
});

function light() {
  let height = 0;
  boredness -= 5;
  lightning.style.left =
    Math.floor(Math.random() * (window.innerWidth - window.innerHeight)) + 'px';
  let interval = setInterval(() => {
    lightning.style.height = height + 'vh';
    height += 5;
    if (height >= Math.random() * 50 + 200) {
      height = 0;
      lightning.style.height = '0vh';
      clearInterval(interval);
    }
  }, 20);
}

function updateProgress() {
  if (boredness > -1) {
    boredProgress.innerText = boredness + '%';
    boredProgress.style.width = boredness + '%';
  } else {
    nextBtn.classList.remove('none');
    boredness = 0;
    updateProgress();
  }
}

nextBtn.addEventListener("click",()=>{
  lv1.classList.add("none")
})
