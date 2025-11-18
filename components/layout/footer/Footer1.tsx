import Image from "next/image";
import Link from "next/link";

export default function Footer1() {
  return (
    <>
      <footer className="main-footer">
        <div className="auto-container">
          <div className="widget-section p_relative pb_60">
            <div className="row clearfix">
              <div className="col-lg-4 col-md-6 col-sm-12 footer-column">
                <div className="logo-widget footer-widget">
                  <figure className="footer-logo mb_20">
                    <Link href="/">
                      <Image
                        src="/assets/images/logo-2.png"
                        alt="Footer Logo Image"
                        width={72}
                        height={72}
                        priority
                      />
                    </Link>
                  </figure>
                  <p>
                    The team of Northeast Eagle (NEEAGLE) has a keen eye and
                    always seeks the highest point. NEEAGLE aims to grow through
                    the creation of ideas from the Northeast to shine like the
                    sun.
                  </p>
                </div>
              </div>
              <div className="col-lg-2 col-md-6 col-sm-12 footer-column">
                <div className="links-widget footer-widget">
                  <div className="widget-title">
                    <h4>Navigation</h4>
                  </div>
                  <div className="widget-content">
                    <ul className="links-list clearfix">
                      <li>
                        <Link href="/">Home</Link>
                      </li>
                      <li>
                        <Link href="/about">about</Link>
                      </li>
                      {/* <li><Link href="/project">work</Link></li> */}
                      {/* <li><Link href="/service">services</Link></li> */}
                      {/* <li><Link href="/blog">Blog</Link></li> */}
                      <li>
                        <Link href="/testimonials">Testimonials</Link>
                      </li>
                      <li>
                        <Link href="/contact">Contact</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                <div className="links-widget footer-widget ml_40">
                  <div className="widget-title">
                    <h4>services</h4>
                  </div>
                  <div className="widget-content">
                    <ul className="links-list clearfix">
                      <li>
                        <Link href="/contact"> Branding & Identity</Link>
                      </li>
                      <li>
                        <Link href="/contact">Social Media</Link>
                      </li>
                      <li>
                        <Link href="/contact">UI / UX </Link>
                      </li>
                      <li>
                        <Link href="/contact">
                          App Design & Development (ios & Android)
                        </Link>
                      </li>
                      <li>
                        <Link href="/contact">Digital Marketing</Link>
                      </li>
                      <li>
                        <Link href="/contact">SEO</Link>
                      </li>
                      <li>
                        <Link href="/contact">Content Writing </Link>
                      </li>
                      <li>
                        <Link href="/contact">Print</Link>
                      </li>
                      <li>
                        <Link href="/contact">Advertising</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                <div className="links-widget footer-widget">
                  <div className="widget-title">
                    <h4>Social profile</h4>
                  </div>
                  <div className="widget-content">
                    <ul className="links-list clearfix">
                      <li>
                        <a
                          href="https://www.instagram.com/neeaglegraphics?igsh=NW4wZm0zZ283a2xv"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Instagram
                        </a>
                      </li>
                      <li>
                        <Link
                          href="https://www.facebook.com/profile.php?id=61579677915767"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Facebook
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="https://www.behance.net/bhaskardhapu1#"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Behance
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom centred">
            <p>Copyright {new Date().getFullYear()} @ All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
