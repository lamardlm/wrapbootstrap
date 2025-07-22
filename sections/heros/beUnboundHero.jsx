import React from 'react'
import { Link } from 'react-router-dom'

const BeUnboundHero = () => {
    return (
        <section className="hero-area-wrapper hero-style-one">
            <div className="hero-area">
                <div className="video-background" style={{
                    backgroundImage: 'url(/all-img/moon-bg.png)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    zIndex: -1
                }}>
                    <div className="video-overlay"></div>
                </div>
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-lg-12">
                            <div className="hero-content text-center">
                                <h1 
                                    className="hero-title"
                                    data-animation="fade-up"
                                    data-delay="0.3"
                                >
                                    Your Potential is Priceless.<br />
                                    <span className="gradient-text">So is Our Coaching.</span>
                                </h1>
                                <p 
                                    className="hero-description"
                                    data-animation="fade-up"
                                    data-delay="0.5"
                                >
                                    We democratize elite athletic coaching through NIL partnerships, not payments. 
                                    Your potential should not be tied to your wallet.
                                </p>
                                <div 
                                    className="hero-buttons"
                                    data-animation="fade-up"
                                    data-delay="0.7"
                                >
                                    <Link to="/login" className="btn btn-primary btn-lg me-3">
                                        Begin Your Journey
                                    </Link>
                                    <a href="#manifesto" className="btn btn-outline-light btn-lg">
                                        Learn Our Philosophy
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BeUnboundHero
