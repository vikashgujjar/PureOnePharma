'use client';
import { useEffect } from 'react';

const Projects = () => {
  useEffect(() => {
    if (typeof window !== 'undefined' && (window as any).tabs) {
      (window as any).tabs();
    }
  }, []);

  return (
    <section className="cs_tabs">
      <div className="cs_height_110 cs_height_lg_70"></div>
      <div className="container">
        <div className="cs_section_heading cs_style_1 cs_type_1">
          <div className="cs_section_heading_left">
            <p className="cs_section_subtitle cs_accent_color wow fadeInLeft" data-wow-duration="0.9s" data-wow-delay="0.25s">
              <span className="cs_shape_left"></span>OUR PRODUCT RANGE
            </p>
            <h2 className="cs_section_title">Explore Our Pharmaceutical Product Categories</h2>
          </div>
          <div className="cs_section_heading_right">
            <p className="mb-0">Pure One Pharma offers a wide range of pharmaceutical products across multiple therapeutic
              segments, manufactured to the highest quality standards for healthcare professionals.</p>
            <ul className="cs_tab_links cs_style_3 cs_mp_0">
              <li className="active"><a href="#dental">Medicines</a></li>
              <li><a href="#cardiology">Medical Equipment</a></li>
              <li><a href="#neurology">Pharma Chemicals</a></li>
              <li><a href="#medical">Cosmetics</a></li>
            </ul>
          </div>
        </div>
        <div className="cs_height_50 cs_height_lg_50"></div>
      </div>
      <div className="cs_tab_body">
        <div className="container-fluide cs_tab active" id="dental">
          <div className="row cs_gap_y_30">
            <div className="col-lg-4">
              <div className="cs_card cs_style_1">
                <a href="#" className="cs_card_thumbnail d-block">
                  <img src="/assets/img/project_1.jpg" alt="Project Image" className="w-100" />
                </a>
                <div className="cs_card_info_wrapper">
                  <div className="cs_card_text">
                    <h3 className="cs_card_title"><a href="/products">Prescription Medicines</a></h3>
                    <p className="cs_card_subtitle mb-0">High-quality pharmaceutical products sourced from certified
                      manufacturers meeting all regulatory standards.
                    </p>
                  </div>
                  <div className="cs_card_index cs_center rounded-circle">01</div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="cs_card cs_style_1">
                <a href="#" className="cs_card_thumbnail d-block">
                  <img src="/assets/img/project_2.jpg" alt="Project Image" className="w-100" />
                </a>
                <div className="cs_card_info_wrapper">
                  <div className="cs_card_text">
                    <h3 className="cs_card_title"><a href="/products">Generic Medicines</a></h3>
                    <p className="cs_card_subtitle mb-0">High-quality pharmaceutical products sourced from certified
                      manufacturers meeting all regulatory standards.
                    </p>
                  </div>
                  <div className="cs_card_index cs_center rounded-circle">02</div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="cs_card cs_style_1">
                <a href="#" className="cs_card_thumbnail d-block">
                  <img src="/assets/img/project_3.jpg" alt="Project Image" className="w-100" />
                </a>
                <div className="cs_card_info_wrapper">
                  <div className="cs_card_text">
                    <h3 className="cs_card_title"><a href="/products">OTC & Nutraceuticals</a></h3>
                    <p className="cs_card_subtitle mb-0">High-quality pharmaceutical products sourced from certified
                      manufacturers meeting all regulatory standards.
                    </p>
                  </div>
                  <div className="cs_card_index cs_center rounded-circle">03</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluide cs_tab" id="cardiology" style={{ display: 'none' }}>
          <div className="row cs_gap_y_30">
            <div className="col-lg-4">
              <div className="cs_card cs_style_1">
                <a href="#" className="cs_card_thumbnail d-block">
                  <img src="/assets/img/project_3.jpg" alt="Project Image" className="w-100" />
                </a>
                <div className="cs_card_info_wrapper">
                  <div className="cs_card_text">
                    <h3 className="cs_card_title"><a href="/products">OTC & Nutraceuticals</a></h3>
                    <p className="cs_card_subtitle mb-0">High-quality pharmaceutical products sourced from certified
                      manufacturers meeting all regulatory standards.
                    </p>
                  </div>
                  <div className="cs_card_index cs_center rounded-circle">03</div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="cs_card cs_style_1">
                <a href="#" className="cs_card_thumbnail d-block">
                  <img src="/assets/img/project_1.jpg" alt="Project Image" className="w-100" />
                </a>
                <div className="cs_card_info_wrapper">
                  <div className="cs_card_text">
                    <h3 className="cs_card_title"><a href="/products">Prescription Medicines</a></h3>
                    <p className="cs_card_subtitle mb-0">High-quality pharmaceutical products sourced from certified
                      manufacturers meeting all regulatory standards.
                    </p>
                  </div>
                  <div className="cs_card_index cs_center rounded-circle">01</div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="cs_card cs_style_1">
                <a href="#" className="cs_card_thumbnail d-block">
                  <img src="/assets/img/project_2.jpg" alt="Project Image" className="w-100" />
                </a>
                <div className="cs_card_info_wrapper">
                  <div className="cs_card_text">
                    <h3 className="cs_card_title"><a href="/products">Generic Medicines</a></h3>
                    <p className="cs_card_subtitle mb-0">High-quality pharmaceutical products sourced from certified
                      manufacturers meeting all regulatory standards.
                    </p>
                  </div>
                  <div className="cs_card_index cs_center rounded-circle">02</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluide cs_tab" id="neurology" style={{ display: 'none' }}>
          <div className="row cs_gap_y_30">
            <div className="col-lg-4">
              <div className="cs_card cs_style_1">
                <a href="#" className="cs_card_thumbnail d-block">
                  <img src="/assets/img/project_2.jpg" alt="Project Image" className="w-100" />
                </a>
                <div className="cs_card_info_wrapper">
                  <div className="cs_card_text">
                    <h3 className="cs_card_title"><a href="/products">Generic Medicines</a></h3>
                    <p className="cs_card_subtitle mb-0">High-quality pharmaceutical products sourced from certified
                      manufacturers meeting all regulatory standards.
                    </p>
                  </div>
                  <div className="cs_card_index cs_center rounded-circle">02</div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="cs_card cs_style_1">
                <a href="#" className="cs_card_thumbnail d-block">
                  <img src="/assets/img/project_3.jpg" alt="Project Image" className="w-100" />
                </a>
                <div className="cs_card_info_wrapper">
                  <div className="cs_card_text">
                    <h3 className="cs_card_title"><a href="/products">OTC & Nutraceuticals</a></h3>
                    <p className="cs_card_subtitle mb-0">High-quality pharmaceutical products sourced from certified
                      manufacturers meeting all regulatory standards.
                    </p>
                  </div>
                  <div className="cs_card_index cs_center rounded-circle">03</div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="cs_card cs_style_1">
                <a href="#" className="cs_card_thumbnail d-block">
                  <img src="/assets/img/project_1.jpg" alt="Project Image" className="w-100" />
                </a>
                <div className="cs_card_info_wrapper">
                  <div className="cs_card_text">
                    <h3 className="cs_card_title"><a href="/products">Prescription Medicines</a></h3>
                    <p className="cs_card_subtitle mb-0">High-quality pharmaceutical products sourced from certified
                      manufacturers meeting all regulatory standards.
                    </p>
                  </div>
                  <div className="cs_card_index cs_center rounded-circle">01</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluide cs_tab" id="medical" style={{ display: 'none' }}>
          <div className="row cs_gap_y_30">
            <div className="col-lg-4">
              <div className="cs_card cs_style_1">
                <a href="#" className="cs_card_thumbnail d-block">
                  <img src="/assets/img/project_3.jpg" alt="Project Image" className="w-100" />
                </a>
                <div className="cs_card_info_wrapper">
                  <div className="cs_card_text">
                    <h3 className="cs_card_title"><a href="/products">OTC & Nutraceuticals</a></h3>
                    <p className="cs_card_subtitle mb-0">High-quality pharmaceutical products sourced from certified
                      manufacturers meeting all regulatory standards.
                    </p>
                  </div>
                  <div className="cs_card_index cs_center rounded-circle">03</div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="cs_card cs_style_1">
                <a href="#" className="cs_card_thumbnail d-block">
                  <img src="/assets/img/project_2.jpg" alt="Project Image" className="w-100" />
                </a>
                <div className="cs_card_info_wrapper">
                  <div className="cs_card_text">
                    <h3 className="cs_card_title"><a href="/products">Generic Medicines</a></h3>
                    <p className="cs_card_subtitle mb-0">High-quality pharmaceutical products sourced from certified
                      manufacturers meeting all regulatory standards.
                    </p>
                  </div>
                  <div className="cs_card_index cs_center rounded-circle">02</div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="cs_card cs_style_1">
                <a href="#" className="cs_card_thumbnail d-block">
                  <img src="/assets/img/project_1.jpg" alt="Project Image" className="w-100" />
                </a>
                <div className="cs_card_info_wrapper">
                  <div className="cs_card_text">
                    <h3 className="cs_card_title"><a href="/products">Prescription Medicines</a></h3>
                    <p className="cs_card_subtitle mb-0">High-quality pharmaceutical products sourced from certified
                      manufacturers meeting all regulatory standards.
                    </p>
                  </div>
                  <div className="cs_card_index cs_center rounded-circle">01</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="cs_height_90 cs_height_lg_50"></div>
      <hr />
    </section>
  );
};

export default Projects;
