"use client";
import { useState } from "react";
import Link from "next/link";

const services = [
  {
    id: 1,
    title: "Branding & Identity",
    video: "/assets/images/service/videos/branding.mp4",
    link: "/service-details",
  },
  {
    id: 2,
    title: "Social Media",
    video: "/assets/images/service/videos/social-media.mp4",
    link: "/service-details-2",
  },
  {
    id: 3,
    title: "Fashion Design",
    video: "/assets/images/service/videos/fashion.mp4",
    link: "/service-details-5",
  },
  {
    id: 4,
    title: "UI / UX",
    video: "/assets/images/service/videos/uiux.mp4",
    link: "/service-details-5",
  },
  {
    id: 5,
    title: "App Design & Development (ios & Android)",
    video: "/assets/images/service/videos/app-development.mp4",
    link: "/service-details-3",
  },
  {
    id: 6,
    title: "Digital Marketing",
    video: "/assets/images/service/videos/digital-marketing.mp4",
    link: "/service-details-5",
  },
  {
    id: 7,
    title: "SEO",
    video: "/assets/images/service/videos/seo.mp4",
    link: "/service-details-5",
  },
  {
    id: 8,
    title: "Content Writing",
    video: "/assets/images/service/videos/content-writing.mp4",
    link: "/service-details-5",
  },
  {
    id: 9,
    title: "Print",
    video: "/assets/images/service/videos/print.mp4",
    link: "/service-details-3",
  },
  {
    id: 10,
    title: "Motion Graphics",
    video: "/assets/images/service/videos/motion-graphics.mp4",
    link: "/service-details-5",
  },

  {
    id: 11,
    title: "3d",
    video: "/assets/images/service/videos/3d.mp4",
    link: "/service-details-4",
  },

  {
    id: 12,
    title: "Advertising",
    video: "/assets/images/service/videos/advertising.mp4",
    link: "/service-details-5",
  },
];

export default function Service() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="service-section">
      <div className="auto-container">
        <div className="sec-title reveal-me" style={{ marginTop: "3%" }}>
          <div className="sub-title">
            <span>Services</span>
          </div>
          <h2>
            <span>What can we do for you?</span> <br />
          </h2>
        </div>

        <div className="tabs-box">
          <div className="row clearfix">
            {/* Left Column (Tabs) */}
            <div className="col-lg-6 col-md-12 col-sm-12 content-column">
              <div className="content-box reveal-me">
                <ul className="service-list mb_110 tab-btns tab-buttons clearfix">
                  {services.map((service, index) => (
                    <li
                      key={service.id}
                      role="button"
                      tabIndex={0}
                      onClick={() => setActiveIndex(index)}
                      onKeyDown={(e) =>
                        e.key === "Enter" && setActiveIndex(index)
                      }
                      className={
                        activeIndex === index ? "tab-btn active-btn" : "tab-btn"
                      }
                    >
                      {service.title}
                    </li>
                  ))}
                </ul>

                <div className="btn-box">
                  <Link href="/contact" className="theme-btn border-btn">
                    <div className="static-text">
                      <span>Let's Talk</span>
                      <i className="icon-1"></i>
                    </div>
                    <div className="overlay-text">
                      <span>Let's Talk</span>
                      <i className="icon-1"></i>
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Column (Content with Videos) */}
            <div className="col-lg-6 col-md-12 col-sm-12 image-column">
              <div className="tabs-content">
                {services.map((service, index) => (
                  <div
                    key={service.id}
                    className={activeIndex === index ? "tab active-tab" : "tab"}
                  >
                    {activeIndex === index && (
                      <div className="video-box reveal-me">
                        <Link href={service.link}>
                          <video
                            width="630"
                            height="525"
                            autoPlay
                            muted
                            loop
                            playsInline
                            className="service-video"
                          >
                            <source src={service.video} type="video/mp4" />
                            Your browser does not support the video tag.
                          </video>
                        </Link>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
