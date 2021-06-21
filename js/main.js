var Test = 0,
whitecardCounter = 0,
redcardCounter = 0,
selectedCard1,
selectedCard2,
selectedCard3;

$(document).ready(function(){
    document.getElementById("whiteplaybutton").hidden = true;
    document.getElementById("redplaybutton").hidden = true;
    WhiteCards();
    showWhiteCard("w1", Math.floor(Math.random() * 100) + 1);
    showWhiteCard("w2", Math.floor(Math.random() * 100) + 1);
    showWhiteCard("w3", Math.floor(Math.random() * 100) + 1);
    showWhiteCard("w4", Math.floor(Math.random() * 100) + 1);
    
});

$(".WitteKaart").on("click", function(){
    if(whitecardCounter == 0){
        selectedCard1 = $(this).attr("id");
        console.log(selectedCard1);
        document.getElementById(selectedCard1).style.backgroundColor = "lightgray";
        whitecardCounter++;
    }

    else if(whitecardCounter == 1){
        selectedCard2 = $(this).attr("id");
        console.log(selectedCard2);
        document.getElementById(selectedCard2).style.backgroundColor = "lightgray";
        whitecardCounter++;
        document.getElementById("whiteplaybutton").hidden = false;    
    }
})

$(".RodeKaart").on("click", function(){
    if(redcardCounter == 0){
    selectedCard3 = $(this).attr("id");
    console.log(selectedCard3);
    document.getElementById(selectedCard3).style.backgroundColor = "darkred";
    redcardCounter++;
    document.getElementById("redplaybutton").hidden = false; 
    }
})

$("#whiteplaybutton").on("click", function(){
    console.log('press')
    document.getElementById("whiteplaybutton").hidden = true;  
    RedCards();

})

$("#redplaybutton").on("click", function(){
    console.log('press')
    document.getElementById("redplaybutton").hidden = true;  
    NoCards();
})

$("#leaveGame").on("click", function(){
    location.reload();
})

$("#ShowPlayedCard").on("click", function(){

})

function RedCards()
{
    document.getElementById("w1").hidden = true;
    document.getElementById("w2").hidden = true;
    document.getElementById("w3").hidden = true;
    document.getElementById("w4").hidden = true;
    document.getElementById("R1").hidden = false;
    document.getElementById("R2").hidden = false;
    document.getElementById("R3").hidden = false;
    showRedCard("R1", Math.floor(Math.random() * 100) + 1);
    showRedCard("R2", Math.floor(Math.random() * 100) + 1);
    showRedCard("R3", Math.floor(Math.random() * 100) + 1);
}

function WhiteCards()
{
    document.getElementById("w1").hidden = false;
    document.getElementById("w2").hidden = false;
    document.getElementById("w3").hidden = false;
    document.getElementById("w4").hidden = false;
    document.getElementById("R1").hidden = true;
    document.getElementById("R2").hidden = true;
    document.getElementById("R3").hidden = true;
}

function NoCards()
{
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
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById(element).innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "inc/connect.php?q="+CardID, true);
  xhttp.send();
  }

function showRedCard(element, CardID) {
  var xhttp;
  xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
    document.getElementById(element).innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "inc/connect2.php?q="+CardID, true);
  xhttp.send();
}