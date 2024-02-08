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
                                <a href="index.html">Demo</a>
                                <ul className="sub-menu">
                                    <li><a href="index.html">Demo Style 1</a></li>
                                    <li><a href="index-2.html">Demo Style 2</a></li>
                                    <li><a href="index-3.html">Demo Style 3</a></li>
                                </ul>
                            </li>
                            <li><a href="about.html">About Us</a></li>
                            <li className="menu-item-has-children">
                                <a href="match.html">Classes</a>
                                <ul className="sub-menu">
                                    <li><a href="class.html">Class Style 1</a></li>
                                    <li><a href="class-2.html">Class Style 2</a></li>
                                    <li><a href="class-details.html">Class Details</a></li>
                                </ul>
                            </li>
                            <li className="menu-item-has-children">
                                <a href="blog.html">Blog</a>
                                <ul className="sub-menu">
                                    <li><a href="blog.html">Blog</a></li>
                                    <li><a href="blog-details.html">Blog Details</a></li>
                                </ul>
                            </li>
                            <li className="menu-item-has-children">
                                <a href="google">Pages</a>
                                <ul className="sub-menu">
                                    <li><a href="service.html">Service</a></li>
                                    <li><a href="service-details.html">Service Details</a></li>
                                    <li><a href="team.html">Team</a></li>
                                    <li><a href="team-details.html">Team Details</a></li>
                                    <li><a href="event-details.html">Event Details</a></li>
                                    <li><a href="gallery.html">Gallery</a></li>
                                    <li><a href="price-plan.html">Price Plan</a></li>
                                    <li><a href="faq.html">FAQ</a></li>
                                    <li><a href="shop.html">Shop</a></li>
                                    <li><a href="shop-details.html">Shop Details</a></li>
                                    <li><a href="cart.html">Shopping Cart</a></li>
                                    <li><a href="checkout.html">Checkout</a></li>
                                    <li><a href="registration.html">Registration</a></li>
                                    <li><a href="error.html">Error Page</a></li>
                                </ul>
                            </li>
                            <li><a href="contact.html">Contact Us</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}
