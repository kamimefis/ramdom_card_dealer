const suits = ['&hearts;', '&diams;', '&clubs;', '&spades;'];
const values = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

function pickACard(array) {
    let randomCard = Math.floor(Math.random() * array.length);
    console.log(array[randomCard]);

    return array[randomCard];
};
let randomValue = pickACard(values);
let randomSuit = pickACard(suits);


//generando el DOM con los elementos de la carta para cambiar sus valores y colores según pinta:
let topSuit= document.querySelector('#top-suit');
let bottomSuit= document.querySelector('#bottom-suit');
let cardNum= document.querySelector('#random-number')

topSuit.innerHTML = randomSuit;
if (randomSuit === '&hearts;' || randomSuit === '&diams;') topSuit.classList.add("heart-card");
else topSuit.classList.remove("heart-card");

cardNum.innerHTML = randomValue;

bottomSuit.innerHTML = randomSuit;
 if (randomSuit === '&hearts;' || randomSuit === '&diams;') bottomSuit.classList.add("heart-card");
 else bottomSuit.classList.remove("heart-card");

