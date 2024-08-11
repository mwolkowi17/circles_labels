import "./style.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

let koloToClose = [];

for (let a = 0; a <= document.getElementsByClassName("round").length - 1; a++) {
  const koloNext = document.getElementsByClassName("round")[a];
  koloToClose.push(koloNext);
  console.log(koloNext.style);
  const wys = 20 * a + 30;
  const bok = 250 * Math.sin(a * 0.2) + 800;
  const wysToString = wys.toString();
  const bokToString = bok.toString();
  console.log(wysToString + " px");
  console.log(bokToString + " px");

  const wysReady = wysToString + "px";
  const bokReady = bokToString + "px";
  koloNext.style.top = wysReady;
  koloNext.style.left = bokReady;
}

gsap.to(".box", {
  scale: 2,
  duration: 1,
  scrollTrigger: {
    trigger: ".box",
    start: "top top+=300",

    scrub: 2,
  },
});

let tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".round",
    start: "top top+=200",

    scrub: 6,
    markers: true,
  },
});

for (let a = 0; a <= document.getElementsByClassName("round").length - 1; a++) {
  tl.fromTo(
    koloToClose[a],
    {
      scale: 1,
      opacity: 0.4,
    },
    {
      scale: 1.2,
      stagger: 5,

      duration: 3,
      opacity: 1,
    }
  ).to(koloToClose[a], {
    scale: 1,
    opacity: 0.4,
  });

  koloToClose[a].addEventListener("mouseover", () => {
    gsap.to(koloToClose[a], { scale: 2 });
  });

  koloToClose[a].addEventListener("mouseout", () => {
    gsap.to(koloToClose[a], { scale: 1 });
  });

  koloToClose[a].addEventListener("click", () => {
    const label = document.createElement("div");
    label.className = "LabelOne";
    label.style.top = koloToClose[a].style.top;
    const node = document.createTextNode("This is new.");
    label.appendChild(node);
    const currentDiv = document.getElementsByClassName("FirstSection")[0];
    currentDiv.appendChild(label);

    if (document.getElementsByClassName("LabelOne")[0] != null) {
      const buttonOff = document.getElementsByClassName("LabelOne")[0];
      console.log("off exist");
      buttonOff.addEventListener("click", () => {
        console.log("clicked");
        const currentDiv = document.getElementsByClassName("FirstSection")[0];
        const docToRemove = document.getElementsByClassName("LabelOne")[0];
        currentDiv.removeChild(docToRemove);
      });
    }
  });
}
