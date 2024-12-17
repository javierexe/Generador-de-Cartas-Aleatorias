/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let pintas = ["♦", "♥", "♠", "♣"];
  let cartas = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];

  let pinta = Math.floor(Math.random() * pintas.length);
  let carta = Math.floor(Math.random() * cartas.length);

  let cardHeader = document.getElementsByClassName("pintaArriba");
  let cardfooter = document.getElementsByClassName("pintaAbajo");
  let cardNumber = document.getElementsByClassName("numeroCarta");

  pintaArriba.innerHTML = pintas[pinta];
  pintaAbajo.innerHTML = pintas[pinta];
  numeroCarta.innerHTML = cartas[carta];

  if (pintas[pinta] == "♠" || pintas[pinta] == "♣") {
    document.getElementById("carta").style.color = "black";
  } else {
    document.getElementById("carta").style.color = "red";
  }
};
