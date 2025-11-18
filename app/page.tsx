import Layout from "../components/layout/Layout";
import About from "../components/sections/home1/About";
import Banner from "../components/sections/home1/Banner";
import Contact from "../components/sections/home1/Contact";
// import Faq from "../components/sections/home1/Faq";
import Portfolio from "../components/sections/home1/Portfolio";
import Scroll_Text from "../components/sections/home1/Scroll_Text";
import Service from "../components/sections/home1/Service";
import Testimonial from "../components/sections/home1/Testimonial";
import Video from "../components/sections/home1/Video";
export default function Home() {
  return (
    <div className="boxed_wrapper">
      <Layout headerStyle={1} footerStyle={1}>
        <main className="main-content">
          <Banner />
          <Video />
          <About />
          <Portfolio />
          <Service />
          <Scroll_Text />
          <Testimonial />
          {/* <Faq/> */}
          <Contact />
        </main>
      </Layout>
    </div>
  );
}
