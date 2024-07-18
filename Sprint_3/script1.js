const userName  = 'marta';
const userAge  = 30;
const likesJavaScript = true;
const userHobby = 'sport';
const userCity = 'Warszawa';
const userNameCorrect = userName[0].toUpperCase() + userName.slice(1);
const userAgeOlder = userAge + 10;
const userIsAdult = userAge >= 18;
const isWarsawCitizen = userCity.toUpperCase() === 'WARSZAWA';
const likesJSAndIsAdult = userIsAdult && likesJavaScript;
let messageOne;
let messageTwo;
let messageThree;


console.log(`Cześć ${userNameCorrect} (${userAge} lat)!`);

if (userIsAdult) {
    messageOne = 'Jesteś pełnoletnia.';
} else {
    messageOne = 'Nie jesteś pełnoletnia.';
};
if (likesJavaScript) {
    messageTwo = 'Lubisz programować w JavaScript.';
};
if (isWarsawCitizen) {
    messageThree = `Mieszkasz w mieście ${userCity}.`;
};
console.log(messageOne, messageTwo , messageThree, `Lubisz ${userHobby}.`);