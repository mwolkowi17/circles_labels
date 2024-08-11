import "./style.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(MotionPathPlugin, ScrollTrigger);

for (let a = 0; a <= document.getElementsByClassName("round").length - 1; a++) {
  const koloNext = document.getElementsByClassName("round")[a];
  console.log(koloNext.style);
  // const wys = 100 * Math.sin(a * 200) + 200;
  const wys = 20 * a + 30;
  const bok = 50 * Math.sin(a * 200) + 600;
  const wysToString = wys.toString();
  const bokToString = bok.toString();
  console.log(wysToString + " px");
  console.log(bokToString + " px");

  const wysReady = wysToString + "px";
  const bokReady = bokToString + "px";
  koloNext.style.top = wysReady;
  koloNext.style.left = bokReady;
}
