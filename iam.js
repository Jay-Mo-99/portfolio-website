const target = document.querySelector('#iam-section .card-container');
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        document.querySelector('#iam-section').classList.add('active');
      } else {
        document.querySelector('#iam-section').classList.remove('active');
      }
    });
  },
  { threshold: 0.5 }
);
observer.observe(target);


