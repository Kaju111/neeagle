import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import MobileMenu from "../MobileMenu";

// ✅ Define props type
type Header1Props = {
  handleMobileMenu: () => void; // adjust signature if it accepts args
};

export default function Header2({ handleMobileMenu }: Header1Props) {
  const [isPinned, setIsPinned] = useState(true); // true = visible
  const [lastScroll, setLastScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll > lastScroll) {
        // Scrolling down → hide
        setIsPinned(false);
      } else {
        // Scrolling up → show
        setIsPinned(true);
      }

      setLastScroll(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  return (
    <header
      id="header"
      className={
        isPinned
          ? "main-header headroom headroom--pinned"
          : "main-header headroom--unpinned"
      }
    >
      <div className="header-lower">
        <div className="shadow-box">
          <div className="shadow-1"></div>
          <div className="shadow-2"></div>
          <div className="shadow-3"></div>
          <div className="shadow-4"></div>
          <div className="shadow-5"></div>
          <div className="shadow-6"></div>
        </div>

        <div className="outer-box">
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
          <div className="logo-box">
            <figure className="logo">
              <Link href="/">
                <Image
                  src="/assets/images/logo.png"
                  alt="Logo Image"
                  width={221}
                  height={47}
                  priority
                />
              </Link>
            </figure>
            <figure className="light-logo">
              <Link href="/">
                <Image
                  src="/assets/images/logo-3.png"
                  alt="Logo Image"
                  width={221}
                  height={47}
                  priority
                />
              </Link>
            </figure>
          </div>

          <div className="menu-right-content">
            <div className="btn-box">
              <Link href="/" className="theme-btn theme-bg">
                <div className="static-text">
                  <span>Let&apos;s Talk</span>
                </div>
                <div className="overlay-text">
                  <span>Let&apos;s Talk</span>
                </div>
              </Link>
            </div>

            <div className="mobile-nav-toggler" onClick={handleMobileMenu}>
              <i className="icon-bar"></i>
              <i className="icon-bar"></i>
              <i className="icon-bar"></i>
            </div>
          </div>
        </div>
      </div>

      {/* Pass prop down */}
      <MobileMenu
        isSidebar={false} // or some state from Header1
        handleMobileMenu={handleMobileMenu}
        handleSidebar={() => {}} // replace with real function
      />
    </header>
  );
}
