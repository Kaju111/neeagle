

import Image from "next/image";
import Link from "next/link";

export default function Portfolio() {
    return (
        <> 

            <section className="portfolio-style-three p_relative pt_200 pb_140">
                <div className="auto-container">
                    <div className="sec-title reveal-me">
                        <div className="sub-title">Case studies</div>
                        <h2><span>Success stories that</span> <br /><span>speak for themselves</span></h2>
                    </div>
                    <div className="row clearfix">
                        <div className="col-lg-6 col-md-6 col-sm-12 portfolio-block">
                            <div className="portfolio-block-three reveal-me">
                                <div className="inner-box">
                                    <figure className="image-box"><Link href="/project-details"><Image src="/assets/images/portfolio/portfolio-9.jpg" alt="Portfolio Image" width={630} height={400} priority /></Link></figure>
                                    <div className="lower-content">
                                        <h2><Link href="/project-details"><span>Driving 3x ROI through a multi channel</span> <span>paid ad strategy</span></Link></h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 portfolio-block">
                            <div className="portfolio-block-three reveal-me">
                                <div className="inner-box">
                                    <figure className="image-box"><Link href="/project-details"><Image src="/assets/images/portfolio/portfolio-10.jpg" alt="Portfolio Image" width={630} height={400} priority /></Link></figure>
                                    <div className="lower-content">
                                        <h2><Link href="/project-details"><span>From zero to 10K organic visitors: SEO</span> <span>success for a niche blog</span></Link></h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 portfolio-block">
                            <div className="portfolio-block-three reveal-me">
                                <div className="inner-box">
                                    <figure className="image-box"><Link href="/project-details"><Image src="/assets/images/portfolio/portfolio-11.jpg" alt="Portfolio Image" width={630} height={400} priority /></Link></figure>
                                    <div className="lower-content">
                                        <h2><Link href="/project-details"><span>Boosting engagement by 250% with a</span> <span>social media revamp</span></Link></h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 portfolio-block">
                            <div className="portfolio-block-three reveal-me">
                                <div className="inner-box">
                                    <figure className="image-box"><Link href="/project-details"><Image src="/assets/images/portfolio/portfolio-12.jpg" alt="Portfolio Image" width={630} height={400} priority /></Link></figure>
                                    <div className="lower-content">
                                        <h2><Link href="/project-details"><span>Redesigning a brand&apos;s website for higher</span> <span>conversion rates</span></Link></h2>
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
