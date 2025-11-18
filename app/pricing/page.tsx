import Image from "next/image";
import Link from "next/link";
import Layout from "../../components/layout/Layout";
import Cta from "../../components/sections/home3/Cta";
import Video from "../../components/sections/home1/Video";
import Testimonial from "../../components/sections/home5/Testimonial";
export default function Pricing_Page() {
  return (
    <div className="boxed_wrapper inner_page">
      <Layout headerStyle={2} footerStyle={2}>
        <main className="main-content">
          <section className="page-title p_relative centred pb_60">
            <div className="auto-container">
              <div className="content-box">
                <div className="sub-title">pricing</div>
                <h2>Flexible Pricing Plans Tailored to Your Needs</h2>
                <Link href="/contact" className="theme-btn theme-bg">
                  <div className="static-text">
                    <span className="dot"></span>
                    <span>Let&apos; Contact</span>
                  </div>
                  <div className="overlay-text">
                    <span className="dot"></span>
                    <span>Let&apos; Contact</span>
                  </div>
                </Link>
              </div>
            </div>
          </section>

          <div className="brochure-section">
            <p>Download Our Brochure</p>
            <div className="btn-box-centered">
              <a
                href="/pdfs/graphics.pdf"
                download
                className="theme-btn theme-bg"
              >
                <div className="static-text">
                  <span className="icon-box">↓</span>
                  <span>Graphics</span>
                </div>
                <div className="overlay-text">
                  <span className="icon-box">↓</span>
                  <span>Graphics</span>
                </div>
              </a>
              <a
                href="/pdfs/uiux-app-dev.pdf"
                download
                className="theme-btn theme-bg"
              >
                <div className="static-text">
                  <span className="icon-box">↓</span>
                  <span>UI/UX & App Development</span>
                </div>
                <div className="overlay-text">
                  <span className="icon-box">↓</span>
                  <span>UI/UX & App Development</span>
                </div>
              </a>
              <a
                href="/pdfs/digital-marketing.pdf"
                download
                className="theme-btn theme-bg"
              >
                <div className="static-text">
                  <span className="icon-box">↓</span>
                  <span>Digital Marketing</span>
                </div>
                <div className="overlay-text">
                  <span className="icon-box">↓</span>
                  <span>Digital Marketing</span>
                </div>
              </a>
              <a
                href="/pdfs/content.pdf"
                download
                className="theme-btn theme-bg"
              >
                <div className="static-text">
                  <span className="icon-box">↓</span>
                  <span>content</span>
                </div>
                <div className="overlay-text">
                  <span className="icon-box">↓</span>
                  <span>content</span>
                </div>
              </a>
            </div>
          </div>

          {/* <section className="pricing-section p_relative pb_170">
                        <div className="large-container">
                            <div className="row clearfix">
                                <div className="col-lg-4 col-md-6 col-sm-12 pricing-block">
                                    <div className="pricing-block-one reveal-me">
                                        <div className="pricing-table">
                                            <div className="table-title">
                                                <h3>Starter Shoot</h3>
                                                <p>Perfect for individuals or small shoots</p>
                                            </div>
                                            <div className="table-header">
                                                <h2>$295/session</h2>
                                                <p>No subscription required</p>
                                                <Link href="/index-5" className="theme-btn border-btn">
                                                    <div className="static-text">Book a Session</div>
                                                    <div className="overlay-text">Book a Session</div>
                                                </Link>
                                            </div>
                                            <div className="table-content">
                                                <ul className="feature-list clearfix">
                                                    <li><Image src="/assets/images/icons/icon-25.png" alt="Image" width={20} height={20} priority /><span>1-hour on-location photoshoot</span></li>
                                                    <li><Image src="/assets/images/icons/icon-25.png" alt="Image" width={20} height={20} priority /><span>15 edited high-resolution photos</span></li>
                                                    <li><Image src="/assets/images/icons/icon-25.png" alt="Image" width={20} height={20} priority /><span>Online gallery for downloads</span></li>
                                                    <li><Image src="/assets/images/icons/icon-25.png" alt="Image" width={20} height={20} priority /><span>Personal usage rights</span></li>
                                                    <li><Image src="/assets/images/icons/icon-25.png" alt="Image" width={20} height={20} priority /><span>Optional add-ons available</span></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12 pricing-block">
                                    <div className="pricing-block-one reveal-me">
                                        <div className="pricing-table">
                                            <div className="table-title">
                                                <h3>Signature Session</h3>
                                                <p>Ideal for couples, brands, or lifestyle sessions</p>
                                            </div>
                                            <div className="table-header">
                                                <h2>$495/session</h2>
                                                <p>Customized planning included</p>
                                                <Link href="/index-5" className="theme-btn border-btn">
                                                    <div className="static-text">Book a Session</div>
                                                    <div className="overlay-text">Book a Session</div>
                                                </Link>
                                            </div>
                                            <div className="table-content">
                                                <ul className="feature-list clearfix">
                                                    <li><Image src="/assets/images/icons/icon-25.png" alt="Image" width={20} height={20} priority /><span>2-hour photoshoot at one or two locations</span></li>
                                                    <li><Image src="/assets/images/icons/icon-25.png" alt="Image" width={20} height={20} priority /><span>30 professionally edited images</span></li>
                                                    <li><Image src="/assets/images/icons/icon-25.png" alt="Image" width={20} height={20} priority /><span>Style consultation (clothing & vibe)</span></li>
                                                    <li><Image src="/assets/images/icons/icon-25.png" alt="Image" width={20} height={20} priority /><span>Online gallery with download accesst</span></li>
                                                    <li><Image src="/assets/images/icons/icon-25.png" alt="Image" width={20} height={20} priority /><span>Light retouching included</span></li>
                                                    <li><Image src="/assets/images/icons/icon-25.png" alt="Image" width={20} height={20} priority /><span>Print release available</span></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12 pricing-block">
                                    <div className="pricing-block-one reveal-me">
                                        <div className="pricing-table">
                                            <div className="table-title">
                                                <h3>Full Day Coverage</h3>
                                                <p>For weddings, events, or brand campaigns.</p>
                                            </div>
                                            <div className="table-header">
                                                <h2>$995/session</h2>
                                                <p>Pause or cancel anytime (if monthly)</p>
                                                <Link href="/index-5" className="theme-btn border-btn">
                                                    <div className="static-text">Book a Session</div>
                                                    <div className="overlay-text">Book a Session</div>
                                                </Link>
                                            </div>
                                            <div className="table-content">
                                                <ul className="feature-list clearfix">
                                                    <li><Image src="/assets/images/icons/icon-25.png" alt="Image" width={20} height={20} priority /><span>Event or product highlight reel (optional)</span></li>
                                                    <li><Image src="/assets/images/icons/icon-25.png" alt="Image" width={20} height={20} priority /><span>Up to 8 hours of coverage</span></li>
                                                    <li><Image src="/assets/images/icons/icon-25.png" alt="Image" width={20} height={20} priority /><span>100+ high-resolution edited photos</span></li>
                                                    <li><Image src="/assets/images/icons/icon-25.png" alt="Image" width={20} height={20} priority /><span>Sneak peek within 48 hours</span></li>
                                                    <li><Image src="/assets/images/icons/icon-25.png" alt="Image" width={20} height={20} priority /><span>Online gallery + USB delivery</span></li>
                                                    <li><Image src="/assets/images/icons/icon-25.png" alt="Image" width={20} height={20} priority /><span>Travel within [your city] included</span></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section> */}
          <Video />
          <div className="pt_200"></div>
          <Testimonial />
          <div className="pb_100"></div>
          <Cta />
        </main>
      </Layout>
    </div>
  );
}
