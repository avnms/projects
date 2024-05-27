const boxes = document.querySelectorAll(".box");

function checkBoxes() {
  const tiggerBottom = (innerHeight / 5) * 4;
  boxes.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;
    boxTop < tiggerBottom
      ? box.classList.add("show")
      : box.classList.remove("show");
  });
}

checkBoxes();
addEventListener("scroll", checkBoxes);
