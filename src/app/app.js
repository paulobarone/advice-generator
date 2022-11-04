const adviceRoll = document.querySelector('.advice-roll');
const adviceNum = document.querySelector('#advice-number');
const advicePhrase = document.querySelector('.advice-phrase');

window.onload = searchAdvice();

function searchAdvice() {
  fetch(`https://api.adviceslip.com/advice`)
    .then(advice => advice.json())
    .then(data => data.slip)
    .then(data => {
      adviceNum.innerHTML = `#${data.id}`
      advicePhrase.innerHTML = `❝${data.advice}❞`;
    });
}

adviceRoll.addEventListener('click', () => {
  searchAdvice()
});