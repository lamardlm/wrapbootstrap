import { Link } from 'react-router-dom'
import React from 'react'

const Footer = () => {
  return (
    <>
      <footer className="footer-area">
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6">
                <div className="footer-widget">
                  <div className="footer-logo">
                    <Link to="/">
                      <img src="/all-img/logo.png" alt="BeUnBound" />
                    </Link>
                  </div>
                  <div className="footer-content">
                    <h2>Join BeUnBound!</h2>
                    <p>Stay updated on our revolutionary coaching programs and be the first to know about new opportunities to unlock your athletic potential.</p>
                    <div className="footer-social">
                      <Link to="#"><i className="fab fa-facebook-f"></i></Link>
                      <Link to="#"><i className="fab fa-twitter"></i></Link>
                      <Link to="#"><i className="fab fa-instagram"></i></Link>
                      <Link to="#"><i className="fab fa-linkedin-in"></i></Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="footer-widget">
                  <h4>Quick Links</h4>
                  <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="#application">The Process</Link></li>
                    <li><Link to="/login">Member Login</Link></li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="footer-widget">
                  <h4>Programs</h4>
                  <ul>
                    <li><Link to="#pillars">Four Pillars</Link></li>
                    <li><Link to="#coaching">Coaching Categories</Link></li>
                    <li><Link to="/privacy-policy">Privacy Policy</Link></li>
                    <li><Link to="/terms">Terms of Service</Link></li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="footer-widget">
                  <h4>Contact</h4>
                  <span>BeUnBound Athletic Center<br />123 Performance Drive, Excellence City, EC 12345</span>
                  <Link className="ft-mail" to="/mailto:info@beunbound.ai">info@beunbound.ai</Link>
                  <Link className="ft-number" to="/tel:+15551234567">+1 (555) 123-4567</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <div className="row">
              <div className="col-xl-4 col-lg-5">
                <div className="cpr-left">
                  <p>Copyright© 2025 BeUnBound.ai. All rights reserved.</p>
                </div>
              </div>
              <div className="col-xl-8 col-lg-7">
                <div className="cpr-right">
                  <ul>
                    <li><Link to="/terms">Terms of Service</Link></li>
                    <li><Link to="/privacy-policy">Privacy Policy</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
