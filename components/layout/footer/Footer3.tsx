import Image from "next/image";
import Link from "next/link";

export default function Footer3() {
  return (
    <>
      <footer className="footer-style-three pt_100 pb_100">
        <div className="auto-container">
          <div className="row clearfix">
            <div className="col-lg-6 col-md-12 col-sm-12 footer-column">
              <div className="footer-widget logo-widget">
                <figure className="footer-logo mb_60">
                  <Link href="/index-4">
                    <Image
                      src="/assets/images/logo-3.png"
                      alt="Footer Logo Image"
                      width={190}
                      height={39}
                      priority
                    />
                  </Link>
                </figure>
                <h2>Stay Tuned for Our Latest Service and Offerings!</h2>
                <form action="/contact" method="post">
                  <div className="form-group">
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter your mail"
                      required
                    />
                    <button type="submit">
                      <i className="icon-8"></i>
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
              <div className="footer-widget contact-widget">
                <div className="widget-title">
                  <h3>Contact Address</h3>
                </div>
                <div className="widget-content">
                  <ul className="info-list">
                    <li>
                      <div className="icon">
                        <Image
                          src="/assets/images/icons/icon-16.png"
                          alt="Icon"
                          width={24}
                          height={24}
                          priority
                        />
                      </div>
                      <p>Contact Number</p>
                      <Link href="tel:1235550119">(123)555-0119</Link>
                    </li>
                    <li>
                      <div className="icon">
                        <Image
                          src="/assets/images/icons/icon-17.png"
                          alt="Icon"
                          width={24}
                          height={24}
                          priority
                        />
                      </div>
                      <p>Contact Support</p>
                      <Link href="mailto:example@gmail.com">
                        example@gmail.com
                      </Link>
                    </li>
                    <li>
                      <div className="icon">
                        <Image
                          src="/assets/images/icons/icon-18.png"
                          alt="Icon"
                          width={24}
                          height={24}
                          priority
                        />
                      </div>
                      <p>4517 Washington Ave.Manchester, Kentucky 39495</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
              <div className="footer-widget links-widget">
                <div className="widget-title">
                  <h3>Utility Pages</h3>
                </div>
                <div className="widget-content">
                  <ul className="links-list clearfix mb_40">
                    <li>
                      <Link href="/index-4">Style Guides</Link>
                    </li>
                    <li>
                      <Link href="/index-4">Change-log</Link>
                    </li>
                    <li>
                      <Link href="/index-4">License</Link>
                    </li>
                  </ul>
                  <ul className="social-links">
                    <li>
                      <Link href="/index-4">
                        <i className="icon-4"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="/index-4">
                        <i className="icon-5"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="/index-4">
                        <i className="icon-9"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
