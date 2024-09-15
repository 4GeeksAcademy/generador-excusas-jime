/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  let who = ["Mc Gyver", "Naruto", "Trump", "La madre Teresa"];
  let action = ["bailó con", "desmayó", "saltó sobre", "rompió"];
  let what = [
    "el gato de la vecina",
    "el ombligo de Shakira",
    "los dientes de Suárez"
  ];
  let when = [
    "en el mundial 2014.",
    "cuando se crearon los mares.",
    "durante mi siesta.",
    "mientras corría el ómnibus.",
    "después de robar un banco."
  ];

  function getRandom(array) {
    let randomNumber = Math.floor(Math.random() * array.length);
    return array[randomNumber];
  }

  let excusa = `
${getRandom(who)} ${getRandom(action)} ${getRandom(what)} ${getRandom(when)} 
`;
  console.log(excusa);
  document.getElementById("excuse").innerHTML = excusa;
};
