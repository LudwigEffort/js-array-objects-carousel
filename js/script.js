/*
Consegna:
Riprendiamo l'esercizio carosello e modifichiamone il codice per renderlo funzionante con un array di oggetti al posto dell'array semplice.
BONUS 1:
Aggiungere funzionalità di autoplay: dopo un certo periodo di tempo (3 secondi) l’immagine attiva dovrà cambiare alla successiva.
BONUS 2:
Aggiungere bottoni di start/stop e di inversione del meccanismo di autoplay.
*/

const images = [
	{
		image: '01.webp',
		title: "Marvel's Spiderman Miles Morale",
		text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
	},
	{
		image: '02.webp',
		title: 'Ratchet & Clank: Rift Apart',
		text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
	},
	{
		image: '03.webp',
		title: 'Fortnite',
		text: 'Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.',
	},
	{
		image: '04.webp',
		title: 'Stray',
		text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
	},
	{
		image: '05.webp',
		title: "Marvel's Avengers",
		text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
	},
];

const clock = setInterval(autoSlider, 3000);

const eleSlider = document.querySelector('.slider-container');

//work
// const eleThum = document.querySelector('.thumbanils-container'); 

//don't work
const eleThum = document.querySelector('.thumbnails-container');

const upButton = document.querySelector('.up');
const downButton = document.querySelector('.down');

const startButton = document.querySelector('.btn-start');
const reverseButton = document.querySelector('.btn-reverse');

let activeIndex = 0;

let counter = 0;

images.forEach((element) => {
    //console.log(element.image)
    const eleImg = document.createElement('img');
    const eleTitleContainer = document.createElement('div');
    eleImg.classList.add('slider-img');
    eleTitleContainer.classList.add('title-container');
    eleImg.src = `img/${element.image}`;
    
    if (!element) {
        eleImg.classList.add('active');
    }
    eleSlider.append(eleImg);
    eleSlider.append(eleTitleContainer);
});

images.forEach((element) => {
    //console.log(element.image)
    const eleImgThumb = document.createElement('img');
    eleImgThumb.classList.add('thumbnail-img');
    eleImgThumb.src = `img/${element.image}`;
    if (!element) {
        eleImg.classList.add('active-thumb');
    }
    eleThum.append(eleImgThumb);
});

const listEleImg = document.querySelectorAll('.slider-img');
const listEleImgThumb = document.querySelectorAll('.thumbnail-img');

downButton.addEventListener('click', downBtn());

upButton.addEventListener('click', upBtn());

reverseButton.addEventListener('click', reverseSum());
console.log(counter);

function downBtn(){
    listEleImg[activeIndex].classList.remove('active')
    listEleImgThumb[activeIndex].classList.remove('active-thumb');
    activeIndex++;
    if(activeIndex === listEleImg.length) {
        activeIndex = 0;
    }
    listEleImg[activeIndex].classList.add('active');
    listEleImgThumb[activeIndex].classList.add('active-thumb');
    return downBtn; //perhaps the return needs to be inserted because the function has a variable that overwrite itself
};

function upBtn() {
    listEleImg[activeIndex].classList.remove('active');
    listEleImgThumb[activeIndex].classList.remove('active-thumb');
    if(activeIndex === 0) {
        activeIndex = listEleImg.length;
    }
    activeIndex--;
    listEleImg[activeIndex].classList.add('active');
    listEleImgThumb[activeIndex].classList.add('active-thumb');
    return upBtn;
};

function reverseSum() {  
    counter++;
    return reverseSum;
}


function autoSlider(){
    downBtn();
};
