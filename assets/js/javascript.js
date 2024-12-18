const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
styleSwitcherToggle.addEventListener("click", () => {
    document.querySelector(".style-switcher").classList.toggle("open");
});

// toggle style switcher

window.addEventListener("scroll", () => {
    if (document.querySelector(".style-switcher").classList.contains("open")) {
        document.querySelector(".style-switcher").classList.remove("open");
    }
});

//  theme colors
const alternateStyles = document.querySelectorAll(".alternate-style");
function setActiveStyle(colors) {
    alternateStyles.forEach((style) => {
        if (colors === style.getAttribute("title")) {
            style.removeAttribute("disabled");
        } else {
            style.setAttribute("disabled", "true");
        }
    });
}

//  theme light and dark mode

const dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click", () => {
    dayNight.querySelector("i").classList.toggle("fa-sun");
    dayNight.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark");
});
window.addEventListener("load", () => {
    if (document.body.classList.contains("dark")) {
        dayNight.querySelector("i").classList.add("fa-sun");
    } else {
        dayNight.querySelector("i").classList.add("fa-moon");
    }
});

const sidebar = document.querySelector(".aside");

const logo = document.querySelector(".logo");
logo.addEventListener("click", () => {
    sidebar.classList.toggle("collapsed");
});






// document.getElementById("downloadCvButton").addEventListener("click", () => {
//       const fileUrl = "resume.pdf"; // Replace with your CV file path
//       const anchor = document.createElement("a"); // Create a temporary <a> element
//       anchor.href = fileUrl;
//       anchor.download = "Download.pdf"; // Specify the file name
//       anchor.click(); // Trigger the download
//       anchor.remove(); // Clean up the DOM
//   });
