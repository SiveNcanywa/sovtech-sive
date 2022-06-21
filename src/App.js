import myself from './myself.png';
import './App.css';
import Typical from 'react-typical';
import React from 'react';




function App() {
  
  return (
    <header>
       <div className="landing-left">
      <h1>Hello, I am{''} <span className="typed-text"> <Typical
     loop={Infinity}
     wrapper='b'
     steps={[
       'Sive Chrestena Ncanywa',
       1000,
       'Aspiring Software Developer',
       1000
     ]}
       />
      </span> </h1>
    
     
    <p>
      I am a female born and raised in Cape Town. I passed my matric in 2020 following year I enrolled at Northlink College where I did Electrical Engineering. In 2021 September I was fortunate to be part of the students at Lifechoices Academy  doing Coding, and that is where I gained my coding skills.

      <p>Growing up in an informal settlement where there are less opportunities and exposure to the latest technologies made me to be a very curious person.I have always been passionate about technology from a very young age. I love how technology can make individual’s lives easier and that has been my goal ever since; TO CHANGE PEOPLE’S LIVES USING TECHNOLOGY!</p>

      I am a hard working individual who is eager to learn and grow within the industry. I am commited, hard working and friendly. I can work with different kinds of people , I’m a great team player and would be a great asset to the Sovtech graduate program.

      I see myself making a big impact in my country and the whole world through technology. Being part of big projects and technologies that change the world or the future is my number one goal.
      </p>
<a href={'https://dev-sive1portfolio.pantheonsite.io/'}  target="_blank"><button className="button">
  More about me
</button></a>
      </div>
      <div className="landing-right">
      <img src={myself} className="myself" alt="myself" />
      </div>
    </header>
  );
  
}


export default App;
 