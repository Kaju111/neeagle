import ScrollText from "../../../components/elements/ScrollText";

export default function About() {
  return (
    <>
      <section className="about-section about">
        <div className="auto-container">
          <div className="content-box reveal-me">
            <ScrollText>
              <div>
                <h2 className="reveal-text">
                  <p className="reveal-text-p">Trust</p> in vision
                </h2>

                <h2 className="reveal-text">
                  <p>Quality</p> in craft
                </h2>

                <h2 className="reveal-text">
                  <p>Clarity</p> in impact
                </h2>

                <br />
              </div>
            </ScrollText>
            <div className="author-box">
              <div className="author-info">
                <span className="designation">Current Location</span>
                <h2>North East, India</h2>
              </div>
              {/* <div className="btn-box">
                <Link href="/" className="theme-btn border-btn">
                  <div className="static-text">
                    <span>Read More</span>
                    <i className="icon-1"></i>
                  </div>
                  <div className="overlay-text">
                    <span>Read More</span>
                    <i className="icon-1"></i>
                  </div>
                </Link>
              </div> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
