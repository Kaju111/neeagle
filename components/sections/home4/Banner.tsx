

import Link from "next/link";

export default function Banner() {
    return (
        <> 

            <section className="banner-style-four p_relative centred">
                <div className="auto-container">
                    <div className="content-box">
                        <div className="sub-title">We&apos;re Award winning</div>
                        <h2><span>Digital</span> <br />marketing agency</h2>
                        <p>Let&apos;s build impactful digital marketing strategies that connect your brand with the right audience. Together, we&apos;ll achieve measurable results <br />and elevate your online presence in today&apos;s dynamic digital landscape.</p>
                        <div className="btn-box">
                            <Link href="/contact" className="theme-btn theme-bg">
                                <div className="static-text"><span className="dot"></span><span>Let&apos;s Contact</span></div>
                                <div className="overlay-text"><span className="dot"></span><span>Let&apos;s Contact</span></div>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="bar-box">
                    <div className="bar bar-1"></div>
                    <div className="bar bar-2"></div>
                    <div className="bar bar-3"></div>
                    <div className="bar bar-4"></div>
                    <div className="bar bar-5"></div>
                    <div className="bar bar-6"></div>
                </div>
            </section>

        </>
    )
}
