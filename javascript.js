const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
styleSwitcherToggle.addEventListener("click", () => {
      document.querySelector(".style-switcher").classList.toggle("open");
})

// toggle style switcher

window.addEventListener("scroll", () => {
      if (document.querySelector(".style-switcher").classList.contains("open")) {
            document.querySelector(".style-switcher").classList.remove("open");
      }
})

//  theme colors
const alternateStyles = document.querySelector(".alternare-style");
function setActiveStyle(color){
      alternateStyles.forEach(style) => {
            if(color === style.getAttribute('title'))
                  {
                  style.removeAttribute("disabled", "true");
            }
      })    
}   


//  theme light and dark mode 

const dayNight = document.querySelector(".day-night");
window.addEventListener("load", ()=>{
      if(document.body.classList.contains("dark"))
      {
            dayNight.querySelector('i').classList.add("fa-sun");

      }
      else{
            dayNight.querySelector('i').classList.add("fa-moon");
      }
})