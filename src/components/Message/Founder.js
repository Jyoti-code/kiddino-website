import React from 'react'

export default function Founder() {
    return (
        <section className=" space-top space-extra-bottom bg-smoke">
            <div className="container">
                <div className="title-area text-center">
                    <div className="sec-bubble">
                        <div className="bubble"></div>
                        <div className="bubble"></div>
                        <div className="bubble"></div>
                    </div>
                    <h2 className="sec-title">Founder's Message</h2>
                    <p className="sec-text"></p>
                </div>
                <div className="row align-items-center">
                    <div className='col-md-1'></div>
                    <div className="col-md-6">
                        <div className="team-style1">
                            <div className="team-img">

                                <a href="team-details.html"><video width="600" controls>
                                    <source src="assets/img/studyhall-ceo.mp4" type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video></a>
                            </div>

                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="team-style2">
                            <div className="team-img"><a href="team-details.html"><img src="assets/img/team/t-1-2.jpg" alt="team" /></a></div>
                            <h3 className="team-name"><a className="text-inherit" href="team-details.html">Dr. Urvashi Sahni</a></h3>

                        </div>
                        <p>Founder, Study Hall Educational Foundation</p>
                    </div>
                    <div className='col-md-1'></div>
                </div>
                <div className="row text-center text-lg-start mt-lg-5 pt-4 align-items-center justify-content-between">
                    <div className="col-lg-8 col-xl-9">
                        <div className="title-area mb-xl-0">
                            <span className="sec-subtitle">learning by connecting practice</span>
                            <h2 className="sec-title">Promoting high quality learning of Young Children</h2>
                        </div>
                    </div>
                    <div className="col-lg-auto">
                        <div className="sec-btns mb-0">
                            <a href="contact.html" className="vs-btn">Start Registration</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
