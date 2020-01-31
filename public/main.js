var cards = document.querySelectorAll(".cards")
var choosenNumber = 0;
var img = document.querySelectorAll("img");
var div = document.querySelectorAll("div div div");
var btnM = document.querySelector("#btnMagic");
var btnA = document.querySelector("#btnAgain");
var cV = document.querySelectorAll(".title");

btnA.classList.add("d-none")

div.forEach(function (cards) {
    cards.classList.add("col-sm-4", "col-md-2");
});

img.forEach(function (cards) {
    cards.classList.add("w-100", "border", "border-dark", "m-3", "rounded");
});

cards.forEach(function (card) {
    card.addEventListener("click", magic, {once: true});
});

btnM.addEventListener("click", () => {
	runMagic();	
})

function magic() {
    this.style.backgroundColor = "rgb(72, 141, 180)";
    if (this.id === "card1") {
        choosenNumber += 1;
    } else if (this.id === "card2") {
        choosenNumber += 2;
    } else if (this.id === "card3") {
        choosenNumber += 4;
    } else if (this.id === "card4") {
        choosenNumber += 8;
    } else if (this.id === "card5") {
        choosenNumber += 16;
    } else if (this.id === "card6") {
        choosenNumber += 32;
    }
    // console.log(choosenNumber);
}

function runMagic(){
		div.forEach(function (cards) {
   			 cards.classList.add("d-none");
		});
	cV[0].innerHTML="You picked the number " + choosenNumber;
	cV[1].classList.add("d-none");
	btnM.classList.add("d-none");
	btnA.classList.remove("d-none");
	btnA.classList.add("d-flex"); 
}
