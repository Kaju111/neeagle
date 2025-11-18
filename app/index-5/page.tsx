
import Layout from "../../components/layout/Layout";
import About from "../../components/sections/home5/About";
import Banner from "../../components/sections/home5/Banner";
import Cta from "../../components/sections/home5/Cta";
import News from "../../components/sections/home5/News";
import Portfolio from "../../components/sections/home5/Portfolio";
import Pricing from "../../components/sections/home5/Pricing";
import Service from "../../components/sections/home5/Service";
import Testimonial from "../../components/sections/home5/Testimonial";
export default function Home() {

    return (
        <div className="boxed_wrapper">
            <Layout headerStyle={2} footerStyle={1}>
                <main className="main-content">
                    <Banner/>
                    <About/>
                    <Service/>
                    <Pricing/>
                    <Portfolio/>
                    <Testimonial/>
                    <News/>
                    <Cta/>
                </main>
            </Layout>
        </div>
    )
}