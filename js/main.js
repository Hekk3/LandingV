const videoBtn = document.querySelector('.play-video__button');
const iframeYoutube = document.querySelector('.video__iframe');
const videoDecor = document.querySelector('.play-video');



const video = function() {
	videoDecor.classList.add('video__play--active');
	setTimeout(() => videoDecor.classList.add('video__play--hide'), 600)
	iframeYoutube.classList.add('video__iframe--active');
}



videoBtn.addEventListener('click', () => {
	video();
});


// burger

const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav__list');
const header = document.querySelector('.header');


const hideNav = function() {
	nav.classList.toggle('nav__list--active');
	burger.classList.toggle('burger--active');
}


burger.addEventListener('click', hideNav);