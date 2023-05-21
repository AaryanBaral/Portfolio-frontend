import React from 'react'
import '../styles/Footer.css'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default function Footer() {
  return (
    <>
        <div className='footer'>
            <div className="vertical">
                <div className="footer-content" id="social-medias">
                    <p>Social Media</p>
                    <div className="footer-sub-content">
                        <div className="social-media-icon"><FontAwesomeIcon icon="fa-brands fa-facebook" style={{color: "#0b8df0",}} size="2xl" /></div>
                        <div className="social-media-icon"><FontAwesomeIcon icon="fa-brands fa-instagram" size="2xl"/></div>
                        <div className="social-media-icon"><FontAwesomeIcon icon="fa-brands fa-linkedin" size="2xl"/></div>
                        <div className="social-media-icon"><FontAwesomeIcon icon="fa-brands fa-github"  size='2xl'/></div>
                    </div>
                </div>

                <div className="footer-content" id="quick-links">
                    <p>Quick Links</p>
                    <div className="footer-sub-content">
                        <div className="quick-link">Home</div>
                        <div className="quick-link">About</div>
                        <div className="quick-link">Education</div>
                        <div className="quick-link">Skills</div>
                        <div className="quick-link">Contact</div>
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
