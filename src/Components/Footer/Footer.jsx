import React, { Component } from 'react';
import './Footer.css';

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer-container">
        <div className="footer-parent">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
           <path fill="#FFF" fill-opacity="1" d="M0,256L40,234.7C80,213,160,171,240,170.7C320,171,400,213,480,224C560,235,640,213,720,218.7C800,224,880,256,960,245.3C1040,235,1120,181,1200,149.3C1280,117,1360,107,1400,101.3L1440,96L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z" />
          </svg>
        </div>
      </footer>
    )
  }
}
