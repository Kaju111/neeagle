"use client";
import Image from "next/image";
import Link from "next/link";
import Isotope from "isotope-layout";
import { useEffect, useRef, useState, useCallback } from "react";

interface PortfolioFilterProps {
  defaultFilter?: 1;
}

export default function PortfolioFilter1({}: PortfolioFilterProps) {
  const isotope = useRef<Isotope | null>(null);
  const [filterKey, setFilterKey] = useState("*");

  // Initialize Isotope
  useEffect(() => {
    const iso = new Isotope(".items-container", {
      itemSelector: ".masonry-item",
      percentPosition: true,
      masonry: { columnWidth: ".masonry-item" },
      transitionDuration: "0.75s",
    });
    isotope.current = iso;

    return () => iso.destroy();
  }, []);

  // Apply filter
  useEffect(() => {
    if (isotope.current) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: "*" })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);

  const handleFilterKeyChange = useCallback(
    (key: string) => () => setFilterKey(key),
    []
  );

  const activeBtn = (value: string) => (value === filterKey ? "filter active" : "filter");

  return (
    <div className="outer-container reveal-me">
      <div className="sortable-masonry">
        <ul className="filter-tabs filter-btns clearfix pl_100 pr_100 pb_30">
          <li className={activeBtn("*")} onClick={handleFilterKeyChange("*")}>
            All
          </li>
          <li className={activeBtn("cat-2")} onClick={handleFilterKeyChange("cat-2")}>
            Events
          </li>
          <li className={activeBtn("cat-3")} onClick={handleFilterKeyChange("cat-3")}>
            Portraits
          </li>
          <li className={activeBtn("cat-4")} onClick={handleFilterKeyChange("cat-4")}>
            Weddings
          </li>
          <li className={activeBtn("cat-5")} onClick={handleFilterKeyChange("cat-5")}>
            Travel/Landscape
          </li>
          <li className={activeBtn("cat-6")} onClick={handleFilterKeyChange("cat-6")}>
            Product & Branding
          </li>
        </ul>

        <div className="items-container row clearfix">
          {/* Example item */}
          <div className="col-lg-4 col-md-6 col-sm-12 masonry-item small-column cat-1 cat-2 cat-4 cat-6 cat-5">
            <div className="portfolio-block-four">
              <div className="inner-box">
                <figure className="image-box">
                  <Image
                    src="/assets/images/portfolio/portfolio-13.jpg"
                    alt="Portfolio Image"
                    width={617}
                    height={718}
                    priority
                  />
                </figure>
                <div className="content-box">
                  <h3>
                    <Link href="/project">
                      <span>View All photo</span> <i className="icon-8"></i>
                    </Link>
                  </h3>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-12 masonry-item small-column at-1 cat-3 cat-5 cat-2">
            <div className="portfolio-block-four">
              <div className="inner-box">
                <figure className="image-box">
                  <Image
                    src="/assets/images/portfolio/portfolio-14.jpg"
                    alt="Portfolio Image"
                    width={617}
                    height={718}
                    priority
                  />
                </figure>
                <div className="content-box">
                  <h3>
                    <Link href="/project">
                      <span>View All photo</span> <i className="icon-8"></i>
                    </Link>
                  </h3>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-12 masonry-item small-column cat-1 cat-2 cat-4 cat-5">
            <div className="portfolio-block-four">
              <div className="inner-box">
                <figure className="image-box">
                  <Image
                    src="/assets/images/portfolio/portfolio-15.jpg"
                    alt="Portfolio Image"
                    width={617}
                    height={718}
                    priority
                  />
                </figure>
                <div className="content-box">
                  <h3>
                    <Link href="/project">
                      <span>View All photo</span> <i className="icon-8"></i>
                    </Link>
                  </h3>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-12 masonry-item small-column cat-1 cat-3 cat-5 cat-4">
            <div className="portfolio-block-four">
              <div className="inner-box">
                <figure className="image-box">
                  <Image
                    src="/assets/images/portfolio/portfolio-16.jpg"
                    alt="Portfolio Image"
                    width={617}
                    height={718}
                    priority
                  />
                </figure>
                <div className="content-box">
                  <h3>
                    <Link href="/project">
                      <span>View All photo</span> <i className="icon-8"></i>
                    </Link>
                  </h3>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-12 masonry-item small-column cat-1 cat-2 cat-4 cat-6">
            <div className="portfolio-block-four">
              <div className="inner-box">
                <figure className="image-box">
                  <Image
                    src="/assets/images/portfolio/portfolio-17.jpg"
                    alt="Portfolio Image"
                    width={617}
                    height={718}
                    priority
                  />
                </figure>
                <div className="content-box">
                  <h3>
                    <Link href="/project">
                      <span>View All photo</span> <i className="icon-8"></i>
                    </Link>
                  </h3>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-12 masonry-item small-column cat-1 cat-3 cat-5 cat-2">
            <div className="portfolio-block-four">
              <div className="inner-box">
                <figure className="image-box">
                  <Image
                    src="/assets/images/portfolio/portfolio-18.jpg"
                    alt="Portfolio Image"
                    width={617}
                    height={718}
                    priority
                  />
                </figure>
                <div className="content-box">
                  <h3>
                    <Link href="/project">
                      <span>View All photo</span> <i className="icon-8"></i>
                    </Link>
                  </h3>
                </div>
              </div>
            </div>
          </div>

          {/* Repeat other items similarly */}
        </div>
      </div>
    </div>
  );
}
