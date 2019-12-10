const modal = document.querySelector('#modal')
const button = document.querySelector('#btn')
const close = document.querySelector('#close')
const submit = document.getElementById('submit');
const video = document.getElementsByClassName('videos');

const makeitbetter = document.querySelector('#makeitbetter');
const up = document.querySelector('#up');
const lingerie = document.querySelector('#lingerie');
const someone = document.querySelector('#someone');
const lies = document.querySelector('#lies');
const perm = document.querySelector('#perm');
const girls = document.querySelector('#girls');
const four = document.querySelector('#four');
const heart = document.querySelector('#heart');
const baddest = document.querySelector('#baddest');
const west = document.querySelector('#west');
const smoke = document.querySelector('#smoke');
const devil = document.querySelector('#devil');
const twoweeks = document.querySelector('#twoweeks');
const tyrant = document.querySelector('#tyrant');
const time = document.querySelector('#time');
const juicy = document.querySelector('#juicy');

const pop = document.getElementById('pop');
const rock = document.getElementById('rock');
const hiphop = document.getElementById('hiphop');
const slow = document.getElementById('slow');
const medium = document.getElementById('medium');
const fast = document.getElementById('fast');
const male = document.getElementById('male');
const female = document.getElementById('female');

let m1 = "You got Make It Better by Anderson .Paak ft. Smokey Robinson!";
let m2 = "You got Someone New by Hozier!"
let m3 = "You got Lingerie by Lizzo!"
let m4 = "You got Up All Night by Khalid!"
let m5 = "You got Lies by Marina & the Diamonds!"
let m6 = "You got Perm by Bruno Mars!"
let m7 = "You got Me & My Girls by Selena Gomez!"
let m8 = "You got Four out of Five by Arctic Monkeys!"
let m9 = "You got Hate to See Your Heart Break by Paramore!"
let m10 = "You got The Baddest Man Alive by The Black Keys!"
let m11 = "You got Woman by Karen O and Danger Mouse!"
let m12 = "You got West Coast Smoker by Fall Out Boy!"
let m13 = "You got Smoke by PVRIS!"
let m14 = "You got Devil in a New Dress by Kanye West!"
let m15 = "You got Two Weeks by FKA Twigs!"
let m16 = "You got Tyrant by Kali Uchis ft. Jorja Smith!"
let m17 = "You got I Ain't Got Time by Tyler, the Creator!"
let m18 = "You got Juicy by Doja Cat!"
let m19 = "Please select an answer for all three questions."

function hideAllSongs() {
  makeitbetter.style.display = 'none';
  up.style.display = 'none';
  lingerie.style.display = 'none';
  someone.style.display = 'none';
  lies.style.display = 'none';
  perm.style.display = 'none';
  girls.style.display = 'none';
  four.style.display = 'none';
  heart.style.display = 'none';
  baddest.style.display = 'none';
  woman.style.display = 'none';
  west.style.display = 'none';
  smoke.style.display = 'none';
  devil.style.display = 'none';
  twoweeks.style.display = 'none';
  tyrant.style.display = 'none';
  time.style.display = 'none';
  juicy.style.display = 'none';
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
      someone.style.display = 'block';
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
      up.style.display = 'block';
    }
    else if (pop.checked === true && medium.checked === true && female.checked === true) {
      hideAllSongs();
      message = m5;
      document.querySelector(".textresult").textContent = message;
      lies.style.display = 'block';
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
      heart.style.display = 'block';
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
      woman.style.display = 'block';
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
      smoke.style.display = 'block';
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
      tyrant.style.display = 'block';
    }
    else if (hiphop.checked === true && fast.checked === true && male.checked === true) {
      hideAllSongs();
      message = m17;
      document.querySelector(".textresult").textContent = message;
      time.style.display = 'block';
    }
    else if (hiphop.checked === true && fast.checked === true && female.checked === true) {
      hideAllSongs();
      message = m18;
      document.querySelector(".textresult").textContent = message;
      juicy.style.display = 'block';
    }
    else {
      hideAllSongs();
      message = m19;
      document.querySelector(".textresult").textContent = message;
    }
}

button.onclick = () => {
  showSong();
}

//Adapted code taken from Bartekkustra's comment on this forum: https://forum.webflow.com/t/how-to-pause-and-stop-a-video-in-a-modal-on-close/2366/6
$('#modal').on('hidden.bs.modal', function (e) {
    e.preventDefault();
    $('.videos').children('iframe').attr('src', '');
// End of adapted code
    location.reload();
  });
