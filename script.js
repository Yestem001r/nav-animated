// bars animation

const barsContainer = document.querySelector(".bars-container");
const container = document.querySelector(".container");
const navItems = document.querySelectorAll(".nav-items li");

barsContainer.addEventListener("click", () => {
  barsContainer.classList.toggle("change");

  if (barsContainer.classList.contains("change")) {
    navItems.forEach((navItem, i) => {
      navItem.classList.remove(`slide-out-${i}`);
      navItem.classList.add(`slide-in-${i}`);
    });
    container.classList.replace("left", "right");
  } else {
    navItems.forEach((navItem, i) => {
      navItem.classList.remove(`slide-in-${i}`);
      navItem.classList.add(`slide-out-${i}`);
    });
    setTimeout(() => {
      container.classList.replace("right", "left");
    }, 500);
  }
  console.log(barsContainer.classList.contains("change"));
});
