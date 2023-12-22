    import React from 'react';
    import "./bootstrap.css"
    import "./style.css"
    import "./responsive.css"
    
    export default function Home() {
    // Import necessary dependencies

    // Hero section component
    const HeroSection = () => {
        return (
          <section className="hero_section position-relative">
            <div className="number-container d-none d-md-block">
              <div className="number-box">
                <span>01</span>
                <hr />
                <span>02</span>
              </div>
            </div>
            <div className="hero_section-container">
              <div className="hero_img-box">
                <img src="HomePage/lawyer.png" alt="" />
              </div>
              <div className="hero_detail-box">
                <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                  <div className="carousel-inner">
                    {/* Your carousel items go here */}
                  </div>
                  <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span className="sr-only">Previous</span>
                  </a>
                  <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span className="sr-only">Next</span>
                  </a>
                </div>
              </div>
            </div>
          </section>
        );
      };
    // About section component
    const AboutSection = () => {
        return (
          <section className="about_section layout_padding">
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <div className="about_detail-box">
                    <h3 className="text-uppercase">About Us</h3>
                    <p>
                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.There are many variations of passages of Lorem Ipsum available, but the majority have sufftext.
                    </p>
                    <div className="d-flex justify-content-center justify-content-sm-start">
                      <a href="" className="sub_call_to-btn">
                        <span>Read More</span>
                        <img src="HomePage/right-arrow.png" alt="" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="about_img-box">
                    <img src="HomePage/about.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      };

    // Practice section component
    const PracticeSection = () => {
        return (
          <section className="practice_section layout_padding">
            <div className="container">
              <div className="d-flex flex-column align-items-center">
                <p className="heading-text">WANT HELP</p>
                <h3 className="text-uppercase">PRACTICE AREAS</h3>
              </div>
              <div className="practice_container">
                {/* Practice Box 1 */}
                <div className="practice_box">
                  <div className="practice_img-box">
                    <img src="HomePage/lawyer_icon1.png" alt="" />
                  </div>
                  <h4>Shoplifting</h4>
                </div>
      
                {/* Practice Box 2 */}
                <div className="practice_box">
                  <div className="practice_img-box">
                    <img src="HomePage/lawyer_icon2.png" alt="" />
                  </div>
                  <h4>Weapon</h4>
                </div>
      
                {/* Practice Box 3 */}
                <div className="practice_box">
                  <div className="practice_img-box">
                    <img src="HomePage/lawyer_icon3.png" alt="" />
                  </div>
                  <h4>Family Law</h4>
                </div>
      
                {/* Practice Box 4 */}
                <div className="practice_box">
                  <div className="practice_img-box">
                    <img src="HomePage/lawyer_icon4.png" alt="" />
                  </div>
                  <h4>Sexual offences</h4>
                </div>
              </div>
              <div className="practice_detail">
                <p>
                  {/* Your practice section text goes here */}
                </p>
                <div className="d-flex justify-content-center">
                  <a href="" className="sub_call_to-btn">
                    <span>Read More</span>
                    <img src="HomePage/right-arrow.png" alt="" />
                  </a>
                </div>
              </div>
            </div>
          </section>
        );
      };

    // Welcome section component
    const WelcomeSection = () => {
        return (
          <section className="welcome_section position-relative">
            <div className="container ">
              <div className="row">
                <div className="col-lg-6">
                  <div className="welcome_container">
                    <h3>WELCOME TO TRUST</h3>
                    {/* Story & History */}
                    <div>
                      <h4>Story & History</h4>
                      <p>
                        {/* Your story and history content goes here */}
                        Trust started as a sole practitioner providing services to the area community. Our Office has now grown to five lawyers and provides expert legal representation.
                      </p>
                    </div>
      
                    {/* Values & Philosophy */}
                    <div>
                      <h4>Values & Philosophy</h4>
                      <p>
                        {/* Your values and philosophy content goes here */}
                        Trust started as a sole practitioner providing services to the area community. Our Office has now grown to five lawyers and provides expert legal representation.
                      </p>
                    </div>
      
                    <div className="d-flex justify-content-center justify-content-sm-start">
                      <a href="" className="sub_call_to-btn ">
                        <span>Read More</span>
                        <img src="HomePage/right-arrow.png" alt="" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      };

    // Contact section component
    const ContactSection = () => {
        return (
          <section className="contact_section layout_padding">
            <div className="container">
              <div className="d-flex justify-content-center d-md-block">
                <h2>Contact Us</h2>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <form action="">
                    <div className="contact_form-container">
                      <div>
                        <div>
                          <input type="text" placeholder="Name" />
                        </div>
                        <div>
                          <input type="email" placeholder="Email" />
                        </div>
                        <div>
                          <input type="text" placeholder="Phone Number" />
                        </div>
                        <div className="mt-5">
                          <input type="text" placeholder="Message" />
                        </div>
                        <div className="mt-5 d-flex justify-content-center justify-content-sm-start">
                          <button type="submit">Send</button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
                <div className="col-md-6">
                  <div className="contact_img-box">
                    <img src="HomePage/contact.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      };

    // Info section component
    const InfoSection = () => {
        return (
          <section className="info_section">
            <div className="container">
              <div className="row custom_border-btm pb-4">
                <div className="col-md-4 info_logo">
                  <h2>JD</h2>
                  <p>
                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration
                    in some form, by injected humour, or
                  </p>
                </div>
                <div className="col-md-4 info_address">
                  <h5>Address</h5>
                  <p>passages of Lorem Ipsum available, but the majority have</p>
                  <p>(+71) 1234567890</p>
                  <p>demo@gmail.com</p>
                </div>
                <div className="col-md-4 info_news">
                  <h5>Newsletter</h5>
                  <form action="">
                    <div>
                      <input type="email" placeholder="Enter your email" />
                    </div>
                    <div>
                      <button type="submit">Subscribe</button>
                    </div>
                  </form>
                </div>
              </div>
      
              <div>
                <div className="info_social">
                  <div>
                    <a href="">
                      <img src="HomePage/fb.png" alt="" />
                    </a>
                  </div>
                  <div>
                    <a href="">
                      <img src="HomePage/twitter.png" alt="" />
                    </a>
                  </div>
                  <div>
                    <a href="">
                      <img src="HomePage/linkedin.png" alt="" />
                    </a>
                  </div>
                  <div>
                    <a href="">
                      <img src="HomePage/insta.png" alt="" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      };

    // Footer component
    const Footer = () => {
        return (
          <section className="container-fluid footer_section">
            <p>
              Copyright &copy; 2019 All Rights Reserved By
              <a href="https://html.design/">Free Html Templates</a>
            </p>
          </section>
        );
      };

    return (<div className="home-screen">
        <HeroSection />
        <AboutSection />
        <PracticeSection />
        <WelcomeSection />
        <ContactSection />
        <InfoSection />
        <Footer />
    </div>)
}