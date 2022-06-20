import myself from './myself.png';
import './App.css';

function App() {
  return (
    <header>
       <div className="landing-left">
      <h1>Hello <span className="typed-text">I am Sive Chrestena Ncanywa</span> </h1>
      <p>
I am a female born and raised in Cape Town. I passed my matric in 2020 following year I enrolled at Northlink College where I did Electrical Engineering. In 2021 September I was fortunate to be part of the students at Lifechoices Academy  doing Coding, and that is where I gained my coding skills.

<p>Growing up in an informal settlement where there are less opportunities and exposure to the latest technologies made me to be a very curious person.I have always been passionate about technology from a very young age. I love how technology can make individual’s lives easier and that has been my goal ever since; TO CHANGE PEOPLE’S LIVES USING TECHNOLOGY!</p>

I am a hard working individual who is eager to learn and grow within the industry. I am commited, hard working and friendly. I can work with different kinds of people , I’m a great team player and would be a great asset to the Sovtech graduate program.

I see myself making a big impact in my country and the whole world through technology. Being part of big projects and technologies that change the world or the future is my number one goal.
</p>
<button className="button">
  More about me
</button>
      </div>
      <div className="landing-right">
      <img src={myself} className="myself" alt="myself" />
      </div>
    </header>
  );
}
const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["hard", "fun", "a journey", "LIFE"];
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 2000; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
  	setTimeout(erase, newTextDelay);
  }
}

function erase() {
	if (charIndex > 0) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if(textArrayIndex>=textArray.length) textArrayIndex=0;
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect
  if(textArray.length) setTimeout(type, newTextDelay + 250);
});
export default App;
