function buildQuiz () {}
buildQuiz();

const makeitbetter = document.querySelector('#makeitbetter');

makeitbetter.style.display = 'none';

const submit = document.getElementById('submit');

const hiphop = document.getElementById('hiphop');
const medium = document.getElementById('medium');
const male = document.getElementById('male');

let m1 = "You got Make It Better by Anderson .Paak ft. Smokey Robinson!";

function showSong () {
    if (hiphop.checked === true && medium.checked === true && male.checked === true) {
      makeitbetter.style.display = 'block';
      message = m1;
    }
}

submit.onclick = () => {
    showSong();
}
