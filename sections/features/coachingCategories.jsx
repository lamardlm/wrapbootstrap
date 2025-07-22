import React from 'react'
import { coachingCategories } from '../../db/featuresData'

const CoachingCategories = () => {
    return (
        <section className="coaching-categories-area section-padding bg-light">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title text-center">
                            <span 
                                className="sub-title"
                                data-animation="fade-up"
                                data-delay="0.1"
                            >
                                Coaching Excellence
                            </span>
                            <h2 
                                className="title"
                                data-animation="fade-up"
                                data-delay="0.3"
                            >
                                Seven Areas of <span className="gradient-text">Expertise</span>
                            </h2>
                            <p 
                                className="description"
                                data-animation="fade-up"
                                data-delay="0.5"
                            >
                                From elite competition preparation to foundational wellness, our world-class coaches 
                                provide specialized training across diverse athletic disciplines.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {coachingCategories.map((category, index) => (
                        <div key={category.id} className="col-lg-4 col-md-6 mb-4">
                            <div
                                className="coaching-category-card"
                                data-animation="fade-up"
                                data-delay={index * 0.1}
                            >
                                <div className="category-icon">
                                    <i className={category.icon} />
                                </div>
                                <div className="category-content">
                                    <h4>{category.title}</h4>
                                    <p>{category.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default CoachingCategories
