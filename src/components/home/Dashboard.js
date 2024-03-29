import React,{useState} from 'react';
import { Link } from 'react-router-dom'
import { Dropdown } from 'react-bootstrap';

const Dashboard = () => {
        const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <>
            <header className="vs-header header-layout2">
                <div className="header-top">
                    <div className="container">
                        <div className="row align-items-center justify-content-between">
                            <div className="col col-sm-auto">
                                <div className="header-logo">                                 <img src="assets/img/logo.png" alt="logo" />                                    
                                </div>
                            </div>
                            <div className="col-6 col-sm-auto d-none d-lg-block">
                            <div className="header-links style3 style-black">
                                    <ul>
                                        <li className="d-none d-xl-inline-block"><i className="fas fa-envelope"></i>Email: <a href="mailto:user@example.com">user@example.com</a></li>
                                        <li><i className="fas fa-mobile-alt"></i>Phone: <a href="tel:+4402076897888">+44 (0) 207 689 7888</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col">
                                <div className="row align-items-center justify-content-end gx-3">
                                    <div className="col-auto d-none d-lg-block">
                                        <div className="header-icons">
                                            <button className="simple-icon style2 sideMenuToggler"><i className="far fa-bars"></i></button>
                                        </div>
                                    </div>
                                    <div className="col-auto ">
                                        <a href="*" className="vs-btn sideMenuToggler">Apply Today</a>
                                    </div>                                   

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="menu-area">
                        <div className="row justify-content-between align-items-center">
                            <div className="col">
                                <nav className="main-menu menu-style2 d-none d-lg-block">
                                    <ul>
                                        <li ><Link to="/">Home</Link></li>
                                        <li className="menu-item-has-children">
                                            <a href="*">About Us</a>
                                            <ul className="sub-menu">
                                                <li><Link to="/aboutstudyhall">About Senior School</Link></li>
                                                <li><Link to="/mission&vision">Mission and Vision</Link></li>
                                                <li><Link to="/foundersmessage">Founder's Message</Link></li>
                                                <li><Link to="/principalmessage">Principal's Message</Link></li>
                                                <li><Link to="/viceprincipalmessage">Vice Principal's Message</Link>
                                                </li>
                                            </ul>
                                        </li>

                                        <li className="menu-item-has-children">
                                            <a href="*">Admission</a>
                                            <ul className="sub-menu">
                                                <li><Link to="/admissionprocess">Admission Process</Link>
                                                </li>
                                                <li><Link to="/feestructure">Fee Structure</Link></li>
                                                <li><Link to="/curriculum">Curriculum</Link></li>
                                                <li><Link to="/onlineadmissionquery">Online Admission Query</Link>
                                                </li>
                                                <li><a href="*">School Uniform</a></li>
                                                <li><a href="*">TC (Transfer Certificate)</a></li>
                                                <li><a href="*">CBSE Compliance</a></li>
                                            </ul>
                                        </li>
                                        <li className="menu-item-has-children">
                                            <a href="*">Academics
                                            </a>
                                            <ul className="sub-menu">
                                                <li><a href="*">Curriculum</a></li>
                                                <li><a href="*">Syllabus </a></li>
                                                <li><a href="*">Academic Calendar</a></li>
                                                <li><a href="*">Co-Curricular Activities</a></li>
                                                <li><a href="*">Academic Calendar</a></li>
                                                <li><a href="*">Examinations</a></li>
                                                <li><a href="*">Counselling</a></li>
                                                <li><a href="*">Exchange Programs</a></li>
                                                <li><a href="*">Infrastructure</a></li>
                                                <li><a href="*">Teacher's Forum</a></li>
                                                <li><a href="*">Teachers Training</a></li>
                                                <li><a href="*">Downloads</a></li>
                                                <li><a href="*">Circulars</a></li>

                                            </ul>
                                        </li>
                                        <li className="menu-item-has-children">
                                            <a href="google.com">Management
                                            </a>
                                            <ul className="sub-menu">


                                                <li><a href="*">Management Committee</a></li>
                                                <li><a href="*">Faculty</a></li>
                                                <li><a href="*">Student Cabinet</a></li>

                                            </ul>
                                        </li>
                                        <li className="menu-item-has-children"><a href="google.com">Alumni</a>
                                            <ul className="sub-menu">


                                                <li><a href="*">Alumni Stories</a></li>
                                                <li><a href="*">Alumni Registration</a></li>
                                                

                                            </ul>
                                        </li>
                                        <li>
                                            <a href="*">Blogs</a>
                                        </li>
                                         <li>
                                            <a href="*">Contact</a>
                                        </li>
                                    </ul>
                                </nav>
                                <button className="vs-menu-toggle d-inline-block d-lg-none" onClick={toggleSidebar}>
                                    <i className="fal fa-bars"></i>
                                </button>
                            </div>
                            <div className="col-auto">
                                <button className="simple-icon searchBoxTggler"><i className="far fa-search"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

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
                            <Dropdown>
                                <Dropdown.Toggle variant="link" id="pagesDropdown">
                                    Pages
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item href="*">Service</Dropdown.Item>
                                    <Dropdown.Item href="*">Service Details</Dropdown.Item>
                                    <Dropdown.Item href="*">Team</Dropdown.Item>
                                    <Dropdown.Item href="*">Team Details</Dropdown.Item>
                                    <Dropdown.Item href="*">Event Details</Dropdown.Item>
                                    <Dropdown.Item href="*">Gallery</Dropdown.Item>
                                    <Dropdown.Item href="*">Price Plan</Dropdown.Item>
                                    <Dropdown.Item href="*">FAQ</Dropdown.Item>
                                    <Dropdown.Item href="*">Shop</Dropdown.Item>
                                    <Dropdown.Item href="*">Shop Details</Dropdown.Item>
                                    <Dropdown.Item href="*">Shopping Cart</Dropdown.Item>
                                    <Dropdown.Item href="*">Checkout</Dropdown.Item>
                                    <Dropdown.Item href="*">Registration</Dropdown.Item>
                                    <Dropdown.Item href="*">Error Page</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </li>
                        <li><a href="*">Contact Us</a></li>
                    </ul>
                </div>
            </div>
        </div>
        </>
    );
};

export default Dashboard;
