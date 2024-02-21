const arrowEl = document.getElementsByClassName("arrow-icon")[0];

setInterval(() => {
  arrowEl.style.transform = "translateY(-20px)";
  setTimeout(() => {
    arrowEl.style.transform = "translateY(20px)";
  }, 1500);
}, 3000);

function moveArrow() {
  arrowEl.style.transform = "translateY(-20px)";
  setTimeout(() => {
    arrowEl.style.transform = "translateY(20px)";
  }, 1500);
}

moveArrow();
