"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 1,
  spaceBetween: 30,
  autoplay: { delay: 5000, disableOnInteraction: false },
  loop: true,
  pagination: { el: ".swiper-dots", clickable: true },
  navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },
  breakpoints: {
    320: { slidesPerView: 1 },
    575: { slidesPerView: 1 },
    767: { slidesPerView: 2 },
    991: { slidesPerView: 2 },
    1199: { slidesPerView: 3 },
    1350: { slidesPerView: 3 },
  },
};

const blogItems = [
  {
    image: "/assets/images/news/news-8.jpg",
    category: "Behind the Lens",
    readTime: "5 min read",
    title: "Why lighting makes all the difference — and how I chase the golden glow."
  },
  {
    image: "/assets/images/news/news-9.jpg",
    category: "Behind the Lens",
    readTime: "5 min read",
    title: "From Passion to Profession: My Photography Journey"
  },
  {
    image: "/assets/images/news/news-10.jpg",
    category: "Behind the Lens",
    readTime: "5 min read",
    title: "Top 10 Wedding Photography Shots Couples Always Love"
  },
  {
    image: "/assets/images/news/news-8.jpg",
    category: "Behind the Lens",
    readTime: "5 min read",
    title: "Why lighting makes all the difference — and how I chase the golden glow."
  },
  {
    image: "/assets/images/news/news-9.jpg",
    category: "Behind the Lens",
    readTime: "5 min read",
    title: "From Passion to Profession: My Photography Journey"
  },
  {
    image: "/assets/images/news/news-10.jpg",
    category: "Behind the Lens",
    readTime: "5 min read",
    title: "Top 10 Wedding Photography Shots Couples Always Love"
  },
];

export default function News() {
  return (
    <section className="news-section p_relative pt_200 pb_170">
      <div className="large-container">
        <div className="sec-title reveal-me">
          <div className="sub-title">Blog</div>
          <h2><span>Tips & Advice</span></h2>
        </div>
        <div className="inner-container p_relative">
          <Swiper {...swiperOptions} className="three-item-carousel">
            {blogItems.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="news-block-two">
                  <div className="inner-box">
                    <div className="image-box">
                      <figure className="image">
                        <Image src={item.image} alt={item.title} width={552} height={333} priority />
                      </figure>
                      <div className="link">
                        <Link href="/blog-details"><i className="icon-1"></i></Link>
                      </div>
                    </div>
                    <div className="lower-content">
                      <div className="post-info">
                        <span>{item.category}</span>
                        <span>{item.readTime}</span>
                      </div>
                      <h3><Link href="/blog-details">{item.title}</Link></h3>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Pagination & Navigation */}
          <div className="swiper-dots owl-dots"></div>
          <div className="nav-style-one">
            <div className="owl-nav">
              <button className="swiper-button-prev owl-prev"><span className="icon-7"></span></button>
              <button className="swiper-button-next owl-next"><span className="icon-8"></span></button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
