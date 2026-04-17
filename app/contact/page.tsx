import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

const ContactPageRedesign = () => {
  return (
    <main>
      <Header />
      {/* Start Page Heading */}
      <section className="cs_page_heading cs_bg_filed cs_center" data-src="/assets/img/page_heading_bg.jpg" style={{ backgroundImage: "url('/assets/img/page_heading_bg.jpg')" }}>
        <div className="container">
          <h1 className="cs_page_title">Contact Us</h1>
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><Link href='/'>Home</Link></li>
            <li className="breadcrumb-item active">Contact Us</li>
          </ol>
        </div>
      </section>
      {/* End Page Heading */}

      {/* Start Contact Section */}
      <section className="cs_contact">
        <div className="cs_height_110 cs_height_lg_70"></div>
        <div className="container">
          <div className="row cs_gap_y_30">
            <div className="col-lg-6">
              <div className="cs_contact_thumbnail cs_pr_40">
                <div className="cs_contact_img">
                  <img src="/assets/img/cta_img_1.jpg" alt="Image" className="cs_radius_15" />
                </div>
                <div className="cs_contact_bg_shape">
                  <div className="cs_white_bg_shape"></div>
                  <div className="cs_iconbox cs_style_4">
                    <div className="cs_iconbox_icon cs_center">
                      <img src="/assets/img/icons/call_icon_1.png" alt="Icon" />
                    </div>
                    <div className="cs_iconbox_right">
                      <h3 className="cs_iconbox_title">Emergency Call</h3>
                      <p className="cs_iconbox_subtitle mb-0">24/7 – Support and easy</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="cs_section_heading cs_style_1">
                <p className="cs_section_subtitle cs_accent_color">
                  <span className="cs_shape_left"></span>CONTACT US
                </p>
                <h2 className="cs_section_title">Meet Our Specialist This <br />Doctor Meet</h2>
              </div>
              <div className="cs_height_25 cs_height_lg_25"></div>
              <form className="cs_contact_form row cs_gap_y_30">
                <div className="col-md-6">
                  <input type="text" name="name" className="cs_form_field" placeholder="Your name" />
                </div>
                <div className="col-md-6">
                  <input type="email" name="email" className="cs_form_field" placeholder="Your email" />
                </div>
                <div className="col-md-6">
                  <input type="text" name="subject" className="cs_form_field" placeholder="Your Subject" />
                </div>
                <div className="col-md-6">
                  <input type="text" name="phone" className="cs_form_field" placeholder="Your phone" />
                </div>
                <div className="col-lg-12">
                  <textarea rows={5} name="message" className="cs_form_field" placeholder="Your comments"></textarea>
                </div>
                <div className="col-lg-12">
                  <button type="submit" className="cs_btn cs_style_1 cs_color_1">Send Request</button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="cs_height_120 cs_height_lg_80"></div>
      </section>
      {/* End Contact Section */}

      {/* Start Location Map */}
      <div className="cs_location_map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d158858.5851960224!2d-0.2664050245106056!3d51.52852620113951!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2z4Kay4Kao4KeN4Kah4KaoLCDgpq_gp4HgppXgp43gpqTgprDgpr7gppzgp43gpq8!5e0!3m2!1sbn!2sbd!4v1723284219451!5m2!1sbn!2sbd"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
      {/* End Location Map */}

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

export default ContactPageRedesign;
