//Vi väljer h3 eftersom vi kommer använda det längre fram och sparar
//ner i en variabel
var css = document.querySelector("h3");
//Sparar ner input av gradiant färgen knappen 1 i en variabel för JS
var color1 = document.querySelector(".color1");
//Sparar ner input av gradiant färgen knappen 2 i en variabel för JS
var color2 = document.querySelector(".color2");
//Fångar upp body taggen så vi kan använda den senare
var body = document.getElementById("Gradient");
//Debbuga body variabeln fungerar console.log(body);

//Funktion för att underlätta funktionerna nedan: 
function valjGradient() {
	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")"; 
	//Ger en cool text som visar vilken färg vi valt
	css.textContent = body.style.background + ";";
}

//Ändra body taggens färg
// Om vi bara vill statiskt ändra till en annan färg i body body.style.background = "red";

// Vi debuggar att allt hittils fungerar som de ska console.log(css); console.log(color1); console.log(color2);

//Det vi vill göra nu är att lyssna på ett "event" eller knapptryck 
//för att välja färg och få det att fungera
//Funktionerna nedan med input går igång automatiskt så vi ska inte ropa på dem
color1.addEventListener("input", valjGradient);
	//debugg för att se att inputen sker korrekt console.log(color1.value);
	//När vi väljer knappen 1 ändras gradient färgen 1 till värdet

color2.addEventListener("input", valjGradient);
	//debugg för att se att inputen sker korrekt console.log(color2.value);

//Inspekterar man ser man att background värdet sparas under body taggen