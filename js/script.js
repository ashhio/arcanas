 function Redirect() {
               window.location="result.html";
            }

function generate()
{
	var randomNumber = Math.floor(Math.random() * 3);
	var imgName = "card_" + randomNumber + ".png";
	document.getElementById("generated-card").src= "images" + "/" + imgName;
}

function generateCard()
{
	window.onload = generate();
}

