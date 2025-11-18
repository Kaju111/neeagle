

import Image from "next/image";
import Link from "next/link";

export default function Banner() {
    return (
        <> 

            <section className="banner-style-five p_relative centred">
                <div className="image-box">
                    <div className="row clearfix">
                        <div className="col-lg-3 col-md-6 col-sm-12 image-column">
                            <div className="marquee-block">
                                <div className="marquee-inner">
                                    <div className="single">
                                        <figure className="image mb_30"><Image src="/assets/images/resource/photo-1.jpg" alt="Slide Image" width={458} height={560} priority /></figure>
                                        <figure className="image mb_30"><Image src="/assets/images/resource/photo-2.jpg" alt="Slide Image" width={458} height={490} priority /></figure>
                                    </div>
                                    <div className="single">
                                        <figure className="image mb_30"><Image src="/assets/images/resource/photo-1.jpg" alt="Slide Image" width={458} height={560} priority /></figure>
                                        <figure className="image mb_30"><Image src="/assets/images/resource/photo-2.jpg" alt="Slide Image" width={458} height={490} priority /></figure>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 image-column">
                            <div className="marquee-block mt_110">
                                <div className="marquee-inner">
                                    <div className="single">
                                        <figure className="image mb_30"><Image src="/assets/images/resource/photo-3.jpg" alt="Slide Image" width={459} height={560} priority /></figure>
                                        <figure className="image mb_30"><Image src="/assets/images/resource/photo-4.jpg" alt="Slide Image" width={459} height={380} priority /></figure>
                                    </div>
                                    <div className="single">
                                        <figure className="image mb_30"><Image src="/assets/images/resource/photo-3.jpg" alt="Slide Image" width={459} height={560} priority /></figure>
                                        <figure className="image mb_30"><Image src="/assets/images/resource/photo-4.jpg" alt="Slide Image" width={459} height={380} priority /></figure>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 image-column">
                            <div className="marquee-block">
                                <div className="marquee-inner">
                                    <div className="single">
                                        <figure className="image mb_30"><Image src="/assets/images/resource/photo-5.jpg" alt="Slide Image" width={459} height={560} priority /></figure>
                                        <figure className="image mb_30"><Image src="/assets/images/resource/photo-6.jpg" alt="Slide Image" width={459} height={490} priority /></figure>
                                    </div>
                                    <div className="single">
                                        <figure className="image mb_30"><Image src="/assets/images/resource/photo-5.jpg" alt="Slide Image" width={459} height={560} priority /></figure>
                                        <figure className="image mb_30"><Image src="/assets/images/resource/photo-6.jpg" alt="Slide Image" width={459} height={490} priority /></figure>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 image-column">
                            <div className="marquee-block mt_90">
                                <div className="marquee-inner">
                                    <div className="single">
                                        <figure className="image mb_30"><Image src="/assets/images/resource/photo-7.jpg" alt="Slide Image" width={457} height={560} priority /></figure>
                                        <figure className="image mb_30"><Image src="/assets/images/resource/photo-8.jpg" alt="Slide Image" width={457} height={400} priority /></figure>
                                    </div>
                                    <div className="single">
                                        <figure className="image mb_30"><Image src="/assets/images/resource/photo-7.jpg" alt="Slide Image" width={457} height={560} priority /></figure>
                                        <figure className="image mb_30"><Image src="/assets/images/resource/photo-8.jpg" alt="Slide Image" width={457} height={400} priority /></figure>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="shape" style={{ backgroundImage: "url(assets/images/shape/shape-3.png)" }}></div>
                <div className="dark-shape" style={{ backgroundImage: "url(assets/images/shape/shape-4.png)" }}></div>
                <div className="auto-container">
                    <div className="content-box">
                        <h2>I&apos;m here to capture beautiful moments</h2>
                        <p>Explore the world through our lens as we transform landscapes into living canvases, each frame telling a story of movement and <br />emotion.Experience the dramatic interplay of light and darkness as we unveil stories through the artful mastery of chiaroscuro in photography.</p>
                        <div className="btn-box">
                            <Link href="/contact" className="theme-btn theme-bg">
                                <div className="static-text"><span className="dot"></span><span>Get Started</span></div>
                                <div className="overlay-text"><span className="dot"></span><span>Get Started</span></div>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
