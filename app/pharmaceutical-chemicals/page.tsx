import Header from '@/components/Header';
import Footer from '@/components/Footer';

const PharmaceuticalChemicalsPage = () => {
  return (
    <main>
      <Header />
      {/* Start Page Heading */}
      <section className="cs_page_heading cs_bg_filed cs_center" data-src="/assets/img/page_heading_bg.jpg" style={{ backgroundImage: "url('/assets/img/page_heading_bg.jpg')" }}>
        <div className="container">
          <h1 className="cs_page_title">Pharmaceutical<br /> Chemicals</h1>
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href='/'>Home</a></li>
            <li className="breadcrumb-item"><a href='/products'>Products</a></li>
            <li className="breadcrumb-item active">Pharmaceutical Chemicals</li>
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
                  <img src="/assets/img/pharma_chemicals.png" alt="Chemicals" />
                </div>
                <div className="cs_about_thumb_2">
                  <img src="/assets/img/about_pharma.png" alt="Lab" />
                  <img src="/assets/img/icons/about_shape_1.png" alt="Shape" className="cs_about_thumb_shape_2" />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="cs_about_content">
                <div className="cs_section_heading cs_style_1">
                  <p className="cs_section_subtitle cs_accent_color">
                    <span className="cs_shape_left"></span>
                    RAW MATERIALS & APIS
                  </p>
                  <h2 className="cs_section_title">Pharmaceutical Chemicals (Raw Materials & APIs)</h2>
                </div>
                <p className="cs_about_text">We supply high-quality pharmaceutical raw materials and chemicals used in drug manufacturing and formulation. Our products are sourced from certified manufacturers to ensure the highest purity and compliance with international standards.</p>
                <div className="cs_about_iconbox">
                  <div className="cs_about_iconbox_icon cs_center">
                    <i className="fa-regular fa-circle-check"></i>
                  </div>
                  <p className="cs_about_iconbox_subtitle">Pure One Pharma ensures all raw materials meet stringent quality and regulatory guidelines for safe drug production.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="cs_height_120 cs_height_lg_80"></div>
      </section>
      {/* End Intro Section */}

      {/* Start Categories Section */}
      <section className="cs_gray_bg">
        <div className="cs_height_110 cs_height_lg_70"></div>
        <div className="container">
          <div className="row cs_row_gap_30 cs_gap_y_30">
            {/* APIs */}
            <div className="col-xl-4 col-md-6">
              <div className="cs_iconbox cs_style_2 cs_radius_15 white-bg p-4 h-100">
                <div className="cs_iconbox_header d-flex align-items-center justify-content-between mb-3">
                  <div className="cs_iconbox_icon cs_center">
                    <img src="/assets/img/icons/service_icon_3.png" alt="API Icon" />
                  </div>
                </div>
                <h3 className="cs_iconbox_title">Active Pharmaceutical Ingredients (APIs)</h3>
                <ul className="cs_list cs_style_1 cs_mp0 mt-3">
                  <li className='p-0'>Paracetamol</li>
                  <li className='p-0'>Ibuprofen</li>
                  <li className='p-0'>Amoxicillin</li>
                  <li className='p-0'>Azithromycin</li>
                  <li className='p-0'>Metformin</li>
                  <li className='p-0'>Diclofenac</li>
                </ul>
              </div>
            </div>

            {/* Excipients */}
            <div className="col-xl-4 col-md-6">
              <div className="cs_iconbox cs_style_2 cs_radius_15 white-bg p-4 h-100">
                <div className="cs_iconbox_header d-flex align-items-center justify-content-between mb-3">
                  <div className="cs_iconbox_icon cs_center">
                    <img src="/assets/img/icons/service_icon_1.png" alt="Excipients Icon" />
                  </div>
                </div>
                <h3 className="cs_iconbox_title">Excipients (Inactive Ingredients)</h3>
                <ul className="cs_list cs_style_1 cs_mp0 mt-3">
                  <li className='p-0'>Microcrystalline Cellulose (MCC)</li>
                  <li className='p-0'>Lactose Monohydrate</li>
                  <li className='p-0'>Starch & Pregelatinized Starch</li>
                  <li className='p-0'>Magnesium Stearate</li>
                  <li className='p-0'>Talc</li>
                  <li className='p-0'>Sodium Starch Glycolate</li>
                </ul>
              </div>
            </div>

            {/* Solvents */}
            <div className="col-xl-4 col-md-6">
              <div className="cs_iconbox cs_style_2 cs_radius_15 white-bg p-4 h-100">
                <div className="cs_iconbox_header d-flex align-items-center justify-content-between mb-3">
                  <div className="cs_iconbox_icon cs_center">
                    <img src="/assets/img/icons/service_icon_4.png" alt="Solvents Icon" />
                  </div>
                </div>
                <h3 className="cs_iconbox_title">Solvents & Processing Chemicals</h3>
                <ul className="cs_list cs_style_1 cs_mp0 mt-3">
                  <li className='p-0'>Ethanol</li>
                  <li className='p-0'>Isopropyl Alcohol (IPA)</li>
                  <li className='p-0'>Acetone</li>
                  <li className='p-0'>Methanol</li>
                  <li className='p-0'>Purified Water</li>
                </ul>
              </div>
            </div>

            {/* Coating */}
            <div className="col-xl-6 col-md-6">
              <div className="cs_iconbox cs_style_2 cs_radius_15 white-bg p-4 h-100">
                <div className="cs_iconbox_header d-flex align-items-center justify-content-between mb-3">
                  <div className="cs_iconbox_icon cs_center">
                    <img src="/assets/img/icons/service_icon_7.png" alt="Coating Icon" />
                  </div>
                </div>
                <h3 className="cs_iconbox_title">Coating & Formulation Materials</h3>
                <ul className="cs_list cs_style_1 cs_mp0 mt-3">
                  <li className='p-0'>Hydroxypropyl Methylcellulose (HPMC)</li>
                  <li className='p-0'>Polyvinylpyrrolidone (PVP)</li>
                  <li className='p-0'>Titanium Dioxide</li>
                </ul>
              </div>
            </div>

            {/* Lab Chemicals */}
            <div className="col-xl-6 col-md-6">
              <div className="cs_iconbox cs_style_2 cs_radius_15 white-bg p-4 h-100">
                <div className="cs_iconbox_header d-flex align-items-center justify-content-between mb-3">
                  <div className="cs_iconbox_icon cs_center">
                    <img src="/assets/img/icons/service_icon_2.png" alt="Lab Icon" />
                  </div>
                </div>
                <h3 className="cs_iconbox_title">Laboratory & QC Chemicals</h3>
                <ul className="cs_list cs_style_1 cs_mp0 mt-3">
                  <li className='p-0'>Buffer Solutions</li>
                  <li className='p-0'>Reagents</li>
                  <li className='p-0'>Analytical Grade Chemicals</li>
                </ul>
              </div>
            </div>

          </div>
        </div>
        <div className="cs_height_120 cs_height_lg_80"></div>
      </section>
      {/* End Categories Section */}

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

export default PharmaceuticalChemicalsPage;
