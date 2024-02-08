import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function FeatureArea() {
    const serviceReviewsSliderSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2, 
        autoplay:true,
        slidesToScroll: 1,
    };
    return (
        <>
            <section className=" space-extra-bottom">
                <div className="container">
                    <div className="title-area text-center">
                        <div className="sec-bubble">
                            <div className="bubble"></div>
                            <div className="bubble"></div>
                            <div className="bubble"></div>
                        </div>
                        <h2 className="sec-title">Available Clubs</h2>
                        <p className="sec-text">We are constantly expanding the range of services offered</p>
                    </div>
                    <div className="row justify-content-between align-items-center">
                        <div className="col-md-6 col-xl-auto order-2 order-xl-1">

                            <div className="feature-style3">
                                <div className="feature-img">
                                    <div className="img"><img src="assets/img/feature/fe-1-1.jpg" alt="feature" /></div>
                                </div>
                                <div className="feature-body">
                                    <h3 className="feature-title h4">Early Club</h3>
                                    <div className="list-style2">
                                        <ul className="list-unstyled">
                                            <li>Help parents get to work on time</li>
                                            <li>Near the station</li>
                                            <li>Children settled and ready to work</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="feature-style3">
                                <div className="feature-img">
                                    <div className="img"><img src="assets/img/feature/fe-1-2.jpg" alt="feature" /></div>
                                </div>
                                <div className="feature-body">
                                    <h3 className="feature-title h4">Lunch Club</h3>
                                    <div className="list-style2">
                                        <ul className="list-unstyled">
                                            <li>Help parents get to work on time</li>
                                            <li>Near the station</li>
                                            <li>Children settled and ready to work</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>


                        </div>
                        <div className="col-xl-auto order-1 order-xl-2">
                            <img src="assets/img/feature/fe-1-1.png" alt="feature" className="w-100" />
                        </div>
                        <div className="col-md-6 col-xl-auto  order-3 order-xl-3">
                            <div className="feature-style3">
                                <div className="feature-img">
                                    <div className="img"><img src="assets/img/feature/fe-1-3.jpg" alt="feature" /></div>
                                </div>
                                <div className="feature-body">
                                    <h3 className="feature-title h4">Afternoon Club</h3>
                                    <div className="list-style2">
                                        <ul className="list-unstyled">
                                            <li>Help parents get to work on time</li>
                                            <li>Near the station</li>
                                            <li>Children settled and ready to work</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="feature-style3">
                                <div className="feature-img">
                                    <div className="img"><img src="assets/img/feature/fe-1-4.jpg" alt="feature" /></div>
                                </div>
                                <div className="feature-body">
                                    <h3 className="feature-title h4">Music Club</h3>
                                    <div className="list-style2">
                                        <ul className="list-unstyled">
                                            <li>Help parents get to work on time</li>
                                            <li>Near the station</li>
                                            <li>Children settled and ready to work</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </section>
            <section className="space-extra-bottom">
                <div className="container">
                    <div className="row justify-content-between text-center text-md-start">
                        <div className="col-md-auto">
                            <div className="title-area">
                                <span className="sec-subtitle">Reviews</span>
                                <h2 className="sec-title">Messages</h2>
                            </div>
                        </div>
                        <div className="col-md-auto align-self-end">
                            <div className="sec-btns">
                                <button className="icon-btn" data-slick-prev=".testislide3"><i className="far fa-arrow-left"></i></button>
                                <button className="icon-btn" data-slick-next=".testislide3"><i className="far fa-arrow-right"></i></button>
                            </div>
                        </div>
                    </div>
                    <div className="row vs-carousel testislide3" data-slide-show="2" data-md-slide-show="2">
                        <Slider {...serviceReviewsSliderSettings}>
                            <div className="col-lg-6">
                                <div className="testi-style2" style={{marginRight:'10px'}}>
                                    <img src='assets/img/meenakshi-bahadur.jpg' style={{borderRadius:'50%'}} alt=''/>
                                <h3 className="testi-name h4">Mrs. Meenakshi Bahadur</h3>
                                <h4 className='desgination-name'>Principal, Study Hall School</h4>
                                    <p className="testi-text">Dear Students,<br></br> Staff and Parents,
Welcome to Study Hall - A Universe of Care, a place where we prepare children for life, in a safe, respectful, love filled atmosphere.
Our deep focus has been to reimagine education, to make it socially and politically relevant. We are committed to helping our children learn about themselves – their relationships with their own selves and with the others.</p><br></br><br></br><br></br>
                                    <div className="testi-body">
                                        <div className="testi-icon"><i className="fas fa-quote-left"></i></div>
                                        
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="testi-style2" style={{marginRight:'10px'}}>
                                <img src='assets/img/meenakshi-shah.jpg' style={{borderRadius:'50%'}} alt=''></img>
                                <h3 className="testi-name h4">Mrs. Meenakshi Shah</h3>
                                            <h4 className='desgination-name'>Vice Principal, Study Hall School</h4>
                                    <p className="testi-text">Dear Students,<br></br> Staff and Parents,
We at Study Hall believe that each child is worthy of respect and in an inclusive and holistic environment, we work towards ensuring that each child feels cared for and imbibes values to grow into a sensitive, empathetic, thinking individual. Children are allowed to progress at their own pace and we find ways which help children co construct knowledge along with their teachers in democratic classrooms. This helps nurture children to grow up to be responsible democratic citizens of the country and the world.</p>
                                    <div className="testi-body">
                                        <div className="testi-icon"><i className="fas fa-quote-left"></i></div>
                                        
                                    </div>
                                </div>
                            </div>
                            {/* <div className="col-lg-6">
                                <div className="testi-style2" style={{marginRight:'10px'}}>
                                    <p className="testi-text">Mercedes loves her school. she is leaving Monday. She is going to miss all her teachers. It's very good play school. she loved every minute there thank you.</p>
                                    <div className="testi-body">
                                        <div className="testi-icon"><i className="fas fa-quote-left"></i></div>
                                        <div className="media-body">
                                            <h3 className="testi-name h4">Jannie Marko</h3>
                                            <div className="testi-rating"><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i></div>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                        </Slider>
                    </div>
                </div>
            </section>
            {/* <div className="vs-wave-shape style3">
                <svg viewBox="0 0 1920 295" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path className="wave-path" fillRule="evenodd" clipRule="evenodd" d="M1920 295V202.758C1906.48 131.342 1843.63 77.168 1768.34 77.168C1739.37 77.168 1711.54 85.1814 1687.4 100.128C1650.68 38.4074 1584.56 0 1511.11 0C1412.1 0 1329.2 70.2842 1309.68 163.577C1294.03 136.928 1265.08 119 1232 119C1215.11 119 1198.88 123.673 1184.8 132.389C1163.39 96.397 1124.83 74 1082 74C1022.17 74 972.422 118.018 963.444 175.369C947.459 160.855 926.246 152 903 152C886.11 152 869.88 156.673 855.803 165.389C834.387 129.397 795.832 107 753 107C710.158 107 672.487 129.569 651.251 163.442C635.542 150.075 615.199 142 593 142C576.11 142 559.88 146.673 545.803 155.389C524.387 119.397 485.832 97 443 97C400.012 97 362.23 119.723 341.034 153.789C324.552 132.631 298.841 119 270 119C253.11 119 236.88 123.673 222.803 132.389C201.387 96.397 162.832 74 120 74C53.8333 74 0.000244141 127.833 0.000244141 194C0.000244141 194.41 0.000244141 194.835 0.0152435 195.245L0.000244141 195.248V295H1920Z" />
                </svg>
            </div> */}
        </>
    )
}
