import React from 'react'
import { beUnboundPillars } from '../../db/featuresData'

const BeUnboundPillars = () => {
    return (
        <section id="pillars" className="features-area section-padding">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title text-center">
                            <span 
                                className="sub-title"
                                data-animation="fade-up"
                                data-delay="0.1"
                            >
                                Our Foundation
                            </span>
                            <h2 
                                className="title"
                                data-animation="fade-up"
                                data-delay="0.3"
                            >
                                The Four <span className="gradient-text">Pillars</span> of BeUnBound
                            </h2>
                            <p 
                                className="description"
                                data-animation="fade-up"
                                data-delay="0.5"
                            >
                                Our revolutionary approach is built on four fundamental principles that guide 
                                every aspect of our coaching methodology.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {beUnboundPillars.map((pillar, index) => (
                        <div key={pillar.id} className="col-lg-3 col-md-6">
                            <div
                                className="feature-box pillar-card"
                                data-animation="fade-up"
                                data-delay={index * 0.1}
                            >
                                <div className="icon">
                                    <i className={pillar.icon} />
                                </div>
                                <h3>{pillar.title}</h3>
                                <p>{pillar.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default BeUnboundPillars
