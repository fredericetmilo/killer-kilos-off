'use strict';
const pillars = [
  {
    "title": "Alimentation",
    "description": "Mieux manger sans multiplier les interdits, selon vos besoins et vos préférences."
  },
  {
    "title": "Faim, satiété et émotions",
    "description": "Reconnaître vos sensations et comprendre ce qui influence vos choix."
  },
  {
    "title": "Mouvement",
    "description": "Retrouver le plaisir de bouger, réduire le temps assis et préserver vos muscles."
  },
  {
    "title": "Sommeil et récupération",
    "description": "Tenir compte du sommeil, du stress et de la fatigue dans votre progression."
  }
];
const menu = document.querySelector('.menu');
const nav = document.querySelector('#nav');
function setMenu(open, restoreFocus = false) {
  nav.classList.toggle('open', open);
  menu.setAttribute('aria-expanded', String(open));
  menu.setAttribute('aria-label', open ? 'Fermer le menu' : 'Ouvrir le menu');
  menu.textContent = open ? '✕' : '☰';
  if (restoreFocus) menu.focus();
}
menu.addEventListener('click', () => setMenu(!nav.classList.contains('open')));
nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => setMenu(false)));
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && nav.classList.contains('open')) setMenu(false, true);
});
document.addEventListener('pointerdown', e => {
  if (nav.classList.contains('open') && !e.target.closest('.header')) setMenu(false);
});
window.addEventListener('resize', () => {
  if (window.innerWidth > 800 && nav.classList.contains('open')) setMenu(false);
});
function selectPillar(i) {
  const item = pillars[i];
  if (!item) return;
  document.querySelector('#pillar-num').textContent = `0${i + 1} / 04`;
  document.querySelector('#pillar-title').textContent = item.title;
  document.querySelector('#pillar-description').textContent = item.description;
  document.querySelectorAll('.pillar').forEach((b, n) => b.setAttribute('aria-pressed', String(i === n)));
}
const mobileCompass = window.matchMedia('(width < 1200px)');
const pillarButtons = document.querySelectorAll('.pillar');
let selectedPillarIndex = Number(
  document.querySelector('.pillar[aria-pressed="true"]')?.dataset.pillar ?? 0
);

pillarButtons.forEach(button => {
  button.addEventListener('click', () => {
    if (mobileCompass.matches) return;

    selectedPillarIndex = Number(button.dataset.pillar);
    selectPillar(selectedPillarIndex);
  });
});

function syncCompassMode() {
  pillarButtons.forEach(button => {
    button.disabled = mobileCompass.matches;

    if (mobileCompass.matches) {
      button.removeAttribute('aria-pressed');
    }
  });

  if (!mobileCompass.matches) {
    selectPillar(selectedPillarIndex);
  }
}

mobileCompass.addEventListener('change', syncCompassMode);
syncCompassMode();

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
if (!reducedMotion.matches && window.gsap) {
  if (window.ScrollTrigger) gsap.registerPlugin(ScrollTrigger);
  gsap.from('.hero h1, .hero .actions, .hero-visual', {
    opacity:0, y:18, duration:.65, stagger:.12, ease:'power2.out', clearProps:'all'
  });
  if (window.ScrollTrigger) {
    gsap.utils.toArray('.reveal').forEach(el => gsap.from(el, {
      scrollTrigger:{trigger:el,start:'top 90%',once:true},
      opacity:0,y:18,duration:.55,ease:'power2.out',clearProps:'all'
    }));
    gsap.from('.compass-center, .pillar', {
      scrollTrigger:{trigger:'.compass',start:'top 80%',once:true},
      opacity:0,scale:.94,stagger:.1,duration:.5,ease:'power2.out',clearProps:'all'
    });
  }
}
