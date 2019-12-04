const modal = document.querySelector('#modal')

const button = document.querySelector('#btn')

const close = document.querySelector('#close')


const fieldset = document.querySelector('fieldset')

const makeitbetter = document.querySelector('#makeitbetter');
const up = document.querySelector('#up');
const lingerie = document.querySelector('#lingerie');
const someone = document.querySelector('#someone');
const froot = document.querySelector('#froot');

const devil = document.querySelector('#devil');
devil.style.display = 'none';

const submit = document.getElementById('submit');

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
}

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
      document.querySelector("#textresult").textContent = message;
      up.style.display = 'block';
    }
    else if (pop.checked === true && slow.checked === true && female.checked === true) {
      hideAllSongs();
      message = m3;
      document.querySelector("#textresult").textContent = message;
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
      message = m6;
      perm.style.display = 'block';
    }
    else if (pop.checked === true && fast.checked === true && female.checked === true) {
      message = m7;
      girls.style.display = 'block';
    }
    else if (rock.checked === true && slow.checked === true && male.checked === true) {
      message = m8;
      four.style.display = 'block';
    }
    else if (rock.checked === true && slow.checked === true && female.checked === true) {
      message = m9;
      woman.style.display = 'block';
    }
    else if (rock.checked === true && medium.checked === true && male.checked === true) {
      message = m10;
      baddest.style.display = 'block';
    }
    else if (rock.checked === true && medium.checked === true && female.checked === true) {
      message = m11;
      grudges.style.display = 'block';
    }
    else if (rock.checked === true && fast.checked === true && male.checked === true) {
      message = m12;
      west.style.display = 'block';
    }
    else if (rock.checked === true && fast.checked === true && female.checked === true) {
      message = m13;
      nightmare.style.display = 'block';
    }
    else if (hiphop.checked === true && slow.checked === true && male.checked === true) {
      message = m14;
      devil.style.display = 'block';
    }
    else if (hiphop.checked === true && slow.checked === true && female.checked === true) {
      message = m15;
      twoweeks.style.display = 'block';
    }
    else if (hiphop.checked === true && medium.checked === true && female.checked === true) {
      message = m16;
      sayso.style.display = 'block';
    }
    else if (hiphop.checked === true && fast.checked === true && male.checked === true) {
      document.querySelector("#textresult").textContent = message;
      message = m17;
      bonfire.style.display = 'block';
    }
    else if (hiphop.checked === true && fast.checked === true && female.checked === true) {
      message = m18;
      realer.style.display = 'block';
    }
    else {
      message = m19;
    }
}

close.onclick = () => {
  player.pauseVideo();
}

button.onclick = () => {
  showSong();
}


hideAllSongs();
