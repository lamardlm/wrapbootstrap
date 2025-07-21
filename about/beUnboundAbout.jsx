import React from 'react'

const BeUnboundAbout = () => {
  return (
    <>
      <section className="page-header-area sbg-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="page-header-content text-center">
                <h1>About BeUnBound</h1>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="/">Home</a></li>
                    <li className="breadcrumb-item active" aria-current="page">About Us</li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-area section-padding">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about-content">
                <div className="section-title">
                  <span className="sub-title">Our Story</span>
                  <h2 className="title">
                    Revolutionizing Athletic <span className="gradient-text">Coaching</span>
                  </h2>
                </div>
                <p className="lead">
                  BeUnBound was born from a simple yet revolutionary idea: elite athletic coaching 
                  should be accessible to those with the dedication to excel, regardless of their 
                  financial circumstances.
                </p>
                <p>
                  Founded by the visionary team at GoLive Fitness and guided by an 8-time Ms. Figure 
                  Olympia champion, we've created a sustainable model that benefits both athletes and 
                  coaches through NIL (Name, Image, Likeness) partnerships.
                </p>
                <p>
                  Our commitment-based approach ensures that every athlete who joins our program is 
                  fully invested in their journey, creating a community of dedicated individuals 
                  pushing the boundaries of human potential.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-image">
                <img src="/all-img/about-3.png" alt="BeUnBound Team" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mission-area section-padding bg-light">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title text-center">
                <span className="sub-title">Our Mission</span>
                <h2 className="title">
                  Democratizing <span className="gradient-text">Elite Training</span>
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="mission-box">
                <div className="icon">
                  <i className="fi fi-tr-target"></i>
                </div>
                <h3>Excellence Without Barriers</h3>
                <p>We believe that financial limitations should never prevent dedicated athletes from accessing world-class coaching and training programs.</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="mission-box">
                <div className="icon">
                  <i className="fi fi-tr-handshake"></i>
                </div>
                <h3>Commitment Over Currency</h3>
                <p>Our NIL partnership model creates a sustainable ecosystem where athletes invest their potential and coaches invest their expertise.</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="mission-box">
                <div className="icon">
                  <i className="fi fi-tr-artificial-intelligence"></i>
                </div>
                <h3>AI-Powered Innovation</h3>
                <p>We harness cutting-edge artificial intelligence to personalize training programs and optimize athletic performance at every level.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default BeUnboundAbout
