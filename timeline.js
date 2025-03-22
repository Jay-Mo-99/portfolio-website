gsap.registerPlugin(ScrollTrigger);

// TimeLine Scroll Animation
const timelineTrack = document.querySelector(".timeline-track");
const totalScrollWidth = timelineTrack.scrollWidth - window.innerWidth;

gsap.fromTo(
    ".timeline-track",
    { x: 1500 }, // Locate the first timeline item
    {
        x: () => -totalScrollWidth,
        ease: "none",
        scrollTrigger: {
            trigger: ".timeline",
            start: "top top",
            end: () => `+=${totalScrollWidth * 1.2}`,
            scrub: 3,
            pin: true,
            snap: {
              snapTo: (progress) =>
                Math.round(progress * (document.querySelectorAll(".timeline-item").length - 1)) /
                (document.querySelectorAll(".timeline-item").length - 1),
              duration: 1,
              ease: "power2.inOut"
            },
            onUpdate: (self) => {
              if (self.progress >= 1) {
                gsap.to(window, {
                  scrollTo: ".gallery",
                  duration: 1,
                  ease: "power2.inOut"
                });
              }
            }
          }
    }
);