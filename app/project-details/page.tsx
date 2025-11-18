
import Image from "next/image";
import Link from "next/link";
import Layout from "../../components/layout/Layout";
import Cta from "../../components/sections/home3/Cta";

export default function Project_Details() {
  const relatedProjects = [
    {
      id: 1,
      image: "/assets/images/portfolio/portfolio-23.jpg",
      title: "Launching a new product with email automation and lead nurturing",
      link: "/project-details",
    },
    {
      id: 2,
      image: "/assets/images/portfolio/portfolio-24.jpg",
      title: "Rebranding and digital strategy for a local business going global",
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
                <div className="sub-title">Project Details</div>
                <h2>Boosting Engagement</h2>
                <p className="mb_60 mt_90 fs_20 lh_30">
                  Discover how my passion for creativity and data-driven strategies has shaped
                  my career in digital marketing, leading
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

          {/* Portfolio Details */}
          <section className="portfolio-details p_relative pb_200">
            <div className="auto-container">
              <figure className="image-box mb_60">
                <Image
                  src="/assets/images/portfolio/portfolio-27.jpg"
                  alt="Boosting Engagement Project"
                  width={1291}
                  height={726}
                  priority
                />
              </figure>

              <div className="row clearfix">
                {/* Content Side */}
                <div className="col-lg-8 col-md-12 col-sm-12 content-side">
                  <div className="portfolio-details-content p_relative d_block mr_30">
                    <p className="mb_20">
                      Sit vulputate aliquam cras aliquam Et, nibh congue consequat
                      pellentesque Metus fermentum dui pellentesque morbi volutpat commodo
                      viverra. Feugiat nulla non mattis mi Bibendum diam tempus ultrices
                      ultricies viverra Feugiat placerat viverra tortor orci feugiat.
                    </p>

                    <figure className="image-box mb_20">
                      <Image
                        src="/assets/images/portfolio/portfolio-28.jpg"
                        alt="Project Details Image"
                        width={820}
                        height={389}
                        priority
                      />
                    </figure>

                    <p className="mb_40">
                      Cursus felis elit pulvinar aliquam ut laoreet nunc mattis sagittis urna
                      tristique diam at morbi vel eget arcu magna sit justo ornare a ante.
                      Eget turpis vitae ultrices quis eu adipiscing tincidunt sollicitudin
                      neque maecenas iaculis pellentesque libero pharetra nisl tellus sodales
                      egestas blandit.
                    </p>

                    <h3 className="mb_16">What we did</h3>
                    <ul className="list-item mb_40 clearfix">
                      <li>Sit vulputate aliquam cras aliquam. Et, nibh congue consequat pellentesque.</li>
                      <li>Vestibulum massa aliquet odio mauris duis amet. In sed dapibus porta est amet.</li>
                      <li>Urna augue arcu duis eget proin sed morbi. Purus sit nunc sodales aliquam.</li>
                      <li>Tortor tellus commodo volutpat sed morbi. Mi justo, proin volutpat turpis a et.</li>
                      <li>Ac ultrices sed odio fames dolor in eu. Augue tellus ac gravida nunc, ultrices lectus.</li>
                      <li>Sit vestibulum nullam neque nullam. Turpis integer viverra ornare commodo pellentesque est.</li>
                    </ul>

                    <div className="btn-box">
                      <Link href="/project-details" className="theme-btn theme-bg">
                        <div className="static-text">
                          <span className="dot"></span>
                          <span>View website</span>
                        </div>
                        <div className="overlay-text">
                          <span className="dot"></span>
                          <span>View website</span>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Sidebar */}
                <div className="col-lg-4 col-md-12 col-sm-12 sidebar-side">
                  <div className="portfolio-sidebar">
                    <p className="mb_16">A platform for people to exchange skills and services locally.</p>
                    <div className="row clearfix">
                      <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                        <div className="single-item">
                          <h3>Project</h3>
                          <p>Brooklyn Simmons</p>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                        <div className="single-item">
                          <h3>Tools</h3>
                          <p>Figma</p>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                        <div className="single-item">
                          <h3>Service</h3>
                          <p>Branding</p>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                        <div className="single-item">
                          <h3>Year</h3>
                          <p>2025</p>
                        </div>
                      </div>
                    </div>
                    <div className="btn-box">
                      <Link href="/project-details" className="theme-btn border-btn">
                        <div className="static-text">
                          <span className="dot"></span>
                          <span>View website</span>
                        </div>
                        <div className="overlay-text">
                          <span className="dot"></span>
                          <span>View website</span>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Related Projects */}
          <section className="portfolio-page-section p_relative pb_40">
            <div className="auto-container">
              <div className="sec-title">
                <div className="sub-title">Related</div>
                <h2>Similar Projects</h2>
              </div>
              <div className="row clearfix">
                {relatedProjects.map((project) => (
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

          <Cta />
        </main>
      </Layout>
    </div>
  );
}
