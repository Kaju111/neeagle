"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const faqData = [
  {
    id: 1,
    question: "What services do you offer?",
    answer:
      "We specialize in web design, branding, UI/UX, digital marketing, and e-commerce solutions.",
  },
  {
    id: 2,
    question: "How much do your services cost?",
    answer:
      "Pricing depends on project scope. We provide transparent estimates after understanding your needs.",
  },
  {
    id: 3,
    question: "How long does a project take?",
    answer:
      "Timelines vary by complexity. A typical project ranges from 4/12 weeks.",
  },
  {
    id: 4,
    question: "Do you offer ongoing support?",
    answer:
      "Yes, we provide maintenance and long-term support for all projects.",
  },
  {
    id: 5,
    question: "What industries do you work with?",
    answer:
      "We work with startups, e-commerce, healthcare, SaaS, education, and more.",
  },
  {
    id: 6,
    question: "How do we get started?",
    answer:
      "Simply book an intro call with us, and we&apos;ll guide you through the next steps.",
  },
];

export default function Faq() {
  const [activeKey, setActiveKey] = useState<number | null>(1);

  const handleToggle = (key: number) => {
    setActiveKey(activeKey === key ? null : key);
  };

  return (
    <section className="faq-section p_relative pb_300">
      <div className="large-container">
        <div className="row clearfix">
          {/* Left Column */}
          <div className="col-lg-4 col-md-12 col-sm-12 title-column reveal-me">
            <div className="sec-title reveal-me">
              <div className="sub-title"><span>FAQ&apos;s</span></div>
              <h2><span>Frequently Asked Questions</span></h2>
              <Link href="/" className="theme-btn banner-btn">
                <div className="static-text">
                  <Image
                    src="/assets/images/icons/avatar-1.png"
                    alt="Avatar"
                    width={36}
                    height={36}
                    priority
                  />
                  <span>Book an intro call</span>
                </div>
                <div className="overlay-text">
                  <Image
                    src="/assets/images/icons/avatar-1.png"
                    alt="Avatar"
                    width={36}
                    height={36}
                    priority
                  />
                  <span>Book an intro call</span>
                </div>
              </Link>
            </div>
          </div>

          {/* Right Column */}
          <div className="col-lg-8 col-md-12 col-sm-12 accordion-column reveal-me">
            <div className="accordion-content reveal-me">
              <ul className="accordion-box">
                {faqData.map(({ id, question, answer }) => (
                  <li
                    key={id}
                    className={`accordion block ${activeKey === id ? "active-block" : ""}`}
                  >
                    <button
                      className={`acc-btn ${activeKey === id ? "active" : ""}`}
                      onClick={() => handleToggle(id)}
                    >
                      <h3>{question}</h3>
                      <div className="icon-box">
                        <div className="open-icon">
                          <Image src="/assets/images/icons/icon-4.png" alt="" width={32} height={32}/>
                        </div>
                        <div className="close-icon">
                          <Image src="/assets/images/icons/icon-5.png" alt="" width={32} height={32}/>
                        </div>
                      </div>
                      <div className="light-icon">
                        <div className="open-icon">
                          <Image src="/assets/images/icons/icon-23.png" alt="" width={32} height={32}/>
                        </div>
                        <div className="close-icon">
                          <Image src="/assets/images/icons/icon-24.png" alt="" width={32} height={32}/>
                        </div>
                      </div>
                    </button>
                    <div className={`acc-content ${activeKey === id ? "current" : ""}`}>
                      <div className="content">
                        <p>{answer}</p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
