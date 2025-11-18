

import Image from "next/image";
import Link from "next/link";
import Layout from "../../components/layout/Layout";
import Cta from "../../components/sections/home3/Cta";

// Related posts data
const relatedPosts = [
  { title: "Global trends that inspire bold ideas", category: "Innovation", img: "news-1.jpg", readTime: "5 min read", href: "/blog-details" },
  { title: "What moving the world & the brands within it", category: "Branding", img: "news-2.jpg", readTime: "5 min read", href: "/blog-details" },
  { title: "Insights & Innovation from across the globe", category: "Innovation", img: "news-3.jpg", readTime: "5 min read", href: "/blog-details" },
];

export default function Blog_Details_One() {
  return (
    <div className="boxed_wrapper inner_page">
      <Layout headerStyle={2} footerStyle={2}>
        <main className="main-content">

          {/* Page Title */}
          <section className="page-title p_relative centred pb_60">
            <div className="auto-container">
              <div className="content-box">
                <h3>Global trends that inspire bold ideas</h3>
                <Link href="/contact" className="theme-btn theme-bg">
                  <span className="static-text"><span className="dot"></span>Let&apos;s Contact</span>
                  <span className="overlay-text"><span className="dot"></span>Let&apos;s Contact</span>
                </Link>
              </div>
            </div>
          </section>

          {/* Blog Details Content */}
          <section className="blog-details pb_200">
            <div className="auto-container">
              <div className="blog-details-content p_relative d-block">
                
                <figure className="image mb_40">
                  <Image src="/assets/images/news/news-28.jpg" alt="Global trends" width={1290} height={726} priority />
                </figure>

                <p className="mb_30">
                  In today&apos;s hyper-connected world, bold marketing ideas aren&apos;t born in isolation — they&apos;re shaped by global cultural, technological, and consumer shifts. Staying ahead means paying attention to the trends influencing behavior, creativity, and innovation across borders. In this post, we explore key global trends that are sparking fresh, fearless marketing ideas and how your brand can harness them.
                </p>

                <h3 className="mb_16">Introduction</h3>
                <p className="mb_30">
                  Consumers now expect brands to stand for something. From sustainability to social justice, businesses that align with values are gaining deeper loyalty. Bold idea inspiration: Build campaigns that highlight your brand&apos;s mission or social impact in an authentic way. Think Patagonia or Dove&apos;s “Real Beauty” movement.
                </p>

                <h3 className="mb_16">Why is value driven content important?</h3>
                <ul className="list-item clearfix mb_40">
                  <li>1. Builds Trust and Authority: When you consistently provide valuable content, you position your brand as a trusted source of information.</li>
                  <li>2. Engages your Audience: Value-driven content captures the interest of your audience by addressing topics that matter to them.</li>
                  <li>3. Drives Conversions: Providing valuable content helps your audience make informed decisions.</li>
                </ul>

                <figure className="image mb_40">
                  <Image src="/assets/images/news/news-29.jpg" alt="AI and hyper personalization" width={1290} height={400} priority />
                </figure>

                <h3 className="mb_16">AI and Hyper Personalization</h3>
                <p className="mb_40">
                  AI is driving more than just automation — it&apos;s enabling deeply personalized user experiences. Bold idea inspiration: Use AI to create unique journeys for each customer — from email flows to tailored product recommendations and dynamic website content.
                </p>

                <div className="two-column">
                  <div className="row clearfix">
                    <div className="col-lg-6 col-md-6 col-sm-12 image-column">
                      <figure className="image mb_40">
                        <Image src="/assets/images/news/news-30.jpg" alt="Personalized marketing" width={630} height={400} priority />
                      </figure>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 image-column">
                      <figure className="image mb_40">
                        <Image src="/assets/images/news/news-31.jpg" alt="Global aesthetics" width={630} height={400} priority />
                      </figure>
                    </div>
                  </div>
                </div>

                <h3 className="mb_16">Cultural Mashups and Global Aesthetics</h3>
                <p className="mb_40">
                  With global access to content, trends now blend across borders. Consumers love brands that reflect a global mindset. Bold idea inspiration: Tap into cross-cultural design, music, fashion, and language to create bold, globally inspired campaigns.
                </p>

                <blockquote>
                  As data privacy regulations grow, trust becomes a differentiator. <br />
                  Bold idea inspiration: Be radically transparent. Make privacy part of your brand promise and use it to build customer confidence.
                </blockquote>

                <h3 className="mb_16">Conclusion</h3>
                <p>
                  The most compelling marketing ideas are rooted in a deep understanding of what&apos;s happening around the world — not just locally. By watching these global trends, your agency or brand can move beyond the expected and craft work that&apos;s not only relevant, but revolutionary.
                </p>

              </div>
            </div>
          </section>

          {/* Related Posts */}
          <section className="news-section p_relative pt_0 pb_70">
            <div className="auto-container">
              <div className="title-inner reveal-me mb_60">
                <div className="sec-title">
                  <div className="sub-title">Related Post</div>
                  <h2><span>Read more articles</span></h2>
                </div>
                <div className="btn-box">
                  <Link href="/blog" className="theme-btn border-btn">
                    <span className="static-text">View all</span>
                    <span className="overlay-text">View all</span>
                  </Link>
                </div>
              </div>

              <div className="row clearfix">
                {relatedPosts.map((post, idx) => (
                  <div key={idx} className="col-lg-4 col-md-6 col-sm-12 news-block">
                    <div className="news-block-one reveal-me">
                      <div className="inner-box">
                        <figure className="image-box">
                          <Link href={post.href}>
                            <Image src={`/assets/images/news/${post.img}`} alt={post.title} width={410} height={300} priority />
                          </Link>
                        </figure>
                        <div className="lower-content">
                          <ul className="post-info">
                            <li><span className="sub-title">{post.category}</span></li>
                            <li>{post.readTime}</li>
                          </ul>
                          <h3>
                            <Link href={post.href}>{post.title}</Link>
                          </h3>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
                          <div className="btn-box">
                            <Link href={post.href} className="theme-btn border-btn">
                              <span className="static-text">Read more <img src="assets/images/icons/icon-3.png" alt="" /></span>
                              <span className="overlay-text">Read more <img src="assets/images/icons/icon-26.png" alt="" /></span>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <Cta />

        </main>
      </Layout>
    </div>
  );
}
