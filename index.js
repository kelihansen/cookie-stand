'use strict';

const firstLink = document.getElementById('open-first-cookie');
const firstCookiePicDiv = document.getElementById('first-cookie');
const firstCookiePic = document.querySelector('#first-cookie img');
const firstCloseButton = document.querySelector('#first-cookie .close-x');

firstLink.addEventListener('click', function() {
    event.preventDefault();
    firstCookiePicDiv.classList.add('modal');
    firstCookiePic.classList.remove('closed');
    firstCookiePic.classList.add('open');
});

firstCloseButton.addEventListener('click', function() {
    event.preventDefault();
    firstCookiePicDiv.classList.remove('modal');
    firstCookiePic.classList.remove('open');
    firstCookiePic.classList.add('closed');
});

const secondLink = document.getElementById('open-better-cookies');
const secondCookiePicDiv = document.getElementById('better-cookies');
const secondCookiePic = document.querySelector('#better-cookies img');
const secondCloseButton = document.querySelector('#better-cookies .close-x');

secondLink.addEventListener('click', function() {
    event.preventDefault();
    secondCookiePicDiv.classList.add('modal');
    secondCookiePic.classList.remove('closed');
    secondCookiePic.classList.add('open');
});

secondCloseButton.addEventListener('click', function() {
    event.preventDefault();
    secondCookiePicDiv.classList.remove('modal');
    secondCookiePic.classList.remove('open');
    secondCookiePic.classList.add('closed');
});


