function userScroll(){
  const navbar = document.querySelector('.navbar');
  const toTopBtn = document.querySelector('#to-top');

  window.addEventListener('scroll',() =>{
    if(window.scrollY >50){
      navbar.classList.add('bg-white');
      navbar.classList.add('navbar-shadow');
      toTopBtn.classList.add('show');
     
    }
    else{
      navbar.classList.remove('bg-dark');
      navbar.classList.remove('navbar-shadow');
      toTopBtn.classList.remove('show');
      
    }
  });

}

function scrollToTop(){
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0 ;
}


const textBefore = "The ";      // Text before "Perfect"
const textPerfect = "Perfect";  // The word that should be in different color
const textAfter = " Office Space"; // Text after "Perfect"
let index = 0;
let htmlContent = ""; // Keep track of the HTML content being generated
const speed = 100; // Speed in milliseconds for each character

function typeWriter() {
  if (index < textBefore.length) {
    htmlContent += textBefore.charAt(index);
  } else if (index < textBefore.length + textPerfect.length) {
    if (index === textBefore.length) {
      htmlContent += `<span style="color: #cc2973;">`; // Start colored word
    }
    htmlContent += textPerfect.charAt(index - textBefore.length);
    if (index === textBefore.length + textPerfect.length - 1) {
      htmlContent += `</span>`; // Close span after the word
    }
  } else if (index < textBefore.length + textPerfect.length + textAfter.length) {
    htmlContent += textAfter.charAt(index - textBefore.length - textPerfect.length);
  }
  
  document.getElementById("typewriter").innerHTML = htmlContent; // Update the HTML content
  
  index++;
  
  if (index < textBefore.length + textPerfect.length + textAfter.length) {
    setTimeout(typeWriter, speed);
  }
}

// Call the function to start typing the text
typeWriter();

function incStats () {
  const counters = document.querySelectorAll('#stats h1');
  counters.forEach(counter => {
    const updateCount = () =>{
      const target = +counter.getAttribute('data-target');
      const current = +counter.innerText;
      const increment = target/100;

      if(current <target){
        counter.innerText = Math.ceil(current + increment);
        setTimeout(updateCount,20);
      }else{
        counter.innerText = target;
      }
    };

    updateCount();
  });
}


// Event lister
document.addEventListener('DOMContentLoaded',userScroll);
document.querySelector('#to-top').addEventListener('click',scrollToTop);
document.addEventListener('DOMContentLoaded',incStats);
