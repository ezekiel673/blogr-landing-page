// Menu for desktop menu variable
const nav1 = document.querySelector(".nav-1");

const nav2 = document.querySelector(".nav-2");

const nav3 = document.querySelector(".nav-3");

const subNav = document.querySelectorAll(".sub-nav");

const navHeads = document.querySelectorAll(".navigate h3");

const arrow = document.querySelectorAll(".arrow");

subNav[0].style.display = "none";
subNav[1].style.display = "none";
subNav[2].style.display = "none";

function mouseOver() {
  nav1.addEventListener("mouseover", (e) => {
   arrow[0].style.transform = "rotate(180deg)";
    arrow[1].style.transform = "rotate(0deg)";
    arrow[2].style.transform = "rotate(0deg)";
    subNav[0].style.display = " flex";
    subNav[1].style.display = " none";
    subNav[2].style.display = " none";
    navHeads[0].style.textDecoration = "underline";
    navHeads[1].style.textDecoration = "none";
    navHeads[2].style.textDecoration = "none";

    navHeads[0].style.color = "white";
    navHeads[1].style.color = "hsl(240, 2%, 79%)";
    navHeads[2].style.color = "hsl(240, 2%, 79%)";
    e.preventDefault();
  });

  nav2.addEventListener("mouseover", (e) => {
   arrow[1].style.transform = "rotate(180deg)";
    arrow[2].style.transform = "rotate(0deg)";
    arrow[0].style.transform = "rotate(0deg)";
    subNav[1].style.display = " flex";
    subNav[2].style.display = " none";
    subNav[0].style.display = " none";
    navHeads[1].style.textDecoration = "underline";
    navHeads[2].style.textDecoration = "none";
    navHeads[0].style.textDecoration = "none";
    navHeads[1].style.color = "white";
    navHeads[2].style.color = "hsl(240, 2%, 79%)";
    navHeads[0].style.color = "hsl(240, 2%, 79%)";

    e.preventDefault();
  });

  nav3.addEventListener("mouseover", (e) => {
   arrow[2].style.transform = "rotate(180deg)";
    arrow[1].style.transform = "rotate(0deg)";
    arrow[0].style.transform = "rotate(0deg)";
    subNav[2].style.display = " flex";
    subNav[0].style.display = " none";
    subNav[1].style.display = " none";
    navHeads[2].style.textDecoration = "underline";
    navHeads[0].style.textDecoration = "none";
    navHeads[1].style.textDecoration = "none";
    navHeads[2].style.color = "white";
    navHeads[1].style.color = "hsl(240, 2%, 79%)";
    navHeads[0].style.color = "hsl(240, 2%, 79%)";
    e.preventDefault();
  });
}

mouseOver();

function mouseLeaveSubNav() {
  nav1.addEventListener("click", (e) => {
    arrow[0].style.transform = "rotate(0deg)";
    subNav[0].style.display = " none";
    navHeads[0].style.textDecoration = "none";
    navHeads[0].style.color = "hsl(240, 2%, 79%)";
    e.preventDefault();
  });

   subNav[0].addEventListener("mouseleave", (e) => {
     arrow[0].style.transform = "rotate(0deg)";
     subNav[0].style.display = " none";
     navHeads[0].style.textDecoration = "none";
     navHeads[0].style.color = "hsl(240, 2%, 79%)";
     e.preventDefault();
   });

  nav2.addEventListener("click", (e) => {
    arrow[1].style.transform = "rotate(0deg)";
    subNav[1].style.display = " none";
    navHeads[1].style.textDecoration = "none";
    navHeads[1].style.color = "hsl(240, 2%, 79%)";
    e.preventDefault();
  });

   subNav[1].addEventListener("mouseleave", (e) => {
     arrow[1].style.transform = "rotate(0deg)";
     subNav[1].style.display = " none";
     navHeads[1].style.textDecoration = "none";
     navHeads[1].style.color = "hsl(240, 2%, 79%)";
     e.preventDefault();
   });

  

  nav3.addEventListener("click", (e) => {
    arrow[2].style.transform = "rotate(0deg)";
    subNav[2].style.display = " none";
    navHeads[2].style.textDecoration = "none";
    navHeads[2].style.color = "hsl(240, 2%, 79%)";
    e.preventDefault();
  });

 subNav[2].addEventListener("mouseleave", (e) => {
    arrow[2].style.transform = "rotate(0deg)";
    subNav[2].style.display = " none";
    navHeads[2].style.textDecoration = "none";
    navHeads[2].style.color = "hsl(240, 2%, 79%)";
    e.preventDefault();
  });
}

mouseLeaveSubNav();

// Menu for mobile menu variable
const mobileMenuClose = document.querySelector(".hamburger");

const mobileMenuOpen = document.querySelector(".close");

const mobileMenuDisplay = document.querySelector(".mobile-menu-display");

const productMenu = document.querySelector(".product-menu");

const companyMenu = document.querySelector(".company-menu");

const connectMenu = document.querySelector(".connect-menu");

const dropDowns = document.querySelectorAll(".drop-down");

const darkArrow = document.querySelectorAll(".mobile-menu-display img");

const mobileMenuHead = document.querySelectorAll(".mobile-menu-display h3");


function mobileMenu() {
  mobileMenuClose.addEventListener("click", (e) => {
    mobileMenuClose.style.display = "none";
    mobileMenuOpen.style.visibility = "visible";
    if (window.innerWidth <= 800) {
      mobileMenuDisplay.style.display = "flex";
    } else {
      mobileMenuDisplay.style.display = "none";
    }
  });


  mobileMenuOpen.addEventListener("click", (e) => {
    mobileMenuOpen.style.visibility = "hidden";
    mobileMenuClose.style.display = "block";
    mobileMenuDisplay.style.display = "none";
  });

  productMenu.addEventListener("click", (e) => {
    if (
      dropDowns[0].style.display == "flex" &&
      dropDowns[1].style.display == "none" &&
      dropDowns[2].style.display == "none"
    ) {
      dropDowns[0].style.display = "none";
      dropDowns[1].style.display = "none";
      dropDowns[2].style.display = "none";
      darkArrow[0].style.transform = "none";
      mobileMenuHead[0].style.color = "hsl(207, 13%, 34%)";
      
    } else {
      dropDowns[0].style.display = "flex";
      dropDowns[1].style.display = "none";
      dropDowns[2].style.display = "none";
      darkArrow[0].style.transform = "rotate(180deg)";
      darkArrow[1].style.transform = "rotate(360deg)";
      darkArrow[2].style.transform = "rotate(360deg)";
      mobileMenuHead[0].style.color = "hsla(207, 13%, 34%,0.5)";
      mobileMenuHead[1].style.color = "hsl(207, 13%, 34%)";
      mobileMenuHead[2].style.color = "hsl(207, 13%, 34%)";
    }
  });

  companyMenu.addEventListener("click", (e) => {
    if (
      dropDowns[0].style.display == "none" &&
      dropDowns[1].style.display == "flex" &&
      dropDowns[2].style.display == "none"
    ) {
      dropDowns[0].style.display = "none";
      dropDowns[1].style.display = "none";
      dropDowns[2].style.display = "none";
      darkArrow[1].style.transform = "none";
      mobileMenuHead[1].style.color = "hsl(207, 13%, 34%)";
    } else {
      dropDowns[0].style.display = "none";
      dropDowns[1].style.display = "flex";
      dropDowns[2].style.display = "none";
      darkArrow[0].style.transform = "rotate(360deg)";
      darkArrow[1].style.transform = "rotate(180deg)";
      darkArrow[2].style.transform = "rotate(360deg)";
      mobileMenuHead[1].style.color = "hsla(207, 13%, 34%,0.5)";
      mobileMenuHead[0].style.color = "hsl(207, 13%, 34%)";
      mobileMenuHead[2].style.color = "hsl(207, 13%, 34%)";
    }
  });

  connectMenu.addEventListener("click", (e) => {
    if (
      dropDowns[0].style.display == "none" &&
      dropDowns[1].style.display == "none" &&
      dropDowns[2].style.display == "flex"
    ) {
      dropDowns[0].style.display = "none";
      dropDowns[1].style.display = "none";
      dropDowns[2].style.display = "none";
      darkArrow[2].style.transform = "none";
       mobileMenuHead[2].style.color = "hsl(207, 13%, 34%)";
    } else {
      dropDowns[0].style.display = "none";
      dropDowns[1].style.display = "none";
      dropDowns[2].style.display = "flex";
      darkArrow[2].style.transform = "rotate(180deg)";
      darkArrow[1].style.transform = "none";
      darkArrow[0].style.transform = "none";
      mobileMenuHead[2].style.color = "hsla(207, 13%, 34%,0.5)";
      mobileMenuHead[0].style.color = "hsl(207, 13%, 34%)";
      mobileMenuHead[1].style.color = "hsl(207, 13%, 34%)";
    }
  });
}

mobileMenu();

 
// Menu for desktop menu variable
const nav1 = document.querySelector(".nav-1");

const nav2 = document.querySelector(".nav-2");

const nav3 = document.querySelector(".nav-3");

const subNav = document.querySelectorAll(".sub-nav");

const navHeads = document.querySelectorAll(".navigate h3");

const arrow = document.querySelectorAll(".arrow");

subNav[0].style.display = "none";
subNav[1].style.display = "none";
subNav[2].style.display = "none";

function mouseOver() {
  nav1.addEventListener("mouseover", (e) => {
    arrow[0].style.transform = "rotate(180deg)";
    arrow[1].style.transform = "rotate(0deg)";
    arrow[2].style.transform = "rotate(0deg)";
    subNav[0].style.display = " flex";
    subNav[1].style.display = " none";
    subNav[2].style.display = " none";
    navHeads[0].style.textDecoration = "underline";
    navHeads[1].style.textDecoration = "none";
    navHeads[2].style.textDecoration = "none";

    navHeads[0].style.color = "white";
    navHeads[1].style.color = "hsl(240, 2%, 79%)";
    navHeads[2].style.color = "hsl(240, 2%, 79%)";
    e.preventDefault();
  });

  nav2.addEventListener("mouseover", (e) => {
    arrow[1].style.transform = "rotate(180deg)";
    arrow[2].style.transform = "rotate(0deg)";
    arrow[0].style.transform = "rotate(0deg)";
    subNav[1].style.display = " flex";
    subNav[2].style.display = " none";
    subNav[0].style.display = " none";
    navHeads[1].style.textDecoration = "underline";
    navHeads[2].style.textDecoration = "none";
    navHeads[0].style.textDecoration = "none";
    navHeads[1].style.color = "white";
    navHeads[2].style.color = "hsl(240, 2%, 79%)";
    navHeads[0].style.color = "hsl(240, 2%, 79%)";

    e.preventDefault();
  });

  nav3.addEventListener("mouseover", (e) => {
    arrow[2].style.transform = "rotate(180deg)";
    arrow[1].style.transform = "rotate(0deg)";
    arrow[0].style.transform = "rotate(0deg)";
    subNav[2].style.display = " flex";
    subNav[0].style.display = " none";
    subNav[1].style.display = " none";
    navHeads[2].style.textDecoration = "underline";
    navHeads[0].style.textDecoration = "none";
    navHeads[1].style.textDecoration = "none";
    navHeads[2].style.color = "white";
    navHeads[1].style.color = "hsl(240, 2%, 79%)";
    navHeads[0].style.color = "hsl(240, 2%, 79%)";
    e.preventDefault();
  });
}

mouseOver();

function mouseLeaveSubNav() {
  nav1.addEventListener("click", (e) => {
    arrow[0].style.transform = "rotate(0deg)";
    subNav[0].style.display = " none";
    navHeads[0].style.textDecoration = "none";
    navHeads[0].style.color = "hsl(240, 2%, 79%)";
    e.preventDefault();
  });

   subNav[0].addEventListener("mouseleave", (e) => {
     arrow[0].style.transform = "rotate(0deg)";
     subNav[0].style.display = " none";
     navHeads[0].style.textDecoration = "none";
     navHeads[0].style.color = "hsl(240, 2%, 79%)";
     e.preventDefault();
   });

  nav2.addEventListener("click", (e) => {
    arrow[1].style.transform = "rotate(0deg)";
    subNav[1].style.display = " none";
    navHeads[1].style.textDecoration = "none";
    navHeads[1].style.color = "hsl(240, 2%, 79%)";
    e.preventDefault();
  });

   subNav[1].addEventListener("mouseleave", (e) => {
     arrow[1].style.transform = "rotate(0deg)";
     subNav[1].style.display = " none";
     navHeads[1].style.textDecoration = "none";
     navHeads[1].style.color = "hsl(240, 2%, 79%)";
     e.preventDefault();
   });

  

  nav3.addEventListener("click", (e) => {
    arrow[2].style.transform = "rotate(0deg)";
    subNav[2].style.display = " none";
    navHeads[2].style.textDecoration = "none";
    navHeads[2].style.color = "hsl(240, 2%, 79%)";
    e.preventDefault();
  });

 subNav[2].addEventListener("mouseleave", (e) => {
    arrow[2].style.transform = "rotate(0deg)";
    subNav[2].style.display = " none";
    navHeads[2].style.textDecoration = "none";
    navHeads[2].style.color = "hsl(240, 2%, 79%)";
    e.preventDefault();
  });
}

mouseLeaveSubNav();

// Menu for mobile menu variable
const mobileMenuClose = document.querySelector(".hamburger");

const mobileMenuOpen = document.querySelector(".close");

const mobileMenuDisplay = document.querySelector(".mobile-menu-display");

const productMenu = document.querySelector(".product-menu");

const companyMenu = document.querySelector(".company-menu");

const connectMenu = document.querySelector(".connect-menu");

const dropDowns = document.querySelectorAll(".drop-down");

const darkArrow = document.querySelectorAll(".mobile-menu-display img");

const mobileMenuHead = document.querySelectorAll(".mobile-menu-display h3");


function mobileMenu() {
  mobileMenuClose.addEventListener("click", (e) => {
    mobileMenuClose.style.display = "none";
    mobileMenuOpen.style.visibility = "visible";
    if (window.innerWidth <= 800) {
      mobileMenuDisplay.style.display = "flex";
    } else {
      mobileMenuDisplay.style.display = "none";
    }
  });


  mobileMenuOpen.addEventListener("click", (e) => {
    mobileMenuOpen.style.visibility = "hidden";
    mobileMenuClose.style.display = "block";
    mobileMenuDisplay.style.display = "none";
  });

  productMenu.addEventListener("click", (e) => {
    if (
      dropDowns[0].style.display == "flex" &&
      dropDowns[1].style.display == "none" &&
      dropDowns[2].style.display == "none"
    ) {
      dropDowns[0].style.display = "none";
      dropDowns[1].style.display = "none";
      dropDowns[2].style.display = "none";
      darkArrow[0].style.transform = "none";
      mobileMenuHead[0].style.color = "hsl(207, 13%, 34%)";
      
    } else {
      dropDowns[0].style.display = "flex";
      dropDowns[1].style.display = "none";
      dropDowns[2].style.display = "none";
      darkArrow[0].style.transform = "rotate(180deg)";
      darkArrow[1].style.transform = "rotate(360deg)";
      darkArrow[2].style.transform = "rotate(360deg)";
      mobileMenuHead[0].style.color = "hsla(207, 13%, 34%,0.5)";
      mobileMenuHead[1].style.color = "hsl(207, 13%, 34%)";
      mobileMenuHead[2].style.color = "hsl(207, 13%, 34%)";
    }
  });

  companyMenu.addEventListener("click", (e) => {
    if (
      dropDowns[0].style.display == "none" &&
      dropDowns[1].style.display == "flex" &&
      dropDowns[2].style.display == "none"
    ) {
      dropDowns[0].style.display = "none";
      dropDowns[1].style.display = "none";
      dropDowns[2].style.display = "none";
      darkArrow[1].style.transform = "none";
      mobileMenuHead[1].style.color = "hsl(207, 13%, 34%)";
    } else {
      dropDowns[0].style.display = "none";
      dropDowns[1].style.display = "flex";
      dropDowns[2].style.display = "none";
      darkArrow[0].style.transform = "rotate(360deg)";
      darkArrow[1].style.transform = "rotate(180deg)";
      darkArrow[2].style.transform = "rotate(360deg)";
      mobileMenuHead[1].style.color = "hsla(207, 13%, 34%,0.5)";
      mobileMenuHead[0].style.color = "hsl(207, 13%, 34%)";
      mobileMenuHead[2].style.color = "hsl(207, 13%, 34%)";
    }
  });

  connectMenu.addEventListener("click", (e) => {
    if (
      dropDowns[0].style.display == "none" &&
      dropDowns[1].style.display == "none" &&
      dropDowns[2].style.display == "flex"
    ) {
      dropDowns[0].style.display = "none";
      dropDowns[1].style.display = "none";
      dropDowns[2].style.display = "none";
      darkArrow[2].style.transform = "none";
       mobileMenuHead[2].style.color = "hsl(207, 13%, 34%)";
    } else {
      dropDowns[0].style.display = "none";
      dropDowns[1].style.display = "none";
      dropDowns[2].style.display = "flex";
      darkArrow[2].style.transform = "rotate(180deg)";
      darkArrow[1].style.transform = "none";
      darkArrow[0].style.transform = "none";
      mobileMenuHead[2].style.color = "hsla(207, 13%, 34%,0.5)";
      mobileMenuHead[0].style.color = "hsl(207, 13%, 34%)";
      mobileMenuHead[1].style.color = "hsl(207, 13%, 34%)";
    }
  });
}

mobileMenu();

 
