

import Image from "next/image";
import Link from "next/link";

export default function Award() {
    return (
        <> 

            <section className="award-section p_relative pb_200">
                <div className="auto-container">
                    <div className="inner-container reveal-me">
                        <div className="single-award-block">
                            <div className="row clearfix">
                                <div className="col-lg-6 col-md-12 col-sm-12 image-block">
                                    <figure className="image-box"><Link href="/index-3"><Image src="/assets/images/resource/award-1.jpg" alt="Award Image" width={562} height={235} priority /></Link></figure>
                                </div>
                                <div className="col-lg-6 col-md-12 col-sm-12 content-block">
                                    <div className="content-box">
                                        <figure className="award-image"><Image src="/assets/images/icons/award-1.png" alt="Award Image" width={135} height={40} priority /></figure>
                                        <figure className="award-image-overlay"><Image src="/assets/images/icons/award-4.png" alt="Award Image" width={135} height={40} priority /></figure>
                                        <p>Looking to elevate your brand design agency online? Meet Lumin Studio — a powerful CMS template for Framer and Webflow, crafted to showcase your creativity with style and precision. Let&apos;s create something truly distinctive together.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="single-award-block">
                            <div className="row clearfix">
                                <div className="col-lg-6 col-md-12 col-sm-12 image-block">
                                    <figure className="image-box"><Link href="/index-3"><Image src="/assets/images/resource/award-2.jpg" alt="Award Image" width={562} height={235} priority /></Link></figure>
                                </div>
                                <div className="col-lg-6 col-md-12 col-sm-12 content-block">
                                    <div className="content-box">
                                        <figure className="award-image"><Image src="/assets/images/icons/award-2.png" alt="Award Image" width={262} height={39} priority /></figure>
                                        <figure className="award-image-overlay"><Image src="/assets/images/icons/award-5.png" alt="Award Image" width={262} height={39} priority /></figure>
                                        <p>Want to pump up your brand design agency online? Introducing Lumin Studio, a Framer & Webflow template (CMS) that will offer a matchless solution to represent your creativity seamlessly. Let&apos;s design something different together!</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="single-award-block">
                            <div className="row clearfix">
                                <div className="col-lg-6 col-md-12 col-sm-12 image-block">
                                    <figure className="image-box"><Link href="/index-3"><Image src="/assets/images/resource/award-3.jpg" alt="Award Image" width={562} height={514} priority /></Link></figure>
                                </div>
                                <div className="col-lg-6 col-md-12 col-sm-12 content-block">
                                    <div className="content-box">
                                        <figure className="award-image"><Image src="/assets/images/icons/award-3.png" alt="Award Image" width={253} height={40} priority /></figure>
                                        <figure className="award-image-overlay"><Image src="/assets/images/icons/award-6.png" alt="Award Image" width={253} height={40} priority /></figure>
                                        <p>Your creativity deserves a stage. Lumin Studio is a bold CMS template for Framer and Webflow, crafted for agencies ready to challenge the ordinary. Let&apos;s design something unforgettable.</p>
                                        <ul className="feature-list mt_30 clearfix">
                                            <li><span>Client</span><span>CSS Design Awards</span></li>
                                            <li><span>Role</span><span>UI/UX Brading</span></li>
                                            <li><span>Date</span><span>14.04.2025</span></li>
                                            <li><span>Client rating</span><span>4.9/5</span></li>
                                        </ul>
                                        <ul className="links-list mt_40 mb_16">
                                            <li><Link href="/index-3">Web Design</Link></li>
                                            <li><Link href="/index-3">UI/UX</Link></li>
                                            <li><Link href="/index-3">Motion</Link></li>
                                        </ul>
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
