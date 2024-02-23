import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div id="card-area">
      <div className="wrapper">
        <div className="box-area">
          <div className="box">
            <img
              alt=""
              src="https://wallpaperaccess.com/full/6164282.jpg"
              loading="lazy"
            />
            <div className="overlay">
              <h4>BGMI</h4>
              <p>
                {" "}
                BGMI is a popular mobile battle royale game developed by
                Krafton. Players parachute onto an island, scavenge for weapons
                and equipment, and battle to be the last one standing.
              </p>
              <Link to="/Bgmi">Participate Now</Link>
            </div>
          </div>
          <div className="box">
            <img
              alt=""
              src="https://cdn-www.bluestacks.com/bs-images/gametiles_com.nextwave.wcc3_.jpg"
              loading="lazy"
            />
            <div className="overlay">
              <h4>WCC3</h4>
              <p>
                WCC3 is a mobile cricket simulation game that offers realistic
                gameplay and graphics. Players can experience various cricket
                formats and modes.
              </p>
              <Link to="/League">Participate Now</Link>
            </div>
          </div>
          <div className="box">
            <img
              alt=""
              src="https://wallpapers.com/images/high/free-fire-gaming-poster-rvwjmxxbs6hmk4y6.webp"
              loading="lazy"
            />
            <div className="overlay">
              <h4>FreeFire</h4>
              <p>
                Free Fire is a mobile battle royale game where players parachute
                onto an island, loot weapons and supplies, and fight to be the
                last one standing.
              </p>
              <Link to="/Pubg">Participate Now</Link>
            </div>
          </div>
        </div>
        <div className="box-area">
          <div className="box">
            <img
              alt=""
              src="https://i.pinimg.com/originals/19/57/2d/19572d7dd6523eb68d53b1b53e9190cf.jpg"
              loading="lazy"
            />
            <div className="overlay">
              <h4>COC</h4>
              <p>
                COC is a strategy-based mobile game where players build and
                defend their village, train troops, and attack other players'
                villages to earn resources and trophies.
              </p>
              <Link to="/Coc">Participate Now</Link>
            </div>
          </div>
          <div className="box">
            <img alt="" src="img/RVE.png" />
            <div className="overlay">
              <h4>Road to Valor: Empires</h4>
              <p>
                An online multiplayer strategy game where players build and
                manage their empire, engage in strategic battles, and compete
                for dominance in a dynamic virtual world.
              </p>
              <Link to="/Warjone">Participate Now</Link>
            </div>
          </div>
          <div className="box">
            <img
              alt=""
              src="https://www.xtrafondos.com/wallpapers/vertical/call-of-duty-mobile-poster-4010.jpg"
              loading="lazy"
            />
            <div className="overlay">
              <h4>COD</h4>
              <p>
                A popular first-person shooter game series known for its intense
                multiplayer battles, realistic graphics, and diverse gameplay
                modes including team deathmatch, battle royale, and more.
              </p>
              <Link to="/Cod">Participate Now</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
