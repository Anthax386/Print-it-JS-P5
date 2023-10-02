const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>",
		"src":"./assets/images/slideshow/slide1.jpg"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>",
		"src":"./assets/images/slideshow/slide2.jpg"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>",
		"src":"./assets/images/slideshow/slide3.jpg"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>",
		"src":"./assets/images/slideshow/slide4.png"
	}
]

let arrowLeft = document.getElementById("arrow_left");
let arrowRight = document.getElementById("arrow_right");

for (let i=0; i < slides.length; i++) {
	let dots=document.getElementById('dots');
	let dot = document.createElement('span');
	dot.setAttribute("id", [i+1]);
	dot.classList.add("dot");
	dots.appendChild(dot);
}

let nbImg = slides.length;
let curentImg = 1;

let activeDot = document.getElementById(curentImg);
activeDot.classList.add('dot_selected');

arrowLeft.addEventListener("click", function() {
	let bannerImg = document.getElementById('banner-img');

	if(curentImg === 1) {
		bannerImg.style.animation="disparition 250ms ease-in"
		activeDot.classList.remove('dot_selected');

		setTimeout(() => {
			curentImg = slides.length;
			bannerImg.src=slides[curentImg-1].src;

			bannerImg.style.animation="apparition 250ms ease-in-out"
		
			activeDot = document.getElementById(curentImg);
			activeDot.classList.add('dot_selected');
		}, 250);		
	}
	else {
		bannerImg.style.animation="disparition 250ms ease-in"
		activeDot.classList.remove('dot_selected');

		setTimeout(() => {
			curentImg--;
			bannerImg.src=slides[curentImg-1].src;
	
			bannerImg.style.animation="apparition 250ms ease-in-out"
			
			activeDot = document.getElementById(curentImg);
			activeDot.classList.add('dot_selected');
		}, 250);
	};
});

arrowRight.addEventListener("click", function() {
	let bannerImg = document.getElementById('banner-img');

	if(curentImg < slides.length) {
		bannerImg.style.animation="disparition 250ms ease-in"

		activeDot.classList.remove('dot_selected');

		setTimeout(() => {
			curentImg++;
			bannerImg.src=slides[curentImg-1].src;

			bannerImg.style.animation="apparition 250ms ease-in-out"

			activeDot = document.getElementById(curentImg);
			activeDot.classList.add('dot_selected');
		}, 250);
	}
	else {
		bannerImg.style.animation="disparition 250ms ease-in"

		activeDot.classList.remove('dot_selected');

		setTimeout(() => {
			curentImg=1;
			bannerImg.src=slides[curentImg-1].src;

			bannerImg.style.animation="apparition 250ms ease-in-out"

			activeDot = document.getElementById(curentImg);
			activeDot.classList.add('dot_selected');
		}, 250);		
	};
});