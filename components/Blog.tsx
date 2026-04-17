const Blog = () => {
  return (
    <section>
      <div className="cs_height_110 cs_height_lg_70"></div>
      <div className="container">
        <div className="cs_section_heading cs_style_1 text-center">
          <p className="cs_section_subtitle cs_accent_color wow fadeInUp" data-wow-duration="0.9s" data-wow-delay="0.25s">
            <span className="cs_shape_left"></span>LATEST UPDATES<span className="cs_shape_right"></span>
          </p>
          <h2 className="cs_section_title">Latest News & Pharma Updates</h2>
        </div>
        <div className="cs_height_50 cs_height_lg_50"></div>
        <div className="cs_slider cs_style_1 cs_slider_gap_24">
          <div className="cs_slider_container" data-autoplay="0" data-loop="1" data-speed="600" data-center="0"
            data-variable-width="0" data-slides-per-view="responsive" data-xs-slides="1" data-sm-slides="2"
            data-md-slides="3" data-lg-slides="3" data-add-slides="3">
            <div className="cs_slider_wrapper">
              <div className="cs_slide">
                <article className="cs_post cs_style_1">
                  <a className='cs_post_thumbnail position-relative' href='/blog-details'>
                    <img src="/assets/img/post_1.jpg" alt="post Thumbnail" />
                    <div className="cs_post_category position-absolute">Pharma</div>
                  </a>
                  <div className="cs_post_content position-relative">
                    <div className="cs_post_meta_wrapper">
                      <div className="cs_posted_by cs_center position-absolute">May 02</div>
                      <div className="cs_post_meta_item">
                        <img src="/assets/img/icons/post_user_icon.png" alt="Icon" />
                        <span>By: Admin</span>
                      </div>
                      <div className="cs_post_meta_item">
                        <img src="/assets/img/icons/post_comment_icon.png" alt="Icon" />
                        <span>Comment</span>
                      </div>
                    </div>
                    <h3 className="cs_post_title"><a href='/blog-details'>Benefits of PCD Pharma Franchise Business in
                        India</a></h3>
                    <p className="cs_post_subtitle">Stay updated with the latest pharmaceutical industry insights, franchise
                      opportunities, and healthcare news.</p>
                    <a className='cs_post_btn' href='/blog-details'>
                      <span>Read More</span>
                      <span><i className="fa-solid fa-angle-right"></i></span>
                    </a>
                    <div className="cs_post_shape position-absolute"></div>
                  </div>
                </article>
              </div>
              <div className="cs_slide">
                <article className="cs_post cs_style_1">
                  <a className='cs_post_thumbnail position-relative' href='/blog-details'>
                    <img src="/assets/img/post_2.jpeg" alt="post Thumbnail" />
                    <div className="cs_post_category position-absolute">Pharma</div>
                  </a>
                  <div className="cs_post_content position-relative">
                    <div className="cs_post_meta_wrapper">
                      <div className="cs_posted_by cs_center position-absolute">May 02</div>
                      <div className="cs_post_meta_item">
                        <img src="/assets/img/icons/post_user_icon.png" alt="Icon" />
                        <span>By: Admin</span>
                      </div>
                      <div className="cs_post_meta_item">
                        <img src="/assets/img/icons/post_comment_icon.png" alt="Icon" />
                        <span>Comment</span>
                      </div>
                    </div>
                    <h3 className="cs_post_title"><a href='/blog-details'>WHO-GMP Standards in Pharmaceutical
                        Manufacturing</a></h3>
                    <p className="cs_post_subtitle">Stay updated with the latest pharmaceutical industry insights, franchise
                      opportunities, and healthcare news.</p>
                    <a className='cs_post_btn' href='/blog-details'>
                      <span>Read More</span>
                      <span><i className="fa-solid fa-angle-right"></i></span>
                    </a>
                    <div className="cs_post_shape position-absolute"></div>
                  </div>
                </article>
              </div>
              <div className="cs_slide">
                <article className="cs_post cs_style_1">
                  <a className='cs_post_thumbnail position-relative' href='/blog-details'>
                    <img src="/assets/img/post_3.jpeg" alt="post Thumbnail" />
                    <div className="cs_post_category position-absolute">Pharma</div>
                  </a>
                  <div className="cs_post_content position-relative">
                    <div className="cs_post_meta_wrapper">
                      <div className="cs_posted_by cs_center position-absolute">May 02</div>
                      <div className="cs_post_meta_item">
                        <img src="/assets/img/icons/post_user_icon.png" alt="Icon" />
                        <span>By: Admin</span>
                      </div>
                      <div className="cs_post_meta_item">
                        <img src="/assets/img/icons/post_comment_icon.png" alt="Icon" />
                        <span>Comment</span>
                      </div>
                    </div>
                    <h3 className="cs_post_title"><a href='/blog-details'>Why Nutraceuticals Are the Future of Healthcare</a>
                    </h3>
                    <p className="cs_post_subtitle">Stay updated with the latest pharmaceutical industry insights, franchise
                      opportunities, and healthcare news.</p>
                    <a className='cs_post_btn' href='/blog-details'>
                      <span>Read More</span>
                      <span><i className="fa-solid fa-angle-right"></i></span>
                    </a>
                    <div className="cs_post_shape position-absolute"></div>
                  </div>
                </article>
              </div>
            </div>
          </div>
          <div className="cs_pagination cs_style_2"></div>
        </div>
      </div>
      <div className="cs_height_120 cs_height_lg_80"></div>
    </section>
  );
};

export default Blog;
