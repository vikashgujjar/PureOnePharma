'use client';
import { useEffect } from 'react';

const MedicalTabs = () => {
  useEffect(() => {
    if (typeof window !== 'undefined' && (window as any).tabs) {
      (window as any).tabs();
    }
  }, []);

  return (
    <section>
      <div className="cs_height_110 cs_height_lg_70"></div>
      <div className="container">
        <div className="cs_section_heading cs_style_1 text-center">
          <p className="cs_section_subtitle cs_accent_color wow fadeInUp" data-wow-duration="0.9s" data-wow-delay="0.25s">
            <span className="cs_shape_left"></span>OUR SERVICES<span className="cs_shape_right"></span>
          </p>
          <h2 className="cs_section_title">Explore Our <br />Pharma Services</h2>
        </div>
        <div className="cs_height_50 cs_height_lg_50"></div>
        <div className="cs_tabs">
          <ul className="cs_tab_links cs_style_1 cs_bold">
            <li className="active">
              <a href="#brain_althim">
                <span className="cs_tab_link_icon cs_center"><img src="/assets/img/icons/tab_link_icon_1.png"
                    alt="Icon" /></span>
                <span>PCD Pharma Franchise</span>
              </a>
            </li>
            <li>
              <a href="#emergency">
                <span className="cs_tab_link_icon cs_center"><img src="/assets/img/icons/tab_link_icon_2.png"
                    alt="Icon" /></span>
                <span>Third Party Manufacturing</span>
              </a>
            </li>
            <li>
              <a href="#heart_beat">
                <span className="cs_tab_link_icon cs_center"><img src="/assets/img/icons/tab_link_icon_3.png"
                    alt="Icon" /></span>
                <span>Marketing Support</span>
              </a>
            </li>
            <li>
              <a href="#blood_test">
                <span className="cs_tab_link_icon cs_center"><img src="/assets/img/icons/tab_link_icon_4.png"
                    alt="Icon" /></span>
                <span>Quality Assurance</span>
              </a>
            </li>
          </ul>
          <div className="cs_height_50 cs_height_lg_50"></div>
          <div className="tab-content">
            <div id="brain_althim" className="cs_tab active">
              <div className="cs_card cs_style_2">
                <div className="row cs_gap_y_30 align-items-xl-center">
                  <div className="col-lg-6">
                    <div className="cs_card_thumb cs_radius_5">
                      <img src="/assets/img/offerings03.jpg" alt="Department Image" />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="cs_card_text">
                      <h2 className="cs_card_title">We are here to hear and heal your</h2>
                      <p className="cs_card_subtitle">Pure One Pharma ensures all products meet the highest pharmaceutical
                        standards, supporting healthcare professionals and business partners across India.</p>
                      <ul className="cs_list cs_style_1 cs_mp0">
                        <li>
                          <i><img src="/assets/img/icons/check_icon_1.png" alt="Icon" /></i>
                          Pure One Pharma products are sourced from certified manufacturers following strict
                          pharmaceutical quality control and regulatory standards.
                        </li>
                        <li>
                          <i><img src="/assets/img/icons/check_icon_1.png" alt="Icon" /></i>
                          Our product range covers all major therapeutic segments ensuring comprehensive pharmaceutical
                          solutions for healthcare businesses.
                        </li>
                      </ul>
                      <a className='cs_btn cs_style_1 cs_color_1' href='/contact'>
                        <span>Read More </span>
                        <i className="fa-solid fa-angles-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="emergency" className="cs_tab" style={{ display: 'none' }}>
              <div className="cs_card cs_style_2">
                <div className="row cs_gap_y_30 align-items-xl-center">
                  <div className="col-lg-6">
                    <div className="cs_card_thumb cs_radius_5">
                      <img src="/assets/img/offerings02.jpg" alt="Department Image" />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="cs_card_text">
                      <h2 className="cs_card_title">Treatment patients in primary care</h2>
                      <p className="cs_card_subtitle">Pure One Pharma provides reliable third-party pharmaceutical
                        manufacturing with WHO-GMP certified facilities and strict quality control.</p>
                      <ul className="cs_list cs_style_1 cs_mp0">
                        <li>
                          <i><img src="/assets/img/icons/check_icon_1.png" alt="Icon" /></i>
                          Pure One Pharma products are sourced from certified manufacturers following strict
                          pharmaceutical quality control and regulatory standards.
                        </li>
                        <li>
                          <i><img src="/assets/img/icons/check_icon_1.png" alt="Icon" /></i>
                          Our product range covers all major therapeutic segments ensuring comprehensive pharmaceutical
                          solutions for healthcare businesses.
                        </li>
                      </ul>
                      <a className='cs_btn cs_style_1 cs_color_1' href='/contact'>
                        <span>Read More </span>
                        <i className="fa-solid fa-angles-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="heart_beat" className="cs_tab" style={{ display: 'none' }}>
              <div className="cs_card cs_style_2">
                <div className="row cs_gap_y_30 align-items-xl-center">
                  <div className="col-lg-6">
                    <div className="cs_card_thumb cs_radius_5">
                      <img src="/assets/img/offerings01.jpg" alt="Department Image" />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="cs_card_text">
                      <h2 className="cs_card_title">Accreditation within a given specialty</h2>
                      <p className="cs_card_subtitle">Pure One Pharma provides all promotional and marketing tools needed to
                        grow your pharmaceutical business successfully.</p>
                      <ul className="cs_list cs_style_1 cs_mp0">
                        <li>
                          <i><img src="/assets/img/icons/check_icon_1.png" alt="Icon" /></i>
                          Pure One Pharma products are sourced from certified manufacturers following strict
                          pharmaceutical quality control and regulatory standards.
                        </li>
                        <li>
                          <i><img src="/assets/img/icons/check_icon_1.png" alt="Icon" /></i>
                          Our product range covers all major therapeutic segments ensuring comprehensive pharmaceutical
                          solutions for healthcare businesses.
                        </li>
                      </ul>
                      <a className='cs_btn cs_style_1 cs_color_1' href='/contact'>
                        <span>Read More </span>
                        <i className="fa-solid fa-angles-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="blood_test" className="cs_tab" style={{ display: 'none' }}>
              <div className="cs_card cs_style_2">
                <div className="row cs_gap_y_30 align-items-xl-center">
                  <div className="col-lg-6">
                    <div className="cs_card_thumb cs_radius_5">
                      <img src="/assets/img/offerings04.jpg" alt="Department Image" />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="cs_card_text">
                      <h2 className="cs_card_title">Better Health While Aging health</h2>
                      <p className="cs_card_subtitle">At Pure One Pharma, quality is our top priority — all products meet
                        pharmaceutical industry standards and regulatory guidelines.</p>
                      <ul className="cs_list cs_style_1 cs_mp0">
                        <li>
                          <i><img src="/assets/img/icons/check_icon_1.png" alt="Icon" /></i>
                          Pure One Pharma products are sourced from certified manufacturers following strict
                          pharmaceutical quality control and regulatory standards.
                        </li>
                        <li>
                          <i><img src="/assets/img/icons/check_icon_1.png" alt="Icon" /></i>
                          Our product range covers all major therapeutic segments ensuring comprehensive pharmaceutical
                          solutions for healthcare businesses.
                        </li>
                      </ul>
                      <a className='cs_btn cs_style_1 cs_color_1' href='/contact'>
                        <span>Read More </span>
                        <i className="fa-solid fa-angles-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="cs_height_120 cs_height_lg_80"></div>
      <hr />
    </section>
  );
};

export default MedicalTabs;
