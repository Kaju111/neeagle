"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

const swiperOptions = {
  modules: [Autoplay, Pagination],
  slidesPerView: 1,
  spaceBetween: 30,
  autoplay: { delay: 5000, disableOnInteraction: false },
  loop: true,
  pagination: { el: ".swiper-dots-pagination", clickable: true },
  breakpoints: {
    320: { slidesPerView: 1 },
    575: { slidesPerView: 1 },
    767: { slidesPerView: 1 },
    991: { slidesPerView: 1 },
    1199: { slidesPerView: 2 },
    1350: { slidesPerView: 2 },
  },
};

const services = [
  {
    id: "01",
    image: "/assets/images/resource/testimonial-24.png",
    title: "Weddings & Engagements",
    description:
      "Elegant storytelling for your most cherished day. From intimate elopements to grand celebrations, I capture every emotion, detail, and in-between moment so you can relive your day for years to come.",
  },
  {
    id: "02",
    image: "/assets/images/resource/testimonial-25.png",
    title: "Events & Corporate",
    description:
      "Professional photography for impactful moments. From corporate events and product launches to conferences and galas — I provide discreet, high-quality coverage that reflects your brand.",
  },
  {
    id: "03",
    image: "/assets/images/resource/testimonial-26.png",
    title: "Portraits & Lifestyle",
    description:
      "Natural, timeless portraits that reflect the real you. Whether it a personal portrait, family session, or lifestyle shoot, I aim to make you feel comfortable and confident in front of the camera.",
  },
  {
    id: "04",
    image: "/assets/images/resource/testimonial-27.png",
    title: "Product & Branding",
    description:
      "Elevate your brand with stunning visuals. Stand out online with creative, clean, and compelling product photos and branded content tailored for websites, catalogs, and social media.",
  },
];

export default function Service() {
  return (
    <section className="service-style-five p_relative">
      <div className="outer-container">
        <div className="sec-title pl_100 pr_100 reveal-me">
          <div className="sub-title">Services</div>
          <h2><span>Creative Photography</span></h2>
        </div>
        <div className="slider-content p_relative l_100 reveal-me">
          <Swiper {...swiperOptions} className="two-item-carousel">
            {services.map((service) => (
              <SwiperSlide key={service.id}>
                <div className="service-block-three">
                  <div className="row align-items-center">
                    <div className="col-lg-6 col-md-6 col-sm-12 image-column">
                      <figure className="image">
                        <Link href="/service-details">
                          <Image
                            src={service.image}
                            alt={service.title}
                            width={470}
                            height={535}
                            priority
                          />
                        </Link>
                      </figure>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 content-column">
                      <div className="content-box">
                        <span className="count-text">{service.id}</span>
                        <h2>
                          <Link href="/service-details">
                            <span>{service.title.split(" & ")[0]} &</span> <br />
                            <span>{service.title.split(" & ")[1]}</span>
                          </Link>
                        </h2>
                        <p>{service.description}</p>
                        <div className="btn-box">
                          <Link href="/service-details" className="theme-btn border-btn">
                            <div className="static-text">
                              <span className="dot"></span>
                              <span>View details</span>
                            </div>
                            <div className="overlay-text">
                              <span className="dot"></span>
                              <span>View details</span>
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
            <div className="swiper-dots-pagination owl-dots"></div>
          </Swiper>
        </div>
      </div>
    </section>
  );
}
