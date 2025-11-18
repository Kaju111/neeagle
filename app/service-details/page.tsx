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

export default function Service_Details() {
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
                <h2>Web Design</h2>
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
                        <li><Link href="/service-details" className="current"><span>Web Design</span> <i className="icon-1"></i></Link></li>
                        <li><Link href="/service-details-2"><span>Content Marketing</span> <i className="icon-1"></i></Link></li>
                        <li><Link href="/service-details-3"><span>Social Media Marketing</span> <i className="icon-1"></i></Link></li>
                        <li><Link href="/service-details-4"><span>PPC Marketing</span> <i className="icon-1"></i></Link></li>
                        <li><Link href="/service-details-5"><span>Link Building</span> <i className="icon-1"></i></Link></li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="col-lg-6 col-md-12 col-sm-12 content-side">
                  <div className="service-details-content">
                    <h2 className="mb_16">Expert SEO Services for Sustainable Business Online Success</h2>
                    <p className="mb_40">In today&apos;s digital era, visibility on search engines is not just an advantage—it&apos;s a necessity. SEO Search Engine Optimization marketing services play a pivotal role in driving organic traffic, improving online visibility, and ensuring sustainable growth for businesses. Let&apos;s dive into the various aspects of SEO marketing services and how they can transform your online presence.</p>

                    <h3 className="mb_16">Comprehensive Website Audit</h3>
                    <p className="mb_40">Every successful SEO campaign begins with a thorough website audit. This process involves evaluating your site&apos;s technical health, identifying bottlenecks, and pinpointing opportunities for improvement. Key areas assessed include site structure, loading speed, mobile responsiveness, and user experience. The goal is to create a solid foundation that supports long-term SEO success.</p>

                    <h3 className="mb_16">Keyword Research</h3>
                    <p className="mb_20">Keywords are the bridge between your content and your audience. Effective keyword research identifies the terms and phrases your potential customers are searching for. This involves analyzing search volume, competition, and relevance. By targeting the right keywords, businesses can attract the right audience and improve conversion rates.</p>

                    <figure className="image mb_40">
                      <Image src="/assets/images/service/service-3.jpg" alt="Service Image" width={630} height={351} priority />
                    </figure>

                    <h3 className="mb_16">On-Page Optimization</h3>
                    <p>On-page SEO ensures that your website speaks the language of search engines. This includes optimizing title tags, meta descriptions, and header tags, as well as improving content relevance and internal linking. A focus on user intent ensures that your site not only ranks well but also delivers value to visitors.</p>
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
                      {faqData.map((faq) => (
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
