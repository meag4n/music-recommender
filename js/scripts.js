const modal = document.querySelector('#modal')
const button = document.querySelector('#btn')
const close = document.querySelector('#close')
const submit = document.getElementById('submit');

const makeitbetter = document.querySelector('#makeitbetter');
const up = document.querySelector('#up');
const lingerie = document.querySelector('#lingerie');
const someone = document.querySelector('#someone');
const froot = document.querySelector('#froot');
const perm = document.querySelector('#perm');
const girls = document.querySelector('#girls');
const four = document.querySelector('#four');
const woman = document.querySelector('#woman');
const baddest = document.querySelector('#baddest');
const west = document.querySelector('#west');
const nightmare = document.querySelector('#nightmare');
const devil = document.querySelector('#devil');
const twoweeks = document.querySelector('#twoweeks');
const sayso = document.querySelector('#sayso');
const bonfire = document.querySelector('#bonfire');
const realer = document.querySelector('#realer');

const pop = document.getElementById('pop');
const rock = document.getElementById('rock');
const hiphop = document.getElementById('hiphop');
const slow = document.getElementById('slow');
const medium = document.getElementById('medium');
const fast = document.getElementById('fast');
const male = document.getElementById('male');
const female = document.getElementById('female');

let m1 = "You got Make It Better by Anderson .Paak ft. Smokey Robinson!";
let m2 = "You got Up All Night by Khalid!"
let m3 = "You got Lingerie by Lizzo!"
let m4 = "You got Someone New by Hozier!"
let m5 = "You got Froot by Marina & the Diamonds!"
let m6 = "You got Perm by Bruno Mars!"
let m7 = "You got Me & My Girls by Selena Gomez!"
let m8 = "You got Four out of Five by Arctic Monkeys!"
let m9 = "You got WOMAN by Karen O and Danger Mouse!"
let m10 = "You got The Baddest Man Alive by The Black Keys!"
let m11 = "You got Grudges by Paramore!"
let m12 = "You got West Coast Smoker by Fall Out Boy!"
let m13 = "You got Nightmare by PVRIS!"
let m14 = "You got Devil in a New Dress by Kanye West!"
let m15 = "You got Two Weeks by FKA Twigs!"
let m16 = "You got Say So by Doja Cat!"
let m17 = "You got Bonfire by Childish Gambino!"
let m18 = "You got Realer by Megan Thee Stallion!"
let m19 = "Please select an answer for all three questions."

function hideAllSongs() {
  makeitbetter.style.display = 'none';
  up.style.display = 'none';
  lingerie.style.display = 'none';
  someone.style.display = 'none';
  froot.style.display = 'none';
  perm.style.display = 'none';
  girls.style.display = 'none';
  four.style.display = 'none';
  woman.style.display = 'none';
  baddest.style.display = 'none';
  grudges.style.display = 'none';
  west.style.display = 'none';
  nightmare.style.display = 'none';
  devil.style.display = 'none';
  twoweeks.style.display = 'none';
  sayso.style.display = 'none';
  bonfire.style.display = 'none';
  realer.style.display = 'none';
}

hideAllSongs();

function showSong () {
    if (hiphop.checked === true && medium.checked === true && male.checked === true) {
      hideAllSongs();
      message = m1;
      document.querySelector(".textresult").textContent = message;
      makeitbetter.style.display = 'block';
    }
    else if (pop.checked === true && slow.checked === true && male.checked === true) {
      hideAllSongs();
      message = m2;
      document.querySelector(".textresult").textContent = message;
      up.style.display = 'block';
    }
    else if (pop.checked === true && slow.checked === true && female.checked === true) {
      hideAllSongs();
      message = m3;
      document.querySelector(".textresult").textContent = message;
      lingerie.style.display = 'block';
    }
    else if (pop.checked === true && medium.checked === true && male.checked === true) {
      hideAllSongs();
      message = m4;
      document.querySelector(".textresult").textContent = message;
      someone.style.display = 'block';
    }
    else if (pop.checked === true && medium.checked === true && female.checked === true) {
      hideAllSongs();
      message = m5;
      document.querySelector(".textresult").textContent = message;
      froot.style.display = 'block';
    }
    else if (pop.checked === true && fast.checked === true && male.checked === true) {
      hideAllSongs();
      message = m6;
      document.querySelector(".textresult").textContent = message;
      perm.style.display = 'block';
    }
    else if (pop.checked === true && fast.checked === true && female.checked === true) {
      hideAllSongs();
      message = m7;
      document.querySelector(".textresult").textContent = message;
      girls.style.display = 'block';
    }
    else if (rock.checked === true && slow.checked === true && male.checked === true) {
      hideAllSongs();
      message = m8;
      document.querySelector(".textresult").textContent = message;
      four.style.display = 'block';
    }
    else if (rock.checked === true && slow.checked === true && female.checked === true) {
      hideAllSongs();
      message = m9;
      document.querySelector(".textresult").textContent = message;
      woman.style.display = 'block';
    }
    else if (rock.checked === true && medium.checked === true && male.checked === true) {
      hideAllSongs();
      message = m10;
      document.querySelector(".textresult").textContent = message;
      baddest.style.display = 'block';
    }
    else if (rock.checked === true && medium.checked === true && female.checked === true) {
      hideAllSongs();
      message = m11;
      document.querySelector(".textresult").textContent = message;
      grudges.style.display = 'block';
    }
    else if (rock.checked === true && fast.checked === true && male.checked === true) {
      hideAllSongs();
      message = m12;
      document.querySelector(".textresult").textContent = message;
      west.style.display = 'block';
    }
    else if (rock.checked === true && fast.checked === true && female.checked === true) {
      hideAllSongs();
      message = m13;
      document.querySelector(".textresult").textContent = message;
      nightmare.style.display = 'block';
    }
    else if (hiphop.checked === true && slow.checked === true && male.checked === true) {
      hideAllSongs();
      message = m14;
      document.querySelector(".textresult").textContent = message;
      devil.style.display = 'block';
    }
    else if (hiphop.checked === true && slow.checked === true && female.checked === true) {
      hideAllSongs();
      message = m15;
      document.querySelector(".textresult").textContent = message;
      twoweeks.style.display = 'block';
    }
    else if (hiphop.checked === true && medium.checked === true && female.checked === true) {
      hideAllSongs();
      message = m16;
      document.querySelector(".textresult").textContent = message;
      sayso.style.display = 'block';
    }
    else if (hiphop.checked === true && fast.checked === true && male.checked === true) {
      hideAllSongs();
      message = m17;
      document.querySelector(".textresult").textContent = message;
      bonfire.style.display = 'block';
    }
    else if (hiphop.checked === true && fast.checked === true && female.checked === true) {
      hideAllSongs();
      message = m18;
      document.querySelector(".textresult").textContent = message;
      realer.style.display = 'block';
    }
    else {
      message = m19;
    }
}

button.onclick = () => {
  showSong();
}
//
// var stopAllYouTubeVideos = () => {
//   var iframes = document.querySelectorAll('iframe');
//   Array.prototype.forEach.call(iframes, iframe => {
//     iframe.contentWindow.postMessage(JSON.stringify({ event: 'command',
//   func: 'stopVideo' }), '*');
//  });
// }

function pauseAllVideos() {
    $('.close').click(function(){
         $('iframe').attr('src', $('iframe').attr('src'));
     });
}

$('#modal').on('hidden.bs.modal', function () {
    pauseAllVideos();
});
  //
