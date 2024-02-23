import React, { useState, useEffect } from "react";
import { HiUserGroup } from "react-icons/hi";
import { SiApplearcade } from "react-icons/si";
import { BsFillAwardFill } from "react-icons/bs"; 
import {  useLocation } from "react-router-dom";
import Footer from '../Header/Footer';

const PlayGames = () => {
  const location = useLocation();
  const username = location.state ? location.state.username : "";
  const profileImageURL = location.state ? location.state.profileImageURL : "";
  const [profileImage, setProfileImage] = useState(profileImageURL || null);

  // Function to handle profile picture upload
  const handleProfilePictureUpload = (event) => {
    const imageFile = event.target.files[0];
    const imageUrl = URL.createObjectURL(imageFile);
    setProfileImage(imageUrl);
  };

  return (
    <div>
      <header>
        <nav className="navbar navbar-expand-lg navigation-wrap">
          <div className="container">
            <a className="navbar-brand" href="/">
              <img className="logo-img" src="img/logo.png" alt="Logo" />
              <span id="hustler">Hustlers</span>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarText"
              aria-controls="navbarText"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="fas fa-stream navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarText"
            >
              <ul className="navbar-nav mx-auto mb-2 mb-lg-0 ">
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="/">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#Games">
                    Games
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#Events">
                    Tournaments
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#Feedback">
                    FeedBack
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#Sponsors">
                    About
                  </a>
                </li>
              </ul>
            </div>
            <div className="navbar-nav ms-auto">
              {/* Profile picture section */}
              <a href="./uploads" target="_blank" rel="noopener noreferrer">
                {profileImageURL ? (
                  <img
                    src={profileImageURL}
                    className="profile-icon2"
                    alt={`Profile of ${username}`}
                    // style={{ maxHeight: '32px', maxWidth: '32px' }}
                  />
                ) : (
                  <i className="fas fa-user-circle profile-icon2" aria-hidden="true"></i>
                )}
              </a>
              <div className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="profileDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {username}
                </a>
                <ul className="dropdown-menu" aria-labelledby="profileDropdown">
                  <li>
                    <a className="dropdown-item" href="#">
                      Profile
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Logout
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <div className="body5">
        <section id="home">
          <div className="container-fluid px-0 top-banner2 mb-5">
            <div className="ai4">
              <lottie-player
                src="https://assets8.lottiefiles.com/packages/lf20_Uji4LKowtE.json"
                background="transparent"
                speed={1}
                style={{ width: "200px", height: "200px" }}
                loop
                autoPlay
              />
            </div>
            <h1 className="b2">
              PLAY NOW <SiApplearcade />
            </h1>
            <div id="Games"></div>
          </div>
        </section>
      </div>

      <div className="container p-5">
        <div className="row text-center">
          <div className="col-md-4">
            <img src="./../img/game1.jpg" alt="" loading="lazy" />
            <a
              href="https://cdn.htmlgames.com/Bingo/"
              className="btn btn-success mt-2"
            >
              Play Now
            </a>
          </div>
          <div className="col-md-4">
            <img src="./../img/game2.jpg" alt="" loading="lazy" />
            <a
              href="https://cdn.htmlgames.com/TripeaksFarm/"
              className="btn btn-success mt-2"
            >
              Play Now
            </a>
          </div>
          <div className="col-md-4">
            <img src="./../img/game3.jpg" alt="" loading="lazy" />
            <a
              href="https://cdn.htmlgames.com/CastleMysteries/"
              className="btn btn-success mt-2"
            >
              Play Now
            </a>
          </div>
        </div>
      </div>

      <div className="container p-5">
        <div className="row text-center">
          <div className="col-md-4">
            <img src="./../img/game4.jpg" alt="" loading="lazy" />
            <a
              href="https://cdn.htmlgames.com/HexConnect/"
              className="btn btn-success mt-2"
            >
              Play Now
            </a>
          </div>
          <div className="col-md-4">
            <img src="./../img/game5.jpg" alt="" />
            <a
              href="https://cdn.htmlgames.com/TilesOfJapan/"
              className="btn btn-success mt-2"
            >
              Play Now
            </a>
          </div>
          <div className="col-md-4">
            <img src="./../img/game6.jpg" alt="" loading="lazy" />
            <a
              href="https://cdn.htmlgames.com/Aerobatics/"
              className="btn btn-success mt-2"
            >
              Play Now
            </a>
          </div>
        </div>
      </div>

      <div className="container">
        <b>
          <h1 className="text-secondary" style={{ marginLeft: "25rem" }}>
            Ongoing<span className="text-danger"> Tournament</span>{" "}
          </h1>{" "}
        </b>
        <div className="container-fault">
          <div className="event-container">
            <ul className="groups">
              <li>
                <div className="card">
                  <div className="image-session">
                    <img className="image" src="img/bgm1.jpg" loading="lazy" />
                  </div>
                  <div className="meta-sission">
                    <div className="head">
                      <a href="#" className="catogry">
                        27 DEC 2022 11:00 AM
                      </a>
                      <span className="flexone" />
                      <span className="per"></span>
                    </div>
                    <div className="body">
                      <h2 className="title">BGMI</h2>
                    </div>
                    <div className="head1">
                      <p style={{ color: "#D96009" }}>
                        {" "}
                        <BsFillAwardFill /> 100
                      </p>
                      <p style={{ color: "#D96009" }}>
                        {" "}
                        <SiApplearcade /> Duo
                      </p>
                      <p style={{ color: "#D96009" }}>
                        <HiUserGroup /> 24/100
                      </p>
                    </div>
                    <div className="footer">
                      <a
                        href="https://esportsweb.in/register/RmrjPkeAyuNzys7c4wki"
                        target="_blank"
                        className="button"
                      >
                        JOIN NOW
                      </a>
                      <a
                        href="img/results.pdf"
                        target="_blank"
                        className="button4"
                      >
                        Results
                      </a>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="card">
                  <div className="image-session">
                    <img className="image" src="img/coc1.jpg" loading="lazy" />
                  </div>
                  <div className="meta-sission">
                    <div className="head">
                      <a href="#" className="catogry">
                        26 Nov 2022 07:00 PM
                      </a>
                      <span className="flexone" />
                      <span className="per"></span>
                    </div>
                    <div className="body">
                      <h2 className="title">Clash of Clan</h2>
                    </div>
                    <div className=" head1">
                      <p style={{ color: "#D96009" }}>
                        {" "}
                        <BsFillAwardFill /> 82
                      </p>
                      <p style={{ color: "#D96009" }}>
                        {" "}
                        <SiApplearcade /> WAR
                      </p>
                      <p style={{ color: "#D96009" }}>
                        <HiUserGroup /> 5 vs 5
                      </p>
                    </div>
                    <div className="footer">
                      <a
                        href="https://esportsweb.in/register/RmrjPkeAyuNzys7c4wki"
                        target="_blank"
                        className="button"
                      >
                        JOIN NOW
                      </a>
                      <a href="#" className="button4">
                        Results
                      </a>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="card">
                  <div className="image-session">
                    <img className="image" src="img/cod.png" loading="lazy" />
                  </div>
                  <div className="meta-sission">
                    <div className="head">
                      <a href="#" className="catogry">
                        03 DEC 2022 07:00 PM
                      </a>
                      <span className="flexone" />
                      <span className="per"></span>
                    </div>
                    <div className="body">
                      <h2 className="title">Call of Duty.</h2>
                    </div>
                    <div className="head1">
                      <p style={{ color: "#D96009" }}>
                        {" "}
                        <BsFillAwardFill /> 72
                      </p>
                      <p style={{ color: "#D96009" }}>
                        {" "}
                        <SiApplearcade /> SQUAD
                      </p>
                      <p style={{ color: "#D96009" }}>
                        <HiUserGroup /> 40/100
                      </p>
                    </div>
                    <div className="footer">
                      <a
                        href="https://esportsweb.in/register/RmrjPkeAyuNzys7c4wki"
                        target="_blank"
                        className="button"
                      >
                        JOIN NOW
                      </a>
                      <a href="#" className="button4">
                        Results
                      </a>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="card">
                  <div className="image-session">
                    <img className="image" src="img/clash.jpg" loading="lazy" />
                  </div>
                  <div className="meta-sission">
                    <div className="head">
                      <a href="#" className="catogry">
                        10 DEC 2022 07:00 PM
                      </a>
                      <span className="flexone" />
                      <span className="per"></span>
                    </div>
                    <div className="body">
                      <h2 className="title">CLASH ROYALE</h2>
                    </div>
                    <div className="head1">
                      <p style={{ color: "#D96009" }}>
                        {" "}
                        <BsFillAwardFill />
                        10
                      </p>
                      <p style={{ color: "#D96009" }}>
                        {" "}
                        <SiApplearcade />
                        4V4
                      </p>
                      <p style={{ color: "#D96009" }}>
                        <HiUserGroup />
                        1V1
                      </p>
                    </div>
                    <div className="footer">
                      <a
                        href="https://esportsweb.in/register/RmrjPkeAyuNzys7c4wki"
                        target="_blank"
                        className="button"
                      >
                        JOIN NOW
                      </a>
                      <a href="#" className="button4">
                        Results
                      </a>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="card">
                  <div className="image-session">
                    <img className="image" src="img/free.webp" loading="lazy" />
                  </div>
                  <div className="meta-sission">
                    <div className="head">
                      <a href="#" className="catogry">
                        04 DEC 2022 11:00 AM
                      </a>
                      <span className="flexone" />
                      <span className="per"></span>
                    </div>
                    <div className="body">
                      <h2 className="title">FREE FIRE MAX</h2>
                    </div>
                    <div className="head1">
                      <p style={{ color: "#D96009" }}>
                        {" "}
                        <BsFillAwardFill />
                        35
                      </p>
                      <p style={{ color: "#D96009" }}>
                        {" "}
                        <SiApplearcade />
                        SQUAD
                      </p>
                      <p style={{ color: "#D96009" }}>
                        <HiUserGroup />
                        60/100
                      </p>
                    </div>
                    <div className="footer">
                      <a
                        href="https://esportsweb.in/register/RmrjPkeAyuNzys7c4wki"
                        target="_blank"
                        className="button"
                      >
                        JOIN NOW
                      </a>
                      <a href="#" className="button4">
                        Results
                      </a>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="card">
                  <div className="image-session">
                    <img className="image" src="img/wcc3.avif" loading="lazy" />
                  </div>
                  <div className="meta-sission">
                    <div className="head">
                      <a href="#" className="catogry">
                        11 DEC 2022 01:00 PM
                      </a>
                      <span className="flexone" />
                      <span className="per"></span>
                    </div>
                    <div className="body">
                      <h2 className="title">WCC 3</h2>
                    </div>
                    <div className="head1">
                      <p style={{ color: "#D96009" }}>
                        {" "}
                        <BsFillAwardFill />
                        55
                      </p>
                      <p style={{ color: "#D96009" }}>
                        {" "}
                        <SiApplearcade />
                        1v1
                      </p>
                      <p style={{ color: "#D96009" }}>
                        <HiUserGroup />
                        6v6
                      </p>
                    </div>
                    <div className="footer">
                      <a
                        href="https://esportsweb.in/register/RmrjPkeAyuNzys7c4wki"
                        target="_blank"
                        className="button"
                      >
                        JOIN NOW
                      </a>
                      <div id="Feedback"></div>
                      <a href="#" className="button4">
                        Results
                      </a>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          {/* Feedback */}
          <section>
            <div className="fed mt-5">
              <div className="wp">
                <header>Send us a FeedBack</header>
                <form
                  className="f1"
                  action="https://formspree.io/f/xwkzyoae"
                  method="POST"
                >
                  <div className="dbl-field">
                    <div className="field">
                      <input
                        type="text"
                        name="name"
                        placeholder="Enter your name"
                        autoComplete="off"
                        required
                      />
                      <i className="fas fa-user" />
                    </div>
                    <div className="field">
                      <input
                        type="number"
                        name="phone"
                        placeholder="Enter your phone"
                        autoComplete="off"
                        required
                      />
                      <i className="fas fa-phone-alt" />
                    </div>
                  </div>
                  <div className="message" style={{ width: "100%" }}>
                    <textarea
                      placeholder="Write your message"
                      name="message"
                      defaultValue={""}
                    />
                    <i className="material-icons"></i>
                  </div>
                  <div className="button-area1">
                    <button type="submit">Send Message</button>
                    <div id="Sponsors"></div>
                    <span />
                  </div>
                </form>
              </div>
            </div>
          </section>

          {/* COMPANY SPONSOR */}
          <div className="spon">
            <div className="scroll container">
              <b>
                <h1
                  style={{ fontSize: 30, textAlign: "center", marginTop: 20 }}
                >
                  Company <span style={{ color: "grey" }}> Sponsors </span>{" "}
                </h1>{" "}
              </b>
              <div className="row_companys">
                <img
                  src="img/steam.jpg"
                  alt=""
                  className="row_company"
                  loading="lazy"
                />
                <img
                  src="img/activision.jpg"
                  alt=""
                  className="row_company"
                  loading="lazy"
                />
                <img
                  src="img/xbox.jpg"
                  alt=""
                  className="row_company"
                  loading="lazy"
                />
                <img
                  src="img/playstation.jpg"
                  alt=""
                  className="row_company"
                  loading="lazy"
                />
                <img
                  src="img/tencent.jpg"
                  alt=""
                  className="row_company"
                  loading="lazy"
                />
                <img
                  src="img/epic.png"
                  alt=""
                  className="row_company"
                  loading="lazy"
                />
                <img
                  src="img/nintendo.png"
                  alt=""
                  className="row_company"
                  loading="lazy"
                />
                <img
                  src="img/rockstar.png"
                  alt=""
                  className="row_company"
                  loading="lazy"
                />
                <img
                  src="img/ubisoft.jpg"
                  alt=""
                  className="row_company"
                  loading="lazy"
                />
                <img
                  src="img/rog.png"
                  alt=""
                  className="row_company"
                  loading="lazy"
                />
                <img
                  src="img/playstore.png"
                  alt=""
                  className="row_company"
                  loading="lazy"
                />
                <img
                  src="img/eaarts.png"
                  alt=""
                  className="row_company"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
 
      <Footer />
    </div>
  );
};
export default PlayGames;
