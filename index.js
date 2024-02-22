const arrowEl = document.getElementsByClassName("arrow-icon")[0];

const infoIcons = document.getElementsByClassName("info-logo");

setInterval(() => {
  arrowEl.style.transform = "translateY(-10px)";
  setTimeout(() => {
    arrowEl.style.transform = "translateY(10px)";
  }, 1500);
}, 3000);

function moveArrow() {
  arrowEl.style.transform = "translateY(-10px)";
  setTimeout(() => {
    arrowEl.style.transform = "translateY(10px)";
  }, 1500);
}

moveArrow();
