
import Layout from "../../components/layout/Layout";
import About from "../../components/sections/home3/About";
import Award from "../../components/sections/home3/Award";
import Banner from "../../components/sections/home3/Banner";
import Clients from "../../components/sections/home3/Clients";
import Cta from "../../components/sections/home3/Cta";
import Feature from "../../components/sections/home3/Feature";
import News from "../../components/sections/home3/News";
import Services from "../../components/sections/home3/Services";
import Testimonial from "../../components/sections/home3/Testimonial";
export default function Home() {

    return (
        <div className="boxed_wrapper home_three">
            <Layout headerStyle={2} footerStyle={2}>
                <main className="main-content">
                    <Banner/>
                    <About/>
                    <Services/>
                    <Feature/>
                    <Clients/>
                    <Award/>
                    <Testimonial/>
                    <News/>
                    <Cta/>
                </main>
            </Layout>
        </div>
    )
}