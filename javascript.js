// const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
// styleSwitcherToggle.addEventListener("click", () => {
//     document.querySelector(".style-switcher").classList.toggle(".open");
// });
// window.addEventListener("scroll", () => {
//       if (document.querySelector(".style-switcher").classList.contains("open")) {
//             document.querySelector("style-switcher").classList.removes("open");
//       }
// })

console.log("connected");

const toggleButton = document.getElementById("toggleButton");
const content = document.getElementById("toggleContent");

toggleButton.addEventListener("click", () => {
    content.classList.add("toggleColorOpen");
    content.classList.remove("toggleColor");
});
