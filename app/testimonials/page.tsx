import Link from "next/link";
import Layout from "../../components/layout/Layout";
import Cta from "../../components/sections/home3/Cta";

// Testimonials Data
const testimonials = [
  {
    name: "Urban Thread Boutique",
    text: "Working with upstyle was like having an in-house expert. Their vision elevated our spring collection dramatically. We couldn't be happier with the fabrics and fit.",
  },
  {
    name: "Tech-Forward Consultants",
    text: "They made our technical white papers readable! The NEEagle writing team is excellent at taking complex ideas and making them simple and compelling.",
  },
  {
    name: "Cedarwood",
    text: "Our recent digital ad campaign with NEEagle was a huge success. They nailed the copy and visuals, leading to our best click-through rate ever.",
  },
  {
    name: "Rhinohills Real Estate",
    text: "The business cards and brochures NEEagle designed are premium quality. We feel so much more confident handing them out. Attention to detail is amazing.",
  },
  {
    name: "G C Events",
    text: "We needed a large, urgent print run for a trade show. NEEagle handled the design and printing flawlessly. The flyers looked incredible.",
  },
  {
    name: "CutInd",
    text: "For our clothing ad, we needed models and specific designs. The collaboration between upstyle and the NEEagle shoot team was seamless. They provided the fashion design, content, and the final amazing ad. Nice team.",
  },
  {
    name: "Guardian Homes",
    text: "No outsourcing headache! NEEagle managed the location shoot, the graphics, and the final edit. It was a smooth, professional production from start to finish. They deliver what they promise.",
  },
];

export default function Testimonial_Page() {
  return (
    <div className="boxed_wrapper inner_page">
      <Layout headerStyle={2} footerStyle={2}>
        <main className="main-content">
          <section className="page-title p_relative centred pb_60">
            <div className="auto-container">
              <div className="content-box">
                <div className="sub-title">Testimonials</div>
                <h2>Client success stories</h2>
                <Link href="/contact" className="theme-btn theme-bg">
                  <div className="static-text">
                    <span className="dot"></span>
                    <span>Let&apos;s Contact</span>
                  </div>
                  <div className="overlay-text">
                    <span className="dot"></span>
                    <span>Let&apos;s Contact</span>
                  </div>
                </Link>
              </div>
            </div>
          </section>

          <section className="testimonial-style-two pb_170">
            <div className="auto-container">
              <div className="row clearfix">
                {/* Column 1 */}
                <div className="col-lg-3 col-md-6 col-sm-12 column">
                  <div className="marquee-block">
                    <div className="marquee-inner">
                      <div className="single">
                        <div className="testimonial-block-one">
                          <div className="inner-box">
                            <div className="text-box">
                              <p>&quot;{testimonials[0].text}&quot;</p>
                            </div>
                            <div className="author-info">
                              <h5>– {testimonials[0].name}</h5>
                            </div>
                          </div>
                        </div>
                        <div className="testimonial-block-one">
                          <div className="inner-box">
                            <div className="text-box">
                              <p>&quot;{testimonials[1].text}&quot;</p>
                            </div>
                            <div className="author-info">
                              <h5>– {testimonials[1].name}</h5>
                            </div>
                          </div>
                        </div>
                        <div className="testimonial-block-one">
                          <div className="inner-box">
                            <div className="text-box">
                              <p>&quot;{testimonials[0].text}&quot;</p>
                            </div>
                            <div className="author-info">
                              <h5>– {testimonials[0].name}</h5>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="single">
                        <div className="testimonial-block-one">
                          <div className="inner-box">
                            <div className="text-box">
                              <p>&quot;{testimonials[0].text}&quot;</p>
                            </div>
                            <div className="author-info">
                              <h5>– {testimonials[0].name}</h5>
                            </div>
                          </div>
                        </div>
                        <div className="testimonial-block-one">
                          <div className="inner-box">
                            <div className="text-box">
                              <p>&quot;{testimonials[1].text}&quot;</p>
                            </div>
                            <div className="author-info">
                              <h5>– {testimonials[1].name}</h5>
                            </div>
                          </div>
                        </div>
                        <div className="testimonial-block-one">
                          <div className="inner-box">
                            <div className="text-box">
                              <p>&quot;{testimonials[0].text}&quot;</p>
                            </div>
                            <div className="author-info">
                              <h5>– {testimonials[0].name}</h5>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Column 2 */}
                <div className="col-lg-3 col-md-6 col-sm-12 column">
                  <div className="marquee-block mt_95">
                    <div className="marquee-inner">
                      <div className="single">
                        <div className="testimonial-block-one">
                          <div className="inner-box">
                            <div className="text-box">
                              <p>&quot;{testimonials[2].text}&quot;</p>
                            </div>
                            <div className="author-info">
                              <h5>– {testimonials[2].name}</h5>
                            </div>
                          </div>
                        </div>
                        <div className="testimonial-block-one">
                          <div className="inner-box">
                            <div className="text-box">
                              <p>&quot;{testimonials[3].text}&quot;</p>
                            </div>
                            <div className="author-info">
                              <h5>– {testimonials[3].name}</h5>
                            </div>
                          </div>
                        </div>
                        <div className="testimonial-block-one">
                          <div className="inner-box">
                            <div className="text-box">
                              <p>&quot;{testimonials[2].text}&quot;</p>
                            </div>
                            <div className="author-info">
                              <h5>– {testimonials[2].name}</h5>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="single">
                        <div className="testimonial-block-one">
                          <div className="inner-box">
                            <div className="text-box">
                              <p>&quot;{testimonials[2].text}&quot;</p>
                            </div>
                            <div className="author-info">
                              <h5>– {testimonials[2].name}</h5>
                            </div>
                          </div>
                        </div>
                        <div className="testimonial-block-one">
                          <div className="inner-box">
                            <div className="text-box">
                              <p>&quot;{testimonials[3].text}&quot;</p>
                            </div>
                            <div className="author-info">
                              <h5>– {testimonials[3].name}</h5>
                            </div>
                          </div>
                        </div>
                        <div className="testimonial-block-one">
                          <div className="inner-box">
                            <div className="text-box">
                              <p>&quot;{testimonials[2].text}&quot;</p>
                            </div>
                            <div className="author-info">
                              <h5>– {testimonials[2].name}</h5>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Column 3 */}
                <div className="col-lg-3 col-md-6 col-sm-12 column">
                  <div className="marquee-block">
                    <div className="marquee-inner">
                      <div className="single">
                        <div className="testimonial-block-one">
                          <div className="inner-box">
                            <div className="text-box">
                              <p>&quot;{testimonials[4].text}&quot;</p>
                            </div>
                            <div className="author-info">
                              <h5>– {testimonials[4].name}</h5>
                            </div>
                          </div>
                        </div>
                        <div className="testimonial-block-one">
                          <div className="inner-box">
                            <div className="text-box">
                              <p>&quot;{testimonials[5].text}&quot;</p>
                            </div>
                            <div className="author-info">
                              <h5>– {testimonials[5].name}</h5>
                            </div>
                          </div>
                        </div>
                        <div className="testimonial-block-one">
                          <div className="inner-box">
                            <div className="text-box">
                              <p>&quot;{testimonials[4].text}&quot;</p>
                            </div>
                            <div className="author-info">
                              <h5>– {testimonials[4].name}</h5>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="single">
                        <div className="testimonial-block-one">
                          <div className="inner-box">
                            <div className="text-box">
                              <p>&quot;{testimonials[4].text}&quot;</p>
                            </div>
                            <div className="author-info">
                              <h5>– {testimonials[4].name}</h5>
                            </div>
                          </div>
                        </div>
                        <div className="testimonial-block-one">
                          <div className="inner-box">
                            <div className="text-box">
                              <p>&quot;{testimonials[5].text}&quot;</p>
                            </div>
                            <div className="author-info">
                              <h5>– {testimonials[5].name}</h5>
                            </div>
                          </div>
                        </div>
                        <div className="testimonial-block-one">
                          <div className="inner-box">
                            <div className="text-box">
                              <p>&quot;{testimonials[4].text}&quot;</p>
                            </div>
                            <div className="author-info">
                              <h5>– {testimonials[4].name}</h5>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Column 4 */}
                <div className="col-lg-3 col-md-6 col-sm-12 column">
                  <div className="marquee-block mt_95">
                    <div className="marquee-inner">
                      <div className="single">
                        <div className="testimonial-block-one">
                          <div className="inner-box">
                            <div className="text-box">
                              <p>&quot;{testimonials[6].text}&quot;</p>
                            </div>
                            <div className="author-info">
                              <h5>– {testimonials[6].name}</h5>
                            </div>
                          </div>
                        </div>
                        <div className="testimonial-block-one">
                          <div className="inner-box">
                            <div className="text-box">
                              <p>&quot;{testimonials[0].text}&quot;</p>
                            </div>
                            <div className="author-info">
                              <h5>– {testimonials[0].name}</h5>
                            </div>
                          </div>
                        </div>
                        <div className="testimonial-block-one">
                          <div className="inner-box">
                            <div className="text-box">
                              <p>&quot;{testimonials[6].text}&quot;</p>
                            </div>
                            <div className="author-info">
                              <h5>– {testimonials[6].name}</h5>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="single">
                        <div className="testimonial-block-one">
                          <div className="inner-box">
                            <div className="text-box">
                              <p>&quot;{testimonials[6].text}&quot;</p>
                            </div>
                            <div className="author-info">
                              <h5>– {testimonials[6].name}</h5>
                            </div>
                          </div>
                        </div>
                        <div className="testimonial-block-one">
                          <div className="inner-box">
                            <div className="text-box">
                              <p>&quot;{testimonials[0].text}&quot;</p>
                            </div>
                            <div className="author-info">
                              <h5>– {testimonials[0].name}</h5>
                            </div>
                          </div>
                        </div>
                        <div className="testimonial-block-one">
                          <div className="inner-box">
                            <div className="text-box">
                              <p>&quot;{testimonials[6].text}&quot;</p>
                            </div>
                            <div className="author-info">
                              <h5>– {testimonials[6].name}</h5>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <Cta />
        </main>
      </Layout>
    </div>
  );
}
