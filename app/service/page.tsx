"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Layout from "../../components/layout/Layout";
import Cta from "../../components/sections/home3/Cta";
import Pricing from "../../components/sections/home5/Pricing";

const services = [
  {
    id: 1,
    title: "SEO Marketing",
    desc: "Use plugins to edit objects, create unions by hand, and manage blur, opacity, and fill settings. Collaborate with the community, prototype using the pen tool, and rotate or arrange elements with boolean operations.",
    link: "/service-details",
  },
  {
    id: 2,
    title: "Content Marketing",
    desc: "Use plugins to edit objects, create unions by hand, and manage blur, opacity, and fill settings. Collaborate with the community, prototype using the pen tool, and rotate or arrange elements with boolean operations.",
    link: "/service-details-2",
  },
  {
    id: 3,
    title: "Social Media Marketing",
    desc: "Use plugins to edit objects, create unions by hand, and manage blur, opacity, and fill settings. Collaborate with the community, prototype using the pen tool, and rotate or arrange elements with boolean operations.",
    link: "/service-details-3",
  },
  {
    id: 4,
    title: "PPC Marketing",
    desc: "Use plugins to edit objects, create unions by hand, and manage blur, opacity, and fill settings. Collaborate with the community, prototype using the pen tool, and rotate or arrange elements with boolean operations.",
    link: "/service-details-4",
  },
  {
    id: 5,
    title: "Link Marketing",
    desc: "Use plugins to edit objects, create unions by hand, and manage blur, opacity, and fill settings. Collaborate with the community, prototype using the pen tool, and rotate or arrange elements with boolean operations.",
    link: "/service-details-5",
  },
];

const faqData = [
  { id: 1, question: "What services do you offer?", answer: "We specialize in web design, branding, UI/UX, digital marketing, and e-commerce solutions." },
  { id: 2, question: "How much do your services cost?", answer: "Pricing depends on the scope of your project. Contact us for a detailed quote." },
  { id: 3, question: "How long does a project take?", answer: "Project timelines vary depending on complexity, usually ranging from a few weeks to a few months." },
  { id: 4, question: "Do you offer ongoing support?", answer: "Yes, we provide ongoing support and maintenance for our projects." },
  { id: 5, question: "What industries do you work with?", answer: "We work with businesses across industries including e-commerce, tech, healthcare, and finance." },
  { id: 6, question: "How do we get started?", answer: "You can get started by contacting us to discuss your project requirements and goals." },
];

export default function Service_Page() {
  const [activeService, setActiveService] = useState(1);
  const [activeFaq, setActiveFaq] = useState<number | null>(1);

  const toggleFaq = (id: number) => {
    setActiveFaq(activeFaq === id ? null : id);
  };

  return (
    <div className="boxed_wrapper inner_page">
      <Layout headerStyle={2} footerStyle={2}>
        <main className="main-content">

          {/* Service Style Section */}
          <section className="service-style-four pt_300 p_relative">
            <div className="outer-container">
              <div className="title-box pl_100 pr_100 mb_50 reveal-me">
                <div className="sec-title">
                  <div className="sub-title">Services</div>
                  <h2><span>Results-Driven Digital</span> <br /><span>Marketing Services</span></h2>
                </div>
                <div className="title-text align-3">
                  <p className="mb_40">From SEO to social media ads, our tailored strategies help you reach, engage, and convert your audience effectively.</p>
                  <Link href="/contact" className="theme-btn theme-bg">
                    <span className="static-text"><span className="dot"></span>FREE CONSULTATION</span>
                    <span className="overlay-text"><span className="dot"></span>FREE CONSULTATION</span>
                  </Link>
                </div>
              </div>

              {/* Service Blocks */}
              <div className="content-box reveal-me">
                {services.map(service => (
                  <div
                    key={service.id}
                    className={`service-block-two ${activeService === service.id ? "active" : ""}`}
                    onMouseEnter={() => setActiveService(service.id)}
                  >
                    <div className="inner-box">
                      <span className="count-text">{`0${service.id} .`}</span>
                      <h2>{service.title}</h2>
                      <p>{service.desc}</p>
                      <div className="link-box"><Link href={service.link}><i className="icon-1"></i></Link></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Pricing Section */}
          <Pricing />

          {/* FAQ Section */}
          <section className="faq-section p_relative pb_100">
            <div className="large-container">
              <div className="row clearfix">

                {/* Title Column */}
                <div className="col-lg-4 col-md-12 col-sm-12 title-column reveal-me">
                  <div className="sec-title reveal-me">
                    <div className="sub-title"><span>FAQ&apos;s</span></div>
                    <h2><span>Frequently Asked Questions</span></h2>
                    <Link href="/contact" className="theme-btn banner-btn">
                      <span className="static-text">
                        <Image src="/assets/images/icons/avatar-1.png" alt="Avatar" width={36} height={36} priority />
                        <span>Book an intro call</span>
                      </span>
                      <span className="overlay-text">
                        <Image src="/assets/images/icons/avatar-1.png" alt="Avatar" width={36} height={36} priority />
                        <span>Book an intro call</span>
                      </span>
                    </Link>
                  </div>
                </div>

                {/* Accordion Column */}
                <div className="col-lg-8 col-md-12 col-sm-12 accordion-column reveal-me">
                  <ul className="accordion-box">
                    {faqData.map(faq => (
                      <li key={faq.id} className="accordion block">
                        <div className={activeFaq === faq.id ? "acc-btn active" : "acc-btn"} onClick={() => toggleFaq(faq.id)}>
                          <h3>{faq.question}</h3>
                          <div className="icon-box">
                            <div className="open-icon"><Image src="/assets/images/icons/icon-4.png" alt="Open" width={32} height={32} priority /></div>
                            <div className="close-icon"><Image src="/assets/images/icons/icon-5.png" alt="Close" width={32} height={32} priority /></div>
                          </div>
                          <div className="light-icon">
                            <div className="open-icon"><Image src="/assets/images/icons/icon-23.png" alt="Open" width={32} height={32} priority /></div>
                            <div className="close-icon"><Image src="/assets/images/icons/icon-24.png" alt="Close" width={32} height={32} priority /></div>
                          </div>
                        </div>
                        <div className={activeFaq === faq.id ? "acc-content current" : "acc-content"}>
                          <div className="content"><p>{faq.answer}</p></div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            </div>
          </section>

          <Cta />
        </main>
      </Layout>
    </div>
  );
}
