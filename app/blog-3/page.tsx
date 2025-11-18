

import Image from "next/image";
import Link from "next/link";
import Layout from "../../components/layout/Layout";
import Cta from "../../components/sections/home3/Cta";

// Blog posts data
const blogPosts = [
  { title: "Global trends that inspire bold ideas", category: "Innovation", img: "news-20.jpg", readTime: "5 min read", href: "/blog-details" },
  { title: "What moving the world & the brands within it", category: "Branding", img: "news-21.jpg", readTime: "5 min read", href: "/blog-details" },
  { title: "Insights & Innovation from across the globe", category: "Technology", img: "news-22.jpg", readTime: "5 min read", href: "/blog-details" },
  { title: "Global news through a creative lens", category: "Category", img: "news-23.jpg", readTime: "5 min read", href: "/blog-details" },
];

export default function Blog_Page_Three() {
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
        <section className="news-section p_relative pb_70">
          <div className="auto-container">
            {blogPosts.map((post, idx) => (
              <div key={idx} className="news-block-one reveal-me">
                <div className="inner-box">
                  <figure className="image-box">
                    <Link href={post.href}>
                      <Image
                        src={`/assets/images/news/${post.img}`}
                        alt={post.title}
                        width={1290}
                        height={400}
                        loading={idx < 2 ? "eager" : "lazy"}
                        priority={idx < 2}
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
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <Cta />

      </main>
    </Layout>
  );
}
