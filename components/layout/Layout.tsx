"use client";
import { useEffect, useState } from "react";
import BackToTop from "../elements/BackToTop";
import DataBg from "../elements/DataBg";
import Breadcrumb from "./Breadcrumb";
import Footer1 from "./footer/Footer1";
import Footer2 from "./footer/Footer2";
import Footer3 from "./footer/Footer3";
import Header1 from "./header/Header1";
import Header2 from "./header/Header2";

type LayoutProps = {
  headerStyle?: 1 | 2;
  footerStyle?: 1 | 2 | 3;
  breadcrumbTitle?: string;
  children: React.ReactNode;
  wrapperCls?: string;
};

export default function Layout({
  headerStyle = 1,
  footerStyle = 1,
  breadcrumbTitle,
  children,
  wrapperCls,
}: LayoutProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  // Mobile Menu
  const [isMobileMenu, setMobileMenu] = useState(false);
  const handleMobileMenu = () => {
    setMobileMenu((prev) => {
      const newState = !prev;
      newState
        ? document.body.classList.add("mobile-menu-visible")
        : document.body.classList.remove("mobile-menu-visible");
      return newState;
    });
  };

  // Popup
  const [isPopup, setPopup] = useState(false);
  const handlePopup = () => setPopup((p) => !p);

  // Sidebar
  const [isSidebar, setSidebar] = useState(false);
  const handleSidebar = () => setSidebar((s) => !s);

  useEffect(() => {
    (async () => {
      // @ts-expect-error: value is temporarily a string, but will be converted to number
      const { WOW } = await import("wowjs");
      const wow = new WOW({ live: false });
      wow.init();
    })();

    const onScroll = () => setIsScrolled(window.scrollY > 100);
    document.addEventListener("scroll", onScroll);

    return () => {
      document.removeEventListener("scroll", onScroll);
      document.body.classList.remove("mobile-menu-visible");
    };
  }, []);

  const renderHeader = () => {
    const headerProps = {
      scroll: isScrolled,
      isMobileMenu,
      handleMobileMenu,
      handlePopup,
      isSidebar,
      handleSidebar,
    };
    switch (headerStyle) {
      case 1:
        return <Header1 {...headerProps} />;
      case 2:
        return <Header2 {...headerProps} />;
      default:
        return null;
    }
  };

  const renderFooter = () => {
    switch (footerStyle) {
      case 1:
        return <Footer1 />;
      case 2:
        return <Footer1 />;
      // case 2: return <Footer2 />;
      case 3:
        return <Footer3 />;
      default:
        return null;
    }
  };

  return (
    <>
      <DataBg />
      <div className={`page-wrapper ${wrapperCls || ""}`} id="top">
        {renderHeader()}
        {breadcrumbTitle && <Breadcrumb breadcrumbTitle={breadcrumbTitle} />}
        {children}
        {renderFooter()}
      </div>
      <BackToTop scroll={isScrolled} />
    </>
  );
}
