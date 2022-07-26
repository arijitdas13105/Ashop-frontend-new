import React from "react";

const Footer = () => {
  return (
    <div>
      <section className="icons-container">
        <div className="icons">
          <img src="images/icon-1.png" alt="" />
          <div className="info">
            <h3>free delivery</h3>
            <span>on all orders</span>
          </div>
        </div>
        <div className="icons">
          <img src="images/icon-2.png" alt="" />
          <div className="info">
            <h3>10 days returns</h3>
            <span>moneyback guarantee</span>
          </div>
        </div>
        <div className="icons">
          <img src="images/icon-3.png" alt="" />
          <div className="info">
            <h3>offer &amp; gifts</h3>
            <span>on all orders</span>
          </div>
        </div>
        <div className="icons">
          <img src="images/icon-4.png" alt="" />
          <div className="info">
            <h3>secure paymens</h3>
            <span>protected by paypal</span>
          </div>
        </div>
      </section>

      {/* /////////   FOOTER 2 DEVICE    /////////// */}

      <section className="footer2-container">
        <div className="footer2-binding">
          <div className="footer2-wrapper">
            <div className="footer-box">
              <h1>Locations</h1>

              <span>India</span>
              <span>Singapore</span>
              <span>USA</span>
              <span>Japan</span>
              <span>Japan</span>
              <span>Japan</span>
            </div>

            <div className="footer-box">
              <h1>Locations</h1>
              <span>India</span>
              <span>Singapore</span>
              <span>USA</span>
              <span>Japan</span>
              <span>Japan</span>
              <span>Japan</span>
            </div>

            <div className="footer-box">
              <h1>Locations</h1>
              <span>India</span>
              <span>Singapore</span>
              <span>USA</span>
              <span>Japan</span>
              <span>Japan</span>
              <span>Japan</span>
            </div>
          </div>
          <div className="footer2-contact">
            <div className="footer2-contact-wrap">
              <h1>Stay in touch</h1>
              <div className="footer2-input-wrap">
              <input placeholder="email address" type="text"/>
              <i class="fa-solid fa-arrow-right-from-bracket footer2-send-icon" ></i>
              </div>
              
               </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
