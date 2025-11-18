

import Image from "next/image";
import Link from "next/link";
import ModalVideo from "../../../components/elements/VideoPopup";

const portfolioItems = [
  {
    image: "/assets/images/resource/about-6.jpg",
    title: ["Weddings &", "Engagements"],
    description: "Elegant storytelling of your most special day."
  },
  {
    image: "/assets/images/resource/about-7.jpg",
    title: ["Weddings &", "Engagements"],
    description: "Elegant storytelling of your most special day."
  },
  {
    image: "/assets/images/resource/about-8.jpg",
    title: ["Portraits &", "Lifestyle"],
    description: "Elegant storytelling of your most special day."
  },
  {
    image: "/assets/images/resource/about-9.jpg",
    title: ["Events &", "Corporate"],
    description: "Professional coverage for events, conferences, or brand launches."
  }
];

export default function About() {
  return (
    <section className="about-style-five p_relative pt_200 pb_200">
      <div className="large-container">
        <div className="row clearfix">
          {/* Video Column */}
          <div className="col-lg-5 col-md-12 col-sm-12 video-column">
            <div className="video-content reveal-me">
              <div
                className="video-btn"
                style={{ backgroundImage: "url(assets/images/resource/video-1.jpg)" }}
              >
                <ModalVideo />
              </div>
              <div className="text-box pt_60">
                <div className="sec-title">
                  <div className="sub-title">About me</div>
                  <h2>Captured with Purpose</h2>
                </div>
                <div className="text-inner mb_40">
                  <p>
                    Hi, I am Your Name, a passionate photographer based in City/Country. I specialize
                    in capturing authentic moments—whether it&apos;s a quiet smile, an epic celebration,
                    or the in-between magic. My goal is to make every photo feel like a timeless memory.
                  </p>
                </div>
                <div className="btn-box">
                  <Link href="/about" className="theme-btn theme-bg">
                    <div className="static-text">
                      <span className="dot"></span><span>Book a Session</span>
                    </div>
                    <div className="overlay-text">
                      <span className="dot"></span><span>Book a Session</span>
                    </div>
                  </Link>
                  <Link href="/contact" className="theme-btn border-btn">
                    <span className="static-text">Let&apos;s Connect</span>
                    <span className="overlay-text">Let&apos;s Connect</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Portfolio Column */}
          <div className="col-lg-7 col-md-12 col-sm-12 content-column p_relative">
            <div className="content-box ml_75 reveal-me">
              {[0, 1].map((colIndex) => (
                <div key={colIndex} className="single-column" data-lenis-prevent="true">
                  {portfolioItems.map((item, idx) => (
                    <div key={idx} className="single-item">
                      <figure className="image-box">
                        <Image src={item.image} alt={item.title.join(" ")} width={300} height={375} priority />
                      </figure>
                      <div className="lower-content">
                        <h2>
                          <Link href="/index-5">
                            <span>{item.title[0]}</span> <br />
                            <span>{item.title[1]}</span>
                          </Link>
                        </h2>
                        <p>{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
