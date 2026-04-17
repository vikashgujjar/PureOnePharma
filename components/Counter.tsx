'use client';
import { useEffect } from 'react';

const Counter = () => {
  useEffect(() => {
    if (typeof window !== 'undefined' && (window as any).counterInit) {
      (window as any).counterInit();
    }
  }, []);

  return (
    <div className="cs_counter_area cs_gray_bg">
      <div className="container">
        <div className="cs_counter_content cs_blue_bg">
          <div className="cs_counter_shape position-absolute">
            <img src="/assets/img/counter_shape.png" alt="Shape" />
          </div>
          <div className="cs_counter_1_wrap">
            <div className="cs_counter cs_style_1">
              <div className="cs_counter_icon cs_center">
                <img src="/assets/img/icons/counter_icon_1.png" alt="Icon" />
              </div>
              <div className="cs_counter_nmber"><span data-count-to="500" className="odometer">0</span>+</div>
              <p className="cs_counter_title mb-0">Products Range</p>
            </div>
            <div className="cs_counter cs_style_1">
              <div className="cs_counter_icon cs_center">
                <img src="/assets/img/icons/counter_icon_2.png" alt="Icon" />
              </div>
              <div className="cs_counter_nmber"><span data-count-to="50" className="odometer">0</span>K+</div>
              <p className="cs_counter_title mb-0">Franchise Partners</p>
            </div>
            <div className="cs_counter cs_style_1">
              <div className="cs_counter_icon cs_center">
                <img src="/assets/img/icons/counter_icon_3.png" alt="Icon" />
              </div>
              <div className="cs_counter_nmber"><span data-count-to="100" className="odometer">0</span>+</div>
              <p className="cs_counter_title mb-0">Cities Covered</p>
            </div>
            <div className="cs_counter cs_style_1">
              <div className="cs_counter_icon cs_center">
                <img src="/assets/img/icons/counter_icon_4.png" alt="Icon" />
              </div>
              <div className="cs_counter_nmber"><span data-count-to="10" className="odometer">0</span>K+</div>
              <p className="cs_counter_title mb-0">Years of Trust</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
