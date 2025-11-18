"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Layout from "../../components/layout/Layout";
import Cta from "../../components/sections/home3/Cta";
import Team from "../../components/sections/home4/Team";

export default function Team_Page() {
  const [isActive, setIsActive] = useState<{ status: boolean; key: number | null }>({
    status: false,
    key: null,
  });

  const handleToggle = (key: number) => {
    setIsActive((prev) =>
      prev.key === key ? { status: false, key: null } : { status: true, key }
    );
  };

  const faqs = [
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
        "Pricing depends on the scope of the project. We provide tailored quotes after understanding your needs.",
    },
    {
      id: 3,
      question: "How long does a project take?",
      answer:
        "Timelines vary, but most projects take between 4/12 weeks depending on complexity.",
    },
    {
      id: 4,
      question: "Do you offer ongoing support?",
      answer:
        "Yes, we offer maintenance and ongoing support packages to ensure your digital presence is always up to date.",
    },
    {
      id: 5,
      question: "What industries do you work with?",
      answer:
        "We&apos;ve worked with startups, e-commerce businesses, agencies, and enterprise clients across multiple industries.",
    },
    {
      id: 6,
      question: "How do we get started?",
      answer:
        "Simply contact us through our form or book a call. We&apos;ll discuss your goals and craft a proposal for you.",
    },
  ];

  return (
    <div className="boxed_wrapper inner_page">
      <Layout headerStyle={2} footerStyle={2}>
        <main className="main-content">
          {/* Page Title */}
          <section className="page-title p_relative centred pb_60">
            <div className="auto-container">
              <div className="content-box">
                <div className="sub-title">Team</div>
                <h1 className="mt_50">
                  <span>Our</span>
                  <br />
                  <span>Team</span>
                </h1>
                <p className="mb_60 mt_90 fs_20 lh_30">
                  Discover how our passion for creativity and data-driven strategies has shaped
                  our journey in digital innovation —
                  <br />
                  leading to campaigns that engage audiences and drive measurable results.
                </p>
                <Link href="/contact" className="theme-btn theme-bg">
                  <div className="static-text">
                    <span className="dot"></span>
                    <span>Let&apos;s Contact</span>
                  </div>
                  <div className="overlay-text">
                    <span className="dot"></span>
                    <span>Let&apos;s Contact</span>
                  </div>
                </Link>
              </div>
            </div>
          </section>

          {/* Team Section */}
          <Team />

          {/* FAQ Section */}
          <section className="faq-section p_relative pt_200 pb_100">
            <div className="large-container">
              <div className="row clearfix">
                {/* FAQ Title Column */}
                <div className="col-lg-4 col-md-12 col-sm-12 title-column reveal-me">
                  <div className="sec-title reveal-me">
                    <div className="sub-title">
                      <span>FAQ&apos;s</span>
                    </div>
                    <h2>
                      <span>Frequently Asked Questions</span>
                    </h2>
                    <Link href="/contact" className="theme-btn banner-btn">
                      <div className="static-text">
                        <Image
                          src="/assets/images/icons/avatar-1.png"
                          alt="Book a call"
                          width={36}
                          height={36}
                          priority
                        />
                        <span>Book an intro call</span>
                      </div>
                      <div className="overlay-text">
                        <Image
                          src="/assets/images/icons/avatar-1.png"
                          alt="Book a call"
                          width={36}
                          height={36}
                          priority
                        />
                        <span>Book an intro call</span>
                      </div>
                    </Link>
                  </div>
                </div>

                {/* FAQ Accordion Column */}
                <div className="col-lg-8 col-md-12 col-sm-12 accordion-column reveal-me">
                  <div className="accordion-content reveal-me">
                    <ul className="accordion-box">
                      {faqs.map((faq) => (
                        <li key={faq.id} className="accordion block">
                          <div
                            className={isActive.key === faq.id ? "acc-btn active" : "acc-btn"}
                            onClick={() => handleToggle(faq.id)}
                          >
                            <h3>{faq.question}</h3>
                            <div className="icon-box">
                              <div className="open-icon">
                                <Image
                                  src="/assets/images/icons/icon-4.png"
                                  alt="Open"
                                  width={32}
                                  height={32}
                                  priority
                                />
                              </div>
                              <div className="close-icon">
                                <Image
                                  src="/assets/images/icons/icon-5.png"
                                  alt="Close"
                                  width={32}
                                  height={32}
                                  priority
                                />
                              </div>
                            </div>
                            <div className="light-icon">
                              <div className="open-icon">
                                <Image
                                  src="/assets/images/icons/icon-23.png"
                                  alt="Open Light"
                                  width={32}
                                  height={32}
                                  priority
                                />
                              </div>
                              <div className="close-icon">
                                <Image
                                  src="/assets/images/icons/icon-24.png"
                                  alt="Close Light"
                                  width={32}
                                  height={32}
                                  priority
                                />
                              </div>
                            </div>
                          </div>
                          <div
                            className={
                              isActive.key === faq.id ? "acc-content current" : "acc-content"
                            }
                          >
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

          {/* CTA Section */}
          <Cta />
        </main>
      </Layout>
    </div>
  );
}
