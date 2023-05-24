import React from 'react'
import '../styles/Footer.css'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';


export default function Footer() {
  return (
    <>
        <div className='footer'>
            <div className="vertical">
                <div className="footer-content" id="social-medias">
                    <p>Social Media</p>
                    <div className="footer-sub-content">
                        <div className="social-media-icon"> <Link to="https://www.facebook.com/rn.baral.94"><FontAwesomeIcon icon="fa-brands fa-facebook" style={{color: "#0b8df0",}} size="2xl" /></Link></div>
                        <div className="social-media-icon"> <Link to="https://www.instagram.com/rnbaral/" ><FontAwesomeIcon icon="fa-brands fa-instagram" size="2xl"/></Link></div>
                        <div className="social-media-icon"> <Link to="https://www.linkedin.com/in/aaryan-baral-322851226/"><FontAwesomeIcon icon="fa-brands fa-linkedin" size="2xl"/></Link></div>
                        <div className="social-media-icon"> <Link to="https://github.com/AaryanBaral"><FontAwesomeIcon icon="fa-brands fa-github"  size='2xl'/></Link></div>
                    </div>
                </div>

                <div className="footer-content" id="quick-links">
                    <p>Quick Links</p>
                    <div className="footer-sub-content">
                        <div className="quick-link"><Link className='links'  to="/">Home</Link></div>
                        <div className="quick-link"><Link className='links' to="/about">About</Link></div>
                        <div className="quick-link"><Link className='links' to="/education">Education</Link></div>
                        <div className="quick-link"><Link className='links' to="/skills">Skills</Link></div>
                        <div className="quick-link"><Link className='links' to="/contact">Contact</Link></div>
                    </div>
                </div>

            </div>
                <div className="ownership">
                    <p>Copyright © 2023, All right reserverd.</p>
                </div>
        </div>
    </>
  )
}
