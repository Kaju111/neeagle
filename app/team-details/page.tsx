"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Layout from "../../components/layout/Layout";
import Cta from "../../components/sections/home3/Cta";

export default function Team_Details() {
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
                <div className="sub-title">Team Details</div>
                <h2>Meet our team member</h2>
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

          {/* Team Details */}
          <section className="team-details p_relative pb_200">
            <div className="auto-container">
              <div className="row clearfix">
                {/* Image & Info */}
                <div className="col-lg-6 col-md-6 col-sm-12 image-column">
                  <div className="image-box mr_30">
                    <figure className="image">
                      <Image
                        src="/assets/images/team/team-10.jpg"
                        alt="Albert Flores"
                        width={600}
                        height={630}
                        priority
                      />
                    </figure>
                    <div className="info-box">
                      <h3>Albert Flores</h3>
                      <span className="designation">CEO</span>
                      <Link href="tel:13685678954">+1 (368) 567 89 54</Link>
                      <ul className="social-links">
                        <li>
                          <Link href="#"><i className="icon-4"></i></Link>
                        </li>
                        <li>
                          <Link href="#"><i className="icon-5"></i></Link>
                        </li>
                        <li>
                          <Link href="#"><i className="icon-9"></i></Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="col-lg-6 col-md-6 col-sm-12 content-column">
                  <div className="content-box">
                    <h2 className="mb_20">Albert Flores</h2>
                    <p className="mb_20">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a lobortis
                      tortor, sit amet congue purus. Maecenas pharetra lacus quis nisi porta
                      facilisis. Morbi fermentum bibendum arcu, a porttitor eros volutpat et.
                    </p>
                    <p className="mb_40">
                      Nam blandit hendrerit lectus, non auctor nulla euismod quis. Vestibulum nec
                      elit sed libero faucibus lobortis. In et nisl vel eros malesuada ultricies.
                    </p>

                    <ul className="info-list mb_40">
                      <li>
                        <Image
                          src="/assets/images/icons/icon-20.png"
                          alt="email"
                          width={24}
                          height={24}
                          priority
                        />
                        <Link href="mailto:Albertflores@info.com">
                          Albertflores@info.com
                        </Link>
                      </li>
                      <li>
                        <Image
                          src="/assets/images/icons/icon-21.png"
                          alt="phone"
                          width={21}
                          height={19}
                          priority
                        />
                        <Link href="tel:912136660027">+91-213-666-0027</Link>
                      </li>
                    </ul>

                    <h2 className="mb_16">My Expertise & Skills</h2>
                    <p className="mb_20">
                      Etiam scelerisque nibh vitae purus blandit, sed iaculis dolor fringilla.
                      Aenean luctus est sed justo pellentesque, quis fermentum felis pellentesque.
                    </p>
                    <p className="mb_40">
                      Phasellus sed cursus erat. Nullam et nulla magna. Lorem ipsum dolor sit amet,
                      consectetur adipiscing elit.
                    </p>

                    <h2 className="mb_16">How I can assist you</h2>
                    <p className="mb_40">
                      Enim orci aliquam malesuada porttitor feugiat tellus malesuada quis fermentum
                      mattis sit fringilla id feugiat velit non sed id.
                    </p>

                    {/* Contact Form */}
                    <div className="form-inner">
                      <form action="/team-details" method="post">
                        <div className="row clearfix">
                          <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                            <input
                              type="text"
                              name="name"
                              placeholder="Enter your name"
                              required
                            />
                          </div>
                          <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                            <input
                              type="email"
                              name="email"
                              placeholder="Enter your email"
                              required
                            />
                          </div>
                          <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                            <textarea name="message" placeholder="Enter your message"></textarea>
                          </div>
                          <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                            <button type="submit" className="theme-btn theme-bg">
                              <span className="static-text">
                                <span className="dot"></span>
                                <span>Let&apos;s Contact</span>
                              </span>
                              <span className="overlay-text">
                                <span className="dot"></span>
                                <span>Let&apos;s Contact</span>
                              </span>
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="faq-section p_relative pb_100">
            <div className="large-container">
              <div className="row clearfix">
                {/* Title */}
                <div className="col-lg-4 col-md-12 col-sm-12 title-column reveal-me">
                  <div className="sec-title reveal-me">
                    <div className="sub-title"><span>FAQ&apos;s</span></div>
                    <h2><span>Frequently Asked Questions</span></h2>
                    <Link href="/" className="theme-btn banner-btn">
                      <div className="static-text">
                        <Image
                          src="/assets/images/icons/avatar-1.png"
                          alt="avatar"
                          width={36}
                          height={36}
                          priority
                        />
                        <span>Book an intro call</span>
                      </div>
                      <div className="overlay-text">
                        <Image
                          src="/assets/images/icons/avatar-1.png"
                          alt="avatar"
                          width={36}
                          height={36}
                          priority
                        />
                        <span>Book an intro call</span>
                      </div>
                    </Link>
                  </div>
                </div>

                {/* Accordion */}
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
                                <Image src="/assets/images/icons/icon-4.png" alt="+" width={32} height={32} priority />
                              </div>
                              <div className="close-icon">
                                <Image src="/assets/images/icons/icon-5.png" alt="-" width={32} height={32} priority />
                              </div>
                            </div>
                            <div className="light-icon">
                              <div className="open-icon">
                                <Image src="/assets/images/icons/icon-23.png" alt="+" width={32} height={32} priority />
                              </div>
                              <div className="close-icon">
                                <Image src="/assets/images/icons/icon-24.png" alt="-" width={32} height={32} priority />
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

          <Cta />
        </main>
      </Layout>
    </div>
  );
}
