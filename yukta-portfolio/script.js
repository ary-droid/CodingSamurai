function toggleMenu(){
 
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
   if (event) event.preventDefault(); 
  menu.classList.toggle("open");
  icon.classList.toggle("open");
  if (event && event.target && event.target.getAttribute("href")) {
    const targetId = event.target.getAttribute("href");
    setTimeout(() => {
      const target = document.querySelector(targetId);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }, 300); // enough time for menu to animate
  }


}