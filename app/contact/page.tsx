"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Layout from "../../components/layout/Layout";
import Cta from "../../components/sections/home3/Cta";

type FormData = {
  name: string;
  email: string;
  message: string;
};

export default function Contact_Page() {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<string>("");

  // ✅ Typed change handler
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // ✅ Typed submit handler
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch("/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("✅ Message sent!");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("❌ Failed to send");
      }
    } catch (err) {
      setStatus("⚠️ Error sending message");
    }
  };

  return (
    <div className="boxed_wrapper inner_page">
      <Layout headerStyle={2} footerStyle={2}>
        <main className="main-content">
          {/* Page Header */}
          <section className="page-title p_relative centred pb_60">
            <div className="auto-container">
              <div className="content-box">
                <div className="sub-title">contact</div>
                <h1 className="mt_50">
                  <span>Let&apos;s</span>
                  <br />
                  <span>contact</span>
                </h1>
                <p className="mb_60 mt_90 fs_20 lh_30">
                  Discover how my passion for creativity and data-driven
                  strategies has shaped my career in digital marketing, leading
                  <br />
                  to innovative campaigns that engage audiences and drive
                  measurable results.
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

          <section className="contact-section p_relative pb_200">
            <div className="auto-container">
              <div className="row clearfix">
                <div className="col-lg-12 col-md-12 col-sm-12">
                  <div className="contact-map reveal-me">
                    <div className="map-container">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650634.3858420644!2d89.7453!3d26.2006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e29937c52f4f05%3A0x831a0e68c6b3e04f!2sNorth%20East%20India!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                        width="100%"
                        height="600"
                        style={{ border: 0, borderRadius: "12px" }}
                        // allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Info */}
          <section className="contact-info-section">
            <div className="auto-container">
              <div className="row clearfix">
                <div className="col-lg-4 col-md-6 col-sm-12 info-block">
                  <div className="info-block-one reveal-me">
                    <div className="inner-box">
                      <h3>Contact support</h3>
                      <p>
                        <Image
                          src="/assets/images/icons/icon-20.png"
                          alt="Phone"
                          width={20}
                          height={20}
                        />
                        <Link href="tel:+91 6003019481">+91 6003019481</Link>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 col-sm-12 info-block">
                  <div className="info-block-one reveal-me">
                    <div className="inner-box">
                      <h3>Email us</h3>
                      <p>
                        <Image
                          src="/assets/images/icons/icon-21.png"
                          alt="Email"
                          width={20}
                          height={20}
                        />
                        <Link href="mailto:designassam1@gmail.com">
                          designassam1@gmail.com
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 col-sm-12 info-block">
                  <div className="info-block-one reveal-me">
                    <div className="inner-box">
                      <h3>Address</h3>
                      <p>
                        <Image
                          src="/assets/images/icons/icon-22.png"
                          alt="Location"
                          width={20}
                          height={20}
                        />
                        <span>North East, India</span>
                      </p>
                    </div>
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
