const buttonToggles = document.querySelectorAll(".faq-toggle");

buttonToggles.forEach((button) => {
  button.addEventListener("click", () => {
    button.parentNode.classList.toggle("active");
  });
});

// const toggles = document.querySelectorAll(".faq-toggle");

// toggles.forEach((toggle) => {
//   toggle.addEventListener("click", () => {
//     faqItem = toggle.parentNode;

//     if (faqItem.classList.contains("active")) {
//       faqItem.classList.remove("active");
//     } else {
//       faqItem.classList.add("active");
//     }
//   });
// });
