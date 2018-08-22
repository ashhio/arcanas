var cardNumber;

var card_info = ["Beginnings, Spontaneity, Faith, Apparent folly", 
				"Action, Conscious awareness, Concentration, Power",
				"Nonaction, Unconscious awareness, Potential, Mystery",
				"Mothering, Abundance, Senses, Nature",
				"Fathering, Structure, Authority, Regulation"]

function Redirect() {
	window.location="result.html";
}

function generateCard() {
	cardNumber = Math.floor(Math.random() * 5);
	var imgName = "card_" + cardNumber + ".png";
	document.getElementById("generated-card").src= "images" + "/" + imgName;
}

function showCardInfo() {
	var para = document.createElement("p");
	var node = document.createTextNode(card_info[cardNumber]);
	para.appendChild(node);

	var element = document.getElementById("card-info");
	element.appendChild(para);
}