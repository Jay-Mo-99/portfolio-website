gsap.registerPlugin(ScrollTrigger);

const container = document.querySelector('.lines-container');
for (let i = 0; i < 24; i++) {
  const line = document.createElement('div');
  line.className = 'line';
  line.style.transform = `rotate(${i * 15}deg)`;
  container.appendChild(line);
}

// 선 투명도 & 스케일 애니메이션
gsap.fromTo(".line", 
  { opacity: 0, scaleY: 0.3 }, 
  {
    opacity: 0.2,
    scaleY: 1,
    duration: 1,
    scrollTrigger: {
      trigger: ".video-section",
      start: "top 75%", // 더 아래에서 시작
      end: "top center",
      scrub: true,
    }
  }
);


gsap.to(".video-wrapper", {
  scrollTrigger: {
    trigger: ".video-section",
    start: "top center",
    end: "center center",
    scrub: true,
  },
  width: "80vw",
  height: "80vh",
  opacity: 1,
});

gsap.to(".video-circle", {
  scrollTrigger: {
    trigger: ".video-section",
    start: "top 75%",
    end: "center center",
    scrub: true,
  },
  borderRadius: "35%",
});
  

const phrases = [
  "SOFTWARE DEVELOPER",
  "WEB DESIGNER",
  "UI/UX ENTHUSIAST",
  "BOOK LOVER",
  "NEUROSCIENCE CURIOUS",
  "FITNESS ENJOYER",
  "COFFEE LOVER",
  "AI CREATOR"
];

const textElement = document.querySelector('.rotating-text');
let index = 0;

function showNextPhrase() {
  textElement.style.opacity = 0;

  setTimeout(() => {
    textElement.textContent = phrases[index];
    textElement.style.opacity = 1;
    index = (index + 1) % phrases.length;
  }, 1000); 
}

showNextPhrase();
setInterval(showNextPhrase, 3000); 