const makeitbetter = document.querySelector('#makeitbetter');

makeitbetter.style.display = 'none';

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
let m2 = "You got!"
let m3 = "You got!"
let m4 = "You got!"
let m5 = "You got!"
let m6 = "You got!"
let m7 = "You got!"
let m8 = "You got!"
let m9 = "You got!"
let m10 = "You got!"
let m11 = "You got!"
let m12 = "You got!"
let m13 = "You got!"
let m14 = "You got!"
let m15 = "You got!"
let m16 = "You got!"
let m17 = "You got!"
let m18 = "You got!"
let m19 = "Please select an answer for all three questions."

function showSong () {
    if (hiphop.checked === true && medium.checked === true && male.checked === true) {
      message = m1;
      document.querySelector("#textresult").textContent = message;
      makeitbetter.style.display = 'block';
    }
    // else if (pop.checked === true && slow.checked === true && male.checked === true) {
    //   message = m2;
    //   makeitbetter.style.display = 'block';
    // }
    // else if (pop.checked === true && slow.checked === true && female.checked === true) {
    //   message = m3;
    //   makeitbetter.style.display = 'block';
    // }
    // else if (pop.checked === true && medium.checked === true && male.checked === true) {
    //   message = m4;
    //   makeitbetter.style.display = 'block';
    // }
    // else if (pop.checked === true && medium.checked === true && female.checked === true) {
    //   message = m5;
    //   makeitbetter.style.display = 'block';
    // }
    // else if (pop.checked === true && fast.checked === true && male.checked === true) {
    //   message = m6;
    //   makeitbetter.style.display = 'block';
    // }
    // else if (pop.checked === true && fast.checked === true && female.checked === true) {
    //   message = m7;
    //   makeitbetter.style.display = 'block';
    // }
    // else if (rock.checked === true && slow.checked === true && male.checked === true) {
    //   message = m8;
    //   makeitbetter.style.display = 'block';
    // }
    // else if (rock.checked === true && slow.checked === true && female.checked === true) {
    //   message = m9;
    //   makeitbetter.style.display = 'block';
    // }
    // else if (rock.checked === true && medium.checked === true && male.checked === true) {
    //   message = m10;
    //   makeitbetter.style.display = 'block';
    // }
    // else if (rock.checked === true && medium.checked === true && female.checked === true) {
    //   message = m11;
    //   makeitbetter.style.display = 'block';
    // }
    // else if (rock.checked === true && fast.checked === true && male.checked === true) {
    //   message = m12;
    //   makeitbetter.style.display = 'block';
    // }
    // else if (rock.checked === true && fast.checked === true && female.checked === true) {
    //   message = m13;
    //   makeitbetter.style.display = 'block';
    // else if (hiphop.checked === true && slow.checked === true && male.checked === true) {
    //   message = m14;
    //   makeitbetter.style.display = 'block';
    // }
    // else if (hiphop.checked === true && slow.checked === true && female.checked === true) {
    //   message = m15;
    //   makeitbetter.style.display = 'block';
    // }
    // else if (hiphop.checked === true && medium.checked === true && female.checked === true) {
    //   message = m16;
    //   makeitbetter.style.display = 'block';
    // }
    // else if (hiphop.checked === true && fast.checked === true && male.checked === true) {
    //   message = m17;
    //   makeitbetter.style.display = 'block';
    // }
    // else if (hiphop.checked === true && fast.checked === true && female.checked === true) {
    //   message = m18;
    //   makeitbetter.style.display = 'block';
    // }
    // else
    //   message = m19;
}

submit.onclick = () => {
  showSong();
}
