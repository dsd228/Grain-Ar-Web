// Header más sólido al hacer scroll
window.addEventListener("scroll", function() {
  const header = document.querySelector(".header");
  if(window.scrollY > 50){
    header.style.background = "rgba(15,17,18,0.95)";
  } else {
    header.style.background = "rgba(15,17,18,0.85)";
  }
});
