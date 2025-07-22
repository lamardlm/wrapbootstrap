import React from 'react'
import { Link } from 'react-router-dom'

const BeUnboundProcess = () => {
    const processSteps = [
        {
            id: 1,
            title: "Application",
            description: "Submit your initial application with basic information and athletic background.",
            icon: "fi fi-tr-form"
        },
        {
            id: 2,
            title: "Essays",
            description: "Complete thoughtful essays demonstrating your commitment and goals.",
            icon: "fi fi-tr-edit"
        },
        {
            id: 3,
            title: "Metrics",
            description: "Provide detailed performance metrics and athletic achievements.",
            icon: "fi fi-tr-chart-line-up"
        },
        {
            id: 4,
            title: "Video Introduction",
            description: "Record a personal video showcasing your personality and dedication.",
            icon: "fi fi-tr-video-camera"
        },
        {
            id: 5,
            title: "Legal Agreements",
            description: "Complete NIL partnership agreements and liability documentation.",
            icon: "fi fi-tr-document-signed"
        }
    ]

    return (
        <section id="process" className="work-process-area section-padding">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title text-center">
                            <span 
                                className="sub-title"
                                data-animation="fade-up"
                                data-delay="0.1"
                            >
                                Application Process
                            </span>
                            <h2 
                                className="title"
                                data-animation="fade-up"
                                data-delay="0.3"
                            >
                                Your Journey to <span className="gradient-text">Elite Coaching</span>
                            </h2>
                            <p 
                                className="description"
                                data-animation="fade-up"
                                data-delay="0.5"
                            >
                                Our selective application process ensures we partner with athletes who share 
                                our commitment to excellence and dedication to growth.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {processSteps.map((step, index) => (
                        <div key={step.id} className="col-lg-2-4 col-md-6 mb-4">
                            <div
                                className="work-process-box"
                                data-animation="fade-up"
                                data-delay={index * 0.1}
                            >
                                <div className="process-number">
                                    {step.id}
                                </div>
                                <div className="process-icon">
                                    <i className={step.icon} />
                                </div>
                                <h4>{step.title}</h4>
                                <p>{step.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <div 
                            className="process-cta"
                            data-animation="fade-up"
                            data-delay="0.7"
                        >
                            <Link to="/application" className="btn btn-primary btn-lg">
                                Start Your Application
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BeUnboundProcess
