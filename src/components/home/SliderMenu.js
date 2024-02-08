import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function SliderMenu() {
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    autoplay: true,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <section className="vs-hero-wrapper">
        <div className='vs-hero-carousel'  data-height="1050" data-container="1900" data-slidertype="responsive">
        <div className="ls-inner ls-slide" style={{ backgroundColor: 'rgb(52 23 124)', height: '100vh' }}>
          <div className='col-md-12'>
            <Slider {...sliderSettings}>
              <div className="category-style2">
                <div className='row'>
                  <div className='col-md-6'>
                    <div className="category-text" style={{ textAlign: 'left', marginTop: '180px', marginLeft: '300px' }}>
                      <h2 style={{ color: 'white', fontSize: '89px' }}>A Happy School</h2>
                      <p style={{ color: 'white', fontSize: '13px', marginLeft: '15px', fontFamily: 'Jost, sans-serif' }}>At Study Hall teachers are called Aunty. This is because we believe that children. </p>
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className="category-img" style={{ textAlign: 'center', marginTop: '180px', width: '393px', height: '413px', borderRadius: '0px' }}>
                      <a href="className-details.html">
                        <img
                          src="assets/img/hero/hero-2-1.png"
                          alt="A Happy School"
                          className="ls-img-layer ls-layer"
                          decoding="async"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Similar structure for other slides, update alt text accordingly */}

              <div className="category-style2">
                <div className='row'>
                  <div className='col-md-6'>
                    <div className="category-text" style={{ textAlign: 'left', marginTop: '180px', marginLeft: '300px' }}>
                      <h2 style={{ color: 'white', fontSize: '79px' }}>An Inclusive School</h2>
                      <p style={{ color: 'white', fontSize: '13px', marginLeft: '15px', fontFamily: 'Jost, sans-serif' }}>Creating an inclusive school environment is the school’s first priority.</p>
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className="category-img" style={{ marginTop: '180px', width: '393px', height: '413px', borderRadius: '0px' }}>
                      <a href="className-details.html">
                        <img
                          src="assets/img/hero/hero-2-2.png"
                          alt="An Inclusive School"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Repeat similar structure for the remaining slides */}

            </Slider>
            <img src='assets/img/hero/h-s-2-2.png' alt='Additional Decorative' style={{ marginTop: '-50px' }} />
          </div>
        </div>
        </div>
      </section>
    </>
  );
}
