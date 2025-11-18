
import Link from "next/link";
import Layout from "../../components/layout/Layout";
import Cta from "../../components/sections/home3/Cta";

export default function Error_Page() {
  return (
    <div className="boxed_wrapper inner_page">
      <Layout headerStyle={2} footerStyle={2}>
        <main className="main-content">
          <section className="error-section p_relative pb_100 centred">
            <div className="auto-container">
              <div className="content-box">
                <div className="sub-title">Error</div>
                <h1><span>404</span></h1>
                <h2><span>Oops... Something went wrong.</span></h2>
                <p>We can&apos;st find the page you&apos;sre looking for.</p>
                <Link href="/" className="theme-btn theme-bg">
                  <div className="static-text">
                    <span className="dot"></span>
                    <span>Go Back</span>
                  </div>
                  <div className="overlay-text">
                    <span className="dot"></span>
                    <span>Go Back</span>
                  </div>
                </Link>
              </div>
            </div>
          </section>
          <Cta />
        </main>
      </Layout>
    </div>
  );
}
