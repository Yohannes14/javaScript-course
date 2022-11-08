'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
/*
/////////////////////////////////////////////////////////
// Selecting, 
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);


const header =document.querySelector('.header');
const allSection = document.querySelectorAll(".section");
console.log(allSection);

document.getElementById('section--1');

const allButtons = document.getElementsByTagName('button');
console.log(allButtons);

console.log(document.getElementsByClassName('btn'));

////Creating and inserting Elements

const message =document.createElement('div');
message.classList.add('cookie-message');
// message.textContent = 'We use cookied for improved functionality and analytics.';
message.innerHTML = 'We use cookied for improved functionality and analytics. <button class="btn btn--close-cookie"> Got it!</button>';

// header.prepend(message);
header.append(message);
// header.append(message.cloneNode(true))

// header.before(message);
// header.after(message);

/// Delete elements
document.querySelector('.btn--close-cookie').
addEventListener('click', function(){
  // message.remove();
  message.parentElement.removeChild(message);

});
/////////////////////////////////////////
// styles
 message.style.backgroundColor = '#37383d';
 message.style.width = '120%';
 //working inline style
 console.log(message.style.height);
 console.log(message.style.backgroundColor);

 console.log(getComputedStyle(message));
 console.log(getComputedStyle(message).color);
 console.log(getComputedStyle(message).height);

 document.documentElement.style.setProperty('--color-primary', 'orangered');

 //Attributes
 const logo = document.querySelector('.nav__logo');
 console.log(logo.alt);
 console.log(logo.src);
 console.log(logo.className);
 logo.setAttribute('company', 'Bankist');

 console.log(logo.src);
 logo.getAttribute('src'); //relative

 const link = document.querySelector('.nav__link--btn');
  console.log(link.href);
  console.log(link.getAttribute('href'));

  // Data attributes
  console.log(logo.dataset.versionNumber)


  //Classes
  logo.classList.add('c');
  logo.classList.remove('c');
  logo.classList.contains('c') // not includes

  //Don't use
  logo.className = 'Jhon';
  */

  const btnScrollTo = document.querySelector('.btn--scroll-to');
  const section1 = document.querySelector('#section--1');

  btnScrollTo.addEventListener('click', function(e) {
    const s1coords = section1.getBoundingClientRect();
    console.log(s1coords);
    console.log(e.target.getBoundingClientRect());
    // current scroll
    console.log('Current scroll (X/Y', window.pageXOffset, window.pageYOffset);
    console.log('height/width viewport', 
    
         document.documentElement.clientHeight,
         document.documentElement.clientWidth
      );

      //Scrolling
      // window.scrollTo(s1coords.left + window.pageXOffset, 
      //   s1coords.top + window.pageYOffset
      //   );

      // window.scrollTo({
      //   left: s1coords.left + window.pageXOffset, 
      //   top: s1coords.top + window.pageYOffset,
      //   behavior: 'smooth',

      // });
      section1.scrollIntoView({bahavior: 'smooth'})
  });

  //////////////////////////////////////////
  //Types of event handlers
  const h1 =document.querySelector('h1');

  const alertH1 =function(e) {
    alert('addEventListener: Great! You are reading the headin: D');

    h1.removeEventListener('mouseenter', alertH1);

  };

  h1.addEventListener('mouseenter', alertH1)

  setTimeout(() => h1.removeEventListener('mouseenter'. alertH1), 3000);

  // h1.onmouseenter = function(e) {
  //   alert('onmouseenter: Great! You are reading the headin: D')
  // };
