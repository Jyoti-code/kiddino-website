import React, { useState } from 'react';

export default function Sidemenu() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <>
            <div className={`vs-menu-wrapper ${isSidebarOpen ? 'open' : ''}`}>
                <div className="vs-menu-area text-center">
                    <button className="vs-menu-toggle" onClick={toggleSidebar}>
                        <i className={isSidebarOpen ? "fal fa-times" : "fal fa-bars"}></i>
                    </button>
                    <div className="mobile-logo">
                        <a href="/"><img src="assets/img/logo.svg" alt="Kiddino" /></a>
                    </div>
                    <div className="vs-mobile-menu">
                        <ul>
                            <li className="menu-item-has-children">
                                <a href="*">Demo</a>
                                <ul className="sub-menu">
                                    <li><a href="*">Demo Style 1</a></li>
                                    <li><a href="*">Demo Style 2</a></li>
                                    <li><a href="*">Demo Style 3</a></li>
                                </ul>
                            </li>
                            <li><a href="*">About Us</a></li>
                            <li className="menu-item-has-children">
                                <a href="*">Classes</a>
                                <ul className="sub-menu">
                                    <li><a href="*">Class Style 1</a></li>
                                    <li><a href="*">Class Style 2</a></li>
                                    <li><a href="*">Class Details</a></li>
                                </ul>
                            </li>
                            <li className="menu-item-has-children">
                                <a href="*">Blog</a>
                                <ul className="sub-menu">
                                    <li><a href="*">Blog</a></li>
                                    <li><a href="*">Blog Details</a></li>
                                </ul>
                            </li>
                            <li className="menu-item-has-children">
                                <a href="google">Pages</a>
                                <ul className="sub-menu">
                                    <li><a href="*">Service</a></li>
                                    <li><a href="*">Service Details</a></li>
                                    <li><a href="*">Team</a></li>
                                    <li><a href="*">Team Details</a></li>
                                    <li><a href="*l">Event Details</a></li>
                                    <li><a href="*">Gallery</a></li>
                                    <li><a href="*">Price Plan</a></li>
                                    <li><a href="*">FAQ</a></li>
                                    <li><a href="*">Shop</a></li>
                                    <li><a href="*">Shop Details</a></li>
                                    <li><a href="*">Shopping Cart</a></li>
                                    <li><a href="*">Checkout</a></li>
                                    <li><a href="*">Registration</a></li>
                                    <li><a href="*">Error Page</a></li>
                                </ul>
                            </li>
                            <li><a href="*l">Contact Us</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}
