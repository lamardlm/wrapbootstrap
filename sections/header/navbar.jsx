import { navigationData } from '../../db/navigationData-new.js';
import React, { useMemo } from 'react';

import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
    const pathname = useLocation().pathname;

    const checkIsActive = (item, currentPathname) => {
        if (item.href === currentPathname) return true;

        if (item.dropdownItems) {
            return item.dropdownItems.some(subItem => checkIsActive(subItem, currentPathname));
        }

        if (item.nestedDropdown) {
            return item.nestedDropdown.some(nestedItem => checkIsActive(nestedItem, currentPathname));
        }

        return false;
    };

    return (
        <ul className="navbar-nav">
            {navigationData.map((item) => {
                const isActive = checkIsActive(item, pathname);

                return (
                    <li key={item.label} className={`nav-item ${item.hasDropdown ? 'dropdown' : ''}`}>
                        {item.hasDropdown ? (
                            <a
                                href="#"
                                className={`nav-link dropdown-toggle ${isActive ? 'active' : ''}`}
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                {item.label}
                                <i className="bx bx-down-arrow-alt" />
                            </a>
                        ) : (
                            <Link
                                to={item.href}
                                className={`nav-link ${isActive ? 'active' : ''}`}
                            >
                                {item.label}
                            </Link>
                        )}

                        {item.hasDropdown && (
                            <ul className="dropdown-menu">
                                {item.dropdownItems.map((dropdownItem) => {
                                    const isSubActive = checkIsActive(dropdownItem, pathname);

                                    return (
                                        <li key={dropdownItem.label} className={`nav-item ${dropdownItem.nestedDropdown ? 'dropdown' : ''}`}>
                                            <Link
                                                to={dropdownItem.href}
                                                className={`nav-link d-flex justify-content-between align-items-center ${isSubActive ? 'active' : ''}`}
                                            >
                                                {dropdownItem.label}
                                                {dropdownItem.nestedDropdown && <i className="bx bx-chevron-right"></i>}
                                            </Link>

                                            {dropdownItem.nestedDropdown && (
                                                <ul className="dropdown-menu">
                                                    {dropdownItem.nestedDropdown.map((nestedItem) => {
                                                        const isNestedActive = nestedItem.href === pathname;

                                                        return (
                                                            <li key={nestedItem.label} className="nav-item">
                                                                <Link
                                                                    to={nestedItem.href}
                                                                    className={`nav-link ${isNestedActive ? 'active' : ''}`}
                                                                >
                                                                    {nestedItem.label}
                                                                </Link>
                                                            </li>
                                                        );
                                                    })}
                                                </ul>
                                            )}
                                        </li>
                                    );
                                })}
                            </ul>
                        )}
                    </li>
                );
            })}
        </ul>
    );
}
