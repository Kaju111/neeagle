

import CounterUp from "../../elements/CounterUp";
import ScrollText from "../../elements/ScrollText";

export default function About() {
  return (
    <section className="about-style-three p_relative pb_200 about">
      <div className="auto-container">
        <div className="content-box p_relative">
          {/* Upper box with stats */}
          <div className="upper-box reveal-me mb_40">
            <h2>
              <span>Design that moves</span>
              <br />
              <span>brands forward</span>
            </h2>
            <ul className="fact-list">
              <li>
                <div className="count-outer">
                  <span className="odometer"><CounterUp end={110} /></span>
                  <span>+</span>
                </div>
                <p>Satisfied Clients</p>
              </li>
              <li>
                <div className="count-outer">
                  <span className="odometer"><CounterUp end={500} /></span>
                  <span>+</span>
                </div>
                <p>Successful Projects</p>
              </li>
              <li>
                <div className="count-outer">
                  <span className="odometer"><CounterUp end={13} /></span>
                  <span>+</span>
                </div>
                <p>Awards Won</p>
              </li>
            </ul>
          </div>

          {/* Lower box with scroll text */}
          <div className="lower-box reveal-me">
            <ScrollText>
              <h2 className="reveal-text">
                Design agencies have lost their way.
                <br />
                <br />
                Design used to be clear and collaborative—trusted
                <br />
                teams, transparent pricing, and shared vision.
              </h2>
            </ScrollText>
          </div>
        </div>
      </div>
    </section>
  );
}
