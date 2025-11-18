import Image from "next/image";
import Link from "next/link";

export default function Footer2() {
  return (
    <>
      <footer className="footer-style-two">
        <div className="auto-container">
          <div className="widget-section p_relative pb_40">
            <div className="logo-widget footer-widget">
              <figure className="footer-logo">
                <Link href="/index-2">
                  <Image
                    src="/assets/images/logo-4.png"
                    alt="Footer Logo Image"
                    width={190}
                    height={39}
                    priority
                  />
                </Link>
              </figure>
              <figure className="footer-logo-dark">
                <Link href="/index-2">
                  <Image
                    src="/assets/images/logo-3.png"
                    alt="Footer Logo Image"
                    width={190}
                    height={39}
                    priority
                  />
                </Link>
              </figure>
            </div>
            <div className="links-widget footer-widget">
              <ul className="links-list clearfix">
                <li>
                  <Link href="/">Home 1</Link>
                </li>
                <li>
                  <Link href="/index-2">Home 2</Link>
                </li>
                <li>
                  <Link href="/index-3">Home 3</Link>
                </li>
                <li>
                  <Link href="/index-4">Home 4</Link>
                </li>
                <li>
                  <Link href="/index-5">Home 5</Link>
                </li>
              </ul>
            </div>
            <div className="links-widget footer-widget">
              <div className="border-line"></div>
              <div className="widget-title">
                <h3>Inners</h3>
              </div>
              <div className="widget-section">
                <ul className="links-list clearfix">
                  <li>
                    <Link href="/about">About Us</Link>
                  </li>
                  <li>
                    <Link href="/contact">Contact</Link>
                  </li>
                  <li>
                    <Link href="/project">Project</Link>
                  </li>
                  <li>
                    <Link href="/service">Service</Link>
                  </li>
                  <li>
                    <Link href="/blog">Article</Link>
                  </li>
                  <li>
                    <Link href="/pricing">Pricing</Link>
                  </li>
                  <li>
                    <Link href="/blog-details">Single</Link>
                  </li>
                  <li>
                    <Link href="/project-details">Project Single</Link>
                  </li>
                  <li>
                    <Link href="/service-details">Service Single</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="links-widget footer-widget">
              <div className="border-line"></div>
              <div className="widget-title">
                <h3>Utility</h3>
              </div>
              <div className="widget-section">
                <ul className="links-list clearfix">
                  <li>
                    <Link href="/index-3">Style Guide</Link>
                  </li>
                  <li>
                    <Link href="/index-3">License</Link>
                  </li>
                  <li>
                    <Link href="/index-3">Change Log</Link>
                  </li>
                  <li>
                    <Link href="/index-3">Password Protected</Link>
                  </li>
                  <li>
                    <Link href="/error">404</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="subscribe-widget footer-widget">
              <div className="border-line"></div>
              <div className="widget-title">
                <h3>Subscribe to get updates </h3>
              </div>
              <div className="widget-content">
                <p>We won&apos;t give your details to third party</p>
                <form action="/contact" method="post">
                  <div className="form-group">
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter your mail"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <button type="submit" className="theme-btn theme-bg">
                      <span className="static-text">
                        <span>Subscribe</span>
                      </span>
                      <span className="overlay-text">
                        <span>Subscribe</span>
                      </span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="footer-bottom-two centred">
            <div className="bottom-inner">
              <ul className="links-list">
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

              <p>Copyright {new Date().getFullYear()} @ All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
