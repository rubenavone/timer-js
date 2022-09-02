/*   
Voici comment va se dérouler notre Timer :
- Un bouton s’affiche sur la page proposant de « Lancer le décompte »
- L’utilisateur clique sur ce bouton, qui va lancer une fonction start(), qui s’occupera de créer
un intervalle sur la fonction decompte() toutes les secondes, pendant 10 secondes.
- La fonction decompte(), lorsqu’elle est appelée :
• Décrémentera (retirera 1) à une variable secondes, qui contient comme valeur 10
• Vérifiera si secondes est différent de 0, pour afficher dans la page le nombre de
secondes restantes
• Sinon, si secondes vaut 0, appellera la fonction stop(), qui aura pour but d’arrêter
l’intervalle 
// code for animation on click  

top of button
animation: top-button 1s forwards;
center of button
animation: center-button 1s forwards;
*/
//() => {
/*Variable Pour L'anim et l'exercice*/

console.log("Hello world !"); //Test pour savoir si le code est bien lié au html

let bigRedButtonSelector = document.querySelector("#timerStartJs"); //selection du gros bouton rouge

/* ANIMATION DU BOUTON */

/*FIN ANIMATION*/

/* EXERCICE */

/*Variable*/
let titleSelector = document.querySelector("#titleJS");
let counterSelector = document.querySelector("#counterJs");
var timeCount = 5;
let flag = true;
let rootCss = document.querySelector(":root");

// Get the root element
var r = document.querySelector(":root");

bigRedButtonSelector.addEventListener("click", function () {
  //Button animation
  let propertiesOfRoot = getComputedStyle(rootCss);
  rootCss.style.setProperty("--button-mid-size", "0");
  rootCss.style.setProperty("--button-top-move", "0");
  if (flag === true) {
    flag = false;
    startCount();
  } else {
    console.log("Vous avez déjà cliquer");
  }
});

function startCount() {
  let counter = setInterval(function () {
    console.log("you Enter in counter !");
    if (timeCount != -1) {
      console.log("time count is not equal to 0, actully its" + timeCount);
      counterSelector.textContent = timeCount;
      timeCount--;
    } else {
      timeCount = 10;
      stop();
    }
  }, 1000);
  let stop = () => {
    flag = true;
    rootCss.style.setProperty("--button-mid-size", "80px");
    rootCss.style.setProperty("--button-top-move", "100%");
    clearInterval(counter);
  };
}

//};

//Correction Benjamin

let btn = document.querySelector("button");
let secondes = 10;
let interval;

btn.addEventListener("click", () => {
  start();
  disappear();
});

function disappear() {
  btn.style.display = "none";
}

function start() {
  interval = setInterval(decompte, 1000);
}

function stop() {
  clearInterval(interval);
  document.body.innerHTML += "Baptiste va payer la raclette !";
}

function decompte() {
  secondes--;
  if (secondes == 0) {
    stop();
  } else {
    document.body.innerHTML += secondes + "<br>";
  }
}
