import Link from "next/link";
import Layout from "../../components/layout/Layout";
import ScrollText from "../../components/elements/ScrollText";
import CounterUp from "../../components/elements/CounterUp";
import Scroll_Text from "../../components/sections/home1/Scroll_Text";
import Service from "../../components/sections/home1/Service";
import Team from "../../components/sections/home4/Team";

export default function About_Page() {
  const facts = [
    { value: 10, suffix: "K+", label: "Successful Projects" },
    { value: 300, suffix: "+", label: "Satisfied Client" },
    { value: 1, suffix: ".2K", label: "Brandings" },
    { value: 6, suffix: "+", label: "Years Experience" },
  ];

  return (
    <div className="boxed_wrapper inner_page">
      <Layout headerStyle={2} footerStyle={2}>
        <main className="main-content">
          {/* About Section */}
          <section className="about-style-six about p_relative pb_200">
            <div className="auto-container">
              <div className="inner-container">
                <div className="sec-title centred">
                  <div className="sub-title">About us</div>
                  <h2 className="clearfix">
                    <span className="pull-left">Our</span>
                    <br />
                    <span className="pull-right">Story</span>
                  </h2>
                </div>

                {/* Facts */}
                <div className="fact-box centred pb_40">
                  <div className="row clearfix">
                    {facts.map((fact, idx) => (
                      <div
                        className="col-lg-3 col-md-6 col-sm-12 fact-column"
                        key={idx}
                      >
                        <div className="fact-block-one">
                          <div className="count-outer">
                            {/* {fact.prefix && <span>{fact.prefix}</span>} */}
                            <span className="odometer">
                              <CounterUp end={fact.value} />
                            </span>
                            {fact.suffix && <span>{fact.suffix}</span>}
                          </div>
                          <p>{fact.label}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Scroll Text */}
                <div className="text-box">
                  <ScrollText>
                    <h2 className="reveal-text">
                      NEEAGLE Graphics bind by a vision to transform design into
                      a strength of clarity, emotion, and cultural pride. Over
                      six years, NEEAGLE gained the success to shape brands that
                      speak without words, delivering high-impact creative
                      solutions across social media, broadcast, print, OOH
                      advertising, and web design. <br /> <br /> At the heart of
                      NEEAGLE is Bhaskar Dhapu, a graphic designer from Assam,
                      Northeast India, with over seven years of experience in
                      the design industry. His journey spans full-time and
                      part-time roles across diverse companies, including
                      respected media houses like Prag News and Pride East
                      Entertainment. Bhaskar has contributed to numerous
                      Assamese music and film projects, bringing visual depth to
                      entertainment campaigns that resonate across the region.
                      As a freelancer, he has also collaborated with national
                      brands and international clients, channelling Northeast
                      creativity into global platforms. <br /> <br /> In our
                      sector of fashion design, our creative partner is Upstyle,
                      led by Anamika Deka, a talented fashion designer from
                      Assam. All fashion design works under the NEEAGLE banner
                      are crafted through her vision, adding elegance and
                      cultural nuance to our multidisciplinary portfolio. <br />
                      <br /> For our content and SEO initiatives, we have with
                      us Bhargobi Khaund, a creative head whose compelling
                      writing has enriched numerous freelancing projects. With
                      professional experience as a journalist in leading media
                      houses such as Prag News and Pride East Entertainment, she
                      brings depth, clarity, and precision to every piece she
                      <br /> <br /> Currently, Bhargobi is working under the
                      Skill India projects, where she oversees SEO strategies,
                      content development, and the management of various social
                      media platforms. <br /> <br /> She is also a published
                      author of two books—The Wisdom Wonder, a delightful
                      children&apos;s storybook, and Mosaic of Emotions, a
                      heartfelt poetry collection that beautifully captures the
                      spectrum of human feelings. <br /> <br /> For our content,
                      we also have with us Pinaki Goswami, whose compelling
                      writing has elevated numerous freelancing projects. With
                      professional experience as a journalist in leading media
                      houses such as Prag News and Pride East Entertainment, she
                      brings remarkable depth, clarity, and precision to every
                      piece she creates. <br /> <br />
                      Currently, Pinaki is working as a content writer in a
                      private news channel, where she oversees website content
                      and manages multiple social media platforms with expertise
                      and creativity. <br /> <br /> Her role extends beyond desk
                      work she has also reported on various engaging stories,
                      crafting her own scripts and presenting narratives that
                      resonate with diverse audiences. NEEAGLE believes in
                      providing the best service possible. Our team&apos;s
                      creativity helps shape ideas into their best form. <br />{" "}
                      <br /> Our studio combines creative writing with smart
                      design. In every project, we aim for new possibilities,
                      using sharp, eagle-like focus and strong visual
                      storytelling. <br />
                      <br />
                      Trust ● Quality ● Clarity
                    </h2>
                  </ScrollText>
                </div>
              </div>
            </div>
          </section>

          <Scroll_Text />

          <Service />
          <Team />
          {/* <News /> */}

          {/* CTA Section */}
          <section className="cta-section p_relative centred pb_200">
            <div className="auto-container">
              <div className="content-box reveal-me">
                <h2>Let&apos;s Work Together</h2>
                <Link href="/contact" className="theme-btn theme-bg">
                  <div className="static-text">
                    <span className="dot"></span>
                    <span>Let&apos;s Contact</span>
                  </div>
                  <div className="overlay-text">
                    <span className="dot"></span>
                    <span>Let&apos;s Contact</span>
                  </div>
                </Link>
              </div>
            </div>
          </section>
        </main>
      </Layout>
    </div>
  );
}
