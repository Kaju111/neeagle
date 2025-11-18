"use client";
import React, { useState } from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Define types for testimonial
interface Testimonial {
  name: string;
  text: string;
}

// Define props interface
interface TestimonialCardProps {
  item: Testimonial;
}

const testimonials: Testimonial[] = [
  {
    name: "Urban Thread Boutique",
    text: "Working with upstyle was like having an in-house expert. Their vision elevated our spring collection dramatically. We couldn't be happier with the fabrics and fit.",
  },
  {
    name: "Tech-Forward Consultants",
    text: "They made our technical white papers readable! The NEEagle writing team is excellent at taking complex ideas and making them simple and compelling.",
  },
  {
    name: "Cedarwood",
    text: "Our recent digital ad campaign with NEEagle was a huge success. They nailed the copy and visuals, leading to our best click-through rate ever.",
  },
  {
    name: "Rhinohills Real Estate",
    text: "The business cards and brochures NEEagle designed are premium quality. We feel so much more confident handing them out. Attention to detail is amazing.",
  },
  {
    name: "G C Events",
    text: "We needed a large, urgent print run for a trade show. NEEagle handled the design and printing flawlessly. The flyers looked incredible.",
  },
  {
    name: "CutInd",
    text: "For our clothing ad, we needed models and specific designs. The collaboration between upstyle and the NEEagle shoot team was seamless. They provided the fashion design, content, and the final amazing ad. Nice team.",
  },
  {
    name: "Guardian Homes",
    text: "No outsourcing headache! NEEagle managed the location shoot, the graphics, and the final edit. It was a smooth, professional production from start to finish. They deliver what they promise.",
  },
];

const TestimonialCard: React.FC<TestimonialCardProps> = ({ item }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="testimonial-block-one">
      <div className="inner-box">
        <div className="testimonial-content">
          <div className="text">
            <p className={isExpanded ? "expanded" : "truncated"}>{item.text}</p>
            {item.text.length > 150 && (
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="read-more-btn"
              >
                {isExpanded ? "Read Less" : "Read More"}
              </button>
            )}
          </div>
          <div className="author-info">
            <h5>– {item.name}</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

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
          <div className="sub-title">
            <span>Testimonials</span>
          </div>
          <h2>
            <span>What startups say about us</span>
          </h2>
        </div>
      </div>

      <div className="outer-container p_relative pl_100 pr_100">
        <Swiper {...swiperOptions} className="testimonial-swiper">
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <TestimonialCard item={item} />
            </SwiperSlide>
          ))}

          {/* Navigation & Pagination */}
          <div className="nav-style-one z_5">
            <button className="swiper-button-prev">
              <span className="icon-7"></span>
            </button>
            <button className="swiper-button-next">
              <span className="icon-8"></span>
            </button>
          </div>
          <div className="swiper-pagination"></div>
        </Swiper>
      </div>
    </section>
  );
}
