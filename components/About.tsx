const About = () => {
  return (
    <section className="cs_about cs_style_1 position-relative">
      <div className="cs_height_120 cs_height_lg_80"></div>
      <div className="container">
        <div className="row align-items-center cs_gap_y_40">
          <div className="col-lg-6">
            <div className="cs_about_thumb">
              <div className="cs_about_thumb_1">
                <img src="/assets/img/about_img_1.jpg" alt="" />
                <a href="https://www.youtube.com/embed/rRid6GCJtgc" className="cs_about_player_btn cs_video_open">
                  <span className="cs_player_btn cs_center">
                    <span></span>
                  </span>
                  <span className="cs_about_play_btn_text">How We Work</span>
                </a>
              </div>
              <div className="cs_about_thumb_2">
                <img src="/assets/img/about_img_2.jpg" alt="About Image" />
                <img src="/assets/img/icons/about_shape_1.png" alt="Shape Image" className="cs_about_thumb_shape_2" />
              </div>
              <div className="cs_experience_box cs_center">
                <p className="cs_experience_box_number">500+</p>
                <p className="cs_experience_box_title">Products</p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 wow fadeInRight" data-wow-duration="0.9s" data-wow-delay="0.25s">
            <div className="cs_about_content">
              <div className="cs_section_heading cs_style_1">
                <p className="cs_section_subtitle cs_accent_color">
                  <span className="cs_shape_left"></span>
                  ABOUT US
                </p>
                <h2 className="cs_section_title">Pure One Pharma — A Trusted Pharmaceutical Company.</h2>
              </div>
              <p className="cs_about_text">Pure One Pharma is dedicated to supplying high-quality pharmaceutical medicines,
                medical equipment, pharma chemicals, and cosmetic products to hospitals, clinics, and distributors across
                India.</p>
              <div className="row cs_gap_y_30">
                <div className="col-sm-6">
                  <div className="cs_iconbox cs_style_1">
                    <div className="cs_iconbox_head">
                      <div className="cs_iconbox_icon cs_center">
                        <img src="/assets/img/icons/about_icon_1.png" alt="" />
                      </div>
                      <h3 className="cs_iconbox_title m-0">Quality Products</h3>
                    </div>
                    <p className="cs_iconbox_subtitle mb-0">Certified and trusted pharmaceutical products meeting all industry
                      standards.</p>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="cs_iconbox cs_style_1">
                    <div className="cs_iconbox_head">
                      <div className="cs_iconbox_icon cs_center">
                        <img src="/assets/img/icons/about_icon_2.png" alt="" />
                      </div>
                      <h3 className="cs_iconbox_title m-0">Certified Manufacturing</h3>
                    </div>
                    <p className="cs_iconbox_subtitle mb-0">WHO-GMP certified manufacturing partners ensuring safe, effective
                      formulations.</p>
                  </div>
                </div>
              </div>
              <div className="cs_about_iconbox">
                <div className="cs_about_iconbox_icon cs_center">
                  <i className="fa-regular fa-circle-check"></i>
                </div>
                <p className="cs_about_iconbox_subtitle">Pure One Pharma works with reputable pharmaceutical manufacturers and
                  chemical suppliers to deliver high-quality products. <a href="/about">READ MORE +</a></p>
              </div>
              <a className='cs_btn cs_style_1 cs_color_1' href='/about'>
                <span>Know More </span>
                <i className="fa-solid fa-angles-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="cs_section_img"><img src="/assets/img/about_section_img_1.png" alt="" /></div>
      <div className="cs_height_120 cs_height_lg_80"></div>
    </section>
  );
};

export default About;
