import React from 'react';
import './Footer.css';
//import { Button } from '/.Button';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className ='footer-container'>
            <section className='footer-subscriotion'>
                <p className='footer-subscription-heading'>
                    Thank you for visiting my page!
                </p>
                <p className='fotter-subscription-text'>
                You can contact me anytime
                </p>
                <div className='input-areas'>
                    <form>
                        <input
                        className='fotter-input'
                        name ='emial'
                        type='email'
                        placeholder='Your Email'
                        />
                    <button buttonStyle='btn--outline'>
                    Subscribe
                    </button>
                    </form>
                </div>
            </section>

            <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/sign-up'>How it works</Link>
            <Link to='/'>Testimonials</Link>
            <Link to='/'>Careers</Link>
            <Link to='/'>Investors</Link>
            <Link to='/'>Terms of Service</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/'>Contact</Link>
            <Link to='/'>Support</Link>
            <Link to='/'>Destinations</Link>
            <Link to='/'>Sponsorships</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Videos</h2>
            <Link to='/'>Submit Video</Link>
            <Link to='/'>Ambassadors</Link>
            <Link to='/'>Agency</Link>
            <Link to='/'>Influencer</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Social Media</h2>
           <a href="https://www.instagram.com/">Instagram</a>
            <a href="https://www.facebook.com/"> Facebook</a>
         
           <a href ="https://twitter.com/home">Twitter</a>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              Yui Otaka
            </Link>
          </div>
          <small class='website-rights'>yuiotaka© 2021</small>
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
      </section>
    </div>
  );
}

export default Footer;