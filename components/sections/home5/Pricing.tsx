

import Image from "next/image";
import Link from "next/link";

export default function Pricing() {
    return (
        <> 

            <section className="pricing-section p_relative pt_190 pb_170">
                <div className="large-container">
                    <div className="sec-title centred reveal-me">
                        <div className="sub-title">Pricing</div>
                        <h2><span>Flexible Pricing Plans</span><br /><span>Tailored to Your Needs</span></h2>
                    </div>
                    <div className="row clearfix">
                        <div className="col-lg-4 col-md-6 col-sm-12 pricing-block">
                            <div className="pricing-block-one reveal-me">
                                <div className="pricing-table">
                                    <div className="table-title">
                                        <h3>Starter Shoot</h3>
                                        <p>Perfect for individuals or small shoots</p>
                                    </div>
                                    <div className="table-header">
                                        <h2>$295/session</h2>
                                        <p>No subscription required</p>
                                        <Link href="/index-5" className="theme-btn border-btn">
                                            <div className="static-text">Book a Session</div>
                                            <div className="overlay-text">Book a Session</div>
                                        </Link>
                                    </div>
                                    <div className="table-content">
                                        <ul className="feature-list clearfix">
                                            <li><Image src="/assets/images/icons/icon-25.png" alt="Icon" width={20} height={20} priority /><span>1-hour on-location photoshoot</span></li>
                                            <li><Image src="/assets/images/icons/icon-25.png" alt="Icon" width={20} height={20} priority /><span>15 edited high-resolution photos</span></li>
                                            <li><Image src="/assets/images/icons/icon-25.png" alt="Icon" width={20} height={20} priority /><span>Online gallery for downloads</span></li>
                                            <li><Image src="/assets/images/icons/icon-25.png" alt="Icon" width={20} height={20} priority /><span>Personal usage rights</span></li>
                                            <li><Image src="/assets/images/icons/icon-25.png" alt="Icon" width={20} height={20} priority /><span>Optional add-ons available</span></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 pricing-block">
                            <div className="pricing-block-one reveal-me">
                                <div className="pricing-table">
                                    <div className="table-title">
                                        <h3>Signature Session</h3>
                                        <p>Ideal for couples, brands, or lifestyle sessions</p>
                                    </div>
                                    <div className="table-header">
                                        <h2>$495/session</h2>
                                        <p>Customized planning included</p>
                                        <Link href="/index-5" className="theme-btn border-btn">
                                            <div className="static-text">Book a Session</div>
                                            <div className="overlay-text">Book a Session</div>
                                        </Link>
                                    </div>
                                    <div className="table-content">
                                        <ul className="feature-list clearfix">
                                            <li><Image src="/assets/images/icons/icon-25.png" alt="Icon" width={20} height={20} priority /><span>2-hour photoshoot at one or two locations</span></li>
                                            <li><Image src="/assets/images/icons/icon-25.png" alt="Icon" width={20} height={20} priority /><span>30 professionally edited images</span></li>
                                            <li><Image src="/assets/images/icons/icon-25.png" alt="Icon" width={20} height={20} priority /><span>Style consultation (clothing & vibe)</span></li>
                                            <li><Image src="/assets/images/icons/icon-25.png" alt="Icon" width={20} height={20} priority /><span>Online gallery with download accesst</span></li>
                                            <li><Image src="/assets/images/icons/icon-25.png" alt="Icon" width={20} height={20} priority /><span>Light retouching included</span></li>
                                            <li><Image src="/assets/images/icons/icon-25.png" alt="Icon" width={20} height={20} priority /><span>Print release available</span></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 pricing-block">
                            <div className="pricing-block-one reveal-me">
                                <div className="pricing-table">
                                    <div className="table-title">
                                        <h3>Full Day Coverage</h3>
                                        <p>For weddings, events, or brand campaigns.</p>
                                    </div>
                                    <div className="table-header">
                                        <h2>$995/session</h2>
                                        <p>Pause or cancel anytime (if monthly)</p>
                                        <Link href="/index-5" className="theme-btn border-btn">
                                            <div className="static-text">Book a Session</div>
                                            <div className="overlay-text">Book a Session</div>
                                        </Link>
                                    </div>
                                    <div className="table-content">
                                        <ul className="feature-list clearfix">
                                            <li><Image src="/assets/images/icons/icon-25.png" alt="Icon" width={20} height={20} priority /><span>Event or product highlight reel (optional)</span></li>
                                            <li><Image src="/assets/images/icons/icon-25.png" alt="Icon" width={20} height={20} priority /><span>Up to 8 hours of coverage</span></li>
                                            <li><Image src="/assets/images/icons/icon-25.png" alt="Icon" width={20} height={20} priority /><span>100+ high-resolution edited photos</span></li>
                                            <li><Image src="/assets/images/icons/icon-25.png" alt="Icon" width={20} height={20} priority /><span>Sneak peek within 48 hours</span></li>
                                            <li><Image src="/assets/images/icons/icon-25.png" alt="Icon" width={20} height={20} priority /><span>Online gallery + USB delivery</span></li>
                                            <li><Image src="/assets/images/icons/icon-25.png" alt="Icon" width={20} height={20} priority /><span>Travel within [your city] included</span></li>
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
