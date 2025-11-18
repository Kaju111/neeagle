

import Image from "next/image";
import Link from "next/link";

export default function Cta() {
    return (
        <> 

            <section className="cta-section home-5 p_relative centred pb_160">
                <div className="large-container">
                    <div className="content-box reveal-me">
                        <h2>Ready to Capture <br />Something Beautiful?</h2>
                        <div className="rotate-box">
                            <div className="link"><Link href="/contact"><i className="icon-1"></i></Link></div>
                            <div className='curve-text rotate-me'><Image src="/assets/images/icons/curve-text-2.png" alt="Text Image" width={206} height={206} priority /></div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
