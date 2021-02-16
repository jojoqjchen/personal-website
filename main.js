
const typedText = document.querySelector(".typedText");
const cursor = document.querySelector(".cursor");

const words = ["DESIGN", "BUILD"];
const typingDelay = 180;
const eraseDelay = 75;
const newWordDelay = 1000;

let wordIndex = 0;
let charIndex = 0;

let mainNav = document.getElementById('js-menu');
        let navBarToggle = document.getElementById('js-navbar-toggle');
        navBarToggle.addEventListener('click', function () {
            mainNav.classList.toggle('active');
        });

function type() {
    if (charIndex < words[wordIndex].length) {
        if(!cursor.classList.contains("typing")) cursor.classList.add("typing");
        //keep typing the current word
        typedText.textContent += words[wordIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
    } else {
        cursor.classList.remove("typing");
        //erase word before typing the next word
        setTimeout(erase, newWordDelay);
    }
}

function erase() {
    if(charIndex > 0) {
        if(!cursor.classList.contains("typing")) cursor.classList.add("typing");
        //erase one character
        typedText.textContent = words[wordIndex].substring(0,charIndex-1);
        charIndex--;
        setTimeout(erase, eraseDelay);
    } else {
        cursor.classList.remove("typing");
        //move onto the next word
        wordIndex++;
        if(wordIndex >= words.length) {
            wordIndex = 0;
        }
        setTimeout(type, newWordDelay);

    }
}

document.addEventListener("DOMContentLoaded", function() {
  setTimeout(type, newWordDelay);
});

