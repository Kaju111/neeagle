"use client";
import React from "react";
import Image from "next/image";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Albert Flores",
    designation: "Position, Company name",
    rating: "4.8",
    avatar: "/assets/images/resource/testimonial-1.png",
    text: "I used this website template for my business and I'm thrilled with the results. The responsive design made it easy to navigate.",
  },
  {
    name: "Cameron Williamson",
    designation: "Position, Company name",
    rating: "5.0",
    avatar: "/assets/images/resource/testimonial-2.png",
    text: "I used this website template for my business and I'm thrilled with the results. The responsive design made it easy to navigate.",
  },
  {
    name: "Jenny Wilson",
    designation: "Position, Company name",
    rating: "4.5",
    avatar: "/assets/images/resource/testimonial-3.png",
    text: "I used this website template for my business and I'm thrilled with the results. The responsive design made it easy to navigate.",
  },
  {
    name: "Guy Hawkins",
    designation: "Position, Company name",
    rating: "4.9",
    avatar: "/assets/images/resource/testimonial-4.png",
    text: "I used this website template for my business and I'm thrilled with the results. The responsive design made it easy to navigate.",
  },
  {
    name: "Albert Flores",
    designation: "Position, Company name",
    rating: "4.8",
    avatar: "/assets/images/resource/testimonial-1.png",
    text: "I used this website template for my business and I'm thrilled with the results. The responsive design made it easy to navigate.",
  },
  {
    name: "Cameron Williamson",
    designation: "Position, Company name",
    rating: "5.0",
    avatar: "/assets/images/resource/testimonial-2.png",
    text: "I used this website template for my business and I'm thrilled with the results. The responsive design made it easy to navigate.",
  },
  {
    name: "Jenny Wilson",
    designation: "Position, Company name",
    rating: "4.5",
    avatar: "/assets/images/resource/testimonial-3.png",
    text: "I used this website template for my business and I'm thrilled with the results. The responsive design made it easy to navigate.",
  },
  {
    name: "Guy Hawkins",
    designation: "Position, Company name",
    rating: "4.9",
    avatar: "/assets/images/resource/testimonial-4.png",
    text: "I used this website template for my business and I'm thrilled with the results. The responsive design made it easy to navigate.",
  },
];

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 1,
  spaceBetween: 30,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    500: { slidesPerView: 1 },
    767: { slidesPerView: 2 },
    991: { slidesPerView: 3 },
    1350: { slidesPerView: 4 },
  },
};

export default function Testimonial() {
  return (
    <section className="testimonial-section pt_200 pb_100">
      <div className="auto-container">
        <div className="sec-title reveal-me">
          <div className="sub-title"><span>Testimonials</span></div>
          <h2><span>What startups say about us</span></h2>
        </div>
      </div>

      <div className="outer-container p_relative pl_100 pr_100">
        <Swiper {...swiperOptions} className="testimonial-swiper">
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="testimonial-block-one">
                <div className="inner-box">
                  <div className="static-content">
                    <div className="text"><p>{item.text}</p></div>
                    <div className="author-box">
                      <figure className="thumb-box">
                        <Image src={item.avatar} alt={item.name} width={48} height={48} priority />
                      </figure>
                      <div className="author-info">
                        <h5>{item.name}</h5>
                        <span className="designation">{item.designation}</span>
                      </div>
                    </div>
                  </div>
                  <div className="overlay-content">
                    <h2>{item.rating}</h2>
                    <span>Client Review</span>
                    <ul className="image-list">
                      {[1,2,3,4].map((n) => (
                        <li key={n}>
                          <Image src={`/assets/images/resource/clients-${n}.png`} alt="Client" width={39} height={39} priority />
                        </li>
                      ))}
                    </ul>
                    <p>30k+ Our Trust clients Overall with better experience</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}

          {/* Navigation & Pagination */}
          <div className="nav-style-one z_5">
            <button className="swiper-button-prev"><span className="icon-7"></span></button>
            <button className="swiper-button-next"><span className="icon-8"></span></button>
          </div>
          <div className="swiper-pagination"></div>
        </Swiper>
      </div>
    </section>
  );
}
