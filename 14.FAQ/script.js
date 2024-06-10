const toggleButtonElements = document.querySelectorAll(".faq-toggle");

toggleButtonElements.forEach((toggleButtonElement) => {
  toggleButtonElement.addEventListener("click", () => {
    toggleButtonElement.parentElement.classList.toggle("active");
  });
});
