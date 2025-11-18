

import Link from "next/link";

export default function Services() {
    return (
        <> 

            <section className="service-style-three p_relative pb_170">
                <div className="auto-container">
                    <div className="sec-title reveal-me centred">
                        <div className="sub-title">Services</div>
                        <h2><span>Personalized digital</span> <br /><span>marketing solutions</span></h2>
                    </div>
                    <div className="row clearfix">
                        <div className="col-lg-4 col-md-6 col-sm-12 service-block">
                            <div className="service-block-one reveal-me">
                                <div className="inner-box">
                                    <span className="count-text">01</span>
                                    <h2><Link href="/service-details"><span>SEO</span> <br /><span>marketing</span></Link></h2>
                                    <p>Photography is more than just capturing images</p>
                                    <div className="btn-box">
                                        <Link href="/service-details" className="theme-btn border-btn">
                                            <div className="static-text"><span className="dot"></span><span>View details</span></div>
                                            <div className="overlay-text"><span className="dot"></span><span>View details</span></div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 service-block">
                            <div className="service-block-one reveal-me">
                                <div className="inner-box">
                                    <span className="count-text">02</span>
                                    <h2><Link href="/service-details"><span>Content</span> <br /><span>marketing</span></Link></h2>
                                    <p>Photography is more than just capturing images</p>
                                    <div className="btn-box">
                                        <Link href="/service-details" className="theme-btn border-btn">
                                            <div className="static-text"><span className="dot"></span><span>View details</span></div>
                                            <div className="overlay-text"><span className="dot"></span><span>View details</span></div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 service-block">
                            <div className="service-block-one reveal-me">
                                <div className="inner-box">
                                    <span className="count-text">03</span>
                                    <h2><Link href="/service-details"><span>Social</span> <br /><span>marketing</span></Link></h2>
                                    <p>Photography is more than just capturing images</p>
                                    <div className="btn-box">
                                        <Link href="/service-details" className="theme-btn border-btn">
                                            <div className="static-text"><span className="dot"></span><span>View details</span></div>
                                            <div className="overlay-text"><span className="dot"></span><span>View details</span></div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
