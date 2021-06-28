var Test = 0,
  whitecardCounter = 0,
  redcardCounter = 0,
  selectedCard1,
  selectedCard2,
  selectedCard3,
  distanceLeftWhite = 0,
  playedWhiteCounter = 0,
  distanceLeftRed = 55,
  playedRedCounter = 0;

$(document).ready(function () {
  //gets the screen ready and dipslays the playable white cards
  document.getElementById("whiteplaybutton").hidden = true;
  document.getElementById("redplaybutton").hidden = true;
  WhiteCards();
  console.log(whitecardCounter);
});

$(".WitteKaart").on("click", function () {
  //word aangeroepen de eerste keer dat er een witte kaart word geselecteerd
  if (whitecardCounter == 0) {
    //bewaart de id van de geselecteerde kaart
    selectedCard1 = $(this).attr("id");
    console.log(selectedCard1);
    //maakt de kleur van de geselecteerde kaart Grijs
    document.getElementById(selectedCard1).style.backgroundColor = "lightgray";
    //teller gaat omhoog voor wanneer er weer een kaart word geselecteerd
    whitecardCounter++;
  }

  //word aangeroepen wanneer er een 2e witte kaart word geselecteerd
  else if (whitecardCounter == 1) {
    //bewaart de id van de geselecteerde kaart
    selectedCard2 = $(this).attr("id");
    console.log(selectedCard2);
    //maakt de kleur van de geselecteerde kaart Grijs
    document.getElementById(selectedCard2).style.backgroundColor = "lightgray";
    //teller gaat omhoog voor wanneer er weer een kaart word geselecteerd
    whitecardCounter++;
    //kaart speel knop komt tevoorschijn
    document.getElementById("whiteplaybutton").hidden = false;
  }

  //word aangeroepen wanneer het de beurt is om de 1e geselcteerde kaart aan te passen
  else if (whitecardCounter == 2) {
    //selectedCard heeft nog de variabele van de vorige kaart en zet de kleur er van terug naar wit
    document.getElementById(selectedCard1).style.backgroundColor = "white";
    //bewaart de id van de geselecteerde kaart
    selectedCard1 = $(this).attr("id");
    console.log(selectedCard1);
    //maakt de kleur van de geselecteerde kaart Grijs
    document.getElementById(selectedCard1).style.backgroundColor = "lightgray";
    //teller gaat omhoog voor wanneer er weer een kaart word geselecteerd
    whitecardCounter++;
  }

  //word aangeroepen wanneer het de beurt is om de 2e geselcteerde kaart aan te passen
  else if (whitecardCounter == 3) {
    //selectedCard2 heeft nog de variabele van de vorige kaart en zet de kleur er van terug naar wit
    document.getElementById(selectedCard2).style.backgroundColor = "white";
    //bewaart de id van de geselecteerde kaart
    selectedCard2 = $(this).attr("id");
    console.log(selectedCard2);
    //maakt de kleur van de geselecteerde kaart Grijs
    document.getElementById(selectedCard2).style.backgroundColor = "lightgray";
    //teller word terug gezet naar 2 om het loopable te maken
    whitecardCounter = 2;
  }
})

$(".RodeKaart").on("click", function () {
  //word aangeroepen de eerste keer dat er een rode kaart word geselecteerd
  if (redcardCounter == 0) {
    //bewaart de id van de geselecteerde kaart
    selectedCard3 = $(this).attr("id");
    console.log(selectedCard3);
    //maakt de kleur van de geselecteerde kaart donker rood
    document.getElementById(selectedCard3).style.backgroundColor = "darkred";
    //teller gaat omhoog voor wanneer er weer een kaart word geselecteerd
    redcardCounter++;
    //kaart speel knop komt tevoorschijn
    document.getElementById("redplaybutton").hidden = false;
  }

  //word aangeroepen wanneer er meerdere rode kaarten worden geselecteerd
  else if (redcardCounter == 1) {
    //selectedCard3 heeft nog de variabele van de vorige kaart en zet de kleur er van terug naar rood
    document.getElementById(selectedCard3).style.backgroundColor = "red";
    //selectedCard3 word gevuld met nieuwe kaart variabele
    selectedCard3 = $(this).attr("id");
    console.log(selectedCard3);
    //de geselecteerde kaard word donker rood
    document.getElementById(selectedCard3).style.backgroundColor = "darkred";
  }
})

$("#whiteplaybutton").on("click", function () {
  //function called by playing the white cards button
  console.log('press')
  //hides the button and the white playing cards and shows the red by calling the red cards function
  document.getElementById("whiteplaybutton").hidden = true;
  RedCards();

})

$("#redplaybutton").on("click", function () {
  //function called by playing the red cards button
  console.log('press')
  //hides the button and the playing cards by calling the no cards function
  document.getElementById("redplaybutton").hidden = true;
  NoCards();
})

$("#leaveGame").on("click", function () {
  //refreshes page for testing
  location.reload();
})

$("#ShowPlayedCard").on("click", function () {
    //counter adds up for every shown card
  playedWhiteCounter++;
    //creates a div for the card with an unique id created with the counter
  document.getElementById("GespeeldeKaarten").innerHTML = document.getElementById("GespeeldeKaarten").innerHTML + '<div class="GespeeldeKaart" id="PlayWhite' + playedWhiteCounter + '" style="left : ' + distanceLeftWhite + 'px"><a id="w1-text">Default Text</a></div>';
  //fills the created card with the appropriate text to database ID
  //Math.floor here is a random value for testing change to a variable for actual game
  showWhiteCard("PlayWhite" + playedWhiteCounter, Math.floor(Math.random() * 210) + 1);
  //creates a bigger distance between cards to align propperly
  distanceLeftWhite = distanceLeftWhite + 110;
})

$("#ShowPlayedCardRed").on("click", function () {
  //counter adds up for every shown card
  playedRedCounter++;
  //creates a div for the card with an unique id created with the counter
  document.getElementById("GespeeldeKaarten").innerHTML = document.getElementById("GespeeldeKaarten").innerHTML + '<div class="GespeeldeKaartRood" id="PlayRed' + playedRedCounter + '" style="left : ' + distanceLeftRed + 'px"><a id="w1-text">Default Text</a></div>';
  //fills the created card with the appropriate text to database ID
  //Math.floor here is a random value for testing change to a variable for actual game
  showRedCard("PlayRed" + playedRedCounter, Math.floor(Math.random() * 250) + 1);
  //creates a bigger distance between cards to align propperly
  distanceLeftRed = distanceLeftRed + 220;
})

function RedCards() {
  //Hides all white cards, and shows the red cards
  document.getElementById("w1").hidden = true;
  document.getElementById("w2").hidden = true;
  document.getElementById("w3").hidden = true;
  document.getElementById("w4").hidden = true;
  document.getElementById("R1").hidden = false;
  document.getElementById("R2").hidden = false;
  document.getElementById("R3").hidden = false;

  //Generates the card text by calling the showWhiteCard function
  //Math.floor here is a random value for testing change to a variable for actual game
  showRedCard("R1", Math.floor(Math.random() * 250) + 1);
  showRedCard("R2", Math.floor(Math.random() * 250) + 1);
  showRedCard("R3", Math.floor(Math.random() * 250) + 1);
}

function WhiteCards() {
  //Hides all red cards, and shows the white cards
  document.getElementById("w1").hidden = false;
  document.getElementById("w2").hidden = false;
  document.getElementById("w3").hidden = false;
  document.getElementById("w4").hidden = false;
  document.getElementById("R1").hidden = true;
  document.getElementById("R2").hidden = true;
  document.getElementById("R3").hidden = true;

  //Generates the card text by calling the showWhiteCard function
  //Math.floor here is a random value for testing change to a variable for actual game
  showWhiteCard("w1", Math.floor(Math.random() * 210) + 1);
  showWhiteCard("w2", Math.floor(Math.random() * 210) + 1);
  showWhiteCard("w3", Math.floor(Math.random() * 210) + 1);
  showWhiteCard("w4", Math.floor(Math.random() * 210) + 1);
}

function NoCards() {
  //Hides all playing cards
  document.getElementById("w1").hidden = true;
  document.getElementById("w2").hidden = true;
  document.getElementById("w3").hidden = true;
  document.getElementById("w4").hidden = true;
  document.getElementById("R1").hidden = true;
  document.getElementById("R2").hidden = true;
  document.getElementById("R3").hidden = true;
}

function showWhiteCard(element, CardID) {
  var xhttp;
  xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById(element).innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "inc/connect.php?q=" + CardID, true);
  xhttp.send();
}

function showRedCard(element, CardID) {
  var xhttp;
  xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById(element).innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "inc/connect2.php?q=" + CardID, true);
  xhttp.send();
}