const boxes = document.querySelectorAll(".box");

// Attach the function to the scroll event
window.addEventListener("scroll", checkScroll);

// Call the function initially to check the initial state
checkScroll();

function checkScroll() {
  const triggerBottom = (window.innerHeight / 5) * 4;
  boxes.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;

    // Check if the box is within the viewport
    if (boxTop < triggerBottom) {
      box.classList.add("show");
    } else {
      box.classList.remove("show");
    }
  });
}

// const boxes = document.querySelectorAll(".box");

// window.addEventListener("scroll", checkBoxes);

// checkBoxes();

// function checkBoxes() {
//   const triggerBottom = (window.innerHeight / 5) * 4;

//   boxes.forEach((box) => {
//     const boxTop = box.getBoundingClientRect().top;

//     if (boxTop < triggerBottom) {
//       box.classList.add("show");
//     } else {
//       box.classList.remove("show");
//     }
//   });
// }
