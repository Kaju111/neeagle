

import Link from "next/link";

export default function Banner() {
    return (
        <> 

            <section className="banner-style-three centred">
                <div className="auto-container">
                    <div className="content-box">
                        <div className="sub-title">creative agency</div>
                        <div className="title-box clearfix">
                            <div className="title align-1"><span>Faster</span><h2>Digital</h2></div>
                            <div className="title align-3"><span>Strategic</span><h2>Strategist</h2></div>
                        </div>
                        <p>Partner with us to create impactful digital marketing strategies that resonate with your audience. Together, we&apos;ll boost your online presence <br />and deliver results that truly matter in a competitive digital world.</p>
                        <div className="btn-box">
                            <Link href="/contact" className="theme-btn theme-bg">
                                <div className="static-text"><span className="dot"></span><span>Let&apos;s Contact</span></div>
                                <div className="overlay-text"><span className="dot"></span><span>Let&apos;s Contact</span></div>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
