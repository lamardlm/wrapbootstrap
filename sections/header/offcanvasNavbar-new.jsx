import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { navigationData } from '../../db/navigationData-new.js';

const ResponsiveNavbar = () => {
    const [openAccordions, setOpenAccordions] = useState({});
    const [openNestedAccordions, setOpenNestedAccordions] = useState({});

    const toggleAccordion = (id) => {
        setOpenAccordions(prev => ({
            ...prev,
            [id]: !prev[id]
        }));
    };

    const toggleNestedAccordion = (parentId, childId) => {
        setOpenNestedAccordions(prev => ({
            ...prev,
            [`${parentId}-${childId}`]: !prev[`${parentId}-${childId}`]
        }));

        event.stopPropagation();
    };

    return (
        <div className="responsive-navbar offcanvas offcanvas-end" data-bs-backdrop="static" tabIndex="-1" id="navbarOffcanvas">
            <div className="offcanvas-header">
                <Link className="logo d-inline-block" to="/">
                    BeUnBound
                </Link>
                <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
                <div className="accordion" id="navbarAccordion">
                    {navigationData.map((item, index) => (
                        <div className="accordion-item" key={index}>
                            {item.hasDropdown ? (
                                <>
                                    <button
                                        className={`accordion-button collapsed ${item.isActive ? 'active' : ''}`}
                                        type="button"
                                        onClick={() => toggleAccordion(index)}
                                        aria-expanded={openAccordions[index]}
                                    >
                                        {item.label}
                                    </button>
                                    <div
                                        className={`accordion-collapse collapse ${openAccordions[index] ? 'show' : ''}`}
                                    >
                                        <div className="accordion-body">
                                            <div className="accordion" id={`navbarAccordion${index + 1}`}>
                                                {item.dropdownItems.map((dropdownItem, dropdownIndex) => (
                                                    <div className="accordion-item" key={dropdownIndex}>
                                                        {dropdownItem.hasDropdown && dropdownItem.nestedDropdown ? (
                                                            <>
                                                                <button
                                                                    className="accordion-button collapsed"
                                                                    type="button"
                                                                    onClick={() => toggleNestedAccordion(index, dropdownIndex)}
                                                                    aria-expanded={openNestedAccordions[`${index}-${dropdownIndex}`]}
                                                                >
                                                                    {dropdownItem.label}
                                                                </button>
                                                                <div
                                                                    className={`accordion-collapse collapse ${openNestedAccordions[`${index}-${dropdownIndex}`] ? 'show' : ''}`}
                                                                >
                                                                    <div className="accordion-body">
                                                                        <div className="accordion" id={`navbarAccordion${index}${dropdownIndex}`}>
                                                                            {dropdownItem.nestedDropdown.map((nestedItem, nestedIndex) => (
                                                                                <div className="accordion-item" key={nestedIndex}>
                                                                                    <Link to={nestedItem.href} className="accordion-link">
                                                                                        {nestedItem.label}
                                                                                    </Link>
                                                                                </div>
                                                                            ))}
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </>
                                                        ) : (
                                                            <Link
                                                                to={dropdownItem.href}
                                                                className={`accordion-link ${dropdownItem.isActive ? 'active' : ''}`}
                                                            >
                                                                {dropdownItem.label}
                                                            </Link>
                                                        )}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </>
                            ) : (
                                <Link to={item.href} className="accordion-link without-icon">
                                    {item.label}
                                </Link>
                            )}
                        </div>
                    ))}
                </div>
                <div className="offcanvas-contact-info">
                    <h4>Follow On</h4>
                    <ul className="social-profile list-style">
                        <li><a href="#"><i className='bx bxl-facebook'></i></a></li>
                        <li><a href="#"><i className='bx bxl-instagram'></i></a></li>
                        <li><a href="#"><i className='bx bxl-linkedin'></i></a></li>
                        <li><a href="#"><i className='bx bxl-dribbble'></i></a></li>
                        <li><a href="#"><i className='bx bxl-pinterest'></i></a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ResponsiveNavbar;
