////////////// Importing swiper js////////////////
import { swiper } from './swiper-module.js';
/////////////////////////////////////////////////////////
////////////// selecting elements from DOM////////////////
const header = document.querySelector('.header');
const observerPoint = document.querySelector('.banner');
const nav = document.querySelector('.nav');
const copyRigthYear = document.querySelector('.copyright-year');
/////////////////////////////////////////////////////////
////////////// Sticku navigation////////////////
const headerHeight = header.getBoundingClientRect().height;
console.log(headerHeight);
// intersection API
const stickhandler = function (entires) {
  const [e] = entires;
  if (!e.isIntersecting) {
    header.classList.add('sticky');
  } else {
    header.classList.remove('sticky');
  }
};
const headerObserver = new IntersectionObserver(stickhandler, {
  root: null,
  threshold: 0,
  rootMargin: `-${headerHeight}px`,
});
headerObserver.observe(observerPoint);
/////////////////////////////////////////////////////////
////////////// Menu on hover ////////////////
const subMenuHandler = function (e) {
  const target = e.target.closest('.sub-menu-container');
  if (target) {
    const subMenu = target.querySelector('.sub-menu-child');
    if (subMenu.classList.contains('sub-menu--active')) {
      subMenu.classList.remove('sub-menu--active');
    } else {
      subMenu.classList.add('sub-menu--active');
    }
  }
};
/////////////////////////////////////////////////////////
////////////// Mobile Menu////////////////
const mobileMenu = function (e) {
  const target = e.target.closest('.nav__menu--mobile');
  if (!target) return;
  const hamburger = target.querySelector('.hamburger');
  console.log(hamburger);
  if (hamburger.classList.contains('is-active'))
    hamburger.classList.remove('is-active');
  else hamburger.classList.add('is-active');
};
/////////////////////////////////////////////////////////
////////////// Dynamic Year for CopyRight////////////////
const year = new Date();
copyRigthYear.innerHTML = year.getFullYear().toString();
/////////////////////////////////////////////////////////
////////////// Event Listeners////////////////
nav.addEventListener('mouseover', subMenuHandler);
nav.addEventListener('mouseout', subMenuHandler);
nav.addEventListener('click', mobileMenu);

//////////////////////////////////////
alert('Menu in mobile size is not IMPLEMENTED!!');
