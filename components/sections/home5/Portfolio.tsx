"use client";

import dynamic from "next/dynamic";

// Dynamically import PortfolioFilter1 to avoid SSR issues
const PortfolioFilter1 = dynamic(() => import('../../elements/PortfolioFilter1'), { ssr: false });

export default function Portfolio() {
  return (
    <section className="portfolio-style-four p_relative pb_140">
      <div className="large-container">
        {/* Section Title */}
        <div className="sec-title reveal-me">
          <div className="sub-title">Gallery</div>
          <h2>
            <span>From Ordinary Days to </span>
            <br />
            <span>Unforgettable Visual Masterpieces</span>
          </h2>
        </div>
      </div>

      {/* Portfolio Filter & Grid */}
      <PortfolioFilter1 />
    </section>
  );
}
