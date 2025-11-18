"use client";
import React from "react";
import Link from "next/link";
import { useState } from "react";

export default function Services() {
    const [activeIndex, setActiveIndex] = useState(1);
    return (
        <> 

            <section className="service-style-four p_relative">
                <div className="outer-container">
                    <div className="title-box pl_100 pr_100 mb_50 reveal-me">
                        <div className="sec-title">
                            <div className="sub-title">Services</div>
                            <h2><span>Results-Driven Digital</span> <br /><span>Marketing Services</span></h2>
                        </div>
                        <div className="title-text align-3">
                            <p className="mb_40">From SEO to social media ads, our tailored strategies help you reach,and engage and <br />convert your audience effectively.</p>
                            <Link href="/contact" className="theme-btn theme-bg">
                                <div className="static-text"><span className="dot"></span><span>FREE CONSULTALON</span></div>
                                <div className="overlay-text"><span className="dot"></span><span>FREE CONSULTALON</span></div>
                            </Link>
                        </div>
                    </div>
                    <div className="content-box">
                        <div className={`service-block-two ${activeIndex === 1 ? "active" : ""}`} onMouseEnter={() => setActiveIndex(1)}>
                            <div className="inner-box">
                                <span className="count-text">01&nbsp;.</span>
                                <h2>SEO <br />Marketing</h2>
                                <p>Use plugins to edit objects, create unions by hand, and manage blur, opacity, and fill settings. Collaborate with the community, prototype using the pen tool, and rotate or arrange elements with boolean operations. Share stars, devices, and editor content seamlessly.</p>
                                <div className="link-box"><Link href="/service-details"><i className="icon-1"></i></Link></div>
                            </div>
                        </div>
                        <div className={`service-block-two ${activeIndex === 2 ? "active" : ""}`} onMouseEnter={() => setActiveIndex(2)}>
                            <div className="inner-box">
                                <span className="count-text">02&nbsp;.</span>
                                <h2>Content <br />Marketing</h2>
                                <p>Use plugins to edit objects, create unions by hand, and manage blur, opacity, and fill settings. Collaborate with the community, prototype using the pen tool, and rotate or arrange elements with boolean operations. Share stars, devices, and editor content seamlessly.</p>
                                <div className="link-box"><Link href="/service-details"><i className="icon-1"></i></Link></div>
                            </div>
                        </div>
                        <div className={`service-block-two ${activeIndex === 3 ? "active" : ""}`} onMouseEnter={() => setActiveIndex(3)}>
                            <div className="inner-box">
                                <span className="count-text">03&nbsp;.</span>
                                <h2>Social Media <br />Marketing</h2>
                                <p>Use plugins to edit objects, create unions by hand, and manage blur, opacity, and fill settings. Collaborate with the community, prototype using the pen tool, and rotate or arrange elements with boolean operations. Share stars, devices, and editor content seamlessly.</p>
                                <div className="link-box"><Link href="/service-details"><i className="icon-1"></i></Link></div>
                            </div>
                        </div>
                        <div className={`service-block-two ${activeIndex === 4 ? "active" : ""}`} onMouseEnter={() => setActiveIndex(4)}>
                            <div className="inner-box">
                                <span className="count-text">04&nbsp;.</span>
                                <h2>PPC <br />Marketing</h2>
                                <p>Use plugins to edit objects, create unions by hand, and manage blur, opacity, and fill settings. Collaborate with the community, prototype using the pen tool, and rotate or arrange elements with boolean operations. Share stars, devices, and editor content seamlessly.</p>
                                <div className="link-box"><Link href="/service-details"><i className="icon-1"></i></Link></div>
                            </div>
                        </div>
                        <div className={`service-block-two ${activeIndex === 5 ? "active" : ""}`} onMouseEnter={() => setActiveIndex(5)}>
                            <div className="inner-box">
                                <span className="count-text">05&nbsp;.</span>
                                <h2>Link <br />Marketing</h2>
                                <p>Use plugins to edit objects, create unions by hand, and manage blur, opacity, and fill settings. Collaborate with the community, prototype using the pen tool, and rotate or arrange elements with boolean operations. Share stars, devices, and editor content seamlessly.</p>
                                <div className="link-box"><Link href="/service-details"><i className="icon-1"></i></Link></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
