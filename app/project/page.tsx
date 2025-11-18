
import Image from "next/image";
import Link from "next/link";
import Layout from "../../components/layout/Layout";
import Testimonial from "../../components/sections/home3/Testimonial";
import Cta from "../../components/sections/home3/Cta";

export default function Project_Page() {
  const projects = [
    {
      id: 1,
      image: "/assets/images/portfolio/portfolio-19.jpg",
      title: "Driving 3x ROI through a multi-channel paid ad strategy",
      link: "/project-details",
    },
    {
      id: 2,
      image: "/assets/images/portfolio/portfolio-20.jpg",
      title: "From zero to 10K organic visitors: SEO success for a niche blog",
      link: "/project-details",
    },
    {
      id: 3,
      image: "/assets/images/portfolio/portfolio-21.jpg",
      title: "Boosting engagement by 250% with a social media revamp",
      link: "/project-details",
    },
    {
      id: 4,
      image: "/assets/images/portfolio/portfolio-22.jpg",
      title: "Redesigning a brand website for higher conversion rates",
      link: "/project-details",
    },
    {
      id: 5,
      image: "/assets/images/portfolio/portfolio-23.jpg",
      title: "Launching a new product with email automation and lead nurturing",
      link: "/project-details",
    },
    {
      id: 6,
      image: "/assets/images/portfolio/portfolio-24.jpg",
      title: "Driving 3x ROI through a multi-channel paid ad strategy",
      link: "/project-details",
    },
    {
      id: 7,
      image: "/assets/images/portfolio/portfolio-25.jpg",
      title: "Rebranding and digital strategy for a local business going global",
      link: "/project-details",
    },
    {
      id: 8,
      image: "/assets/images/portfolio/portfolio-26.jpg",
      title: "Building an influencer campaign that delivered $50K in sales in 30 days",
      link: "/project-details",
    },
  ];

  return (
    <div className="boxed_wrapper inner_page">
      <Layout headerStyle={2} footerStyle={2}>
        <main className="main-content">
          {/* Page Title */}
          <section className="page-title p_relative centred pb_60">
            <div className="auto-container">
              <div className="content-box">
                <div className="sub-title">Projects</div>
                <h1 className="mt_50">
                  <span>Recent</span>
                  <br />
                  <span>Projects</span>
                </h1>
                <p className="mb_60 mt_90 fs_20 lh_30">
                  Discover how my passion for creativity and data-driven strategies has
                  shaped my career in digital marketing, leading
                  <br />
                  to innovative campaigns that engage audiences and drive measurable results.
                </p>
                <Link href="/contact" className="theme-btn theme-bg">
                  <div className="static-text">
                    <span className="dot"></span>
                    <span>Let&apos; Contact</span>
                  </div>
                  <div className="overlay-text">
                    <span className="dot"></span>
                    <span>Let&apos; Contact</span>
                  </div>
                </Link>
              </div>
            </div>
          </section>

          {/* Portfolio Projects */}
          <section className="portfolio-page-section p_relative pb_140">
            <div className="auto-container">
              <div className="row clearfix">
                {projects.map((project) => (
                  <div key={project.id} className="col-lg-6 col-md-6 col-sm-12 portfolio-block">
                    <div className="portfolio-block-one">
                      <div className="inner-box">
                        <figure className="image-box">
                          <Link href={project.link}>
                            <Image
                              src={project.image}
                              alt={project.title}
                              width={630}
                              height={400}
                              priority
                            />
                          </Link>
                        </figure>
                        <div className="lower-content">
                          <h3>
                            <Link href={project.link}>{project.title}</Link>
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <Testimonial />
          <Cta />
        </main>
      </Layout>
    </div>
  );
}
