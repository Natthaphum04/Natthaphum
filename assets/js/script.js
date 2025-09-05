
document.querySelector('.hamburger').addEventListener('click',function(){
    document.querySelector('.menu').classList.toggle('show');
});

document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");
  
    window.addEventListener("scroll", () => {
      let currentSection = "";
  
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 150; // ระยะ offset
        if (scrollY >= sectionTop) {
          currentSection = section.getAttribute("id");
        }
      });
  
      navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${currentSection}`) {
          link.classList.add("active");
        }
      });
    });
  });
  


