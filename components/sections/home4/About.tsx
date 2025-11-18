

import Image from "next/image";
import CounterUp from "../../elements/CounterUp";

export default function About() {
    return (
        <> 

            <section className="about-style-four p_relative pt_200 pb_180">
                <div className="auto-container">
                    <div className="block-one">
                        <div className="row clearfix">
                            <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                                <div className="content-box reveal-me">
                                    <div className="sec-title">
                                        <div className="sub-title">ABOUT US</div>
                                        <h2><span>Who we are</span></h2>
                                    </div>
                                    <p>At DigiMark, we combine expertise, creativity, and data-driven strategies to transform your digital presence into a powerful business asset.</p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                                <div className="image-box reveal-me">
                                    <figure className="image"><Image src="/assets/images/resource/about-4.jpg" alt="About Image" width={630} height={290} priority /></figure>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="block-two pb_40 mb_50">
                        <div className="row clearfix">
                            <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                                <div className="image-box reveal-me">
                                    <figure className="image"><Image src="/assets/images/resource/about-5.jpg" alt="About Image" width={630} height={350} priority /></figure>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                                <div className="content-box reveal-me">
                                    <div className="fact-box pt_70">
                                        <div className="row clearfix">
                                            <div className="col-lg-6 col-md-6 col-sm-12 fact-column">
                                                <div className="fact-block-one">
                                                    <div className="count-outer">
                                                        <span className="odometer"><CounterUp end={110} /></span><span>+</span>
                                                    </div>
                                                    <p>Successful Campaigns Delivered</p>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-12 fact-column">
                                                <div className="fact-block-one">
                                                    <div className="count-outer">
                                                        <span className="odometer"><CounterUp end={10} /></span><span>+</span>
                                                    </div>
                                                    <p>Client Satisfaction Rate</p>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-12 fact-column">
                                                <div className="fact-block-one">
                                                    <div className="count-outer">
                                                        <span className="odometer"><CounterUp end={60} /></span><span>+</span>
                                                    </div>
                                                    <p>Industries Served Globally</p>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-12 fact-column">
                                                <div className="fact-block-one">
                                                    <div className="count-outer">
                                                        <span className="odometer"><CounterUp end={15} /></span><span>+</span>
                                                    </div>
                                                    <p>Average ROI Achieved</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="lower-box centred pb_20">
                        <div className="row clearfix">
                            <div className="col-lg-4 col-md-6 col-sm-12 single-column">
                                <div className="single-block reveal-me">
                                    <h2>Our Mission</h2>
                                    <p>To empower businesses with innovative digital marketing strategies that deliver measurable results, drive sustainable growth, and support long-term success on a global scale.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 single-column">
                                <div className="single-block reveal-me">
                                    <h2>Our Vision</h2>
                                    <p>Our vision is to be a leading global digital marketing agency that empowers brands through innovation or meaningful connections driving long term growth and success.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 single-column">
                                <div className="single-block reveal-me">
                                    <h2>Core Values</h2>
                                    <p>At our core, we value innovation, integrity, & collaboration. We&apos;re driven by results & delivering tailored strategies that foster real growth. Learning evolving digital landscape.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
