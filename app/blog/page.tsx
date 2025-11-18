

import Image from "next/image";
import Link from "next/link";
import Layout from "../../components/layout/Layout";
import Cta from "../../components/sections/home3/Cta";

const blogPosts = [
  { title: "Global trends that inspire bold ideas", category: "Innovation", img: "news-1.jpg", readTime: "5 min read", href: "/blog-details" },
  { title: "What moving the world & the brands within it", category: "Branding", img: "news-2.jpg", readTime: "5 min read", href: "/blog-details" },
  { title: "Insights & Innovation from across the globe", category: "Innovation", img: "news-3.jpg", readTime: "5 min read", href: "/blog-details" },
  { title: "Global news through a creative", category: "Category", img: "news-11.jpg", readTime: "5 min read", href: "/blog-details" },
  { title: "SEO & content marketing", category: "Keyword strategy", img: "news-12.jpg", readTime: "5 min read", href: "/blog-details" },
  { title: "Paid media & Advertising", category: "Google Ads", img: "news-13.jpg", readTime: "5 min read", href: "/blog-details" },
  { title: "Social Media Marketing", category: "Engagement", img: "news-14.jpg", readTime: "5 min read", href: "/blog-details" },
  { title: "Case Studies & Success Stories", category: "Campaign", img: "news-15.jpg", readTime: "5 min read", href: "/blog-details" },
  { title: "How to create content that ranks", category: "Ranks", img: "news-16.jpg", readTime: "5 min read", href: "/blog-details" },
  { title: "The secret to targeted traffic", category: "Keywords", img: "news-17.jpg", readTime: "5 min read", href: "/blog-details" },
  { title: "Pillar Pages vs. Blog Posts.", category: "Branding", img: "news-18.jpg", readTime: "5 min read", href: "/blog-details" },
  { title: "What to Do After the First Win", category: "Campaign", img: "news-19.jpg", readTime: "5 min read", href: "/blog-details" },
  // You can continue adding more posts here if needed
];

export default function Blog_Page_One() {
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

        {/* Blog Posts */}
        <section className="news-section blog-page p_relative pb_70">
          <div className="auto-container">
            <div className="row clearfix">
              {blogPosts.map((post, index) => (
                <div key={index} className="col-lg-4 col-md-6 col-sm-12 news-block">
                  <div className="news-block-one reveal-me">
                    <div className="inner-box">
                      <figure className="image-box">
                        <Link href={post.href}>
                          <Image
                            src={`/assets/images/news/${post.img}`}
                            alt={post.title}
                            width={410}
                            height={300}
                            loading={index < 3 ? "eager" : "lazy"} // prioritize first 3 images
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
        </section>

        {/* CTA Section */}
        <Cta />
      </main>
    </Layout>
  );
}
