import Image from "next/image";
import Link from "next/link";

export default function Portfolio() {
  return (
    <>
      <section className="portfolio-section portfolio">
        <div className="auto-container">
          <div className="sec-title reveal-me">
            <Link
              href="https://www.behance.net/bhaskardhapu1#"
              target="_blank"
              rel="noopener noreferrer"
              className="portfolio-link"
            >
              <div className="sub-title">
                <span className="link-icon">↗</span>
                <span>visit our portfolio</span>
              </div>
            </Link>
            <h2>
              <span>Our Work Speaks for Itself</span>
            </h2>
          </div>
        </div>
        <article className="inner-container portfolio-wrapper reveal-me">
          <div className="portfolio-block-one">
            <div className="inner-box">
              <figure className="image-box">
                <Image
                  src="/assets/images/portfolio/portfolio-1.jpg"
                  alt="Portfolio Image"
                  width={600}
                  height={600}
                  priority
                />
              </figure>
            </div>
          </div>
          <div className="portfolio-block-one">
            <div className="inner-box">
              <figure className="image-box">
                <Image
                  src="/assets/images/portfolio/portfolio-2.jpg"
                  alt="Portfolio Image"
                  width={600}
                  height={600}
                  priority
                />
              </figure>
            </div>
          </div>
          <div className="portfolio-block-one">
            <div className="inner-box">
              <figure className="image-box">
                <Image
                  src="/assets/images/portfolio/portfolio-3.jpg"
                  alt="Portfolio Image"
                  width={600}
                  height={600}
                  priority
                />
              </figure>
            </div>
          </div>
          <div className="portfolio-block-one">
            <div className="inner-box">
              <figure className="image-box">
                <Image
                  src="/assets/images/portfolio/portfolio-4.jpg"
                  alt="Portfolio Image"
                  width={600}
                  height={600}
                  priority
                />
              </figure>
            </div>
          </div>
        </article>
      </section>
    </>
  );
}
