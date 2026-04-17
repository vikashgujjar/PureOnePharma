const CTA2 = () => {
  return (
    <section className="cs_cta cs_style_2 cs_blue_bg cs_bg_filed cs_center" data-src="/assets/img/cta_bg_1.jpeg">
      <div className="container">
        <div className="row align-items-center cs_gap_y_40">
          <div className="col-lg-6">
            <div className="cs_cta_btn_wrapper wow zoomIn" data-wow-duration="0.9s" data-wow-delay="0.25s">
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
                <p className="cs_section_subtitle cs_white_color"><span className="cs_shape_left"></span>PURE ONE PHARMA</p>
                <h2 className="cs_section_title cs_white_color">WHO-GMP Certified Pharmaceutical Manufacturing & Franchise.
                </h2>
                <p className="cs_cta_subtitle cs_white_color">Pure One Pharma works with certified manufacturing units
                  delivering high-quality pharmaceutical products to partners across India.</p>
                <a className='cs_btn cs_style_1 cs_color_3' href='/contact'>
                  <span>Contact Us </span>
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
  );
};

export default CTA2;
