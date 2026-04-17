import Link from 'next/link';

const Header = () => {
  return (
    <>
      <header className="cs_site_header cs_style_1 cs_primary_color cs_sticky_header cs_white_bg">
        <div className="cs_top_header cs_blue_bg cs_white_color">
          <div className="container">
            <div className="cs_top_header_in">
              <div className="cs_top_header_left">
                <ul className="cs_header_contact_list cs_mp_0">
                  <li>
                    <i className="fa-solid fa-envelope"></i>
                    <a href="mailto:info@pureonepharma.com">info@pureonepharma.com</a>
                  </li>
                  <li>
                    <i className="fa-solid fa-location-dot"></i>
                    Pure One Pharma, India
                  </li>
                </ul>
              </div>
              <div className="cs_top_header_right">
                <div className="cs_social_btns cs_style_1">
                  <a href="#" className="cs_center"><i className="fa-brands fa-facebook-f"></i></a>
                  <a href="#" className="cs_center"><i className="fa-brands fa-pinterest-p"></i></a>
                  <a href="#" className="cs_center"><i className="fa-brands fa-twitter"></i></a>
                  <a href="#" className="cs_center"><i className="fa-brands fa-instagram"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="cs_main_header">
          <div className="container">
            <div className="cs_main_header_in">
              <div className="cs_main_header_left">
                <Link className='cs_site_branding' href='/'>
                  <img src="/assets/img/logo.png" alt="Logo" />
                </Link>
              </div>
              <div className="cs_main_header_right">
                <div className="cs_nav cs_primary_color">
                  <ul className="cs_nav_list">
                    <li>
                      <Link href='/'>Home</Link>
                    </li>
                    <li><Link href='/about'>About Us</Link></li>
                    <li className="menu-item-has-children">
                      <Link href='/products'>Products</Link>
                      <ul>
                        <li><Link href='/pharmaceutical-chemicals'>Pharmaceutical Chemicals</Link></li>
                        {/* Add more products here as needed */}
                      </ul>
                    </li>
                    <li><Link href='/quality-assurance'>Quality Assurance</Link></li>
                    <li><Link href='/contact'>Contact Us</Link></li>
                  </ul>
                </div>
                <Link className='cs_btn cs_style_1 cs_color_1' href='/contact'>
                  <span>Enquiry Now </span>
                  <i className="fa-solid fa-angles-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="cs_site_header_spacing_150"></div>
    </>
  );
};

export default Header;
