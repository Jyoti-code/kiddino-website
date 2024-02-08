import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <>
    <header className="vs-header header-layout1">
    <div className="header-top">
        <div className="container">
            <div className="row justify-content-between align-items-center">
                <div className="col-md-3 d-none d-lg-block">
                <div className="header-logo">
                                    
                    <img src="assets/img/logo.png" alt="logo" />
                                    
                                </div>
                </div>
                <div className="col-md-6 text-center">
                    <div className="header-links style2 style-white">
                        <ul>
                            <li><i className="fas fa-envelope"></i>Email: <a href="mailto:user@example.com">user@example.com</a></li>
                            <li><i className="fas fa-mobile-alt"></i>Phone: <a href="tel:+4402076897888">+44 (0) 207 689 7888</a></li>
                        </ul>
                    </div>
                 </div>
                 <div className="col-md-3 d-none d-xl-block">
                        <a href="contact.html" className="vs-btn sideMenuToggler">Apply Today</a>
                    </div>
            </div>
        </div>
    </div>
    <div className="sticky-wrap">
        <div className="sticky-active">
            <div className="container">
                <div className="row align-items-center justify-content-between">
                   
                    <div className="col text-end text-lg-center">
                    <nav className="main-menu menu-style2 d-none d-lg-block">
                                    <ul>
                                        <li ><Link to="/">Home</Link></li>
                                        <li className="menu-item-has-children">
                                            <a href="*">About Us</a>
                                            <ul className="sub-menu">
                                                <li><Link to="/aboutstudyhall">About Senior School</Link></li>
                                                
                                                <li><Link to="/mission&vision">Mission and Vision</Link>
                                                </li>
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
                                                <li><a href="class-details.html">School Uniform</a></li>
                                                <li><a href="class-details.html">TC (Transfer Certificate)</a></li>
                                                <li><a href="class-details.html">CBSE Compliance</a></li>
                                            </ul>
                                        </li>
                                        <li className="menu-item-has-children">
                                            <a href="blog.html">Academics
                                            </a>
                                            <ul className="sub-menu">
                                                <li><a href="blog.html">Curriculum</a></li>
                                                <li><a href="blog-details.html">Syllabus </a></li>
                                                <li><a href="blog-details.html">Academic Calendar</a></li>
                                                <li><a href="blog-details.html">Co-Curricular Activities</a></li>
                                                <li><a href="blog-details.html">Academic Calendar</a></li>
                                                <li><a href="blog-details.html">Examinations</a></li>
                                                <li><a href="blog-details.html">Counselling</a></li>
                                                <li><a href="blog-details.html">Exchange Programs</a></li>
                                                <li><a href="blog-details.html">Infrastructure</a></li>
                                                <li><a href="blog-details.html">Teacher's Forum</a></li>
                                                <li><a href="blog-details.html">Teachers Training</a></li>
                                                <li><a href="blog-details.html">Downloads</a></li>
                                                <li><a href="blog-details.html">Circulars</a></li>

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
                                                <li><a href="index-2.html">Alumni Registration</a></li>
                                                

                                            </ul>
                                        </li>
                                        <li>
                                            <a href="contact.html">Blogs</a>
                                        </li>
                                         <li>
                                            <a href="contact.html">Contact</a>
                                        </li>
                                    </ul>
                                </nav>
                        <button className="vs-menu-toggle d-inline-block d-lg-none"><i className="fal fa-bars"></i></button>
                    </div>
                    <div className="col-auto  d-none d-lg-block">
                        <div className="header-icons">
                            <button className="simple-icon sideMenuToggler"><i className="far fa-bars"></i></button>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
</header>
</>
  )
}
