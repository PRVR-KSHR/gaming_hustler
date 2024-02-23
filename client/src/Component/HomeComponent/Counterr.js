import React from "react";
import Counter from "../javascript/Counter";

const Home = () => {
  return (
    <section id="Counter" >
      <section className="counter-section">
      <h1 className="data">Constantly Growing</h1>
        <h2 className="title35">
         <span>Providing the best Esports experience to millions of inspiring gamers. </span>{" "}
        </h2>{" "}
        <div className="container">
          <div className="row text-center">
            <div className="col-lg-3 col-md-6 mb-5">
              <div className="constantly-card">
                <i>
                  <img src="img/constantly-icon-01.png" alt="logo" />
                </i>
                <h3 id="totalGamers">
                  <Counter
                    id="Count1"
                    start={10}
                    end={80}
                    duration={5000}
                    startOnScroll={true}
                  />
                </h3>
                <p>
                  Total
                  <br /> Gamers
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-5">
              <div className="constantly-card">
                <i>
                  <img src="img/constantly-icon-02.png" alt="" />
                </i>
                <h3 id="totalMatchPlayed">
                  <Counter
                    id="Count2"
                    start={50}
                    end={400}
                    duration={5000}
                    startOnScroll={true}
                  />
                </h3>
                <p>
                  Matches
                  <br /> Played
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-5">
              <div className="constantly-card">
                <i>
                  <img src="img/constantly-icon-03.png" alt="" />
                </i>
                <h3 id="totalleaguesJoined">
                  <Counter
                    id="Count3"
                    start={5}
                    end={30}
                    duration={5000}
                    startOnScroll={true}
                  />
                </h3>
                <p>
                  Leagues
                  <br /> Joined
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-5">
              <div className="constantly-card">
                <i>
                  <img src="img/constantly-icon-04.png" alt="" />
                </i>
                <h3 id="winningDistributed">
                  <Counter
                    id="Count4"
                    start={10}
                    end={120}
                    duration={5000}
                    startOnScroll={true}
                  />
                </h3>
                <p>
                  Winning
                  <br /> Distributed
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Home;
