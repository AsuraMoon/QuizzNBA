const RESPONSES = ["b", "d"];
let userResponses = [];
let checkArray = [];

const FORM = document.querySelector("#QuizNBA");

/** Des que l'utilisateur soumet le formulaire grâce à l'EVENTLISTENER */
FORM.addEventListener("submit", (event) => {

// validation.js:8 Uncaught TypeError: Cannot read property 'addEventListener' of null
// at validation.js:8
// (anonymous) @ validation.js:8

	/** On ne souhaite pas que la page se recharge */
	event.preventDefault();

	/* On boucle sur le tableau des réponses* */
	for (let i = 1; i <= RESPONSES.length; i++) {
		/**
		 * On push les réponses dans le tableau userResponses
		 * grace à querySelector
		 */
		userResponses.push(
			document.querySelector(`input[name="reponse${i}"]:checked`).value
		);
	}
	console.log(userResponses)	
	checkIsTrue(userResponses);

	userResponses = [];
});

function checkIsTrue(array) {
	/** On boucle tant que i < la longueur du tableau passer en parametre */

	for (let i = 0; i < array.length; i++) {
		/** Si reponse juste alors return true sinon return false */
		if (array[i] === RESPONSES[i]) {
			checkArray.push(true);
        } 
        else {
			checkArray.push(false);
		}
    }
console.log(checkArray);
displayResult(checkArray);
checkArray = []
}



function displayResult(checkArray) {
	/** creer une const qui récupère le nombre d'élément qui sont différent de true */

	const nbFalse = checkArray.filter((element) => element === false).length;
console.log(nbFalse)
	switch (nbFalse) {
		case 0:
			TITLERESULTATS.innerText = "T'es un joueur All-Star";
			HELPRESULTATS.innerText = "Je peux avoir un autographe ?";
			NOTERESULTATS.innerText = "100%";
			break;
		case 1:
			TITLERESULTATS.innerText = "Un 3p sur Deux....";
			HELPRESULTATS.innerText = "Retourne t'entrainer !";
			NOTERESULTATS.innerText = "50%";
			break;
		case 2:
			TITLERESULTATS.innerText = "Arrête le basket ou ne le commence jamais 🤬";
			NOTERESULTATS.innerText = "0 des 0";
			break;
		default:
			"T'as fais comment pour arriver la, toi ?";
	}
}

const TITLERESULTATS = document.querySelector("#intro");
const HELPRESULTATS = document.querySelector("#aide");
const NOTERESULTATS = document.querySelector("#note");