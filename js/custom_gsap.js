gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(TextPlugin);

gsap.set(".pr_after", { display: "flex", opacity: 0 });

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".con02",
    start: "top top",
    end: "+=150%",
    scrub: 1,
    pin: true,
    // markers: true,
  },
});

tl.to(".circ", {
  width: "100%",
  height: "100%",
  borderRadius: 0,
  duration: 1,
  ease: "none",
})
  .to(
    ".pr_before h3",
    {
      opacity: 0,
      duration: 0.5,
      ease: "none",
    },
    "<",
  )
  .to(".pr_after", {
    opacity: 1,
    duration: 0.5,
    ease: "none",
  });

const ring = document.querySelector(".time_cir");
gsap.set(ring, { "--p": 0, "--p2": 0 });
gsap.set(".con03 ul li", { opacity: 0, y: 30 });

const tl2 = gsap.timeline({
  // ← tl과 이름 겹치지 않게 tl2로
  scrollTrigger: {
    trigger: ".con03",
    start: "top top",
    end: "+=400%",
    scrub: 1,
    pin: true,
  },
});

tl2
  .to(ring, { "--p": 100, duration: 4, ease: "none" })
  .to(".history_25 li:nth-child(1)", { opacity: 1, y: 0, duration: 1 }, 0.3)
  .to(".history_25 li:nth-child(2)", { opacity: 1, y: 0, duration: 1 }, 1.5)
  .to(".history_25 li:nth-child(3)", { opacity: 1, y: 0, duration: 1 }, 2.6)
  .to(".history_25 li:nth-child(4)", { opacity: 1, y: 0, duration: 1 }, 3.6)
  .to(".history_25 li", { opacity: 0, y: 30, duration: 1 }, 4.2)
  .call(
    () => {
      ring.textContent = tl2.scrollTrigger.direction === 1 ? "2026" : "2025";
    },
    null,
    4.6,
  )
  .to(ring, { "--p": 100, duration: 4, ease: "none" }, 5.1)
  .to(ring, { "--p2": 100, duration: 4, ease: "none" }, 5.1)
  .to(".history_26 li:nth-child(1)", { opacity: 1, y: 0, duration: 1 }, 5.4)
  .to(".history_26 li:nth-child(2)", { opacity: 1, y: 0, duration: 1 }, 6.6)
  .to(".history_26 li:nth-child(3)", { opacity: 1, y: 0, duration: 1 }, 7.7)
  .to(".history_26 li:nth-child(4)", { opacity: 1, y: 0, duration: 1 }, 8.7);

(function createCircleBackground() {
  const container = document.querySelector(".con03");

  const circles = [
    { size: 300, pos: "top: -50px; left: -40px;" },
    { size: 220, pos: "top: 50px; right: 80px;" },
    { size: 200, pos: "bottom: 20px; left: 10%;" },
    { size: 120, pos: "bottom: 50px; right: 15%;" },
  ];

  circles.forEach(({ size, pos }) => {
    const circle = document.createElement("div");

    Object.assign(circle.style, {
      position: "absolute",
      width: size + "px",
      height: size + "px",
      borderRadius: "50%",
      background: "#00b3c7",
      opacity: "0.1",
      zIndex: "-10",
      pointerEvents: "none",
    });
    circle.style.cssText += pos; // top/left/right/bottom 적용

    container.appendChild(circle);

    gsap.to(circle, {
      x: gsap.utils.random(-20, 20),
      y: gsap.utils.random(-20, 20),
      duration: gsap.utils.random(8, 14),
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
  });
})();
