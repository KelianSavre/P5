const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]
let i = 0;

let baliseImg = document.querySelector(".banner-img");

let ClasseDot = document.querySelectorAll(".dot");

let ParagrapheBanniere = document.querySelector("#banner p");
let TexteBanniere = `${slides[0].tagLine}`;

let right_arrow = document.getElementById("right_arrow");
let left_arrow = document.getElementById("left_arrow");


right_arrow.addEventListener("click", function (){
	console.log("Click Fleche Droite");

	if (i < slides.length-1){
		i++;

		ClasseDot[i-1].classList.remove("dot_selected");
	}else{
		i = 0;

		ClasseDot[ClasseDot.length-1].classList.remove("dot_selected");
	}

	baliseImg.setAttribute("src","./assets/images/slideshow/"+slides[i].image);
	
	ClasseDot[i].classList.add("dot_selected");

	TexteBanniere = `${slides[i].tagLine}`;
	ParagrapheBanniere.innerHTML = TexteBanniere

});



left_arrow.addEventListener("click", function (){
	console.log("Click Fleche Gauche")

	if (i > 0){
		i--;

		ClasseDot[i+1].classList.remove("dot_selected");
	}else{
		i = slides.length-1;

		ClasseDot[0].classList.remove("dot_selected");
	}

	baliseImg.setAttribute("src","./assets/images/slideshow/"+slides[i].image);
	
	ClasseDot[i].classList.add("dot_selected");

	TexteBanniere = `${slides[i].tagLine}`;
	ParagrapheBanniere.innerHTML = TexteBanniere
});