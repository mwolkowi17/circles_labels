import "./style.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
//import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(ScrollTrigger);

for (let a = 0; a <= document.getElementsByClassName("round").length - 1; a++) {
  const koloNext = document.getElementsByClassName("round")[a];
  console.log(koloNext.style);
  // const wys = 100 * Math.sin(a * 200) + 200;
  const wys = 20 * a + 30;
  const bok = 250 * Math.sin(a * 0.2) + 600;
  const wysToString = wys.toString();
  const bokToString = bok.toString();
  console.log(wysToString + " px");
  console.log(bokToString + " px");

  const wysReady = wysToString + "px";
  const bokReady = bokToString + "px";
  koloNext.style.top = wysReady;
  koloNext.style.left = bokReady;

  // gsap.to(koloNext, {
  //   scale: 2,
  //   duration: 1,
  //   scrollTrigger: {
  //     trigger: ".box",
  //     scrub: 2,
  //     markers: true,
  //   },
  // });
}

gsap.to(".box", {
  scale: 2,
  duration: 1,
  scrollTrigger: {
    trigger: ".box",
    start: "top top+=300",

    scrub: 2,
    // markers: true,
  },
  // scale: 2,
  // duration: 1,
  // scrollTrigger: {
  //   trigger: ".box",
  //   scrub: 2,
  //   markers: true,
  // },
});

gsap.to(".round", {
  y: 100,
  stagger: 0.5, // 0.1 seconds between when each ".box" element starts animating
  scrollTrigger: {
    trigger: ".box",
    start: "top top+=300",

    scrub: 2,
    markers: true,
  },
});
