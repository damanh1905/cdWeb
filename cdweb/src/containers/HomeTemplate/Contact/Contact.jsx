import React from "react";
import SearchProduct from "../../../components/Layout/Search/SearchProduct";

function CheckOut() {
  return (
    <>
      <div>
        <section className="hero hero-normal">
          <div className="container">
            <div className="row">
              <div className="col-lg-3">
                <div className="hero__categories">
                  <div className="hero__categories__all">
                    <i className="fa fa-bars" />
                    <span>All departments</span>
                  </div>
                  <ul>
                    <li>
                      <a href="#">Fresh Meat</a>
                    </li>
                    <li>
                      <a href="#">Vegetables</a>
                    </li>
                    <li>
                      <a href="#">Fruit &amp; Nut Gifts</a>
                    </li>
                    <li>
                      <a href="#">Fresh Berries</a>
                    </li>
                    <li>
                      <a href="#">Ocean Foods</a>
                    </li>
                    <li>
                      <a href="#">Butter &amp; Eggs</a>
                    </li>
                    <li>
                      <a href="#">Fastfood</a>
                    </li>
                    <li>
                      <a href="#">Fresh Onion</a>
                    </li>
                    <li>
                      <a href="#">Papayaya &amp; Crisps</a>
                    </li>
                    <li>
                      <a href="#">Oatmeal</a>
                    </li>
                    <li>
                      <a href="#">Fresh Bananas</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-9">
                <div className="hero__search">
                  <SearchProduct />
                  <div className="hero__search__phone">
                    <div className="hero__search__phone__icon">
                      <i className="fa fa-phone" />
                    </div>
                    <div className="hero__search__phone__text">
                      <h5>+65 11.188.888</h5>
                      <span>support 24/7 time</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Hero Section End */}
        {/* Breadcrumb Section Begin */}
        <section
          className="breadcrumb-section set-bg"
          style={{
            backgroundImage: "url(" + "assets/img/breadcrumb.jpg" + ")",
          }}
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <div className="breadcrumb__text">
                  <h2>Contact Us</h2>
                  <div className="breadcrumb__option">
                    <a href="./">Home</a>
                    <span>Contact Us</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Breadcrumb Section End */}
        {/* Contact Section Begin */}
        <section className="contact spad">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-3 col-sm-6 text-center">
                <div className="contact__widget">
                  <span className="icon_phone" />
                  <h4>Phone</h4>
                  <p>+01-3-8888-6868</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-6 text-center">
                <div className="contact__widget">
                  <span className="icon_pin_alt" />
                  <h4>Address</h4>
                  <p>60-49 Road 11378 New York</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-6 text-center">
                <div className="contact__widget">
                  <span className="icon_clock_alt" />
                  <h4>Open time</h4>
                  <p>10:00 am to 23:00 pm</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-6 text-center">
                <div className="contact__widget">
                  <span className="icon_mail_alt" />
                  <h4>Email</h4>
                  <p>hello@colorlib.com</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Contact Section End */}
        {/* Map Begin */}
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d49116.39176087041!2d-86.41867791216099!3d39.69977417971648!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x886ca48c841038a1%3A0x70cfba96bf847f0!2sPlainfield%2C%20IN%2C%20USA!5e0!3m2!1sen!2sbd!4v1586106673811!5m2!1sen!2sbd"
            height={500}
            style={{ border: 0 }}
            allowFullScreen
            aria-hidden="false"
            tabIndex={0}
          />
          <div className="map-inside">
            <i className="icon_pin" />
            <div className="inside-widget">
              <h4>New York</h4>
              <ul>
                <li>Phone: +12-345-6789</li>
                <li>Add: 16 Creek Ave. Farmingdale, NY</li>
              </ul>
            </div>
          </div>
        </div>
        {/* Map End */}
        {/* Contact Form Begin */}
        <div className="contact-form spad">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="contact__form__title">
                  <h2>Leave Message</h2>
                </div>
              </div>
            </div>
            <form action="#">
              <div className="row">
                <div className="col-lg-6 col-md-6">
                  <input type="text" placeholder="Your name" />
                </div>
                <div className="col-lg-6 col-md-6">
                  <input type="text" placeholder="Your Email" />
                </div>
                <div className="col-lg-12 text-center">
                  <textarea placeholder="Your message" defaultValue={""} />
                  <button type="submit" className="site-btn">
                    SEND MESSAGE
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default CheckOut;