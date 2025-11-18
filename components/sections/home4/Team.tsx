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
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  loop: true,
  pagination: {
    el: ".swiper-dots-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    320: { slidesPerView: 1 },
    575: { slidesPerView: 1 },
    767: { slidesPerView: 2 },
    991: { slidesPerView: 3 },
    1199: { slidesPerView: 3 },
    1350: { slidesPerView: 4 },
  },
};

const teamMembers = [
  {
    id: 1,
    name: "Bhaskar Dhapu",
    role: "Founder & Lead Graphic Designer",
    image: "/assets/images/team/Bhaskar.jpg",
  },
  {
    id: 2,
    name: "Anamika Deka",
    role: "Fashion Designer",
    image: "/assets/images/team/ANAMIKA.jpg",
  },
  {
    id: 3,
    name: "Marichi Dev Nath",
    role: "Marketing",
    image: "/assets/images/team/Marichi.jpg",
  },
  {
    id: 4,
    name: "Krishtina Das",
    role: "Social Media Manager",
    image: "/assets/images/team/Krishtina.jpg",
  },
  {
    id: 5,
    name: "Nangcheng Konwar",
    role: "Graphic Designer",
    image: "/assets/images/team/Nangcheng.jpg",
  },
  {
    id: 6,
    name: "Pallab Sharma",
    role: "Manager",
    image: "/assets/images/team/PallabSharma.jpg",
  },
  {
    id: 7,
    name: "Pinaki Goswami",
    role: "Conten Writer",
    image: "/assets/images/team/pinakigoswami.png",
  },
  {
    id: 8,
    name: "Bhargavi Khaund",
    role: "Seo and Content Writer",
    image: "/assets/images/team/bhargavikhaund.jpg",
  },
];

export default function Team() {
  return (
    <section className="team-style-two p_relative">
      <div className="outer-container pl_100 pr_100">
        <div className="sec-title reveal-me">
          <div className="sub-title">Team</div>
          <h2>
            <span>Our team</span>
          </h2>
        </div>

        <div className="slider-content p_relative">
          <Swiper {...swiperOptions} className="four-item-carousel">
            {teamMembers.map((member) => (
              <SwiperSlide key={member.id}>
                <div className="team-block-two">
                  <div className="inner-box">
                    <figure className="image-box">
                      <Link href="/team-details">
                        <Image
                          src={member.image}
                          alt={member.name}
                          width={400}
                          height={395}
                          priority
                        />
                      </Link>
                    </figure>
                    <div className="lower-content">
                      <h3>
                        <Link href="/team-details">{member.name}</Link>
                      </h3>
                      <span className="designation">{member.role}</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Pagination & Nav must be OUTSIDE Swiper */}
          <div className="swiper-dots-pagination dots-style-one"></div>
          <div className="owl-nav">
            <button className="swiper-button-prev owl-prev">
              <span className="icon-7"></span>
            </button>
            <button className="swiper-button-next owl-next">
              <span className="icon-8"></span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
