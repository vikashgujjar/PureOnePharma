const CTA = () => {
  return (
    <section className="cs_cta cs_style_1 cs_blue_bg position-relative overflow-hidden">
      <div className="container">
        <div className="cs_cta_in">
          <div className="cs_cta_left">
            <div className="cs_cta_thumb wow fadeInLeft" data-wow-duration="0.9s" data-wow-delay="0.25s">
              <img src="/assets/img/cta_img_1.jpg" alt="" />
            </div>
            <div className="cs_cta_info">
              <h2 className="cs_cta_title">Partner With Pure One Pharma for Pharma Franchise & Manufacturing.</h2>
              <p className="cs_cta_subtitle">Explore monopoly-based franchise opportunities and WHO-GMP manufacturing
                services.</p>
            </div>
          </div>
          <div className="cs_cta_right">
            <a className='cs_btn cs_style_1 cs_color_3' href='/contact'>
              <span>Enquire Now </span>
              <i className="fa-solid fa-angles-right"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="cs_cta_shape"></div>
    </section>
  );
};

export default CTA;
