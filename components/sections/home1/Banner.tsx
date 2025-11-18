import Link from "next/link";

export default function Banner() {
  return (
    <>
      <section className="banner-section centred">
        <div className="auto-container">
          <div className="content-box">
            <div className="sub-title">
              <span>Available now</span>
            </div>
            <h2>Let’s fly into the boundless sky of creativity</h2>
            <p>Possibility begins where we create together</p>
            <div className="btn-box">
              <Link href="/" className="theme-btn theme-bg">
                <div className="static-text">
                  <i className="icon-1"></i>
                  <span>Contact us</span>
                </div>
                <div className="overlay-text">
                  <i className="icon-1"></i>
                  <span>Contact us</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
