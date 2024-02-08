import React from 'react'

export default function BlogArea() {
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
                <h2 className="sec-title">Recent News</h2>
                <p className="sec-text">We are constantly expanding the range of services offered</p>
            </div>
            <div className="row vs-carousel" data-slide-show="3" data-md-slide-show="2">

                <div className="col-xl-4">
                    <div className="vs-blog blog-style1">
                        <div className="blog-img">
                            <img src="assets/img/blog/blog-1-1.jpeg" alt="Blog Thumbnail" className="w-100"/>
                        </div>
                        <div className="blog-content">
                            <a href="blog.html" className="blog-date"><i className="fal fa-calendar-alt"></i>12 Dec 2023</a>
                            <h3 className="blog-title h5"><a href="blog-details.html">Study Hall’s Concert (2023)</a></h3>
                            <p className="blog-text">Once again it was splendid lights, no camera and perfect action time for Study Hallians!</p>
                        </div>
                        <a href="blog-details.html" className="blog-btn">Read More<i className="far fa-angle-right"></i></a>
                    </div>
                </div>

                <div className="col-xl-4">
                    <div className="vs-blog blog-style1">
                        <div className="blog-img">
                            <img src="assets/img/blog/blog-1-2.jpeg" alt="Blog Thumbnail" className="w-100"/>
                        </div>
                        <div className="blog-content">
                            <a href="blog.html" className="blog-date"><i className="fal fa-calendar-alt"></i>16 Dec 2023</a>
                            <h3 className="blog-title h5"><a href="blog-details.html">Annual Field Day</a></h3>
                            <p className="blog-text">The children of Study Hall Junior School enthralled the audience on the 16th of December</p>
                        </div>
                        <a href="blog-details.html" className="blog-btn">Read More<i className="far fa-angle-right"></i></a>
                    </div>
                </div>

                <div className="col-xl-4">
                    <div className="vs-blog blog-style1">
                        <div className="blog-img">
                            <img src="assets/img/blog/blog-1-3.jpeg" alt="Blog Thumbnail" className="w-100"/>
                        </div>
                        <div className="blog-content">
                            <a href="blog.html" className="blog-date"><i className="fal fa-calendar-alt"></i>25 Dec 2023</a>
                            <h3 className="blog-title h5"><a href="blog-details.html">Tis the Season to be Jolly</a></h3>
                            <p className="blog-text">Christmas was celebrated by the children of Study Hall Junior School</p>
                        </div>
                        <a href="blog-details.html" className="blog-btn">Read More<i className="far fa-angle-right"></i></a>
                    </div>
                </div>

            </div>
        </div>
    </section>
    </>
  )
}
