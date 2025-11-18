

import Image from "next/image";
import Link from "next/link";
import Layout from "../../components/layout/Layout";
import Cta from "../../components/sections/home3/Cta";

// Blog posts data
const blogPosts = [
  { title: "Global trends that inspire bold ideas", category: "Innovation", img: "news-1.jpg", readTime: "5 min read", href: "/blog-details" },
  { title: "What moving the world & the brands within it", category: "Branding", img: "news-2.jpg", readTime: "5 min read", href: "/blog-details" },
  { title: "Insights & Innovation from across the globe", category: "Innovation", img: "news-3.jpg", readTime: "5 min read", href: "/blog-details" },
  { title: "Global news through a creative", category: "Category", img: "news-11.jpg", readTime: "5 min read", href: "/blog-details" },
  { title: "SEO & content marketing", category: "Keyword strategy", img: "news-12.jpg", readTime: "5 min read", href: "/blog-details" },
  { title: "Paid media & Advertising", category: "Google Ads", img: "news-13.jpg", readTime: "5 min read", href: "/blog-details" },
  { title: "Social Media Marketing", category: "Engagement", img: "news-14.jpg", readTime: "5 min read", href: "/blog-details" },
  { title: "Case Studies & Success Stories", category: "Campaign", img: "news-15.jpg", readTime: "5 min read", href: "/blog-details" },
];

// Sidebar latest news data
const latestNews = [
  { title: "Laoreet ipsum augue eget egestas...", img: "post-1.jpg", date: "December 20, 2024", href: "/blog-details" },
  { title: "Always ready to solve all your problems.", img: "post-2.jpg", date: "December 20, 2024", href: "/blog-details" },
  { title: "Dangers of a traditional for your career goal", img: "post-3.jpg", date: "December 20, 2024", href: "/blog-details" },
];

// Sidebar categories
const categories = ["Marketing Automation", "Analytics", "Email Marketing", "Digital Strategy", "Brand Identity"];

// Sidebar tags
const tags = ["Business", "Design", "UI/UX", "Trends", "Finance"];

export default function Blog_Page_Two() {
  return (
    <Layout headerStyle={2} footerStyle={2} wrapperCls="boxed_wrapper inner_page">
      <main className="main-content">

        {/* Page Title */}
        <section className="page-title p_relative centred pb_60">
          <div className="auto-container">
            <div className="content-box">
              <div className="sub-title">Blog</div>
              <h2>Latest Articles</h2>
              <Link href="/contact" className="theme-btn theme-bg">
                <span className="static-text"><span className="dot"></span>Let&apos;s Contact</span>
                <span className="overlay-text"><span className="dot"></span>Let&apos;s Contact</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Blog + Sidebar */}
        <section className="sidebar-page-container p_relative pb_70">
          <div className="auto-container">
            <div className="row clearfix">
              {/* Blog Content */}
              <div className="col-lg-8 col-md-12 col-sm-12 content-side">
                <div className="blog-grid-content">
                  <div className="row clearfix">
                    {blogPosts.map((post, idx) => (
                      <div key={idx} className="col-lg-6 col-md-6 col-sm-12 news-block">
                        <div className="news-block-one reveal-me">
                          <div className="inner-box">
                            <figure className="image-box">
                              <Link href={post.href}>
                                <Image
                                  src={`/assets/images/news/${post.img}`}
                                  alt={post.title}
                                  width={410}
                                  height={300}
                                  loading={idx < 2 ? "eager" : "lazy"}
                                />
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
              </div>

              {/* Sidebar */}
              <div className="col-lg-4 col-md-12 col-sm-12 sidebar-side">
                <div className="blog-sidebar ml_30">

                  {/* Search Widget */}
                  <div className="search-widget sidebar-widget mb_40 reveal-me">
                    <div className="widget-title mb_16"><h3>Search</h3></div>
                    <div className="search-inner">
                      <form action="/blog-2" method="get">
                        <div className="form-group">
                          <input type="search" name="search-field" placeholder="Enter your mail" required />
                          <button type="submit"><i className="icon-10"></i></button>
                        </div>
                      </form>
                    </div>
                  </div>

                  {/* Categories Widget */}
                  <div className="sidebar-widget category-widget mb_40 reveal-me">
                    <div className="widget-title mb_16"><h3>Categories</h3></div>
                    <div className="widget-content">
                      <ul className="category-list clearfix">
                        {categories.map((cat, idx) => (
                          <li key={idx}><Link href="/blog-details"><span>{cat}</span><i className="icon-1"></i></Link></li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Latest News Widget */}
                  <div className="sidebar-widget post-widget mb_40 reveal-me">
                    <div className="widget-title mb_16"><h3>Latest News</h3></div>
                    <div className="post-inner">
                      {latestNews.map((post, idx) => (
                        <article key={idx} className="post">
                          <figure className="image">
                            <Link href={post.href}>
                              <Image src={`/assets/images/news/${post.img}`} alt={post.title} width={90} height={90} priority />
                            </Link>
                          </figure>
                          <div className="text-box">
                            <h4><Link href={post.href}>{post.title}</Link></h4>
                            <span className="post-date">{post.date}</span>
                          </div>
                        </article>
                      ))}
                    </div>
                  </div>

                  {/* Tags Widget */}
                  <div className="sidebar-widget tags-widget reveal-me">
                    <div className="widget-title mb_16"><h3>Popular Tag</h3></div>
                    <div className="widget-content">
                      <ul className="tags-list clearfix">
                        {tags.map((tag, idx) => (
                          <li key={idx}><Link href="/blog-details">{tag}</Link></li>
                        ))}
                      </ul>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </section>

        {/* CTA Section */}
        <Cta />

      </main>
    </Layout>
  );
}
