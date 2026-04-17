import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="cs_footer cs_blue_bg cs_bg_filed cs_white_color" data-src="/assets/img/footer_bg.jpg">
      <div className="container">
        <div className="cs_footer_row">
          <div className="cs_footer_col">
            <div className="cs_footer_highlight_col cs_accent_bg">
              <div className="cs_footer_logo">
                <img src="/assets/img/logo.png" alt="Logo" />
              </div>
              <ul className="cs_footer_contact cs_mp_0">
                <li>
                  <i className="fa-regular fa-clock"></i>
                  Business Hours: <br />
                  Mon - Sat: 9.00 am. - 6.00 pm.
                </li>
                <li>
                  <i className="fa-solid fa-location-dot"></i>
                  Pure One Pharma, India
                </li>
                <li>
                  <i className="fa-solid fa-phone"></i>
                  +91-7551000090
                </li>
              </ul>
              <div className="cs_social_btns cs_style_1">
                <a href="#" className="cs_center"><i className="fa-brands fa-facebook-f"></i></a>
                <a href="#" className="cs_center"><i className="fa-brands fa-pinterest-p"></i></a>
                <a href="#" className="cs_center"><i className="fa-brands fa-twitter"></i></a>
                <a href="#" className="cs_center"><i className="fa-brands fa-instagram"></i></a>
              </div>
            </div>
          </div>
          <div className="cs_footer_col">
            <div className="cs_footer_widget">
              <h2 className="cs_footer_widget_title">Our Services</h2>
              <ul className="cs_footer_widget_nav_list cs_mp_0">
                <li><Link href="/pcd-pharma-franchise">PCD Pharma Franchise</Link></li>
                <li><Link href="/third-party-manufacturing">Third Party Manufacturing</Link></li>
                <li><Link href="/pharmaceutical-chemicals">Pharmaceutical Chemicals</Link></li>
                <li><Link href="/products">Products</Link></li>
                <li><Link href="/quality-assurance">Quality Assurance</Link></li>
                <li><Link href="/contact">Marketing Support</Link></li>
              </ul>
            </div>
          </div>
          <div className="cs_footer_col">
            <div className="cs_footer_widget">
              <h2 className="cs_footer_widget_title">Quick Links</h2>
              <ul className="cs_footer_widget_nav_list cs_mp_0">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About Us</Link></li>
                <li><Link href="/products">Our Products</Link></li>
                <li><Link href="/contact">Contact Us</Link></li>
                <li><Link href="/quality-assurance">Quality Assurance</Link></li>
              </ul>
            </div>
          </div>
          <div className="cs_footer_col">
            <div className="cs_footer_widget">
              <h2 className="cs_footer_widget_title">Quality Standards</h2>
              <ul className="cs_footer_widget_nav_list cs_mp_0">
                <li className="mb-3 d-flex align-items-center gap-2">
                  <div className="cs_center" style={{ width: '40px', height: '40px', background: 'rgba(255,255,255,0.1)', borderRadius: '50%' }}>
                    <i className="fa-solid fa-award text-accent"></i>
                  </div>
                  <span>WHO-GMP Certified Partners</span>
                </li>
                <li className="mb-3 d-flex align-items-center gap-2">
                  <div className="cs_center" style={{ width: '40px', height: '40px', background: 'rgba(255,255,255,0.1)', borderRadius: '50%' }}>
                    <i className="fa-solid fa-certificate text-accent"></i>
                  </div>
                  <span>ISO 9001:2015 Compliance</span>
                </li>
                <li className="mb-3 d-flex align-items-center gap-2">
                  <div className="cs_center" style={{ width: '40px', height: '40px', background: 'rgba(255,255,255,0.1)', borderRadius: '50%' }}>
                    <i className="fa-solid fa-vial-circle-check text-accent"></i>
                  </div>
                  <span>Strict QC Analysis</span>
                </li>
                <li className="d-flex align-items-center gap-2">
                  <div className="cs_center" style={{ width: '40px', height: '40px', background: 'rgba(255,255,255,0.1)', borderRadius: '50%' }}>
                    <i className="fa-solid fa-shield-halved text-accent"></i>
                  </div>
                  <span>Reliable Healthcare Supply</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="cs_footer_bottom cs_primary_bg">
        <div className="container">
          <div className="cs_footer_bottom_in">
            <p className="cs_footer_copyright mb-0">Copyright © 2024 Pure One Pharma, All Rights Reserved.</p>
            <ul className="cs_footer_menu cs_mp_0">
              <li><Link href='/about'>About Us</Link></li>
              <li><Link href='/pcd-pharma-franchise'>Franchise</Link></li>
              <li><Link href='/products'>Products</Link></li>
              <li><Link href='/contact'>Contact</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
