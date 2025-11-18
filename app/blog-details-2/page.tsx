

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

export default function Blog_Details_Two() {
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

          {/* Blog Content */}
          <section className="sidebar-page-container p_relative pb_70">
            <div className="auto-container">
              <div className="row clearfix">
                
                {/* Main Content */}
                <div className="col-lg-8 col-md-12 col-sm-12 content-side">
                  <div className="blog-details-content p_relative d-block">
                    <figure className="image mb_40">
                      <Image src="/assets/images/news/news-28.jpg" alt="Global trends" width={850} height={478} priority />
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
                      <Image src="/assets/images/news/news-32.jpg" alt="AI and hyper personalization" width={850} height={400} priority />
                    </figure>

                    <h3 className="mb_16">AI and Hyper Personalization</h3>
                    <p className="mb_40">
                      AI is driving more than just automation — it&apos;s enabling deeply personalized user experiences. Bold idea inspiration: Use AI to create unique journeys for each customer — from email flows to tailored product recommendations and dynamic website content.
                    </p>

                    <div className="two-column">
                      <div className="row clearfix">
                        <div className="col-lg-6 col-md-6 col-sm-12 image-column">
                          <figure className="image mb_40">
                            <Image src="/assets/images/news/news-33.jpg" alt="Personalized marketing" width={410} height={400} priority />
                          </figure>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 image-column">
                          <figure className="image mb_40">
                            <Image src="/assets/images/news/news-34.jpg" alt="Global aesthetics" width={410} height={400} priority />
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

                {/* Sidebar */}
                <div className="col-lg-4 col-md-12 col-sm-12 sidebar-side">
                  <div className="blog-sidebar ml_30">
                    
                    {/* Search Widget */}
                    <div className="search-widget sidebar-widget mb_40 reveal-me">
                      <div className="widget-title mb_16">
                        <h3>Search</h3>
                      </div>
                      <div className="search-inner">
                        <form action="/blog-2" method="get">
                          <div className="form-group">
                            <input type="search" name="search-field" placeholder="Enter your mail" required/>
                            <button type="submit"><i className="icon-10"></i></button>
                          </div>
                        </form>
                      </div>
                    </div>

                    {/* Categories Widget */}
                    <div className="sidebar-widget category-widget mb_40 reveal-me">
                      <div className="widget-title mb_16">
                        <h3>Categories</h3>
                      </div>
                      <ul className="category-list clearfix">
                        <li><Link href="/blog-details"><span>Marketing Automation</span><i className="icon-1"></i></Link></li>
                        <li><Link href="/blog-details"><span>Analytics</span><i className="icon-1"></i></Link></li>
                        <li><Link href="/blog-details"><span>Email Marketing</span><i className="icon-1"></i></Link></li>
                        <li><Link href="/blog-details"><span>Digital Strategy</span><i className="icon-1"></i></Link></li>
                        <li><Link href="/blog-details"><span>Brand Identity</span><i className="icon-1"></i></Link></li>
                      </ul>
                    </div>

                    {/* Latest Posts */}
                    <div className="sidebar-widget post-widget mb_40 reveal-me">
                      <div className="widget-title mb_16">
                        <h3>Latest News</h3>
                      </div>
                      <div className="post-inner">
                        {["post-1.jpg","post-2.jpg","post-3.jpg"].map((img, idx) => (
                          <article key={idx} className="post">
                            <figure className="image">
                              <Link href="/blog-details">
                                <Image src={`/assets/images/news/${img}`} alt="Post" width={90} height={90} priority />
                              </Link>
                            </figure>
                            <div className="text-box">
                              <h4><Link href="/blog-details">Sample post title {idx+1}</Link></h4>
                              <span className="post-date">December 20, 2024</span>
                            </div>
                          </article>
                        ))}
                      </div>
                    </div>

                    {/* Popular Tags */}
                    <div className="sidebar-widget tags-widget reveal-me">
                      <div className="widget-title mb_16">
                        <h3>Popular Tag</h3>
                      </div>
                      <ul className="tags-list clearfix">
                        {["Business","Design","UI/UX","Trends","Finance"].map((tag, idx) => (
                          <li key={idx}><Link href="/blog-details">{tag}</Link></li>
                        ))}
                      </ul>
                    </div>

                  </div>
                </div>

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
                          <h3><Link href={post.href}>{post.title}</Link></h3>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
                          <div className="btn-box">
                            <Link href={post.href} className="theme-btn border-btn">
                              <span className="static-text">Read more <i className="fas fa-angle-right"></i></span>
                              <span className="overlay-text">Read more <i className="fas fa-angle-right"></i></span>
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
