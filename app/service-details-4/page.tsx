"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Layout from "../../components/layout/Layout";
import Cta from "../../components/sections/home3/Cta";

const faqData = [
  { id: 1, question: "What services do you offer?", answer: "We specialize in web design, branding, UI/UX, digital marketing, and e-commerce solutions." },
  { id: 2, question: "How much do your services cost?", answer: "Pricing depends on the scope of your project. Contact us for a detailed quote." },
  { id: 3, question: "How long does a project take?", answer: "Project timelines vary depending on complexity, usually ranging from a few weeks to a few months." },
  { id: 4, question: "Do you offer ongoing support?", answer: "Yes, we provide ongoing support and maintenance for our projects." },
  { id: 5, question: "What industries do you work with?", answer: "We work with businesses across industries including e-commerce, tech, healthcare, and finance." },
  { id: 6, question: "How do we get started?", answer: "You can get started by contacting us to discuss your project requirements and goals." },
];

export default function Service_Details_Four() {
  const [activeFaq, setActiveFaq] = useState<number | null>(1);

  const handleToggle = (id: number) => {
    setActiveFaq(activeFaq === id ? null : id);
  };

  return (
    <div className="boxed_wrapper inner_page">
      <Layout headerStyle={2} footerStyle={2}>
        <main className="main-content">

          {/* Page Title */}
          <section className="page-title p_relative centred pb_60">
            <div className="auto-container">
              <div className="content-box">
                <div className="sub-title">Service Details</div>
                <h2>PPC Marketing</h2>
                <Link href="/contact" className="theme-btn theme-bg">
                  <span className="static-text"><span className="dot"></span>Let&apos;s Contact</span>
                  <span className="overlay-text"><span className="dot"></span>Let&apos;s Contact</span>
                </Link>
              </div>
            </div>
          </section>

          {/* Service Details */}
          <section className="service-details p_relative pb_200">
            <div className="auto-container">
              <div className="row clearfix">

                {/* Sidebar */}
                <div className="col-lg-6 col-md-12 col-sm-12 sidebar-side">
                  <div className="service-sidebar mr_30">
                    <div className="category-widget">
                      <div className="widget-title"><h3>Our Services</h3></div>
                      <ul className="category-list clearfix">
                        <li><Link href="/service-details"><span>Web Design</span> <i className="icon-1"></i></Link></li>
                        <li><Link href="/service-details-2"><span>Content Marketing</span> <i className="icon-1"></i></Link></li>
                        <li><Link href="/service-details-3"><span>Social Media Marketing</span> <i className="icon-1"></i></Link></li>
                        <li><Link href="/service-details-4" className="current"><span>PPC Marketing</span> <i className="icon-1"></i></Link></li>
                        <li><Link href="/service-details-5"><span>Link Building</span> <i className="icon-1"></i></Link></li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="col-lg-6 col-md-12 col-sm-12 content-side">
                  <div className="service-details-content">
                    <h2 className="mb_16">PPC Marketing for Maximum ROI</h2>
                    <p className="mb_40">Pay-Per-Click (PPC) advertising is a powerful way to drive targeted traffic to your website and generate leads quickly. Our PPC campaigns are optimized for cost efficiency and maximum ROI.</p>

                    <h3 className="mb_16">Keyword Targeting</h3>
                    <p className="mb_40">We identify high-performing keywords to target your audience effectively and increase conversion rates.</p>

                    <h3 className="mb_16">Ad Creation</h3>
                    <p className="mb_20">Our team crafts compelling ad copies and visuals that capture attention and drive clicks.</p>

                    <figure className="image mb_40">
                      <Image src="/assets/images/service/service-3.jpg" alt="PPC Marketing" width={630} height={351} priority />
                    </figure>

                    <h3 className="mb_16">Campaign Monitoring</h3>
                    <p>We continuously monitor campaigns, analyze performance, and optimize bids to ensure efficient spend and maximum return.</p>
                  </div>
                </div>

              </div>
            </div>
          </section>

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
                  <div className="accordion-content reveal-me">
                    <ul className="accordion-box">
                      {faqData.map(faq => (
                        <li key={faq.id} className="accordion block">
                          <div className={activeFaq === faq.id ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(faq.id)}>
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
                            <div className="content">
                              <p>{faq.answer}</p>
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

          <Cta />
        </main>
      </Layout>
    </div>
  );
}
