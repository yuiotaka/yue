import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';


function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='https://yuiotaka.github.io/yue/videos/video-1.mp4' autoPlay loop muted />
      <h1>Yui Otaka</h1>
      <p>Welcome to my page!</p>
      <div className='hero-btns'>
       

        <div class='social-icons'>
           
           <a className= "social-logo" href="https://www.facebook.com/">
          <i class='fab fa-facebook-f' /></a>
        
          <a className= "social-logo" href="https://www.instagram.com/">
          <i class='fab fa-instagram' /></a>
        
          <a className= "social-logo" href ="https://twitter.com/home">
          <i class='fab fa-twitter' /></a>
       
          <a className= "social-logo" href ="https://www.linkedin.com/in/yui-otaka-350185173/">
          <i class='fab fa-linkedin' /></a>
        
      </div>
      
      </div>
    </div>
  );
}

export default HeroSection;