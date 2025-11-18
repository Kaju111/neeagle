
import Layout from "../../components/layout/Layout";
import Scroll_Text from "../../components/sections/home1/Scroll_Text";
import News from "../../components/sections/home2/News";
import About from "../../components/sections/home4/About";
import Banner from "../../components/sections/home4/Banner";
import Cta from "../../components/sections/home4/Cta";
import Portfolio from "../../components/sections/home4/Portfolio";
import Services from "../../components/sections/home4/Services";
import Team from "../../components/sections/home4/Team";
import Testimonial from "../../components/sections/home4/Testimonial";
export default function Home() {

    return (
        <div className="boxed_wrapper home_four">
            <Layout headerStyle={2} footerStyle={3}>
                <main className="main-content">
                    <Banner/>
                    <Scroll_Text/>
                    <About/>
                    <Services/>
                    <Portfolio/>
                    <Testimonial/>
                    <Team/>
                    <News/>
                    <Cta/>
                </main>
            </Layout>
        </div>
    )
}