//Handle Hint and Description in Card in project section
document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".project-card");
  
    cards.forEach(card => {
      card.addEventListener("click", () => {
        card.classList.toggle("active");
      });
    });
  });
  
//Block event effect while clicking card
  document.querySelectorAll(".github-link").forEach(link => {
    link.addEventListener("click", (e) => {
        e.stopPropagation(); 
    });
});