const sendButton = document.getElementById("send");

sendButton.addEventListener("click", function () {
  // chiedo all'utente i km da percorrere
  let userKm = parseFloat(document.getElementById("passenger_km").value);
  // FINCHE il numero è uguale o inferiore a 0 OPPURE non è un numero riproponi in loop
  // while (userKm <= 0 || isNaN(userKm)) {
  //   alert("inserisci un numero maggiore di 0");
  //   userKm = parseInt(prompt("km"));
  // }

  // chiedo all'utente l'età
  let userAge = parseInt(document.getElementById("passenger_age").value);
  // while (userAge <= 0 || isNaN(userAge)) {
  //   alert("inserisci un numero maggiore di 0");
  //   userAge = parseInt(prompt("age"));
  // }

  // dichiaro la tariffa per km
  const priceForKm = 0.21;

  // Calcolo il prezzo base del biglietto (userKm * userAge)
  const tiketBasePrice = userKm * priceForKm;

  // dichiaro una VARIABILE per lo sconto
  let tiketDiscount = 0;

  // SE l'età del passeggero è < 18
  if (userAge < 18) {
    // calcolo un valore dello sconto pari al 20% del prezzo base
    tiketDiscount = tiketBasePrice * 0.2;
  }
  // ALTRIMENTI SE l'età del passeggero è > 65
  else if (userAge > 65) {
    // calcolo un valore dello sconto pari al 40% del prezzo base
    tiketDiscount = tiketBasePrice * 0.4;
  }

  // calcolo il prezzo finale del biglietto
  const tiketFinalPrice = tiketBasePrice - tiketDiscount;

  const messageFinalPrice = (document.getElementById("ticket_price").innerHTML =
    tiketFinalPrice.toFixed(2) + " €");
});
