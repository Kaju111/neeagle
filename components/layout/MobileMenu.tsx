import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type MobileMenuProps = {
  isSidebar: boolean;
  handleMobileMenu: () => void;
  handleSidebar: () => void;
};

export default function MobileMenu({
  isSidebar,
  handleMobileMenu,
  handleSidebar,
}: MobileMenuProps) {
  const [activeIndex, setActiveIndex] = useState<number>(1);

  const handleOnClick = (index: number) => setActiveIndex(index);

  return (
    <>
      <div className="mobile-menu" data-lenis-prevent="true">
        {/* Backdrop (closes menu) */}
        <div className="menu-backdrop" onClick={handleMobileMenu} />

        <div className="content-box">
          {/* Top Area */}
          <div className="top-area flex items-center justify-between">
            <div className="mobile-logo">
              <Link href="/">
                <Image
                  src="/assets/images/logo-3.png"
                  alt="Logo"
                  width={221}
                  height={47}
                  priority
                />
              </Link>
            </div>

            <button
              aria-label="Close menu"
              className="close-btn menu-close"
              onClick={handleMobileMenu}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 50 50"
              >
                <path
                  d="M 7.7 6.3 L 6.3 7.7 L 23.6 25 L 6.3 42.3 L 7.7 43.7 L 25 26.4 L 42.3 43.7 L 43.7 42.3 L 26.4 25 L 43.7 7.7 L 42.3 6.3 L 25 23.6 Z"
                  fill="#fff"
                />
              </svg>
            </button>
          </div>

          {/* Main Tabs */}
          <div className="main-box">
            <div className="tabs-box clearfix">
              <div className="tab-btn-box">
                <ul className="tab-btns tab-buttons clearfix">
                  {[
                    "Home",
                    "Pages",
                    "Services",
                    // "Project",
                    // "Team",
                    // "Blog",
                  ].map((label, idx) => (
                    <li
                      key={idx}
                      onClick={() => handleOnClick(idx + 1)}
                      className={
                        activeIndex === idx + 1
                          ? "tab-btn active-btn"
                          : "tab-btn"
                      }
                    >
                      <span>{label}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="tabs-content">
                {/* Example Tab - You already have them defined */}
                <div className={activeIndex === 1 ? "tab active-tab" : "tab"}>
                  <ul className="sidebar-menu-list clearfix">
                    <li>
                      <Link href="/" onClick={handleMobileMenu}>
                        Creative Agency
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className={activeIndex === 2 ? "tab active-tab" : "tab"}>
                  <ul className="sidebar-menu-list clearfix">
                    <li>
                      <Link href="/about" onClick={handleMobileMenu}>
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link href="/testimonials" onClick={handleMobileMenu}>
                        Testimonials
                      </Link>
                    </li>
                    <li>
                      <Link href="/pricing" onClick={handleMobileMenu}>
                        Pricing
                      </Link>
                    </li>
                    <li>
                      <Link href="/contact" onClick={handleMobileMenu}>
                        Contact Us
                      </Link>
                    </li>
                    <li>
                      <Link href="/error" onClick={handleMobileMenu}>
                        404
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className={activeIndex === 3 ? "tab active-tab" : "tab"}>
                  <ul className="sidebar-menu-list clearfix">
                    <li>
                      <Link href="/contact" onClick={handleMobileMenu}>
                        Branding & Identity
                      </Link>
                    </li>
                    <li>
                      <Link href="/contact" onClick={handleMobileMenu}>
                        Social Media
                      </Link>
                    </li>
                    <li>
                      <Link href="/contact" onClick={handleMobileMenu}>
                        Print
                      </Link>
                    </li>
                    <li>
                      <Link href="/contact" onClick={handleMobileMenu}>
                        3d
                      </Link>
                    </li>
                    <li>
                      <Link href="/contact" onClick={handleMobileMenu}>
                        Motion Graphics
                      </Link>
                    </li>
                    <li>
                      <Link href="/contact" onClick={handleMobileMenu}>
                        Advertising
                      </Link>
                    </li>
                    <li>
                      <Link href="/contact" onClick={handleMobileMenu}>
                        Video Editing
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className={activeIndex === 4 ? "tab active-tab" : "tab"}>
                  <ul className="sidebar-menu-list clearfix">
                    <li>
                      <Link href="/project" onClick={handleMobileMenu}>
                        Our Projects
                      </Link>
                    </li>
                    <li>
                      <Link href="/project-details" onClick={handleMobileMenu}>
                        Project Details
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className={activeIndex === 5 ? "tab active-tab" : "tab"}>
                  <ul className="sidebar-menu-list clearfix">
                    <li>
                      <Link href="/team" onClick={handleMobileMenu}>
                        Our Team
                      </Link>
                    </li>
                    <li>
                      <Link href="/team-details" onClick={handleMobileMenu}>
                        Team Details
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className={activeIndex === 6 ? "tab active-tab" : "tab"}>
                  <ul className="sidebar-menu-list clearfix">
                    <li>
                      <Link href="/blog" onClick={handleMobileMenu}>
                        Blog Grid
                      </Link>
                    </li>
                    <li>
                      <Link href="/blog-2" onClick={handleMobileMenu}>
                        Blog Grid Sidebar
                      </Link>
                    </li>
                    <li>
                      <Link href="/blog-3" onClick={handleMobileMenu}>
                        Blog Standard
                      </Link>
                    </li>
                    <li>
                      <Link href="/blog-4" onClick={handleMobileMenu}>
                        Blog Standard Sidebar
                      </Link>
                    </li>
                    <li>
                      <Link href="/blog-details" onClick={handleMobileMenu}>
                        Blog Details
                      </Link>
                    </li>
                    <li>
                      <Link href="/blog-details-2" onClick={handleMobileMenu}>
                        Blog Details Sidebar
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Keep your other tab contents as-is (Pages, Services, etc.) */}
              </div>
            </div>
          </div>

          {/* Bottom Area */}
          <div className="bottom-area">
            <p>
              Copyright {new Date().getFullYear()} &copy; All Rights Reserved.
            </p>
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
          </div>
        </div>
      </div>

      {/* Sidebar overlay */}
      <div
        className="nav-overlay"
        style={{ display: isSidebar ? "block" : "none" }}
        onClick={handleSidebar}
      />
    </>
  );
}
