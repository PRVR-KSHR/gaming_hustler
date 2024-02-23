import React, {  useRef } from "react";
// import { Link } from "react-router-dom";
import Footer from '../Header/Footer';
import Navbar from "../HomeComponent/Navbar";
// import Scroll from "../javascript/SmoothScroll";
import ProgressCircle from "../javascript/ProgressCircle";
import OnEvent from "../HomeComponent/OnEvent";
import Counter from "../HomeComponent/Counterr";
import VideoSection from "../HomeComponent/VideoSection"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

export default function Home() {
  const scrollContainerRef = useRef(null);


  return (
    <React.Fragment>
      <Navbar />
      {/* <Scroll /> */}
        {/* Banner section */}
        <section id="home">
          <div className="container-fluid px-0 top-banner">
            <div className="container">
              <div className="row">
                <div className="col-lg-5 col-md-6 mt-3">
                  <h1>GAMING HUSTLERS</h1>
                  <p>
                    <i style={{ color: "white" }}>
                      The next generation of gaming is here.
                    </i>
                  </p>
                  <div className="mt-2 ms-3">
                    <a href="/Playgames">
                      <button className="main-btn">Play Games</button>
                    </a>
                    <div className="ai2">
                      <lottie-player
                        src="https://assets10.lottiefiles.com/private_files/lf30_aYiP6b.json"
                        background="transparent"
                        speed={1}
                        style={{ width: "200px", height: "200px" }}
                        loop
                        autoPlay
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* display section */}
        <div>
          <div className="hiw-body">
            <div className="hiw text-white">
              <h3>HOW IT WORKS</h3>
              <p>It's easier than you think.Follow 4 simple easy steps.</p>
              <div className="hiw-1 ">
                <div className="hiw-1-1 ">
                  <div className="hiw-1-1-1 ">
                    <img
                      src="./../img/icon-1.png"
                      alt="icon"
                      className="hiw-img-bor"
                      loading="lazy"
                    />
                  </div>
                  <div className="hiw-1-1-2">
                    <p>Sign Up</p>
                  </div>
                </div>
                <div className="hiw-1-1">
                  <div className="hiw-1-1-1">
                    <img
                      src="https://pixner.net/begam/images/line-two.png"
                      alt="icon"
                      className="hiw-img"
                      loading="lazy"
                    />
                  </div>
                  <div className="hiw-1-1-2" />
                </div>
                <div className="hiw-1-1 ">
                  <div className="hiw-1-1-1 ">
                    <img
                      src="https://pixner.net/begam/images/how-icon-2.png"
                      alt="icon"
                      className="hiw-img-bor"
                      loading="lazy"
                    />
                  </div>
                  <div className="hiw-1-1-2">
                    <p>Deposit</p>
                  </div>
                </div>
                <div className="hiw-1-1">
                  <div className="hiw-1-1-1">
                    <img
                      src="https://pixner.net/begam/images/line-one.png"
                      alt="icon"
                      className="hiw-img"
                      loading="lazy"
                    />
                  </div>
                  <div className="hiw-1-1-2" />
                </div>
                <div className="hiw-1-1 ">
                  <div className="hiw-1-1-1 ">
                    <img
                      src="https://pixner.net/begam/images/how-icon-3.png"
                      alt="icon"
                      className="hiw-img-bor"
                      loading="lazy"
                    />
                  </div>
                  <div className="hiw-1-1-2">
                    <p>Compete</p>
                  </div>
                </div>
                <div className="hiw-1-1">
                  <div className="hiw-1-1-1">
                    <img
                      src="https://pixner.net/begam/images/line-two.png"
                      alt="icon"
                      className="hiw-img"
                      loading="lazy"
                    />
                  </div>
                  <div className="hiw-1-1-2" />
                </div>
                <div className="hiw-1-1 ">
                  <div className="hiw-1-1-1 ">
                    <img
                      src="https://pixner.net/begam/images/how-icon-4.png"
                      alt=" icon"
                      className="hiw-img-bor"
                      loading="lazy"
                    />
                  </div>
                  <div className="hiw-1-1-2" id="Events">
                    <p>Get Paid</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <ProgressCircle />

        {/* events section */}
        <div className="bod3">
          {" "}
          <b>
            {" "}
            <h2 className="title34">
              Ongoing <span> Events </span>{" "}
            </h2>{" "}
          </b>
          <OnEvent />
        </div>

        {/* counter section */}
        <Counter />


        {/* Featured games */}
        <section className="video-1" id="Games">
          <h2 className="title34">
            Featured <span> Games </span>{" "}
          </h2>
          <div className="container_featured">
            <div className="card__container1">
              <article className="card__article">
                <img
                  src="https://www.gameinformer.com/sites/default/files/styles/full/public/2021/01/18/d83f5176/apex_s08_primary_art_1920x1080.jpg"
                  alt="image"
                  className="card__img"
                  loading="lazy"
                />
                <div className="card__data">
                  <p className="card__title">APEX LEGENDS</p>
                  <div class="card__buttons">
                    <a
                      href="https://www.ea.com/games/apex-legends"
                      target="_blank"
                      class="btn btn-outline-primary"
                    >
                      Visit
                    </a>
                    <a
                      href="https://youtu.be/Ha_VsTDmoGg"
                      target="_blank"
                      class="btn btn-warning"
                      loading="lazy"
                    >
                      Watch
                    </a>
                  </div>
                </div>
              </article>
              <article className="card__article">
                <img
                  src="https://cdn.mos.cms.futurecdn.net/3D9dh6TgNMUXwC7kYD5rP.jpg"
                  alt="image"
                  className="card__img"
                  loading="lazy"
                />
                <div className="card__data">
                  <p className="card__title">GTA : SIX</p>
                  <div class="card__buttons">
                    <a
                      href="https://www.rockstargames.com/newswire/article/8978kok9385a82/grand-theft-auto-vi-watch-trailer-1-now"
                      target="_blank"
                      class="btn btn-outline-primary"
                    >
                      Visit
                    </a>
                    <a
                      href="https://youtu.be/QdBZY2fkU-0?si=UFbdx5L6Q0P73Nlf"
                      target="_blank"
                      class="btn btn-warning"
                    >
                      Watch
                    </a>
                  </div>
                </div>
              </article>
              <article className="card__article">
                <img
                  src="https://play4.uk/wp-content/uploads/2021/03/zaz3une03fm31.jpg"
                  alt="image"
                  className="card__img"
                  loading="lazy"
                />
                <div className="card__data">
                  <p className="card__title">NFS: Need For speed</p>
                  <div class="card__buttons">
                    <a
                      href="https://www.ea.com/games/need-for-speed"
                      target="_blank"
                      class="btn btn-outline-primary"
                    >
                      Visit
                    </a>
                    <a
                      href="https://youtu.be/K-5EdHZ0hBs"
                      target="_blank"
                      class="btn btn-warning"
                    >
                      Watch
                    </a>
                  </div>
                </div>
              </article>
            </div>
            <div className="card__container2">
              <article className="card__article">
                <img
                  src="https://www.gamedevid.com/wp-content/uploads/2021/01/MC-1024x576.jpg"
                  alt="image"
                  className="card__img"
                  loading="lazy"
                />
                <div className="card__data">
                  <p className="card__title">MINECRAFT</p>
                  <div class="card__buttons">
                    <a
                      href="https://www.minecraft.net/en-us"
                      target="_blank"
                      class="btn btn-outline-primary"
                    >
                      Visit
                    </a>
                    <a
                      href="https://youtu.be/jMe3tdyjouM"
                      target="_blank"
                      class="btn btn-warning"
                    >
                      Watch
                    </a>
                  </div>
                </div>
              </article>
              <article className="card__article">
                <img
                  src="https://cdn2.unrealengine.com/Fortnite/blog/best-fortnite-creative-codes-for-april-2020/09BR_Evergreens_Red_Social-1920x1080-60c4de5754c1d1fc66a74e7bf48771b67ed6912e.jpg"
                  alt="image"
                  className="card__img"
                  loading="lazy"
                />
                <div className="card__data">
                  <p className="card__title">FORTNITE</p>
                  <div class="card__buttons">
                    <a
                      href="https://www.epicgames.com/fortnite/en-US/home"
                      target="_blank"
                      class="btn btn-outline-primary"
                    >
                      Visit
                    </a>
                    <a
                      href="https://youtu.be/H5EfrMzg9JA"
                      target="_blank"
                      class="btn btn-warning"
                    >
                      Watch
                    </a>
                  </div>
                </div>
              </article>
              <article className="card__article">
                <img
                  src="https://cdn.gamerjournalist.com/primary/2020/07/Fall-Guys-Ultimate-Knockout.jpg"
                  alt="image"
                  className="card__img"
                  loading="lazy"
                />
                <div className="card__data">
                  <p className="card__title">FALL GUYS</p>
                  <div class="card__buttons">
                    <a
                      href="https://www.fallguys.com/en-US"
                      target="_blank"
                      class="btn btn-outline-primary"
                    >
                      Visit
                    </a>
                    <a
                      href="https://youtu.be/Wj3dUvGLjNQ"
                      target="_blank"
                      class="btn btn-warning"
                    >
                      Watch
                    </a>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* Video Player */}
        <h2 className="title34">
          Watch Our Events --<span> Live Here!!! </span>{" "}
        </h2>
        <VideoSection />

        {/* About us */}
        <section className="headabt" id="About">
          <h2>About Us</h2>
          <p className="abt-txt" id="Developers">
            Gaming Hustlers is a gaming platform hub Esports tournaments for the
            biggest titles on every device.It is an immersive online gaming{" "}
            <br />
            experience for all Esports fans out there. Doesn’t matter if you’re
            a new gamer, casual player, an amateur pro or a registered
            professional,
            <br />
            if you’re passionate about playing and competing in the hottest
            tournaments, Gaming Hustlers has what you need.Our team is made up
            of gamers, nerds, techies, <br />
            and dreamers, who love what we do and are dedicated to bringing you
            the best in competitive gaming. Whether it’s local, state,national
            or even global, we’ve got tournaments for everyone.
          </p>
          <b>
            <h2 className="title34 bg-light text-warning">
              Our <span> Project team </span>{" "}
            </h2>
          </b>
          <div className="abouta">
            <div className="container abt">
              <input type="radio" name="dot" id="one" />
              <input type="radio" name="dot" id="two" />
              <div className="main-card1">
                <div className="cards">
                  <div className="card">
                    <div className="content">
                      <div className="img">
                        <img
                          src="img/praveer.jpeg"
                          alt="Praveer"
                          loading="lazy"
                        />
                      </div>
                      <div className="details">
                        <div className="name">Praveer Kishore</div>
                        <div className="job">BCA+MCA (3rd Semester)</div>
                        <div className="job text-primary">A45349521001</div>
                      </div>
                      <div className="media-icons">
                        <a
                          href="https://www.facebook.com/people/Golu-Kumar/100009464664044/"
                          target="_blank"
                        >
                          <FontAwesomeIcon icon={faFacebook} />
                        </a>
                        <a href="https://github.com/prvrkr" target="_blank" rel="noreferrer" >
                          <FontAwesomeIcon icon={faGithub} />
                        </a>
                        <a
                          href="https://www.instagram.com/gooluukr/"
                          target="_blank"
                        >
                          <FontAwesomeIcon icon={faInstagram} />
                        </a>
                        <a href="https://www.instagram.com/gooluukr/" target="_blank" rel="noreferrer" >
                          <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="content">
                      <div className="img">
                        <img
                          src="img/kaushal.jpeg"
                          alt="Kaushal"
                          loading="lazy"
                        />
                      </div>
                      <div className="details">
                        <div className="name">Kaushal Mandal</div>
                        <div className="job">BCA+MCA (3rd Semester)</div>
                        <div className="job text-primary">A45349521002</div>
                      </div>
                      <div className="media-icons">
                        <a
                          href="https://www.facebook.com/kaushal.mandal.90260?mibextid=ZbWKwL"
                          target="_blank"
                        >
                          {/* <i className="fab fa-facebook-f" /> */}
                          <FontAwesomeIcon icon={faFacebook} />
                        </a>
                        <a href="https://github.com/kaushal077" target="_blank" rel="noreferrer">
                          <FontAwesomeIcon icon={faGithub} />
                        </a>
                        <a
                          href="https://www.instagram.com/kaushalmandal36/"
                          target="_blank"
                        >
                          <FontAwesomeIcon icon={faInstagram} />
                        </a>
                        <a
                          href="https://www.linkedin.com/in/kaushal-mandal-860021258/"
                          target="_blank"
                        >
                          <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="content">
                      <div className="img">
                        <img
                          src="img/nitya.jpeg"
                          alt="Nityanand"
                          loading="lazy"
                        />
                      </div>
                      <div className="details">
                        <div className="name">Nityanand Kumar</div>
                        <div className="job">BCA+MCA (3rd Semester)</div>
                        <div className="job text-primary">A45349521005</div>
                      </div>
                      <div className="media-icons">
                        <a
                          href="https://www.facebook.com/people/Ankush-Anand/100008705586998/?mibextid=ZbWKwL"
                          target="_blank"
                        >
                          <FontAwesomeIcon icon={faFacebook} />
                        </a>
                        <a href="https://github.com/Anknity" target="_blank" rel="noreferrer">
                          <FontAwesomeIcon icon={faGithub} />
                        </a>
                        <a
                          href="https://www.instagram.com/ankushanand_/"
                          target="_blank"
                        >
                          <FontAwesomeIcon icon={faInstagram} />
                        </a>
                        <a href="#" rel="noreferrer">
                          <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="cards"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Reviews */}
        <section>
          <div className="wrapper testimonial-section">
            <div className="container text-center">
              <div className="text-center pb-4">
                <h2>Reviews</h2>
              </div>
              <div className="row">
                <div className="col-sm-12 col-lg-10 offset-lg-1">
                  <div
                    id="carouselExampleDark"
                    className="carousel slide"
                    data-bs-ride="carousel"
                  >
                    <div className="carousel-indicators">
                      <button
                        type="button"
                        data-bs-target="#carouselExampleDark"
                        data-bs-slide-to={0}
                        className="active"
                        aria-current="true"
                        aria-label="Slide 1"
                      />
                      <button
                        type="button"
                        data-bs-target="#carouselExampleDark"
                        data-bs-slide-to={1}
                        aria-label="Slide 2"
                      />
                      <button
                        type="button"
                        data-bs-target="#carouselExampleDark"
                        data-bs-slide-to={2}
                        aria-label="Slide 3"
                      />
                    </div>
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <div className="carousel-caption">
                          <img
                            src="https://img.redbull.com/images/c_crop,x_1434,y_0,h_3168,w_2376/c_fill,w_400,h_540/q_auto:low,f_auto/redbullcom/2021/12/2/c5alifbbijhb8yndiiim/jonathan-bgmi-gamer" alt="reviewer"
                            loading="lazy"
                          />
                          <p className="text-dark">
                            "I play Tournament every day, it's a great way to
                            relax and win cash too! "
                          </p>
                          <h5>Jonathan Jude Amaral - BGMI Player</h5>
                        </div>
                      </div>
                      <div className="carousel-item">
                        <div className="carousel-caption">
                          <img
                            src="https://images.news18.com/ibnlive/uploads/2022/04/carry-minati.jpg" alt="carry"
                            loading="lazy"
                          />
                          <p className="text-dark">
                            " I joined for the community but ended up winning
                            cash, amazing. "
                          </p>
                          <h5>Ajey Nagar(CARRYMINATI) - YTCreator</h5>
                        </div>
                      </div>
                      <div className="carousel-item">
                        <div className="carousel-caption">
                          <img
                            src="https://yt3.ggpht.com/ytc/AMLnZu-LZQjmUJrgT3yEmwAurMJA1vJkYBKdJI05KOaUpw=s900-c-k-c0x00ffffff-no-rj" alt="kuchbhihoga"
                            loading="lazy"
                          />
                          <p className="text-dark">
                            " When I hang out with my friends, we play
                            Tournament, its so much fun. "
                          </p>
                          <h5>Ajay (Ajju Bhai) - FREEFIRE player</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* company sponsers */}
        <div className="spon">
          <div className="scroll container">
            <b>
              <h2 className="title34">
                Company <span> Sponsors </span>{" "}
              </h2>
            </b>
            <div className="row_companys">
              <img
                src="img/steam.jpg"
                alt="steam image"
                className="row_company"
                loading="lazy"
              />
              <img
                src="img/activision.jpg"
                alt="img"
                className="row_company"
                loading="lazy"
              />
              <img
                src="img/xbox.jpg"
                alt="img"
                className="row_company"
                loading="lazy"
              />
              <img
                src="img/playstation.jpg"
                alt="img"
                className="row_company"
                loading="lazy"
              />
              <img
                src="img/tencent.jpg"
                alt="img"
                className="row_company"
                loading="lazy"
              />
              <img
                src="img/epic.png"
                alt="img"
                className="row_company"
                loading="lazy"
              />
              <img
                src="img/nintendo.png"
                alt="img"
                className="row_company"
                loading="lazy"
              />
              <img
                src="img/rockstar.png"
                alt="img"
                className="row_company"
                loading="lazy"
              />
              <img
                src="img/ubisoft.jpg"
                alt="img"
                className="row_company"
                loading="lazy"
              />
              <img
                src="img/rog.png"
                alt="img"
                className="row_company"
                loading="lazy"
              />
              <img
                src="img/playstore.png"
                alt="img"
                className="row_company"
                loading="lazy"
              />
              <img
                src="img/eaarts.png"
                alt="img"
                className="row_company"
                loading="lazy"
              />
            </div>
          </div>
          <Footer />
        </div>
    </React.Fragment>
  );
}
