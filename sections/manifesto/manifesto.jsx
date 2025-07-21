import React from 'react'

const Manifesto = () => {
    return (
        <section id="manifesto" className="manifesto-area section-padding">
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="manifesto-content">
                            <div className="section-title">
                                <span 
                                    className="sub-title"
                                    data-animation="fade-up"
                                    data-delay="0.1"
                                >
                                    Our Manifesto
                                </span>
                                <h2 
                                    className="title"
                                    data-animation="fade-up"
                                    data-delay="0.3"
                                >
                                    Payment is <span className="gradient-text">Commitment</span>
                                </h2>
                            </div>
                            <div 
                                className="manifesto-text"
                                data-animation="fade-up"
                                data-delay="0.5"
                            >
                                <p className="lead">
                                    We are not a "free service"; we are a selective institution offering a priceless opportunity. 
                                    The monetary cost is zero. The true cost is total commitment.
                                </p>
                                <p>
                                    Born from the vision of GoLive Fitness and guided by an 8-time Ms. Figure Olympia champion, 
                                    BeUnBound represents a revolutionary approach to athletic coaching. We believe that elite 
                                    training should be accessible to those with the dedication to excel, regardless of their 
                                    financial circumstances.
                                </p>
                                <p>
                                    Through NIL (Name, Image, Likeness) partnerships, we've created a sustainable model that 
                                    benefits both athletes and coaches. Your commitment becomes your currency, and your 
                                    potential becomes our shared investment.
                                </p>
                            </div>
                            <div 
                                className="manifesto-cta"
                                data-animation="fade-up"
                                data-delay="0.7"
                            >
                                <a href="#pillars" className="btn btn-primary">
                                    Discover Our Four Pillars
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div 
                            className="manifesto-image"
                            data-animation="fade-left"
                            data-delay="0.5"
                        >
                            <img src="/all-img/about-1.png" alt="BeUnBound Manifesto" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Manifesto
