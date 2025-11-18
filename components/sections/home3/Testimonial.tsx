"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

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
};

const testimonials = [
    {
        id: 1,
        text: "The team completely transformed our brand. From visuals to messaging, everything finally feels aligned. We've never felt more confident sharing our story.",
        name: "Elena M",
        image: "/assets/images/resource/testimonial-13.png",
        socialLinks: ["/index-3", "/index-3", "/index-3"],
        socialIcons: ["icon-4", "icon-5", "icon-9"],
    },
    {
        id: 2,
        text: "Working with this team was a game-changer. Their creativity and attention to detail exceeded our expectations.",
        name: "John D",
        image: "/assets/images/resource/testimonial-14.png",
        socialLinks: ["/index-3", "/index-3", "/index-3"],
        socialIcons: ["icon-4", "icon-5", "icon-9"],
    },
    {
        id: 3,
        text: "Our brand story has never been clearer or more impactful. The team helped us connect with our audience authentically.",
        name: "Sophia K",
        image: "/assets/images/resource/testimonial-15.png",
        socialLinks: ["/index-3", "/index-3", "/index-3"],
        socialIcons: ["icon-4", "icon-5", "icon-9"],
    },
];

export default function Testimonial() {
    return (
        <section className="testimonial-style-three centred p_relative pb_100">
            <div className="auto-container">
                <div className="sec-title reveal-me">
                    <div className="sub-title">Testimonials</div>
                    <h2>
                        <span>Love From Our User</span>
                    </h2>
                </div>
                <div className="inner-container">
                    <Swiper {...swiperOptions} className="single-item-carousel">
                        {testimonials.map((t) => (
                            <SwiperSlide key={t.id}>
                                <div className="testimonial-content">
                                    <p>{t.text}</p>
                                    <figure className="testimonial-image">
                                        <Image
                                            src={t.image}
                                            alt={`${t.name} Testimonial`}
                                            width={70}
                                            height={70}
                                            priority={t.id === 1}
                                        />
                                    </figure>
                                    <h5>{t.name}</h5>
                                    <ul className="social-links">
                                        {t.socialLinks.map((link, i) => (
                                            <li key={i}>
                                                <Link href={link}>
                                                    <i className={t.socialIcons[i]}></i>
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </SwiperSlide>
                        ))}

                        <div className="nav-style-one z_5">
                            <div className="owl-nav">
                                <button className="swiper-button-prev owl-prev">
                                    <span className="icon-7"></span>
                                </button>
                                <button className="swiper-button-next owl-next">
                                    <span className="icon-8"></span>
                                </button>
                            </div>
                        </div>
                    </Swiper>
                </div>
            </div>
        </section>
    );
}
