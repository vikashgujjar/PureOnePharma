'use client';
import { useEffect } from 'react';

const Hero = () => {
  useEffect(() => {
    if (typeof window !== 'undefined' && (window as any).slickInit) {
      (window as any).slickInit();
      (window as any).dynamicBackground();
    }
  }, []);

  return (
    <section className="position-relative">
      <div className="cs_hero_slider_thumb slick-slider">
        <div className="cs_hero_slider_thumb_item">
          <div className="cs_hero cs_style_1 cs_center cs_bg_filed" data-src="/assets/img/hero_slider_3.jpg">
            <div className="container">
              <div className="cs_hero_text">
                <div className="cs_hero_text_in">
                  <h1 className="cs_hero_title">Trusted Pharmaceutical <span>Manufacturing & Franchise.</span></h1>
                  <p className="cs_hero_subtitle">Welcome to Pure One Pharma — your reliable partner for PCD Pharma Franchise,
                    third-party manufacturing, and high-quality pharmaceutical formulations including tablets, capsules,
                    syrups, and injectables.</p>
                  <div className="cs_hero_info">
                    <h3>Start Your Pharma Business.</h3>
                    <p>Call Us at: +91-7551000090</p>
                  </div>
                  <div className="cs_hero_btns">
                    <a className='cs_btn cs_style_1 cs_color_1' href='/contact'>
                      <span>Contact Now </span>
                      <i className="fa-solid fa-angles-right"></i>
                    </a>
                    <a className='cs_btn cs_style_1 cs_color_2' href='/about'>
                      <span>Discover More </span>
                      <i className="fa-solid fa-angles-right"></i>
                    </a>
                  </div>
                </div>
                <div className="cs_hero_shape">
                  <img src="/assets/img/icons/hero_icon.png" alt="Icon" className="cs_spinner_img" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="cs_hero_slider_thumb_item">
          <div className="cs_hero cs_style_1 cs_center cs_bg_filed" data-src="/assets/img/hero_slider_2.jpg">
            <div className="container">
              <div className="cs_hero_text">
                <div className="cs_hero_text_in">
                  <h1 className="cs_hero_title">WHO-GMP Certified <br />Pharmaceutical <span>Solutions.</span></h1>
                  <p className="cs_hero_subtitle">Pure One Pharma offers a comprehensive product portfolio covering
                    Gastroenterology, Dermatology, Cardiology, Neurology, and Nutraceuticals — all manufactured to the
                    highest quality standards.</p>
                  <div className="cs_hero_info">
                    <h3>Explore Our Products.</h3>
                    <p>Call Us at: +91-7551000090</p>
                  </div>
                  <div className="cs_hero_btns">
                    <a className='cs_btn cs_style_1 cs_color_1' href='/contact'>
                      <span>Contact Now </span>
                      <i className="fa-solid fa-angles-right"></i>
                    </a>
                    <a className='cs_btn cs_style_1 cs_color_2' href='/products'>
                      <span>Our Products </span>
                      <i className="fa-solid fa-angles-right"></i>
                    </a>
                  </div>
                </div>
                <div className="cs_hero_shape">
                  <img src="/assets/img/icons/hero_icon.png" alt="Icon" className="cs_spinner_img" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="cs_hero_slider_thumb_item">
          <div className="cs_hero cs_style_1 cs_center cs_bg_filed" data-src="/assets/img/hero_slider_1.jpg">
            <div className="container">
              <div className="cs_hero_text">
                <div className="cs_hero_text_in">
                  <h1 className="cs_hero_title">Exclusive Monopoly Rights <span>PCD Franchise.</span></h1>
                  <p className="cs_hero_subtitle">Join Pure One Pharma's PCD Pharma Franchise network and enjoy monopoly
                    rights in your region, high profit margins, and complete promotional and marketing support for your
                    pharmaceutical business.</p>
                  <div className="cs_hero_info">
                    <h3>Apply for Franchise.</h3>
                    <p>Call Us at: +91-7551000090</p>
                  </div>
                  <div className="cs_hero_btns">
                    <a className='cs_btn cs_style_1 cs_color_1' href='/contact'>
                      <span>Contact Now </span>
                      <i className="fa-solid fa-angles-right"></i>
                    </a>
                    <a className='cs_btn cs_style_1 cs_color_2' href='/pcd-pharma-franchise'>
                      <span>Learn More </span>
                      <i className="fa-solid fa-angles-right"></i>
                    </a>
                  </div>
                </div>
                <div className="cs_hero_shape">
                  <img src="/assets/img/icons/hero_icon.png" alt="Icon" className="cs_spinner_img" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="cs_hero_slider_nav slick-slider">
        <div className="cs_hero_slider_thumb_mini">
          <img src="/assets/img/hero_slider_sm_1.png" alt="" />
        </div>
        <div className="cs_hero_slider_thumb_mini">
          <img src="/assets/img/hero_slider_sm_2.png" alt="" />
        </div>
        <div className="cs_hero_slider_thumb_mini">
          <img src="/assets/img/hero_slider_sm_3.png" alt="" />
        </div>
        <div className="cs_hero_slider_thumb_mini">
          <img src="/assets/img/hero_slider_sm_1.png" alt="" />
        </div>
        <div className="cs_hero_slider_thumb_mini">
          <img src="/assets/img/hero_slider_sm_2.png" alt="" />
        </div>
        <div className="cs_hero_slider_thumb_mini">
          <img src="/assets/img/hero_slider_sm_3.png" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
