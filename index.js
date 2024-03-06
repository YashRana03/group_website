const arrowEl = document.getElementsByClassName("arrow-icon")[0];

const infoIcons = document.getElementsByClassName("info-logo");

const card = document.getElementsByClassName("card");
const cardBody = document.getElementsByClassName("card-body");

let moveBy = "0";

console.log(cardBody[0]);
console.log(cardBody[0].style.scale);
for (let i = 0; i < 3; i++) {
  card[i].addEventListener("click", (event) => {
    cardBody[i].style.right = moveBy;
    if (moveBy == "0") {
      moveBy = "-100%";
    } else {
      moveBy = "0";
    }
  });
}

// card.addEventListener("click", (event) => {
//   cardBody.style.right = moveBy;
//   if (moveBy == "0") {
//     moveBy = "-100%";
//   } else {
//     moveBy = "0";
//   }
// });

// cardBody.addEventListener("click", (event) => {
//   cardBody.style.right = "-100%";
// });

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
