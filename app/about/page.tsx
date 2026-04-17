import Header from '@/components/Header';
import Footer from '@/components/Footer';

const AboutPage = () => {
  return (
    <main>
      <Header />
      {/* Start Page Heading */}
      <section className="cs_page_heading cs_bg_filed cs_center" style={{ backgroundImage: "url('/assets/img/page_heading_bg.jpg')" }}>
        <div className="container">
          <h1 className="cs_page_title">About Us</h1>
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href='/'>Home</a></li>
            <li className="breadcrumb-item active">About Us</li>
          </ol>
        </div>
      </section>
      {/* End Page Heading */}

      {/* Start About Section */}
      <section className="cs_about cs_style_1 position-relative">
        <div className="cs_height_120 cs_height_lg_80"></div>
        <div className="container">
          <div className="row align-items-center cs_gap_y_40">
            <div className="col-lg-6">
              <div className="cs_about_thumb">
                <div className="cs_about_thumb_1">
                  <img src="/assets/img/About2.jpg" alt="About Image" />
                  {/* <a href="https://www.youtube.com/embed/rRid6GCJtgc" className="cs_about_player_btn cs_video_open">
                    <span className="cs_player_btn cs_center">
                      <span></span>
                    </span>
                    <span className="cs_about_play_btn_text">How We Work</span>
                  </a> */}
                </div>
                <div className="cs_about_thumb_2">
                  <img src="/assets/img/About1.webp" alt="About Image" />
                  <img src="/assets/img/icons/about_shape_1.png" alt="Shape Image" className="cs_about_thumb_shape_2" />
                </div>
                <div className="cs_experience_box cs_center wow zoomIn" data-wow-duration="0.9s" data-wow-delay="0.25s">
                  <p className="cs_experience_box_number">8+</p>
                  <p className="cs_experience_box_title">Years of Trust</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="cs_about_content">
                <div className="cs_section_heading cs_style_1">
                  <p className="cs_section_subtitle cs_accent_color wow fadeInLeft" data-wow-duration="0.9s" data-wow-delay="0.25s">
                    <span className="cs_shape_left"></span>
                    ABOUT PURE ONE PHARMA
                  </p>
                  <h2 className="cs_section_title">Leading Pharmaceutical & Healthcare Supplier.</h2>
                </div>
                <p className="cs_about_text">Pure One Pharma is a trusted name in the pharmaceutical and healthcare industry, established in 2016 with a vision to deliver high-quality and reliable healthcare solutions. Since our inception, we have been committed to serving hospitals, clinics, pharmacies, and distributors with a diverse range of products.</p>
                <p className="cs_about_text">We specialize in the supply of pharmaceutical medicines, medical equipment, hospital furniture, pharma chemicals, and cosmetic products, catering to the growing demands of the healthcare sector.</p>

                <div className="row cs_gap_y_30">
                  <div className="col-sm-6">
                    <div className="cs_iconbox cs_style_1">
                      <div className="cs_iconbox_head">
                        <div className="cs_iconbox_icon cs_center">
                          <img src="/assets/img/icons/about_icon_1.png" alt="" />
                        </div>
                        <h3 className="cs_iconbox_title m-0">Our Vision</h3>
                      </div>
                      <p className="cs_iconbox_subtitle mb-0">To become a leading and globally recognized pharmaceutical and healthcare supplier known for quality and trust.</p>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="cs_iconbox cs_style_1">
                      <div className="cs_iconbox_head">
                        <div className="cs_iconbox_icon cs_center">
                          <img src="/assets/img/icons/about_icon_2.png" alt="" />
                        </div>
                        <h3 className="cs_iconbox_title m-0">Our Mission</h3>
                      </div>
                      <p className="cs_iconbox_subtitle mb-0">To provide safe, effective, and affordable healthcare products while maintaining high standards of quality.</p>
                    </div>
                  </div>
                </div>
                <div className="cs_about_iconbox">
                  <div className="cs_about_iconbox_icon cs_center">
                    <i className="fa-regular fa-circle-check"></i>
                  </div>
                  <p className="cs_about_iconbox_subtitle">We focus on quality, consistency, and customer satisfaction across all our healthcare solutions.</p>
                </div>
                <a className='cs_btn cs_style_1 cs_color_1' href='/contact'>
                  <span>Contact Now </span>
                  <i className="fa-solid fa-angles-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="cs_section_img"><img src="/assets/img/about_section_img_1.png" alt="" /></div>
        <div className="cs_height_120 cs_height_lg_80"></div>
      </section>
      {/* End About Section */}

      {/* Start CTA Section */}
      <section className="cs_cta cs_style_2 cs_blue_bg cs_bg_filed cs_center" data-src="/assets/img/cta_bg_1.jpeg">
        <div className="container">
          <div className="row align-items-center cs_gap_y_40">
            <div className="col-lg-6">
              <div className="cs_cta_btn_wrapper">
                <a href="https://www.youtube.com/embed/rRid6GCJtgc" className="cs_video_open">
                  <span className="cs_player_btn cs_center">
                    <span></span>
                  </span>
                  <span className="cs_play_btn_text">WATCH VIDEO</span>
                </a>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="cs_cta_text">
                <div className="cs_section_heading cs_style_1">
                  <p className="cs_section_subtitle text-white"><span className="cs_shape_left"></span>OUR WATCH VIDEO</p>
                  <h2 className="cs_section_title cs_white_color">Professional Medical Care Measure Medical.</h2>
                  <p className="cs_cta_subtitle cs_white_color">We are privileged to work with hundreds of future-thinking medial, including many of the world’s top hardware, software, and brands , feel safe and
                    comfortable in establishing.</p>
                  <a className='cs_btn cs_style_1 cs_color_3' href='/contact'>
                    <span>Video More </span>
                    <i className="fa-solid fa-angles-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="cs_cta_shape position-absolute">
            <img src="/assets/img/medical_brand.png" alt="Medical Brand" className="cs_spinner_img" />
          </div>
        </div>
      </section>
      {/* End CTA Section */}
      {/* Start Counter Section */}
      <div className="cs_counter_area_2">
        <div className="cs_height_120 cs_height_lg_80"></div>
        <div className="container">
          <div className="cs_counter_2_wrap">
            <div className="cs_counter cs_style_2">
              <div className="cs_counter_icon cs_center">
                <img src="/assets/img/icons/counter_icon_1.png" alt="Icon" />
              </div>
              <div className="cs_counter_nmber"><span data-count-to="500" className="odometer">0</span>+</div>
              <p className="cs_counter_title mb-0">Active Clients</p>
            </div>
            <div className="cs_counter cs_style_2">
              <div className="cs_counter_icon cs_center">
                <img src="/assets/img/icons/counter_icon_2.png" alt="Icon" />
              </div>
              <div className="cs_counter_nmber"><span data-count-to="23" className="odometer">0</span>K+</div>
              <p className="cs_counter_title mb-0">Team Support</p>
            </div>
            <div className="cs_counter cs_style_2">
              <div className="cs_counter_icon cs_center">
                <img src="/assets/img/icons/counter_icon_3.png" alt="Icon" />
              </div>
              <div className="cs_counter_nmber"><span data-count-to="241" className="odometer">0</span>+</div>
              <p className="cs_counter_title mb-0">Projects Completed</p>
            </div>
            <div className="cs_counter cs_style_2">
              <div className="cs_counter_icon cs_center">
                <img src="/assets/img/icons/counter_icon_4.png" alt="Icon" />
              </div>
              <div className="cs_counter_nmber"><span data-count-to="16" className="odometer">0</span>K+</div>
              <p className="cs_counter_title mb-0">Award winner</p>
            </div>
          </div>
        </div>
        <div className="cs_height_120 cs_height_lg_80"></div>
      </div>
      {/* End Counter Section */}


      <Footer />
      {/* Scroll Up Button */}
      <span className="cs_scrollup">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 10L1.7625 11.7625L8.75 4.7875V20H11.25V4.7875L18.225 11.775L20 10L10 0L0 10Z" fill="currentColor" />
        </svg>
      </span>
    </main>
  );
};

export default AboutPage;
