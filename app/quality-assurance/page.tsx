import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

const QualityAssurancePage = () => {
  return (
    <main>
      <Header />
      {/* Start Page Heading */}
      <section className="cs_page_heading cs_bg_filed cs_center" data-src="/assets/img/page_heading_bg.jpg" style={{ backgroundImage: "url('/assets/img/page_heading_bg.jpg')" }}>
        <div className="container">
          <h1 className="cs_page_title">Quality <br />Assurance</h1>
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><Link href='/'>Home</Link></li>
            <li className="breadcrumb-item active">Quality Assurance</li>
          </ol>
        </div>
      </section>
      {/* End Page Heading */}

      {/* Start Intro Section */}
      <section className="cs_about cs_style_1 position-relative">
        <div className="cs_height_120 cs_height_lg_80"></div>
        <div className="container">
          <div className="row align-items-center cs_gap_y_40">
            <div className="col-lg-6">
              <div className="cs_about_thumb">
                <div className="cs_about_thumb_1">
                  <img src="/assets/img/quality_assurance.png" alt="Quality Assurance" className="cs_radius_15" />
                </div>
                <div className="cs_experience_box cs_center wow zoomIn" data-wow-duration="0.9s" data-wow-delay="0.25s">
                  <p className="cs_experience_box_number">100%</p>
                  <p className="cs_experience_box_title">Quality Check</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="cs_about_content">
                <div className="cs_section_heading cs_style_1">
                  <p className="cs_section_subtitle cs_accent_color wow fadeInLeft" data-wow-duration="0.9s" data-wow-delay="0.25s">
                    <span className="cs_shape_left"></span>
                    OUR CORE FOUNDATION
                  </p>
                  <h2 className="cs_section_title">Commitment to Excellence & Global Standards</h2>
                </div>
                <p className="cs_about_text">At Pure One Pharma, quality is the foundation of everything we do. Our dedicated quality assurance team ensures that every product we supply—whether pharmaceutical medicines, medical equipment, hospital furniture, pharma chemicals, or cosmetic products—meets the highest industry standards.</p>
                <p className="cs_about_text">We collaborate only with certified and reputed manufacturers who comply with recognized regulatory guidelines such as WHO-GMP and ISO standards. Each product undergoes strict quality checks to ensure safety, efficacy, and reliability before reaching our clients.</p>

                <div className="cs_about_iconbox mt-4">
                  <div className="cs_about_iconbox_icon cs_center">
                    <i className="fa-regular fa-circle-check"></i>
                  </div>
                  <p className="cs_about_iconbox_subtitle">Certified WHO-GMP & ISO Compliant Partners only.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="cs_height_120 cs_height_lg_80"></div>
      </section>
      {/* End Intro Section */}

      {/* Start Process Section */}
      <section className="cs_gray_bg">
        <div className="cs_height_110 cs_height_lg_70"></div>
        <div className="container">
          <div className="cs_section_heading cs_style_1 text-center">
            <p className="cs_section_subtitle cs_accent_color">
              <span className="cs_shape_left"></span>
              OUR PROCESS
              <span className="cs_shape_right"></span>
            </p>
            <h2 className="cs_section_title">Our Quality Assurance Process</h2>
          </div>
          <div className="cs_height_50 cs_height_lg_30"></div>
          <div className="row cs_gap_y_30">
            <div className="col-lg-4 col-md-6">
              <div className="cs_iconbox cs_style_2 cs_radius_15 white-bg shadow-sm p-4 h-100">
                <div className="cs_iconbox_icon cs_center mb-3">
                  <img src="/assets/img/icons/service_icon_1.png" alt="Suppliers" />
                </div>
                <h3 className="cs_iconbox_title">Supplier Selection</h3>
                <p className="cs_iconbox_subtitle">Careful selection of trusted suppliers and manufacturers with proven track records.</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="cs_iconbox cs_style_2 cs_radius_15 white-bg shadow-sm p-4 h-100">
                <div className="cs_iconbox_icon cs_center mb-3">
                  <img src="/assets/img/icons/service_icon_2.png" alt="Documentation" />
                </div>
                <h3 className="cs_iconbox_title">Verification</h3>
                <p className="cs_iconbox_subtitle">Strict verification of product certifications and exhaustive documentation reviews.</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="cs_iconbox cs_style_2 cs_radius_15 white-bg shadow-sm p-4 h-100">
                <div className="cs_iconbox_icon cs_center mb-3">
                  <img src="/assets/img/icons/service_icon_3.png" alt="Handling" />
                </div>
                <h3 className="cs_iconbox_title">Storage & Handling</h3>
                <p className="cs_iconbox_subtitle">Implementation of proper storage and handling practices to maintain product integrity.</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="cs_iconbox cs_style_2 cs_radius_15 white-bg shadow-sm p-4 h-100">
                <div className="cs_iconbox_icon cs_center mb-3">
                  <img src="/assets/img/icons/service_icon_4.png" alt="Traceability" />
                </div>
                <h3 className="cs_iconbox_title">Traceability</h3>
                <p className="cs_iconbox_subtitle">Full batch traceability and rigorous quality control checks for every shipment.</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="cs_iconbox cs_style_2 cs_radius_15 white-bg shadow-sm p-4 h-100">
                <div className="cs_iconbox_icon cs_center mb-3">
                  <img src="/assets/img/icons/service_icon_5.png" alt="Compliance" />
                </div>
                <h3 className="cs_iconbox_title">Compliance</h3>
                <p className="cs_iconbox_subtitle">Absolute compliance with all pharmaceutical and healthcare regulations.</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="cs_iconbox cs_style_2 cs_radius_15 white-bg shadow-sm p-4 h-100">
                <div className="cs_iconbox_icon cs_center mb-3">
                  <img src="/assets/img/icons/service_icon_6.png" alt="Trust" />
                </div>
                <h3 className="cs_iconbox_title">Excellence</h3>
                <p className="cs_iconbox_subtitle">We deliver trust, safety, and excellence in healthcare through accountability.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="cs_height_120 cs_height_lg_80"></div>
      </section>
      {/* End Process Section */}

      {/* Start Commitment Section */}
      <section>
        <div className="cs_height_120 cs_height_lg_80"></div>
        <div className="container">
          <div className="row align-items-center cs_gap_y_40">
            <div className="col-lg-10 offset-lg-1 text-center">
              <div className="cs_section_heading cs_style_1">
                <h2 className="cs_section_title">Delivering Trust & Safety</h2>
                <div className="cs_height_20"></div>
                <p className="cs_about_text" style={{ fontSize: '18px' }}>
                  We are committed to maintaining consistency, transparency, and accountability in our operations. Our focus on quality helps us build long-term relationships with healthcare professionals, distributors, and institutions.
                </p>
                <p className="cs_about_text" style={{ fontWeight: '600', color: 'var(--accent-color)' }}>
                  At Pure One Pharma, we don’t just supply products—we deliver trust, safety, and excellence in healthcare.
                </p>
              </div>
              <div className="cs_height_40"></div>
              <Link className='cs_btn cs_style_1 cs_color_1' href='/contact'>
                <span>Contact Our Quality Team</span>
                <i className="fa-solid fa-angles-right"></i>
              </Link>
            </div>
          </div>
        </div>
        <div className="cs_height_120 cs_height_lg_80"></div>
      </section>
      {/* End Commitment Section */}

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

export default QualityAssurancePage;
