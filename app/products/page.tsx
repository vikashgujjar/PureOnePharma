import Header from '@/components/Header';
import Footer from '@/components/Footer';

const ProductsPage = () => {
  return (
    <main>
      <Header />
      {/* Start Page Heading */}
      <section className="cs_page_heading cs_bg_filed cs_center" data-src="/assets/img/page_heading_bg.jpg" style={{ backgroundImage: "url('/assets/img/page_heading_bg.jpg')" }}>
        <div className="container">
          <h1 className="cs_page_title">Our Product <br />Categories</h1>
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href='/'>Home</a></li>
            <li className="breadcrumb-item active">Our Product Categories</li>
          </ol>
        </div>
      </section>
      {/* End Page Heading */}

      {/* Hospital Furniture Section */}
      <section>
        <div className="cs_height_110 cs_height_lg_70"></div>
        <div className="container">
          <div className="row align-items-center cs_gap_y_40">
            <div className="col-lg-6">
              <div className="cs_about_thumb">
                <img src="/assets/img/project_1.jpg" alt="Hospital Furniture" className="cs_radius_15" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="cs_about_content">
                <div className="cs_section_heading cs_style_1">
                  <p className="cs_section_subtitle cs_accent_color">
                    <span className="cs_shape_left"></span>
                    HOSPITAL SOLUTIONS
                  </p>
                  <h2 className="cs_section_title">Hospital Furniture & Beds</h2>
                </div>
                <p className="cs_about_text">We provide high-quality hospital furniture and patient care beds designed for comfort, durability, and medical efficiency. All furniture is built with heavy-duty materials, smooth mobility, and patient safety features.</p>
                <div className="row">
                  <div className="col-sm-6">
                    <ul className="cs_list cs_style_1 cs_mp0">
                      <li className='p-0'>Manual Hospital Beds</li>
                      <li className='p-0'>Semi-Fowler & Fowler Beds</li>
                      <li className='p-0'>Electric ICU Beds</li>
                      <li className='p-0'>ICU Beds with Remote Control</li>
                      <li className='p-0'>Pediatric Beds</li>
                      <li className='p-0'>Delivery Beds / Labour Tables</li>
                    </ul>
                  </div>
                  <div className="col-sm-6">
                    <ul className="cs_list cs_style_1 cs_mp0">
                      <li className='p-0'>Examination Tables</li>
                      <li className='p-0'>Patient Stretchers & Trolleys</li>
                      <li className='p-0'>Wheelchairs (Manual & Electric)</li>
                      <li className='p-0'>Bedside Lockers & Cabinets</li>
                      <li className='p-0'>Overbed Tables</li>
                      <li className='p-0'>Hospital Chairs & Attendant Chairs</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="cs_height_120 cs_height_lg_80"></div>
      </section>

      {/* Medical Equipment Section */}
      <section className="cs_gray_bg">
        <div className="cs_height_110 cs_height_lg_70"></div>
        <div className="container">
          <div className="row align-items-center cs_gap_y_40 flex-lg-row-reverse">
            <div className="col-lg-6">
              <div className="cs_about_thumb">
                <img src="/assets/img/project_3.jpg" alt="Medical Equipment" className="cs_radius_15" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="cs_about_content">
                <div className="cs_section_heading cs_style_1">
                  <p className="cs_section_subtitle cs_accent_color">
                    <span className="cs_shape_left"></span>
                    DIAGNOSTIC & SURGICAL
                  </p>
                  <h2 className="cs_section_title">Medical Equipment</h2>
                </div>
                <p className="cs_about_text">We supply reliable medical and diagnostic equipment for hospitals, clinics, and laboratories.</p>
                <div className="row">
                  <div className="col-sm-6">
                    <ul className="cs_list cs_style_1 cs_mp0">
                      <li className='p-0'>Patient Monitors</li>
                      <li className='p-0'>ECG Machines</li>
                      <li className='p-0'>Defibrillators</li>
                      <li className='p-0'>Infusion Pumps & Syringe Pumps</li>
                      <li className='p-0'>Oxygen Concentrators</li>
                      <li className='p-0'>Suction Machines</li>
                    </ul>
                  </div>
                  <div className="col-sm-6">
                    <ul className="cs_list cs_style_1 cs_mp0">
                      <li className='p-0'>Nebulizers</li>
                      <li className='p-0'>Blood Pressure Monitors</li>
                      <li className='p-0'>Pulse Oximeters</li>
                      <li className='p-0'>Surgical Instruments</li>
                      <li className='p-0'>Autoclave & Sterilization Equipment</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="cs_height_120 cs_height_lg_80"></div>
      </section>

      {/* Other Categories Section */}
      <section>
        <div className="cs_height_110 cs_height_lg_70"></div>
        <div className="container">
          <div className="row cs_row_gap_30 cs_gap_y_30">
            {/* Pharmaceutical Medicines */}
            <div className="col-lg-4 col-md-6">
              <div className="cs_iconbox cs_style_2 cs_radius_15 white-bg shadow-sm p-4 h-100">
                <div className="cs_iconbox_icon cs_center mb-3">
                  <img src="/assets/img/icons/service_icon_1.png" alt="Medicines" />
                </div>
                <h3 className="cs_iconbox_title">Pharmaceutical Medicines</h3>
                <ul className="cs_list cs_style_1 cs_mp0 mt-3">
                  <li className='p-0'>Prescription Medicines</li>
                  <li className='p-0'>Generic Medicines</li>
                  <li className='p-0'>OTC Medicines</li>
                  <li className='p-0'>Antibiotics</li>
                  <li className='p-0'>Pain Relief Medicines</li>
                  <li className='p-0'>Multivitamins & Supplements</li>
                </ul>
              </div>
            </div>

            {/* Pharma Chemicals */}
            <div className="col-lg-4 col-md-6">
              <div className="cs_iconbox cs_style_2 cs_radius_15 white-bg shadow-sm p-4 h-100">
                <div className="cs_iconbox_icon cs_center mb-3">
                  <img src="/assets/img/icons/service_icon_3.png" alt="Chemicals" />
                </div>
                <h3 className="cs_iconbox_title">Pharma Chemicals</h3>
                <ul className="cs_list cs_style_1 cs_mp0 mt-3">
                  <li className='p-0'>Active Pharmaceutical Ingredients (API)</li>
                  <li className='p-0'>Pharmaceutical Intermediates</li>
                  <li className='p-0'>Laboratory Chemicals</li>
                  <li className='p-0'>Specialty Chemicals</li>
                </ul>
                <div className="mt-4">
                  <a href="/pharmaceutical-chemicals" className="cs_text_btn cs_accent_color">
                    <span>View Detail</span>
                    <i className="fa-solid fa-angles-right"></i>
                  </a>
                </div>
              </div>
            </div>

            {/* Cosmetic & Personal Care */}
            <div className="col-lg-4 col-md-6">
              <div className="cs_iconbox cs_style_2 cs_radius_15 white-bg shadow-sm p-4 h-100">
                <div className="cs_iconbox_icon cs_center mb-3">
                  <img src="/assets/img/icons/service_icon_6.png" alt="Cosmetic" />
                </div>
                <h3 className="cs_iconbox_title">Cosmetic & Personal Care Products</h3>
                <ul className="cs_list cs_style_1 cs_mp0 mt-3">
                  <li className='p-0'>Skin Care Products</li>
                  <li className='p-0'>Hair Care Products</li>
                  <li className='p-0'>Dermatology Range</li>
                  <li className='p-0'>Herbal Cosmetics</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="cs_height_120 cs_height_lg_80"></div>
      </section>

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

export default ProductsPage;
