window.onload = () => {
  let body = document.getElementsByTagName("body")[0];
  let tombola = document.createElement("div");
  tombola.id = "tombola";
  tombola.classList.add("number_block_wrapper");
  body.appendChild(tombola);

  let buttonExtract = document.createElement("button");
  buttonExtract.classList.add("button");
  buttonExtract.addEventListener("click", function () {
    colorNextNumber();
  });
  buttonExtract.innerHTML = "ESTRAI I NUMERI";

  body.appendChild(buttonExtract);

  let buttonNewCard = document.createElement("button");
  buttonNewCard.classList.add("button");
  buttonNewCard.addEventListener("click", function () {
    createNewCardPlayers();
  });
  buttonNewCard.innerHTML = "NUOVA CARD";

  body.appendChild(buttonNewCard);

  let numbersArray = Array.from({ length: 76 }, (_, i) => i + 1);
  shuffleArray(numbersArray);

  let extractedNumbers = [];

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  function colorNextNumber() {
    if (numbersArray.length > 0) {
      let nextNumber = numbersArray.pop();
      let numberElement = document.getElementById(`number_${nextNumber}`);
      numberElement.style.backgroundColor = "purple";

      extractedNumbers.push(nextNumber);

      colorNumberPlayers(nextNumber);
    }
  }

  function colorNumberPlayers(number) {
    let playerNumberElements =
      document.getElementsByClassName("number_players");

    for (let i = 0; i < playerNumberElements.length; i++) {
      let playerNumber = parseInt(playerNumberElements[i].innerHTML);
      if (playerNumber === number) {
        playerNumberElements[i].style.backgroundColor = "purple";
      }
    }
  }
  function createNewCardPlayers() {
    let cardPlayers = document.createElement("div");
    cardPlayers.classList.add("card_div");

    body.appendChild(cardPlayers);

    for (let i = 1; i <= 20; i++) {
      let number_players = document.createElement("div");
      number_players.classList.add("number_players");
      number_players.innerHTML = Math.floor(Math.random() * (76 - 1 + 1) + 1);
      cardPlayers.appendChild(number_players);
    }
  }

  for (let i = 1; i <= 76; i++) {
    let sevenSix = document.createElement("div");
    sevenSix.id = `number_${i}`;
    sevenSix.classList.add("numbers_block");
    sevenSix.innerHTML = i;
    tombola.appendChild(sevenSix);
  }
  createNewCardPlayers();
};
