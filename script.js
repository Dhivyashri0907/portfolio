
    


// TYPING EFFECT

const textArray = [
  "Frontend Developer",
  "Web Designer",
  "JavaScript Developer",
  "Freelancer"
];

let typingText = document.getElementById("typing");

let arrayIndex = 0;
let charIndex = 0;

function typeEffect(){

  if(charIndex < textArray[arrayIndex].length){

    typingText.textContent += textArray[arrayIndex].charAt(charIndex);

    charIndex++;

    setTimeout(typeEffect,100);

  }
  else{

    setTimeout(eraseEffect,1500);

  }

}

function eraseEffect(){

  if(typingText.textContent.length > 0){

    typingText.textContent =
    typingText.textContent.slice(0,-1);

    setTimeout(eraseEffect,50);

  }
  else{

    arrayIndex++;

    if(arrayIndex >= textArray.length){
      arrayIndex = 0;
    }

    charIndex = 0;

    setTimeout(typeEffect,500);

  }

}

window.onload = typeEffect;


// SCROLL REVEAL

window.addEventListener("scroll", reveal);

function reveal(){

  let reveals = document.querySelectorAll(".reveal");

  for(let i=0;i<reveals.length;i++){

    let windowHeight = window.innerHeight;

    let revealTop =
    reveals[i].getBoundingClientRect().top;

    let revealPoint = 100;

    if(revealTop < windowHeight - revealPoint){

      reveals[i].classList.add("active");

    }

  }

}


// ACTIVE NAVBAR

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll",()=>{

  let current = "";

  sections.forEach(section=>{

    const sectionTop = section.offsetTop;

    if(scrollY >= sectionTop - 150){

      current = section.getAttribute("id");

    }

  });

  navLinks.forEach(link=>{

    link.classList.remove("active");

    if(link.getAttribute("href") == `#${current}`){

      link.classList.add("active");

    }

  });

});


// DARK MODE

const themeBtn =
document.getElementById("theme-toggle");

themeBtn.addEventListener("click",()=>{

  document.body.classList.toggle("light-mode");

});
