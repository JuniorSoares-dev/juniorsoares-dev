document.documentElement.classList.add("js-reveal-enabled");

// Cria o observador de tela
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target); // Para a animação rodar apenas uma vez
      }
    });
  },
  {
    threshold: 0.15, // Dispara quando 15% do elemento aparece na tela
  },
);

// Seleciona todos os elementos com a classe .reveal e ativa o observador neles
document.querySelectorAll(".reveal").forEach((element) => {
  observer.observe(element);
});
