
const intro = document.querySelector(".intro");
const video = intro.querySelector("video");
const text = intro.querySelector("h3");

const middle = document.querySelector(".middle");
const video2 = middle.querySelector("video");
const text2 = middle.querySelector("h3");

const end = document.querySelector(".end");
const video3 = end.querySelector("video");
const text3 = end.querySelector("h3");

//SCROLLMAGIC
const controller = new ScrollMagic.Controller();

//Scenes
let scene = new ScrollMagic.Scene({
  duration: 8000,
  triggerElement: intro,
  triggerHook: 0,
})
  .setPin(intro)
  .addTo(controller);

let scene2 = new ScrollMagic.Scene({
  duration: 6000,
  triggerElement: middle,
  triggerHook: 0,
})
  .setPin(middle)
  .addTo(controller);

let scene3 = new ScrollMagic.Scene({
  duration: 7000,
  triggerElement: end,
  triggerHook: 0,
})
  .setPin(end)
  .addTo(controller);

//Text Animation
const textAnim1 = TweenMax.fromTo(
  text,
  2,
  { opacity: 1, scale: 1 },
  { opacity: 0, scale: 1.3 }
);
const textAnim2 = TweenMax.fromTo(
  text2,
  2,
  { opacity: 1, scale: 1 },
  { opacity: 0, scale: 1.3 }
);
const textAnim3 = TweenMax.fromTo(
  text3,
  2,
  { opacity: 1, scale: 1 },
  { opacity: 0, scale: 1.3 }
);

let textScene1 = new ScrollMagic.Scene({
  duration: 8000,
  triggerElement: intro,
  triggerHook: 0,
})
  .setTween(textAnim1)
  .addTo(controller);

let textScene2 = new ScrollMagic.Scene({
  duration: 6000,
  triggerElement: middle,
  triggerHook: 0,
})
  .setTween(textAnim2)
  .addTo(controller);

let textScene3 = new ScrollMagic.Scene({
  duration: 8000,
  triggerElement: end,
  triggerHook: 0,
})
  .setTween(textAnim3)
  .addTo(controller);

//Video Animation
let accelamount = .1;
let scrollpos = 0;
let delay = 0;

scene.on("update", (e) => {
  scrollpos = e.scrollPos / 1000;
});

setInterval(() => {
  delay += (scrollpos - delay) * accelamount;

  video.currentTime = delay;
  video2.currentTime = delay - 10;
  video3.currentTime = delay - 16;
}, 33.3);
