

import Link from "next/link";

export default function Cta() {
    return (
        <> 

            <section className="cta-section p_relative centred pt_100 pb_200">
                <div className="auto-container">
                    <div className="content-box reveal-me">
                        <h2>Let&apos;s Work Together</h2>
                        <Link href="/contact" className="theme-btn theme-bg">
                            <div className="static-text"><span className="dot"></span><span>Let&apos;s Contact</span></div>
                            <div className="overlay-text"><span className="dot"></span><span>Let&apos;s Contact</span></div>
                        </Link>
                    </div>
                </div>
            </section>

        </>
    )
}
