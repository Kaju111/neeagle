"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const newsItems = [
  {
    id: 1,
    category: "Innovation",
    readTime: "5 min read",
    title: "Global trends that inspire bold ideas",
    image: "/assets/images/news/news-4.jpg",
    link: "/blog-details",
  },
  {
    id: 2,
    category: "Branding",
    readTime: "5 min read",
    title: "What moving the world & the brands...",
    image: "/assets/images/news/news-5.jpg",
    link: "/blog-details",
  },
  {
    id: 3,
    category: "Category",
    readTime: "5 min read",
    title: "Insights & Innovation from across the globe",
    image: "/assets/images/news/news-6.jpg",
    link: "/blog-details",
  },
  {
    id: 4,
    category: "Category",
    readTime: "5 min read",
    title: "Global news through a creative lens",
    image: "/assets/images/news/news-7.jpg",
    link: "/blog-details",
  },
];

export default function News() {
  const [activeIndex, setActiveIndex] = useState(1);

  return (
    <section className="news-section alternat-2 p_relative pt_100 pb_70">
      <div className="auto-container">
        {/* Section Header */}
        <div className="title-inner reveal-me mb_60">
          <div className="sec-title">
            <div className="sub-title">Blog</div>
            <h2>
              <span>Explore world latest news</span>
            </h2>
          </div>
          <div className="btn-box">
            <Link href="/blog" className="theme-btn border-btn">
              <div className="static-text">
                <span>View all</span>
              </div>
              <div className="overlay-text">
                <span>View all</span>
              </div>
            </Link>
          </div>
        </div>

        {/* News Items */}
        <div className="inner-container reveal-me">
          {newsItems.map((item, index) => (
            <div
              key={item.id}
              className={`news-block-one ${
                activeIndex === item.id ? "active" : ""
              }`}
              onMouseEnter={() => setActiveIndex(item.id)}
              aria-selected={activeIndex === item.id}
            >
              <div className="inner-box">
                <figure className="image-box">
                  <Link href={item.link}>
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={410}
                      height={300}
                      priority={index === 0} // only preload first image
                    />
                  </Link>
                </figure>
                <div className="lower-content">
                  <ul className="post-info">
                    <li>
                      <span className="sub-title">{item.category}</span>
                    </li>
                    <li>{item.readTime}</li>
                  </ul>
                  <h3>
                    <Link href={item.link}>{item.title}</Link>
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
