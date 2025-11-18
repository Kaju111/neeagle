

import Image from "next/image";
import Link from "next/link";

export default function Feature() {
    return (
        <> 

            <section className="feature-section p_relative">
                <div className="auto-container">
                    <div className="row clearfix">
                        <div className="feature-block-one mb_100">
                            <div className="row clearfix">
                                <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                                    <div className="content-box reveal-me">
                                        <h2><span>Powering the</span> <br /><span>future of digital</span> <br /><span>success</span></h2>
                                        <p>Discover innovative strategies and tailored approaches that empower your brand to thrive in the ever-evolving digital landscape.</p>
                                        <ul className="list-item mb_40 clearfix">
                                            <li><Image src="/assets/images/icons/icon-25.png" alt="Icon" width={20} height={20} priority /><span>Targeted SEO strategies to boost visibility</span></li>
                                            <li><Image src="/assets/images/icons/icon-25.png" alt="Icon" width={20} height={20} priority /><span>Engaging content creation for audience connection</span></li>
                                            <li><Image src="/assets/images/icons/icon-25.png" alt="Icon" width={20} height={20} priority /><span>Data-driven PPC campaigns for maximum ROI</span></li>
                                        </ul>
                                        <div className="btn-box">
                                            <Link href="/contact" className="theme-btn theme-bg">
                                                <div className="static-text"><span className="dot"></span><span>Let&apos;s Contact</span></div>
                                                <div className="overlay-text"><span className="dot"></span><span>Let&apos;s Contact</span></div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                                    <div className="image-box reveal-me ml_30">
                                        <figure className="image"><Link href="/service-details"><Image src="/assets/images/resource/feature-1.jpg" alt="Feature Image" width={600} height={588} priority /></Link></figure>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="feature-block-one">
                            <div className="row clearfix">
                                <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                                    <div className="image-box reveal-me mr_30">
                                        <figure className="image"><Link href="/service-details"><Image src="/assets/images/resource/feature-2.jpg" alt="Feature Image" width={600} height={588} priority /></Link></figure>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                                    <div className="content-box reveal-me">
                                        <h2><span>Your partner on</span> <br /><span>the path to digital</span> <br /><span>growth</span></h2>
                                        <p>join us as we navigate the complexities of digital marketing together ,unlocking potential and achieving sutsainable success every step of the way</p>
                                        <ul className="list-item mb_40 clearfix">
                                            <li><Image src="/assets/images/icons/icon-25.png" alt="Icon" width={20} height={20} priority /><span>proven track record of measurable outcome</span></li>
                                            <li><Image src="/assets/images/icons/icon-25.png" alt="Icon" width={20} height={20} priority /><span>Transparent communication and collaborative approach</span></li>
                                            <li><Image src="/assets/images/icons/icon-25.png" alt="Icon" width={20} height={20} priority /><span>Customized solutions designed for your business needs</span></li>
                                        </ul>
                                        <div className="btn-box">
                                            <Link href="/contact" className="theme-btn theme-bg">
                                                <div className="static-text"><span className="dot"></span><span>Let&apos;s Contact</span></div>
                                                <div className="overlay-text"><span className="dot"></span><span>Let&apos;s Contact</span></div>
                                            </Link>
                                        </div>
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
