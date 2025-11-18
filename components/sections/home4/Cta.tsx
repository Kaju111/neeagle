

import Link from "next/link";

export default function Cta() {
    return (
        <> 

            <section className="cta-section alternat-2 p_relative centred pb_160">
                <div className="auto-container">
                    <div className="content-box reveal-me">
                        <div className="title-box">
                            <h2 className="align-1">LET&apos;S WORK</h2>
                            <div className="rotate-box">
                                <div className="link"><Link href="/contact"><i className="icon-1"></i></Link></div>
                                <div className='curve-text rotate-me'><img src="assets/images/icons/curve-text-1.png" alt=""/></div> 
                            </div>
                        </div>
                        <h2 className="align-3">TOGETHER</h2>
                    </div>
                </div>
            </section>

        </>
    )
}
