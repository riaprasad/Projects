const cards = document.querySelectorAll(".gamecards");

let hasflipped = false;
let firstcard, secondcard;
let lockBoard = false;

function flipCard() {
  if (lockBoard) return;
  if (this === firstcard) return;

  this.classList.add("flip");

  if (!hasflipped){
    hasflipped = true;
    firstcard = this;

    return;
  }

    secondcard = this;

    checkMatchingCards();
}



function checkMatchingCards() {

  if (firstcard.dataset.name === secondcard.dataset.name) {
    disablecard();
  }
  else {
    unflipcard();
}}


function disablecard() {
  firstcard.removeEventListener('click' , flipCard);
  secondcard.removeEventListener('click' , flipCard);

  resetboard();
}

function unflipcard() {

  lockBoard = true;

    setTimeout (() => {
    firstcard.classList.remove('flip');
    secondcard.classList.remove('flip');

    resetboard();
  } , 1400)
}

function resetboard() {
  [hasflipped, lockBoard] = [false, false];
  [firstcard, secondcard] = [null, null];
}


(function shuffleCards() {
  cards.forEach(card => {
    let randomPosition = Math.floor(Math.random() * 12);
    card.style.order = randomPosition;
  });
})();




//function flipCard(){

  //this.classList.add("flip");
//}

cards.forEach(card => card.addEventListener('click', flipCard) );
