import React from 'react'
import { Link } from 'react-router-dom'

const BeUnboundContact = () => {
    return (
        <>
            <section className="page-header-area sbg-9">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="page-header-content text-center">
                                <h1>Get In Touch</h1>
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><a href="/">Home</a></li>
                                        <li className="breadcrumb-item active" aria-current="page">Contact Us</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            <section className="contact-area section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title text-center">
                                <span className="sub-title">Contact BeUnBound</span>
                                <h2 className="title">
                                    Ready to <span className="gradient-text">Begin Your Journey?</span>
                                </h2>
                                <p className="description">
                                    Have questions about our revolutionary coaching model? Ready to apply for our program? 
                                    We're here to help you take the first step toward unlocking your potential.
                                </p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="row justify-content-center">
                        <div className="col-lg-8 col-md-10">
                            <div className="contact-form">
                                <form>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <input type="text" className="form-control" placeholder="Your Name" required />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <input type="email" className="form-control" placeholder="Your Email" required />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <input type="text" className="form-control" placeholder="Phone Number" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <select className="form-control">
                                                    <option>Select Coaching Category</option>
                                                    <option>Track and Field</option>
                                                    <option>Speed Improvement</option>
                                                    <option>Bodybuilding Competitions</option>
                                                    <option>Archery</option>
                                                    <option>Health and Wellness</option>
                                                    <option>Nutrition Programming</option>
                                                    <option>Weight Loss</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <textarea className="form-control" rows="6" placeholder="Tell us about your athletic goals and why you're interested in BeUnBound..." required></textarea>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <button type="submit" className="btn btn-primary">
                                                Send Message
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        
                        <div className="col-lg-4">
                            <div className="contact-info">
                                <div className="contact-item">
                                    <div className="icon">
                                        <i className="fi fi-tr-envelope"></i>
                                    </div>
                                    <div className="content">
                                        <h4>Email Us</h4>
                                        <p>info@beunbound.ai</p>
                                        <p>coaching@beunbound.ai</p>
                                    </div>
                                </div>
                                
                                <div className="contact-item">
                                    <div className="icon">
                                        <i className="fi fi-tr-phone-call"></i>
                                    </div>
                                    <div className="content">
                                        <h4>Call Us</h4>
                                        <p>+1 (555) 123-4567</p>
                                        <p>Mon - Fri: 9:00 AM - 6:00 PM EST</p>
                                    </div>
                                </div>
                                
                                <div className="contact-item">
                                    <div className="icon">
                                        <i className="fi fi-tr-marker"></i>
                                    </div>
                                    <div className="content">
                                        <h4>Visit Us</h4>
                                        <p>BeUnBound Athletic Center</p>
                                        <p>123 Performance Drive<br />Excellence City, EC 12345</p>
                                    </div>
                                </div>
                                
                                <div className="contact-item">
                                    <div className="icon">
                                        <i className="fi fi-tr-clock"></i>
                                    </div>
                                    <div className="content">
                                        <h4>Application Process</h4>
                                        <p>Ready to apply? Start your journey with our comprehensive application process.</p>
                                        <Link to="/login" className="btn btn-outline-primary btn-sm">
                                            Begin Application
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default BeUnboundContact
